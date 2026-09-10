import { readFileSync } from 'node:fs';
import { describe, expect, it, vi } from 'vitest';
import { workspaceOperations } from '../generated/Api';
import {
  ShortcutOAuth,
  ShortcutOAuthError,
  ShortcutV4Client,
  grantedScopes,
  isShortcutV4RequestError,
} from '../index';

function client(
  handler: (url: string, init: RequestInit) => Response | Promise<Response>,
) {
  const calls: Array<{ url: string; init: RequestInit }> = [];
  const fetchImpl = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    calls.push({ url, init: init ?? {} });
    return handler(url, init ?? {});
  };
  return {
    calls,
    client: new ShortcutV4Client({
      token: 'secret-token',
      baseUrl: 'https://api.example.com/',
      fetch: fetchImpl as typeof fetch,
    }),
  };
}

describe('ShortcutV4Client', () => {
  it('binds exactly the workspace operations declared in the schema', () => {
    const schema = JSON.parse(
      readFileSync(
        new URL('../../../schema/shortcut.v4.openapi.json', import.meta.url),
        'utf8',
      ),
    );
    const operations = Object.entries(schema.paths)
      .filter(([path]) => path.includes('{workspace-slug}'))
      .flatMap(([, item]) =>
        Object.values(item as Record<string, { operationId?: string }>),
      )
      .flatMap((operation) =>
        operation.operationId ? [operation.operationId] : [],
      );
    expect([...workspaceOperations].sort()).toEqual(operations.sort());
  });

  it('keeps a stable identity for every member of the workspace facade', () => {
    const { client: c } = client(() => Response.json({}));
    const workspace = c.workspace('acme');
    expect(workspace.getStory).toBe(workspace.getStory);
    expect(workspace.getWhoami).toBe(workspace.getWhoami);
    expect(workspace.request).toBe(workspace.request);
    expect(workspace.getStory).not.toBe(c.workspace('acme').getStory);
    expect(workspace.baseUrl).toBe('https://api.example.com');
  });

  it('refreshes cached workspace operations when the client method is replaced or restored', async () => {
    const { client: c } = client(() => Response.json({ entity: { id: 1 } }));
    const workspace = c.workspace('my workspace');
    const original = c.getStory;
    const initialWrapper = workspace.getStory;
    const replacement = vi.fn<typeof original>(function (
      this: ShortcutV4Client,
      ...args: Parameters<typeof original>
    ) {
      expect(this).toBe(c);
      return original(...args);
    });

    c.getStory = replacement;
    await workspace.getStory(1, { fields: 'name' });
    expect(replacement).toHaveBeenCalledWith('my%20workspace', 1, {
      fields: 'name',
    });
    const replacementWrapper = workspace.getStory;
    expect(replacementWrapper).not.toBe(initialWrapper);
    expect(workspace.getStory).toBe(replacementWrapper);

    c.getStory = original;
    await workspace.getStory(2);
    expect(replacement).toHaveBeenCalledTimes(1);
    expect(workspace.getStory).not.toBe(replacementWrapper);
    expect(workspace.getStory).toBe(workspace.getStory);
  });

  it('refreshes cached unbound methods when replaced or restored through the facade', async () => {
    const { client: c } = client(() => Response.json({ entity: { id: 'me' } }));
    const workspace = c.workspace('acme');
    const original = c.getWhoami;
    const initialWrapper = workspace.getWhoami;
    const replacement = vi.fn<typeof original>(function (
      this: ShortcutV4Client,
      ...args: Parameters<typeof original>
    ) {
      expect(this).toBe(c);
      return original(...args);
    });

    workspace.getWhoami = replacement;
    const params = { headers: { 'X-Test': 'replacement' } };
    await workspace.getWhoami(params);
    expect(replacement).toHaveBeenCalledWith(params);
    const replacementWrapper = workspace.getWhoami;
    expect(replacementWrapper).not.toBe(initialWrapper);
    expect(workspace.getWhoami).toBe(replacementWrapper);

    workspace.getWhoami = original;
    await workspace.getWhoami();
    expect(replacement).toHaveBeenCalledTimes(1);
    expect(workspace.getWhoami).not.toBe(replacementWrapper);
    expect(workspace.getWhoami).toBe(workspace.getWhoami);
  });

  it('exposes every client function on the facade and binds only workspace operations', async () => {
    const { calls, client: c } = client(() => Response.json({}));
    const workspace = c.workspace('acme') as unknown as Record<string, unknown>;
    const members = Object.keys(c).filter(
      (name) =>
        typeof (c as unknown as Record<string, unknown>)[name] === 'function',
    );
    expect(members.length).toBeGreaterThan(100);
    for (const name of members) expect(typeof workspace[name]).toBe('function');
    await c.workspace('acme').listStories({ limit: 1 });
    await c.workspace('acme').getWhoami();
    expect(calls.map((call) => new URL(call.url).pathname)).toEqual([
      '/api/v4/acme/stories',
      '/api/v4/whoami',
    ]);
  });

  it('sends a bearer token, encodes the workspace slug, and unwraps JSON', async () => {
    const { calls, client: c } = client(() =>
      Response.json({ entity: { id: 123, name: 'Story' } }),
    );
    const result = await c
      .workspace('my workspace')
      .getStory(123, { fields: 'name' });
    expect(result).toEqual({ entity: { id: 123, name: 'Story' } });
    expect(calls[0].url).toBe(
      'https://api.example.com/api/v4/my%20workspace/stories/123?fields=name',
    );
    expect(
      (calls[0].init.headers as Record<string, string>).Authorization,
    ).toBe('Bearer secret-token');
  });

  it('keeps workspace-independent operations unbound', async () => {
    const { calls, client: c } = client(() => Response.json({ id: 'me' }));
    await c.workspace('acme').getWhoami();
    expect(calls[0].url).toBe('https://api.example.com/api/v4/whoami');
    await c.workspace('acme').getSchema('story');
    expect(calls[1].url).toBe('https://api.example.com/api/v4/schemas/story');
  });

  it('preserves security data and cancellation arguments on the workspace facade', async () => {
    const { calls, client: c } = client((_url, init) => {
      expect(init.signal?.aborted).toBe(false);
      c.workspace('acme').abortRequest('request-1');
      expect(init.signal?.aborted).toBe(true);
      return Response.json({ entity: { id: 1 } });
    });
    const workspace = c.workspace('acme');
    workspace.setSecurityData('rotated');
    await workspace.getStory(1, undefined, { cancelToken: 'request-1' });
    expect(
      (calls[0].init.headers as Record<string, string>).Authorization,
    ).toBe('Bearer rotated');
  });

  it('returns null for a bodyless delete and arbitrary JSON for a schema', async () => {
    const schema = { type: 'object', properties: { name: { type: 'string' } } };
    const { client: c } = client((_url, init) =>
      init.method === 'DELETE'
        ? new Response(null, { status: 204 })
        : Response.json(schema),
    );
    await expect(c.workspace('acme').deleteStory(1)).resolves.toBeNull();
    await expect(c.workspace('acme').getSchema('story')).resolves.toEqual(
      schema,
    );
  });

  it('rotates the token with setToken', async () => {
    const { calls, client: c } = client(() =>
      Response.json({ entity: { id: 1 } }),
    );
    c.setToken('rotated');
    await c.getStory('acme', 1);
    expect(
      (calls[0].init.headers as Record<string, string>).Authorization,
    ).toBe('Bearer rotated');
  });

  it('rejects failed requests with the response and its parsed error body', async () => {
    const { client: c } = client(() =>
      Response.json(
        { message: 'Not found', tag: 'resource_not_found' },
        { status: 404 },
      ),
    );
    const error = await c
      .workspace('acme')
      .getStory(1)
      .catch((caught: unknown) => caught);
    expect(isShortcutV4RequestError(error)).toBe(true);
    expect(error).toMatchObject({
      status: 404,
      error: { message: 'Not found', tag: 'resource_not_found' },
    });
  });

  it('follows cursor links on the API origin and stops at the last page', async () => {
    const { calls, client: c } = client((url) => {
      const cursor = new URL(url).searchParams.get('cursor');
      if (!cursor)
        return Response.json({
          entities: [1, 2],
          current_page: 1,
          total_pages: 2,
          next_page_url:
            'https://api.example.com/api/v4/acme/stories/1/comments?cursor=abc%3D&fields=id',
        });
      expect(new URL(url).searchParams.has('limit')).toBe(false);
      return Response.json({
        entities: [3],
        current_page: 2,
        total_pages: 2,
        next_page_url: null,
      });
    });
    const all: number[] = [];
    for await (const item of c.paginate<number>(
      c
        .workspace('acme')
        .listStoryComments(1, { fields: 'id', limit: 100 }) as never,
    ))
      all.push(item);
    expect(all).toEqual([1, 2, 3]);
    expect(calls.map((call) => call.url)).toEqual([
      'https://api.example.com/api/v4/acme/stories/1/comments?fields=id&limit=100',
      'https://api.example.com/api/v4/acme/stories/1/comments?cursor=abc%3D&fields=id',
    ]);
    expect(
      (calls[1].init.headers as Record<string, string>).Authorization,
    ).toBe('Bearer secret-token');
  });

  it.each([
    'https://evil.example/api/v4/acme/stories?cursor=x',
    'https://api.example.com/other/path?cursor=x',
    'https://api.example.com/api/v4/acme/stories?cursor=x&limit=5',
    'https://api.example.com/api/v4/acme/stories?cursor=x&cursor=y',
    'https://api.example.com/api/v4/acme/stories',
    'https://user:pw@api.example.com/api/v4/acme/stories?cursor=x',
  ])(
    'refuses to send the token to an unsafe next_page_url: %s',
    async (next) => {
      const { calls, client: c } = client(() =>
        Response.json({ entities: [], current_page: 2, total_pages: 2 }),
      );
      await expect(
        c.nextPage({
          entities: [],
          current_page: 1,
          total_pages: 2,
          next_page_url: next,
        }),
      ).rejects.toThrow(/next_page_url/);
      expect(calls).toHaveLength(0);
    },
  );

  it('fails closed on a missing link, a repeated cursor, and a non-list page', async () => {
    const { client: c } = client(() =>
      Response.json({
        entities: [1],
        current_page: 1,
        total_pages: 3,
        next_page_url:
          'https://api.example.com/api/v4/acme/stories?cursor=same',
      }),
    );
    await expect(
      c.nextPage({ entities: [], current_page: 1, total_pages: 2 }),
    ).rejects.toThrow(/missing its next_page_url/);
    const loop = c.paginate<number>({
      entities: [0],
      current_page: 1,
      total_pages: 3,
      next_page_url: 'https://api.example.com/api/v4/acme/stories?cursor=same',
    });
    await expect(
      (async () => {
        for await (const _ of loop) void _;
      })(),
    ).rejects.toThrow(/repeated a cursor/);
    await expect(
      (async () => {
        for await (const _ of c.paginate({ nope: true } as never)) void _;
      })(),
    ).rejects.toThrow(/no entities/);
  });

  it('sends JSON bodies with a JSON content type', async () => {
    const { calls, client: c } = client(() =>
      Response.json({ entity: { id: 7, text: 'Hello' } }),
    );
    await c.workspace('acme').createStoryComment(123, { text: 'Hello' });
    const { init } = calls[0];
    expect(init.method).toBe('POST');
    expect((init.headers as Record<string, string>)['Content-Type']).toBe(
      'application/json',
    );
    expect(init.body).toBe(JSON.stringify({ text: 'Hello' }));
  });

  it('uploads files as multipart form data with their contents intact', async () => {
    const { calls, client: c } = client(() =>
      Response.json({ entities: [{ id: 1 }] }),
    );
    const file = new File(['hello, world'], 'hello.txt', {
      type: 'text/plain',
    });
    await c.workspace('acme').uploadFiles({ story_id: 123, file });
    const { init } = calls[0];
    expect(init.method).toBe('POST');
    // The runtime must set the multipart boundary itself.
    expect(init.headers).not.toHaveProperty('Content-Type');
    expect(init.body).toBeInstanceOf(FormData);
    const form = init.body as FormData;
    expect(form.get('story_id')).toBe('123');
    const sent = form.get('file');
    expect(sent).toBeInstanceOf(Blob);
    expect((sent as File).name).toBe('hello.txt');
    expect(await (sent as Blob).text()).toBe('hello, world');
  });

  it('declares a media type on every generated operation that sends a body', () => {
    // A request body referenced from `components/requestBodies` is not
    // resolved by the generator, which then omits `type`; the client would
    // send JSON as text/plain and multipart uploads as JSON.
    const source = readFileSync(
      new URL('../generated/Api.ts', import.meta.url),
      'utf8',
    );
    const calls = source.split('this.request<').slice(1);
    const withBody = calls.filter((call) => /^\s*body:/m.test(call));
    expect(withBody.length).toBeGreaterThan(0);
    const untyped = withBody.filter(
      (call) => !/^\s*type: ContentType\./m.test(call),
    );
    expect(untyped.map((call) => call.split('\n')[1]?.trim())).toEqual([]);
  });

  it('requires a token and a slug', () => {
    expect(() => new ShortcutV4Client({ token: '' })).toThrow(TypeError);
    expect(() => new ShortcutV4Client({ token: 't' }).workspace('')).toThrow(
      TypeError,
    );
  });
});

describe('ShortcutOAuth', () => {
  const tokens = {
    access_token: 'a',
    refresh_token: 'r',
    access_token_expires_at: '2099-01-01T00:00:00Z',
    permission_id: 'p',
    workspace2_id: 'w',
    workspace2_slug: 'acme',
    scope: 'read comment-write read',
  };

  it('exchanges a code with form-encoded credentials and returns the tokens', async () => {
    const calls: Array<{ url: string; init: RequestInit }> = [];
    const oauth = new ShortcutOAuth({
      clientId: 'id',
      clientSecret: 'secret',
      redirectUri: 'https://agent.example/oauth/callback',
      baseUrl: 'https://api.example.com',
      fetch: (async (url: RequestInfo | URL, init?: RequestInit) => {
        calls.push({ url: String(url), init: init ?? {} });
        return Response.json(tokens);
      }) as typeof fetch,
    });
    const result = await oauth.exchangeAuthorizationCode('code-123');
    expect(result).toEqual(tokens);
    expect(grantedScopes(result)).toEqual(['read', 'comment-write']);
    expect(calls[0].url).toBe(
      'https://api.example.com/oauth-authorization-code-flow/token',
    );
    const body = calls[0].init.body as URLSearchParams;
    expect(Object.fromEntries(body)).toEqual({
      client_id: 'id',
      client_secret: 'secret',
      grant_type: 'authorization_code',
      code: 'code-123',
      redirect_uri: 'https://agent.example/oauth/callback',
    });
  });

  it('refreshes and surfaces provider errors with status and description', async () => {
    let call = 0;
    const oauth = new ShortcutOAuth({
      clientId: 'id',
      clientSecret: 'secret',
      fetch: (async (_url: RequestInfo | URL, init?: RequestInit) => {
        call += 1;
        expect(
          Object.fromEntries(init?.body as URLSearchParams).grant_type,
        ).toBe('refresh_token');
        return call === 1
          ? Response.json(tokens)
          : Response.json(
              { error: 'invalid_grant', error_description: 'expired' },
              { status: 400 },
            );
      }) as typeof fetch,
    });
    expect(oauth.tokenEndpoint).toBe(
      'https://api.app.shortcut.com/oauth-authorization-code-flow/token',
    );
    await expect(oauth.refreshAccessToken('r')).resolves.toEqual(tokens);
    const error = await oauth
      .refreshAccessToken('r')
      .catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(ShortcutOAuthError);
    expect((error as ShortcutOAuthError).status).toBe(400);
    expect((error as ShortcutOAuthError).error).toBe('invalid_grant');
    expect((error as ShortcutOAuthError).errorDescription).toBe('expired');
  });

  it('validates its inputs', () => {
    expect(
      () => new ShortcutOAuth({ clientId: '', clientSecret: 's' }),
    ).toThrow(TypeError);
    const oauth = new ShortcutOAuth({ clientId: 'i', clientSecret: 's' });
    expect(() => oauth.exchangeAuthorizationCode('code')).toThrow(
      /redirectUri/,
    );
    expect(() => oauth.refreshAccessToken('')).toThrow(TypeError);
  });
});
