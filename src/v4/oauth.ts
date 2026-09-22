import { resolveTimeoutMs, withTimeout } from './timeout';

export interface ShortcutOAuthOptions {
  clientId: string;
  clientSecret: string;
  /** Must match the redirect URI registered on the agent app. Required for code exchange. */
  redirectUri?: string;
  /** API origin. Defaults to production. */
  baseUrl?: string;
  fetch?: typeof fetch;
  /**
   * Milliseconds each token request, including reading its body, may take
   * before it is aborted with a `TimeoutError`. Defaults to 30 000; pass
   * `Infinity` to disable.
   */
  timeoutMs?: number;
}

/**
 * What people in a workspace may do with the agent, as configured on its app.
 * `assignable` means it can be set as an owner on stories and epics and its
 * webhook receives `assigned` deliveries; `mentionable` means it can be
 * @-mentioned and receives `mentioned` deliveries. A builder can change
 * these in Settings without a new token, so a token response is a snapshot:
 * `GET /whoami` reports the current values under `member.agent`.
 */
export interface ShortcutAgentCapabilities {
  assignable: boolean;
  mentionable: boolean;
}

/**
 * The authorization-code exchange response. `permission_id` is the agent's
 * own member id in the workspace.
 */
export interface ShortcutOAuthTokens {
  access_token: string;
  refresh_token: string;
  /** ISO 8601. Refresh before this. */
  access_token_expires_at: string;
  /** The agent's member id, as it appears in `actor.member_id` on deliveries it causes. */
  permission_id: string;
  workspace2_id: string;
  workspace2_slug: string;
  /** Space-separated granted scopes, when reported. */
  scope?: string;
  token_type?: string;
  /**
   * The agent's capabilities at the time of this response. Present for agent
   * tokens (code exchange and refresh), absent for other tokens.
   */
  capabilities?: ShortcutAgentCapabilities;
}

/** A refresh may omit workspace and permission fields; retain them from the code exchange. */
export type ShortcutOAuthRefreshTokens = Omit<
  ShortcutOAuthTokens,
  'permission_id' | 'workspace2_id' | 'workspace2_slug'
> &
  Partial<
    Pick<
      ShortcutOAuthTokens,
      'permission_id' | 'workspace2_id' | 'workspace2_slug'
    >
  >;

/**
 * The tokens after a refresh: the rotated fields from `refreshed` over
 * `previous`, so the workspace, permission, scope, and token type fields
 * survive a refresh response that omits them.
 */
export function applyRefresh(
  previous: ShortcutOAuthTokens,
  refreshed: ShortcutOAuthRefreshTokens,
): ShortcutOAuthTokens {
  const rotated = Object.fromEntries(
    Object.entries(refreshed).filter(([, value]) => value !== undefined),
  );
  return { ...previous, ...rotated };
}

export class ShortcutOAuthError extends Error {
  readonly status: number;
  readonly error: string;
  readonly errorDescription?: string;

  constructor(status: number, error: string, errorDescription?: string) {
    super(`Shortcut OAuth token request failed with HTTP ${status}: ${error}`);
    this.name = 'ShortcutOAuthError';
    this.status = status;
    this.error = error;
    this.errorDescription = errorDescription;
  }
}

/** Splits the `scope` field into individual scopes. */
export function grantedScopes(
  tokens: Pick<ShortcutOAuthTokens, 'scope'>,
): string[] {
  return typeof tokens.scope === 'string'
    ? [...new Set(tokens.scope.trim().split(/\s+/).filter(Boolean))]
    : [];
}

/**
 * The OAuth authorization-code flow an agent app completes when a workspace
 * installs it, and the refresh it performs before tokens expire.
 */
export class ShortcutOAuth {
  private readonly options: ShortcutOAuthOptions;
  private readonly fetch: typeof fetch;
  readonly timeoutMs: number;

  constructor(options: ShortcutOAuthOptions) {
    for (const key of ['clientId', 'clientSecret'] as const) {
      if (typeof options?.[key] !== 'string' || options[key].length === 0) {
        throw new TypeError(`ShortcutOAuth requires ${key}`);
      }
    }
    this.options = options;
    this.fetch = options.fetch ?? globalThis.fetch.bind(globalThis);
    this.timeoutMs = resolveTimeoutMs(options.timeoutMs, 'ShortcutOAuth');
  }

  get tokenEndpoint(): string {
    return `${(this.options.baseUrl ?? 'https://api.app.shortcut.com').replace(/\/+$/, '')}/oauth-authorization-code-flow/token`;
  }

  /** Exchanges the `code` from the redirect for the workspace's tokens. */
  exchangeAuthorizationCode(
    code: string,
    redirectUri = this.options.redirectUri,
  ): Promise<ShortcutOAuthTokens> {
    if (typeof code !== 'string' || code.length === 0)
      throw new TypeError('authorization code is required');
    if (typeof redirectUri !== 'string' || redirectUri.length === 0)
      throw new TypeError('redirectUri is required');
    return this.tokenRequest<ShortcutOAuthTokens>(
      { grant_type: 'authorization_code', code, redirect_uri: redirectUri },
      // The install flow records the workspace, so the exchange must name it.
      ['access_token', 'workspace2_id'],
    );
  }

  /**
   * Rotates the tokens. The previous refresh token is invalidated. Given the
   * previous tokens, resolves the merged result (see {@link applyRefresh});
   * given a refresh token, resolves the raw response, which may omit the
   * workspace and permission fields.
   */
  refreshAccessToken(
    previous: ShortcutOAuthTokens,
  ): Promise<ShortcutOAuthTokens>;
  refreshAccessToken(refreshToken: string): Promise<ShortcutOAuthRefreshTokens>;
  refreshAccessToken(
    source: string | ShortcutOAuthTokens,
  ): Promise<ShortcutOAuthRefreshTokens | ShortcutOAuthTokens> {
    if (typeof source === 'object' && source !== null) {
      return this.refreshAccessToken(source.refresh_token).then((refreshed) =>
        applyRefresh(source, refreshed),
      );
    }
    if (typeof source !== 'string' || source.length === 0)
      throw new TypeError('refreshToken is required');
    return this.tokenRequest<ShortcutOAuthRefreshTokens>(
      { grant_type: 'refresh_token', refresh_token: source },
      ['access_token', 'refresh_token'],
    );
  }

  private tokenRequest<T extends ShortcutOAuthRefreshTokens>(
    params: Record<string, string>,
    required: ReadonlyArray<keyof ShortcutOAuthTokens>,
  ): Promise<T> {
    return withTimeout(this.timeoutMs, undefined, async (signal) => {
      const response = await this.fetch(this.tokenEndpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          accept: 'application/json',
        },
        body: new URLSearchParams({
          client_id: this.options.clientId,
          client_secret: this.options.clientSecret,
          ...params,
        }),
        signal,
      });
      const text = await response.text();
      let body: Record<string, unknown> = {};
      try {
        body = text ? (JSON.parse(text) as Record<string, unknown>) : {};
      } catch {
        body = {};
      }
      if (!response.ok) {
        throw new ShortcutOAuthError(
          response.status,
          typeof body.error === 'string' ? body.error : 'unknown_error',
          typeof body.error_description === 'string'
            ? body.error_description
            : undefined,
        );
      }
      if (required.some((field) => typeof body[field] !== 'string')) {
        throw new ShortcutOAuthError(response.status, 'invalid_token_response');
      }
      return body as unknown as T;
    });
  }
}
