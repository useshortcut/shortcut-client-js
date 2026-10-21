import {
  type ShortcutInteractionPayload,
  type ShortcutObserverPayload,
  type ShortcutSessionCreatedPayload,
  type ShortcutSessionEventPayload,
  type ShortcutSessionPromptedPayload,
  type ShortcutValidationPayload,
  type ShortcutWebhookPayload,
  isShortcutInteractionPayload,
  isShortcutObserverPayload,
  isShortcutSessionEventPayload,
  isShortcutUnknownSessionEventPayload,
  isShortcutValidationPayload,
} from './types';
import {
  PAYLOAD_SIGNATURE_HEADER,
  type ShortcutWebhookHeaderSource,
  type ShortcutWebhookSignatureScheme,
  verifyShortcutWebhookHeaders,
} from './verify';

export type ShortcutWebhookErrorCode =
  | 'method_not_allowed'
  | 'unsupported_media_type'
  | 'payload_too_large'
  | 'invalid_body'
  | 'invalid_signature'
  | 'stale_timestamp'
  | 'wrong_workspace'
  | 'wrong_installation';

/** Thrown by {@link ShortcutWebhookClient.verify} with the HTTP status a handler should return. */
export class ShortcutWebhookError extends Error {
  readonly code: ShortcutWebhookErrorCode;
  readonly status: number;

  constructor(code: ShortcutWebhookErrorCode, status: number) {
    super(`Shortcut webhook rejected: ${code}`);
    this.name = 'ShortcutWebhookError';
    this.code = code;
    this.status = status;
  }
}

export interface ShortcutWebhookClientOptions {
  /** Maximum request-body size in bytes. Defaults to 2 MiB. */
  bodyLimit?: number;
  /**
   * How far a delivery's timestamp may be from this clock, either way. A
   * delivery verified by `Shortcut-Signature` is bound to a
   * `Shortcut-Timestamp` that is fresh on every attempt, so the window is 300
   * seconds by default and this option can only tighten it. A delivery
   * verified by `Payload-Signature` alone carries only the payload
   * `timestamp`, which a redelivery keeps from the first attempt, so that
   * window is off by default and this option turns it on as given. Session
   * events are only accepted with `Shortcut-Signature`, so they always get
   * the `Shortcut-Timestamp` window.
   */
  timestampToleranceMs?: number;
  /**
   * Accept `Payload-Signature` when `Shortcut-Signature` is absent. On by
   * default, for senders that sign only the body, such as classic workspace
   * webhooks. Shortcut signs every agent-application delivery, the
   * validation ping included, with `Shortcut-Signature`, so set this to
   * `false` once your deliveries arrive with
   * `signatureScheme === 'shortcut-signature'`: only then does
   * the timestamp window stop a captured observer or interaction delivery
   * from being replayed, since a replay can drop the new headers and verify
   * by `Payload-Signature`. A request that carries `Shortcut-Signature` is
   * never verified by `Payload-Signature`, and a session event is never
   * accepted without `Shortcut-Signature`, whatever this says.
   */
  allowLegacySignature?: boolean;
  /** Only accept deliveries for this workspace id; others receive `403`. */
  workspaceId?: string;
  /** Only accept deliveries for this installation id; others receive `403`. */
  installationId?: string;
}

/** A delivery whose signature and shape have been checked. */
export interface ShortcutVerifiedDelivery {
  payload: ShortcutWebhookPayload;
  /** The exact bytes that were verified. */
  rawBody: Uint8Array;
  /**
   * The `Shortcut-Delivery` header when the delivery carried one
   * (`signatureScheme === 'shortcut-signature'`). That is a per-delivery key
   * that every retry of the delivery reuses, so persist it and acknowledge a
   * duplicate without processing it again.
   *
   * Under the `Payload-Signature` fallback it is the payload `id` instead.
   * For session events that is the event id, the value the header would
   * carry. For observer and interaction deliveries it is the key of the
   * transaction that produced them, and one save can produce several
   * interaction deliveries (an assignment and a mention, say) that all carry
   * it, so it is not a per-delivery key there.
   */
  deliveryId?: string;
  /** Which signature header verified the delivery. */
  signatureScheme: ShortcutWebhookSignatureScheme;
}

export type ShortcutWebhookEventPayloadMap = {
  observer: ShortcutObserverPayload;
  interaction: ShortcutInteractionPayload;
  validation: ShortcutValidationPayload;
  assigned: ShortcutInteractionPayload & {
    trigger: { type: 'assigned' };
  };
  mentioned: ShortcutInteractionPayload & { trigger: { type: 'mentioned' } };
  'comment-reply': ShortcutInteractionPayload & {
    trigger: { type: 'comment-reply' };
  };
  session: ShortcutSessionEventPayload;
  'session.created': ShortcutSessionCreatedPayload;
  'session.prompted': ShortcutSessionPromptedPayload;
};

export type ShortcutWebhookEventName = keyof ShortcutWebhookEventPayloadMap;

export type ShortcutWebhookEventHandler<
  T extends ShortcutWebhookPayload = ShortcutWebhookPayload,
> = (payload: T, delivery: ShortcutVerifiedDelivery) => void | Promise<void>;

/**
 * The subset of Node's `http.IncomingMessage` the Node handler uses. It is
 * structural so the declarations never depend on `@types/node`, which keeps
 * the entrypoint usable from Workers, Deno, and Bun projects.
 */
export interface ShortcutNodeRequest {
  method?: string | undefined;
  headers: Record<string, string | string[] | undefined>;
  destroy(error?: Error): unknown;
  [Symbol.asyncIterator](): AsyncIterator<Uint8Array | string>;
}

/** The subset of Node's `http.ServerResponse` the Node handler uses. */
export interface ShortcutNodeResponse {
  statusCode: number;
  setHeader(name: string, value: string): unknown;
  end(chunk: string): unknown;
}

export interface ShortcutWebhookHandler {
  (request: Request): Promise<Response>;
  (request: ShortcutNodeRequest, response: ShortcutNodeResponse): Promise<void>;
  on<T extends ShortcutWebhookEventName>(
    event: T,
    handler: ShortcutWebhookEventHandler<ShortcutWebhookEventPayloadMap[T]>,
  ): void;
  off<T extends ShortcutWebhookEventName>(
    event: T,
    handler: ShortcutWebhookEventHandler<ShortcutWebhookEventPayloadMap[T]>,
  ): void;
  removeAllListeners(event?: ShortcutWebhookEventName): void;
}

const DEFAULT_BODY_LIMIT = 2 * 1024 * 1024;

interface HttpAdapter {
  method: string;
  contentType: string | null;
  contentLength: string | null;
  headers: ShortcutWebhookHeaderSource;
  readRawBody(limit: number): Promise<Uint8Array | typeof TOO_LARGE>;
  send(status: number, body: string): Response | void;
}

const TOO_LARGE = Symbol('too-large');

/**
 * Verifies Shortcut webhook requests and dispatches them to typed handlers.
 *
 * ```ts
 * const webhooks = new ShortcutWebhookClient(process.env.WEBHOOK_SECRET);
 * const handler = webhooks.createHandler();
 * handler.on('mentioned', async (payload) => { ... });
 * export default { fetch: handler };
 * ```
 */
export class ShortcutWebhookClient {
  private readonly secret: string;
  private readonly bodyLimit: number;
  private readonly timestampToleranceMs?: number;
  private readonly allowLegacySignature: boolean;
  private readonly workspaceId?: string;
  private readonly installationId?: string;

  constructor(secret: string, options: ShortcutWebhookClientOptions = {}) {
    if (typeof secret !== 'string' || secret.length === 0) {
      throw new TypeError(
        'ShortcutWebhookClient: secret must be a non-empty string',
      );
    }
    const bodyLimit = options.bodyLimit ?? DEFAULT_BODY_LIMIT;
    if (!Number.isSafeInteger(bodyLimit) || bodyLimit <= 0) {
      throw new TypeError(
        'ShortcutWebhookClient: bodyLimit must be a positive integer',
      );
    }
    const tolerance = options.timestampToleranceMs;
    if (
      tolerance !== undefined &&
      (!Number.isFinite(tolerance) || tolerance <= 0)
    ) {
      throw new TypeError(
        'ShortcutWebhookClient: timestampToleranceMs must be a positive number',
      );
    }
    this.secret = secret;
    this.bodyLimit = bodyLimit;
    this.timestampToleranceMs = tolerance;
    this.allowLegacySignature = options.allowLegacySignature ?? true;
    this.workspaceId = options.workspaceId;
    this.installationId = options.installationId;
  }

  /**
   * Verifies the signature, size, and shape of a delivery already read into
   * memory. Throws {@link ShortcutWebhookError} with the status to return.
   *
   * @param headers The request headers, as a Fetch `Headers` object or a
   *   record like Node's `req.headers`, so `Shortcut-Signature` can be
   *   checked. A bare string is the `Payload-Signature` value alone, which
   *   `allowLegacySignature: false` rejects, as does every session event.
   */
  async verifyBody(
    rawBody: Uint8Array,
    headers: ShortcutWebhookHeaderSource | string | null | undefined,
  ): Promise<ShortcutVerifiedDelivery> {
    if (rawBody.byteLength > this.bodyLimit)
      throw new ShortcutWebhookError('payload_too_large', 413);
    const check = await verifyShortcutWebhookHeaders(
      this.secret,
      rawBody,
      typeof headers === 'object' && headers !== null
        ? headers
        : { [PAYLOAD_SIGNATURE_HEADER]: headers ?? undefined },
      {
        allowLegacySignature: this.allowLegacySignature,
        timestampToleranceMs: this.timestampToleranceMs,
      },
    );
    if (!check.verified) throw new ShortcutWebhookError(check.reason, 401);
    let payload: unknown;
    try {
      payload = JSON.parse(
        new TextDecoder('utf-8', { fatal: true }).decode(rawBody),
      );
    } catch {
      throw new ShortcutWebhookError('invalid_body', 400);
    }
    if (
      isShortcutSessionEventPayload(payload) ||
      isShortcutUnknownSessionEventPayload(payload)
    ) {
      // Shortcut signs every session event with Shortcut-Signature, so one
      // that verified by Payload-Signature alone had the timestamped headers
      // stripped, as a replay of a captured event would.
      if (check.scheme !== 'shortcut-signature') {
        throw new ShortcutWebhookError('invalid_signature', 401);
      }
      this.assertBoundTo(payload.workspace_id, payload.installation_id);
    } else if (!isShortcutValidationPayload(payload)) {
      if (
        !isShortcutObserverPayload(payload) &&
        !isShortcutInteractionPayload(payload)
      ) {
        throw new ShortcutWebhookError('invalid_body', 400);
      }
      this.assertBoundTo(payload.workspace2.id, payload.installation_id);
      if (
        this.timestampToleranceMs !== undefined &&
        check.scheme === 'payload-signature'
      ) {
        const sent = Date.parse(payload.timestamp);
        if (
          !Number.isFinite(sent) ||
          Math.abs(Date.now() - sent) > this.timestampToleranceMs
        ) {
          throw new ShortcutWebhookError('stale_timestamp', 401);
        }
      }
    }
    const payloadId = (payload as { id?: unknown }).id;
    const deliveryId =
      check.deliveryId ??
      (typeof payloadId === 'string' && payloadId ? payloadId : undefined);
    return {
      payload,
      rawBody,
      ...(deliveryId ? { deliveryId } : {}),
      signatureScheme: check.scheme,
    };
  }

  /** Verifies a Fetch API request. Throws {@link ShortcutWebhookError}. */
  async verify(request: Request): Promise<ShortcutVerifiedDelivery> {
    return this.verifyAdapter(this.createFetchAdapter(request));
  }

  /**
   * Creates a request handler for Fetch runtimes (`(request) => Response`)
   * and Node.js HTTP (`(req, res) => void`). Register handlers with `.on()`.
   * Every verified delivery is acknowledged with `200` once its handlers
   * settle; a throwing handler yields `500`, which Shortcut retries. A
   * `session.*` event of a type this version does not know is acknowledged
   * and dispatched to no handler.
   */
  createHandler(): ShortcutWebhookHandler {
    const listeners = new Map<
      ShortcutWebhookEventName,
      ShortcutWebhookEventHandler[]
    >();
    const handler = async (
      requestOrMessage: Request | ShortcutNodeRequest,
      response?: ShortcutNodeResponse,
    ): Promise<Response | void> => {
      const adapter = this.isFetchRequest(requestOrMessage)
        ? this.createFetchAdapter(requestOrMessage)
        : this.createNodeAdapter(
            requestOrMessage,
            response as ShortcutNodeResponse,
          );
      let delivery: ShortcutVerifiedDelivery;
      try {
        delivery = await this.verifyAdapter(adapter);
      } catch (error) {
        if (error instanceof ShortcutWebhookError)
          return adapter.send(error.status, error.code);
        return adapter.send(500, 'internal_error');
      }
      try {
        await Promise.all(
          this.eventsFor(delivery.payload)
            .flatMap((event) => listeners.get(event) ?? [])
            .map(async (listener) => listener(delivery.payload, delivery)),
        );
      } catch {
        return adapter.send(500, 'handler_failed');
      }
      return adapter.send(200, 'ok');
    };
    const typed = handler as ShortcutWebhookHandler;
    typed.on = (event, listener) => {
      listeners.set(event, [
        ...(listeners.get(event) ?? []),
        listener as ShortcutWebhookEventHandler,
      ]);
    };
    typed.off = (event, listener) => {
      const remaining = (listeners.get(event) ?? []).filter(
        (item) => item !== listener,
      );
      if (remaining.length) listeners.set(event, remaining);
      else listeners.delete(event);
    };
    typed.removeAllListeners = (event) => {
      if (event) listeners.delete(event);
      else listeners.clear();
    };
    return typed;
  }

  private assertBoundTo(workspaceId: string, installationId: string): void {
    if (this.workspaceId && workspaceId !== this.workspaceId) {
      throw new ShortcutWebhookError('wrong_workspace', 403);
    }
    if (this.installationId && installationId !== this.installationId) {
      throw new ShortcutWebhookError('wrong_installation', 403);
    }
  }

  private eventsFor(
    payload: ShortcutWebhookPayload,
  ): ShortcutWebhookEventName[] {
    if (isShortcutValidationPayload(payload)) return ['validation'];
    if (isShortcutSessionEventPayload(payload)) {
      return ['session', payload.type];
    }
    if (isShortcutUnknownSessionEventPayload(payload)) return [];
    if (isShortcutInteractionPayload(payload)) {
      return ['interaction', payload.trigger.type];
    }
    return ['observer'];
  }

  private async verifyAdapter(
    adapter: HttpAdapter,
  ): Promise<ShortcutVerifiedDelivery> {
    if (adapter.method.toUpperCase() !== 'POST')
      throw new ShortcutWebhookError('method_not_allowed', 405);
    const contentType = adapter.contentType
      ?.split(';', 1)[0]
      ?.trim()
      .toLowerCase();
    if (contentType !== 'application/json')
      throw new ShortcutWebhookError('unsupported_media_type', 415);
    if (
      adapter.contentLength !== null &&
      !/^\d+$/.test(adapter.contentLength)
    ) {
      throw new ShortcutWebhookError('invalid_body', 400);
    }
    if (
      adapter.contentLength !== null &&
      Number(adapter.contentLength) > this.bodyLimit
    ) {
      throw new ShortcutWebhookError('payload_too_large', 413);
    }
    const rawBody = await adapter.readRawBody(this.bodyLimit);
    if (rawBody === TOO_LARGE)
      throw new ShortcutWebhookError('payload_too_large', 413);
    return this.verifyBody(rawBody, adapter.headers);
  }

  private isFetchRequest(value: unknown): value is Request {
    return (
      typeof value === 'object' &&
      value !== null &&
      'arrayBuffer' in value &&
      typeof (value as Request).arrayBuffer === 'function'
    );
  }

  private createFetchAdapter(request: Request): HttpAdapter {
    return {
      method: request.method,
      contentType: request.headers.get('content-type'),
      contentLength: request.headers.get('content-length'),
      headers: request.headers,
      readRawBody: async (limit) => {
        if (!request.body) return new Uint8Array();
        const reader = request.body.getReader();
        const chunks: Uint8Array[] = [];
        let total = 0;
        try {
          for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            total += value.byteLength;
            if (total > limit) {
              reader.cancel().catch(() => {});
              return TOO_LARGE;
            }
            chunks.push(value);
          }
        } finally {
          reader.releaseLock();
        }
        return concat(chunks, total);
      },
      send: (status, body) =>
        new Response(serializeResponse(status, body), {
          status,
          headers: { 'content-type': 'application/json' },
        }),
    };
  }

  private createNodeAdapter(
    message: ShortcutNodeRequest,
    response: ShortcutNodeResponse,
  ): HttpAdapter {
    const header = (name: string): string | null => {
      const value = message.headers[name];
      return Array.isArray(value) ? (value[0] ?? null) : (value ?? null);
    };
    return {
      method: message.method ?? '',
      contentType: header('content-type'),
      contentLength: header('content-length'),
      headers: message.headers,
      readRawBody: async (limit) => {
        const chunks: Uint8Array[] = [];
        let total = 0;
        for await (const chunk of message) {
          const bytes =
            typeof chunk === 'string'
              ? new TextEncoder().encode(chunk)
              : new Uint8Array(chunk);
          total += bytes.byteLength;
          if (total > limit) {
            message.destroy();
            return TOO_LARGE;
          }
          chunks.push(bytes);
        }
        return concat(chunks, total);
      },
      send: (status, body) => {
        response.statusCode = status;
        response.setHeader('content-type', 'application/json');
        response.end(serializeResponse(status, body));
      },
    };
  }
}

function serializeResponse(status: number, message: string): string {
  return JSON.stringify(status < 400 ? { ok: true } : { error: message });
}

function concat(chunks: Uint8Array[], total: number): Uint8Array {
  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return body;
}
