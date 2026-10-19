/**
 * Header carrying the lowercase hex HMAC-SHA256 of
 * `${timestamp}.${delivery}.${body}`, keyed with the webhook secret, where the
 * first two parts are the raw `Shortcut-Timestamp` and `Shortcut-Delivery`
 * values and the body is the exact request bytes.
 */
export const SHORTCUT_SIGNATURE_HEADER = 'shortcut-signature';
/** Header carrying the Unix time in seconds when Shortcut sent this attempt. A retry gets a new one. */
export const SHORTCUT_TIMESTAMP_HEADER = 'shortcut-timestamp';
/** Header carrying an id that stays the same across retries of one delivery. For session events it equals the event `id`. */
export const SHORTCUT_DELIVERY_HEADER = 'shortcut-delivery';
/**
 * Header carrying the hex HMAC-SHA256 of the raw request body alone. With no
 * timestamp, a captured request verifies forever, so it is deprecated.
 * Senders that predate `Shortcut-Signature` send it alone; agent-application
 * senders that carry `Shortcut-Signature` send it beside the new headers until
 * a later release removes it.
 */
export const PAYLOAD_SIGNATURE_HEADER = 'payload-signature';
/** @deprecated Renamed {@link PAYLOAD_SIGNATURE_HEADER} in 3.5.0; this alias is kept for 3.4.x callers. */
export const SHORTCUT_WEBHOOK_SIGNATURE_HEADER = PAYLOAD_SIGNATURE_HEADER;

/** How far `Shortcut-Timestamp` may be from this clock, in seconds, either way. */
const TIMESTAMP_TOLERANCE_SECONDS = 300;
const TIMESTAMP_PATTERN = /^\d{1,18}$/;

/**
 * Where to read a request's headers from, in either runtime's shape: a Fetch
 * `Headers` object (or anything with a `get()`, such as a `Map`), or a record
 * like Node's `IncomingMessage.headers`. Names are matched without regard to
 * case. Distinct from {@link ShortcutWebhookSignatureHeaders}, the record
 * {@link signShortcutWebhookHeaders} produces.
 */
export type ShortcutWebhookHeaderSource =
  | { get(name: string): string | null | undefined }
  | Readonly<Record<string, string | string[] | undefined>>;

/** The headers Shortcut sends with one delivery attempt, keyed by lowercase name. */
export type ShortcutWebhookSignatureHeaders = {
  'shortcut-timestamp': string;
  'shortcut-signature': string;
  'shortcut-delivery': string;
  /** The deprecated body-only signature Shortcut still sends; see {@link PAYLOAD_SIGNATURE_HEADER}. */
  'payload-signature': string;
};

/** Which header verified a delivery. */
export type ShortcutWebhookSignatureScheme =
  | 'shortcut-signature'
  | 'payload-signature';

export interface ShortcutWebhookSignatureOptions {
  /**
   * Accept `Payload-Signature` when `Shortcut-Signature` is absent. On by
   * default, for senders that predate `Shortcut-Signature`. A request that
   * carries `Shortcut-Signature` is never verified by `Payload-Signature`,
   * whatever this says.
   */
  allowLegacySignature?: boolean;
}

export type ShortcutWebhookSignatureResult =
  | { verified: true; scheme: 'shortcut-signature'; deliveryId: string }
  | { verified: true; scheme: 'payload-signature'; deliveryId?: undefined }
  | {
      verified: false;
      /** `stale_timestamp` means the signature was genuine but `Shortcut-Timestamp` is outside the 300-second window. */
      reason: 'invalid_signature' | 'stale_timestamp';
    };

const encoder = new TextEncoder();

const INVALID: ShortcutWebhookSignatureResult = {
  verified: false,
  reason: 'invalid_signature',
};

function readHeader(headers: ShortcutWebhookHeaderSource, name: string) {
  if ('get' in headers && typeof headers.get === 'function') {
    return headers.get(name) ?? null;
  }
  const record = headers as Readonly<
    Record<string, string | string[] | undefined>
  >;
  const key =
    name in record
      ? name
      : Object.keys(record).find(
          (candidate) => candidate.toLowerCase() === name,
        );
  const value = key === undefined ? undefined : record[key];
  return Array.isArray(value) ? (value[0] ?? null) : (value ?? null);
}

function parseSignature(
  value: string | null | undefined,
): Uint8Array | undefined {
  if (!value || !/^[0-9a-fA-F]{64}$/.test(value)) return undefined;
  const bytes = new Uint8Array(32);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

/**
 * Copies exactly the view's bytes into a fresh `ArrayBuffer`. `bytes.slice()`
 * is not enough: Node's `Buffer.prototype.slice` is an alias of `subarray`,
 * so for a pooled `Buffer` (`Buffer.from('short text')`, `http` request
 * chunks) `.buffer` would be the whole 8 KiB pool. Copying also detaches the
 * bytes from any `SharedArrayBuffer`, which WebCrypto rejects.
 */
function toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy.buffer;
}

function toBytes(rawBody: Uint8Array | string): Uint8Array {
  return typeof rawBody === 'string' ? encoder.encode(rawBody) : rawBody;
}

/** `${timestamp}.${deliveryId}.` followed by the body bytes: what `Shortcut-Signature` covers. */
function signedContent(
  timestamp: string,
  deliveryId: string,
  body: Uint8Array,
): Uint8Array {
  const prefix = encoder.encode(`${timestamp}.${deliveryId}.`);
  const content = new Uint8Array(prefix.byteLength + body.byteLength);
  content.set(prefix);
  content.set(body, prefix.byteLength);
  return content;
}

function hmacKey(secret: string, usage: 'sign' | 'verify') {
  return crypto.subtle.importKey(
    'raw',
    toArrayBuffer(encoder.encode(secret)),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    [usage],
  );
}

async function hmacHex(secret: string, content: Uint8Array): Promise<string> {
  const digest = new Uint8Array(
    await crypto.subtle.sign(
      'HMAC',
      await hmacKey(secret, 'sign'),
      toArrayBuffer(content),
    ),
  );
  return Array.from(digest, (byte) => byte.toString(16).padStart(2, '0')).join(
    '',
  );
}

/** Constant-time check that `signature` is the hex HMAC of `content`. */
async function hmacMatches(
  secret: string,
  content: Uint8Array,
  signature: string | null | undefined,
): Promise<boolean> {
  if (typeof secret !== 'string' || secret.length === 0) return false;
  const expected = parseSignature(signature);
  if (!expected) return false;
  return crypto.subtle.verify(
    'HMAC',
    await hmacKey(secret, 'verify'),
    toArrayBuffer(expected),
    toArrayBuffer(content),
  );
}

/**
 * Verifies the deprecated body-only `Payload-Signature` in constant time using
 * WebCrypto, which is available on Node.js 20+, Cloudflare Workers, Deno, and
 * Bun. Prefer {@link verifyShortcutWebhookHeaders}, which checks
 * `Shortcut-Signature` and its timestamp window.
 *
 * @param secret The agent app's webhook signing secret.
 * @param rawBody The exact request bytes. Passing a re-serialized string only
 *   works when it matches the original bytes, so prefer the raw body.
 * @param signature The `Payload-Signature` header value.
 * @returns `false` for a missing, malformed, or mismatched signature.
 */
export async function verifyShortcutWebhookSignature(
  secret: string,
  rawBody: Uint8Array | string,
  signature: string | null | undefined,
): Promise<boolean> {
  return hmacMatches(secret, toBytes(rawBody), signature);
}

/**
 * Verifies a delivery's signature headers against the raw body. When
 * `Shortcut-Signature` is present it must verify over `Shortcut-Timestamp`,
 * `Shortcut-Delivery`, and the body, and the timestamp must be within 300
 * seconds of this clock; a missing or malformed companion header, or a
 * mismatch, is rejected without consulting `Payload-Signature`. Only when
 * `Shortcut-Signature` is absent does `Payload-Signature` verify the body
 * alone, unless `allowLegacySignature` is `false`.
 *
 * @param headers The request headers, as a Fetch `Headers` object or a
 *   record like Node's `req.headers`.
 * @returns Which header verified the request, with the `Shortcut-Delivery`
 *   value for deduplication, or why it was rejected.
 */
export async function verifyShortcutWebhookHeaders(
  secret: string,
  rawBody: Uint8Array | string,
  headers: ShortcutWebhookHeaderSource,
  options: ShortcutWebhookSignatureOptions = {},
): Promise<ShortcutWebhookSignatureResult> {
  const body = toBytes(rawBody);
  const signature = readHeader(headers, SHORTCUT_SIGNATURE_HEADER);
  if (signature === null) {
    if (options.allowLegacySignature === false) return INVALID;
    const legacy = readHeader(headers, PAYLOAD_SIGNATURE_HEADER);
    return (await hmacMatches(secret, body, legacy))
      ? { verified: true, scheme: 'payload-signature' }
      : INVALID;
  }
  const timestamp = readHeader(headers, SHORTCUT_TIMESTAMP_HEADER);
  const deliveryId = readHeader(headers, SHORTCUT_DELIVERY_HEADER);
  if (!timestamp || !TIMESTAMP_PATTERN.test(timestamp) || !deliveryId) {
    return INVALID;
  }
  const content = signedContent(timestamp, deliveryId, body);
  if (!(await hmacMatches(secret, content, signature))) return INVALID;
  const skew = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (skew > TIMESTAMP_TOLERANCE_SECONDS) {
    return { verified: false, reason: 'stale_timestamp' };
  }
  return { verified: true, scheme: 'shortcut-signature', deliveryId };
}

/**
 * Computes the deprecated `Payload-Signature` value for a body. Prefer
 * {@link signShortcutWebhookHeaders}, which produces every header Shortcut
 * sends.
 */
export async function signShortcutWebhookBody(
  secret: string,
  rawBody: Uint8Array | string,
): Promise<string> {
  return hmacHex(secret, toBytes(rawBody));
}

/**
 * Computes the headers Shortcut sends with one delivery attempt of `rawBody`,
 * for signing test deliveries against a local agent. The timestamp defaults
 * to now. The result is a plain string record, so it serves as `HeadersInit`.
 */
export async function signShortcutWebhookHeaders(
  secret: string,
  rawBody: Uint8Array | string,
  options: { deliveryId: string; timestamp?: string },
): Promise<ShortcutWebhookSignatureHeaders> {
  const body = toBytes(rawBody);
  const timestamp = options.timestamp ?? String(Math.floor(Date.now() / 1000));
  return {
    'shortcut-timestamp': timestamp,
    'shortcut-signature': await hmacHex(
      secret,
      signedContent(timestamp, options.deliveryId, body),
    ),
    'shortcut-delivery': options.deliveryId,
    'payload-signature': await hmacHex(secret, body),
  };
}
