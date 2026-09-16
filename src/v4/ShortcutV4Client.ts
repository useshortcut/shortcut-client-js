import {
  Api,
  type WorkspaceOperation,
  workspaceOperations,
} from './generated/Api';
import type { ApiError } from './generated/data-contracts';
import type {
  ApiConfig,
  FullRequestParams,
  HttpResponse,
} from './generated/http-client';
import { resolveTimeoutMs, withTimeout } from './timeout';

export const SHORTCUT_V4_BASE_URL = 'https://api.app.shortcut.com';

export interface ShortcutV4ClientOptions {
  /** Bearer token: an OAuth access token for an agent, or a workspace API token. */
  token: string;
  /** API origin. Defaults to production. */
  baseUrl?: string;
  /** Replacement for the global `fetch`, e.g. for tests or instrumentation. */
  fetch?: typeof fetch;
  /** Extra defaults applied to every request (headers, credentials, ...). */
  baseApiParams?: ApiConfig['baseApiParams'];
  /**
   * Milliseconds each request, including reading its body, may take before
   * it is aborted with a `TimeoutError`. Defaults to 30 000; pass `Infinity`
   * to disable.
   */
  timeoutMs?: number;
}

/** A page of a v4 list endpoint. Requests page with `cursor`, never `page`. */
export interface ShortcutV4Page<T> {
  entities: T[];
  current_items?: number;
  current_page?: number;
  total_items?: number;
  total_pages?: number;
  next_page_url?: string | null;
}

type BindSlug<F> = F extends (
  workspaceSlug: string,
  ...rest: infer R
) => infer T
  ? (...rest: R) => T
  : never;

/** Workspace operations have their slug pre-applied; other API members keep their signatures. */
export type ShortcutWorkspaceApi = {
  [K in keyof Api<string>]: K extends WorkspaceOperation
    ? BindSlug<Api<string>[K]>
    : Api<string>[K];
};

/**
 * The `error` of a failed v4 request: the parsed JSON body, the raw text when
 * the body is not JSON, or `null` when it is empty. Narrow before reading
 * `message`.
 */
export type ShortcutV4ErrorBody = ApiError | string | null;

/** The request a rejected `Response` answers: the uppercase method and the URL pathname, never the query. */
export interface ShortcutV4RequestInfo {
  method: string;
  path: string;
}

/**
 * The rejection value of a failed v4 request: the `Response`, with the error
 * body on `error` and the request that produced it on `request`.
 */
export type ShortcutV4RequestError = HttpResponse<
  unknown,
  ShortcutV4ErrorBody
> & { readonly request: ShortcutV4RequestInfo };

export function isShortcutV4RequestError(
  value: unknown,
): value is ShortcutV4RequestError {
  return (
    typeof value === 'object' &&
    value !== null &&
    'status' in value &&
    typeof (value as Response).status === 'number' &&
    'error' in value &&
    typeof (value as { request?: unknown }).request === 'object'
  );
}

/** What `summarizeShortcutV4Error` keeps of a rejection: safe to log as is. */
export interface ShortcutV4ErrorSummary {
  method: string;
  path: string;
  status: number;
  /** The body's `tag`, when it is an identifier. */
  tag?: string;
  /** The body's `error`, when it is an identifier. */
  code?: string;
}

const IDENTIFIER = /^[a-z][a-z0-9_]{0,79}$/;

/**
 * Reduces a rejected request to its method, pathname, status, and the body's
 * machine-readable `tag` and `error` codes. Free-form messages, the response
 * body, the query string, and headers are left out, so the result can be
 * logged without echoing user content, cursors, or credentials. Returns
 * `null` for anything that is not a v4 rejection.
 */
export function summarizeShortcutV4Error(
  error: unknown,
): ShortcutV4ErrorSummary | null {
  if (!isShortcutV4RequestError(error)) return null;
  const summary: ShortcutV4ErrorSummary = {
    method: error.request.method,
    path: error.request.path,
    status: error.status,
  };
  const body = error.error;
  if (body !== null && typeof body === 'object') {
    const { tag, error: code } = body as { tag?: unknown; error?: unknown };
    if (typeof tag === 'string' && IDENTIFIER.test(tag)) summary.tag = tag;
    if (typeof code === 'string' && IDENTIFIER.test(code)) summary.code = code;
  }
  return summary;
}

const MAX_PAGES = 10_000;

/** The generated client keeps cancel-token controllers in a private map. */
type CancelTokenRegistry = {
  abortControllers?: Map<
    NonNullable<FullRequestParams['cancelToken']>,
    AbortController
  >;
};

/**
 * Shortcut REST API v4 client.
 *
 * Generated operations take the workspace slug as their first argument;
 * `workspace(slug)` returns the same operations with it applied. Requests
 * that fail reject with the `Response`, so `isShortcutV4RequestError` narrows
 * a caught error to one with a typed `.error` body, `.status`, and the
 * `.request` that produced it. Every request is aborted with a `TimeoutError`
 * after `timeoutMs`.
 *
 * ```ts
 * const client = new ShortcutV4Client({ token });
 * const { entity } = await client.workspace('acme').getStory(123, { fields: 'name,team' });
 * ```
 */
export class ShortcutV4Client extends Api<string> {
  readonly timeoutMs: number;

  constructor(options: ShortcutV4ClientOptions) {
    if (typeof options?.token !== 'string' || options.token.length === 0) {
      throw new TypeError('ShortcutV4Client requires a token');
    }
    const timeoutMs = resolveTimeoutMs(options.timeoutMs, 'ShortcutV4Client');
    super({
      baseUrl: (options.baseUrl ?? SHORTCUT_V4_BASE_URL).replace(/\/+$/, ''),
      ...(options.fetch ? { customFetch: options.fetch } : {}),
      baseApiParams: { secure: true, format: 'json', ...options.baseApiParams },
      securityWorker: (token) =>
        token ? { headers: { Authorization: `Bearer ${token}` } } : {},
    });
    this.timeoutMs = timeoutMs;
    this.setSecurityData(options.token);

    // The generated `request` only honours `signal` when no `cancelToken` is
    // given, so the timeout wraps it: the cancel token's controller is created
    // here, joined with the caller's signal and the timer, and handed down as
    // the one signal `fetch` and the body read observe.
    const base = this.request;
    this.request = async <T = any>({
      cancelToken,
      signal,
      ...params
    }: FullRequestParams): Promise<T> => {
      const registry = (this as unknown as CancelTokenRegistry)
        .abortControllers;
      const cancel =
        cancelToken === undefined
          ? signal
          : this.createAbortSignal(cancelToken);
      // `abortRequest` drops the token's entry synchronously, so a request
      // started with the same token before this one's rejection settles owns a
      // newer controller; only forget the token while it still maps to ours.
      const controller =
        cancelToken === undefined ? undefined : registry?.get(cancelToken);
      try {
        return await withTimeout(this.timeoutMs, cancel, (combined) =>
          base<T>({ ...params, signal: combined }),
        );
      } catch (error) {
        throw this.describeRejection(error, params);
      } finally {
        if (
          cancelToken !== undefined &&
          controller !== undefined &&
          registry?.get(cancelToken) === controller
        ) {
          registry.delete(cancelToken);
        }
      }
    };
  }

  /** Replaces the bearer token, e.g. after an OAuth refresh. */
  setToken(token: string): void {
    this.setSecurityData(token);
  }

  /** Records which request a rejected `Response` answers; other errors pass through. */
  private describeRejection(
    error: unknown,
    { method, path }: Pick<FullRequestParams, 'method' | 'path'>,
  ): unknown {
    if (
      typeof error !== 'object' ||
      error === null ||
      !('status' in error) ||
      !('error' in error) ||
      'request' in error
    ) {
      return error;
    }
    let pathname = path.split('?')[0] ?? path;
    try {
      pathname = new URL(`${this.baseUrl}${path}`).pathname;
    } catch {
      // Keep the operation path when the base URL cannot be parsed.
    }
    const request: ShortcutV4RequestInfo = {
      method: (method ?? 'GET').toUpperCase(),
      path: pathname,
    };
    Object.defineProperty(error, 'request', {
      value: request,
      enumerable: true,
    });
    return error;
  }

  /** The API bound to one workspace slug. */
  workspace(slug: string): ShortcutWorkspaceApi {
    if (typeof slug !== 'string' || slug.length === 0)
      throw new TypeError('workspace slug is required');
    // The generated operations URL-encode the slug (and every other path
    // parameter), so pass it raw rather than encoding it twice.
    // Keep wrappers stable while their source functions are unchanged, and
    // refresh them when callers replace or restore a method.
    const members = new Map<
      PropertyKey,
      { source: unknown; member: unknown }
    >();
    return new Proxy(this, {
      get: (target, property) => {
        const value = Reflect.get(target, property) as unknown;
        if (typeof value !== 'function') return value;
        const cached = members.get(property);
        if (cached?.source === value) return cached.member;
        const member = workspaceOperations.has(property as WorkspaceOperation)
          ? (...rest: unknown[]) => value.call(target, slug, ...rest)
          : value.bind(target);
        members.set(property, { source: value, member });
        return member;
      },
    }) as unknown as ShortcutWorkspaceApi;
  }

  /**
   * Fetches the page after `page` by following its `next_page_url`, or
   * resolves `null` on the last page. The link is only followed when it points
   * at this client's API origin under `/api/v4/` and carries nothing but a
   * `cursor` and optional `fields`, so the bearer token never leaves the API.
   */
  async nextPage<T>(
    page: ShortcutV4Page<T>,
  ): Promise<ShortcutV4Page<T> | null> {
    const next = page.next_page_url;
    if (next === undefined || next === null || next === '') {
      if (
        isCount(page.current_page) &&
        isCount(page.total_pages) &&
        page.current_page < page.total_pages
      ) {
        throw new Error('Shortcut list page is missing its next_page_url');
      }
      return null;
    }
    if (typeof next !== 'string')
      throw new Error('Shortcut list page has an invalid next_page_url');
    const base = new URL(this.baseUrl);
    let url: URL;
    try {
      url = new URL(next, base);
    } catch {
      throw new Error('Shortcut list page has an invalid next_page_url');
    }
    const keys = [...url.searchParams.keys()];
    if (
      url.origin !== base.origin ||
      !url.pathname.startsWith('/api/v4/') ||
      url.username ||
      url.password ||
      url.hash ||
      url.searchParams.getAll('cursor').length !== 1 ||
      !url.searchParams.get('cursor') ||
      keys.some((key) => key !== 'cursor' && key !== 'fields')
    ) {
      throw new Error('Shortcut list page has an unsafe next_page_url');
    }
    const query: Record<string, string> = {
      cursor: url.searchParams.get('cursor') as string,
    };
    const fields = url.searchParams.get('fields');
    if (fields) query.fields = fields;
    const params: FullRequestParams = {
      path: url.pathname,
      method: 'GET',
      query,
      secure: true,
      format: 'json',
    };
    return this.request<ShortcutV4Page<T>, ShortcutV4ErrorBody>(params);
  }

  /**
   * Iterates every entity across all pages of a list result, following
   * cursors with {@link nextPage}. Stops with an error on a repeated cursor,
   * a missing link, or an implausible page count rather than yielding a
   * partial list as if it were complete.
   */
  async *paginate<T>(
    first: ShortcutV4Page<T> | Promise<ShortcutV4Page<T>>,
  ): AsyncGenerator<T, void, undefined> {
    let page: ShortcutV4Page<T> | null = await first;
    const seen = new Set<string>();
    for (let count = 1; page; count += 1) {
      if (!Array.isArray(page.entities))
        throw new Error('Shortcut list page has no entities');
      yield* page.entities;
      const cursor = page.next_page_url
        ? new URL(page.next_page_url, this.baseUrl).searchParams.get('cursor')
        : null;
      if (cursor) {
        if (seen.has(cursor))
          throw new Error('Shortcut list pagination repeated a cursor');
        seen.add(cursor);
      }
      if (count >= MAX_PAGES)
        throw new Error('Shortcut list pagination exceeded the page limit');
      page = await this.nextPage(page);
    }
  }
}

function isCount(value: unknown): value is number {
  return Number.isInteger(value) && (value as number) >= 0;
}
