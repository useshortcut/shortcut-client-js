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
 * The token endpoint's response. `permission_id` is the agent's own member id
 * in the workspace. A refresh response may omit the workspace and permission
 * fields; keep the ones from the authorization-code exchange.
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
    return this.tokenRequest(
      { grant_type: 'authorization_code', code, redirect_uri: redirectUri },
      // The install flow records the workspace, so the exchange must name it.
      ['access_token', 'workspace2_id'],
    );
  }

  /**
   * Rotates the tokens. The previous refresh token is invalidated. The
   * response may omit the workspace and permission fields.
   */
  refreshAccessToken(refreshToken: string): Promise<ShortcutOAuthTokens> {
    if (typeof refreshToken !== 'string' || refreshToken.length === 0)
      throw new TypeError('refreshToken is required');
    return this.tokenRequest(
      { grant_type: 'refresh_token', refresh_token: refreshToken },
      ['access_token', 'refresh_token'],
    );
  }

  private tokenRequest(
    params: Record<string, string>,
    required: ReadonlyArray<keyof ShortcutOAuthTokens>,
  ): Promise<ShortcutOAuthTokens> {
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
      return body as unknown as ShortcutOAuthTokens;
    });
  }
}
