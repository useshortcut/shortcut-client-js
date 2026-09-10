import { EventEmitter } from 'node:events';
import { describe, expect, it } from 'vitest';
import {
  ShortcutWebhookClient,
  ShortcutWebhookError,
  isShortcutInteractionPayload,
  isShortcutObserverPayload,
  shortcutWebhookEventType,
  signShortcutWebhookBody,
  verifyShortcutWebhookSignature,
} from '../index';

const secret = 'signing-secret';
const observer = {
  id: 'delivery-1',
  version: 'v2',
  timestamp: new Date().toISOString(),
  actor: { displayable_name: 'Ada', member_id: 'member-1' },
  workspace2: { id: 'workspace-1', url_slug: 'acme' },
  installation_id: 'install-1',
  actions: [
    {
      action: 'update',
      id: 123,
      entity_type: 'story',
      global_id: 'v2:s:workspace-1:123',
      app_url: null,
      changes: [],
    },
  ],
};
const interaction = {
  ...observer,
  id: 'delivery-2',
  actions: undefined,
  trigger: {
    type: 'mentioned',
    entity_type: 'story',
    entity_id: '123',
    context: 'comment',
    comment_id: '9',
  },
};

async function signed(
  body: unknown,
  options: { secret?: string; headers?: Record<string, string> } = {},
) {
  const text = JSON.stringify(body);
  return new Request('https://agent.example/webhook', {
    method: 'POST',
    body: text,
    headers: {
      'content-type': 'application/json',
      'payload-signature': await signShortcutWebhookBody(
        options.secret ?? secret,
        text,
      ),
      ...options.headers,
    },
  });
}

describe('verifyShortcutWebhookSignature', () => {
  it('accepts the raw body signed with the secret and rejects everything else', async () => {
    const body = '{"type":"validation"}';
    const signature = await signShortcutWebhookBody(secret, body);
    expect(await verifyShortcutWebhookSignature(secret, body, signature)).toBe(
      true,
    );
    expect(
      await verifyShortcutWebhookSignature(
        secret,
        new TextEncoder().encode(body),
        signature,
      ),
    ).toBe(true);
    expect(
      await verifyShortcutWebhookSignature(
        secret,
        body,
        signature.replace(/^./, 'f'),
      ),
    ).toBe(false);
    expect(
      await verifyShortcutWebhookSignature(secret, `${body} `, signature),
    ).toBe(false);
    expect(await verifyShortcutWebhookSignature('other', body, signature)).toBe(
      false,
    );
    expect(await verifyShortcutWebhookSignature(secret, body, '')).toBe(false);
    expect(await verifyShortcutWebhookSignature(secret, body, 'not-hex')).toBe(
      false,
    );
    expect(await verifyShortcutWebhookSignature(secret, body, null)).toBe(
      false,
    );
    expect(await verifyShortcutWebhookSignature('', body, signature)).toBe(
      false,
    );
  });
});

describe('ShortcutWebhookClient.verify', () => {
  const client = new ShortcutWebhookClient(secret);

  it('returns the typed payload and delivery id for a signed request', async () => {
    const delivery = await client.verify(await signed(observer));
    expect(delivery.deliveryId).toBe('delivery-1');
    expect(delivery.payload).toEqual(observer);
    expect(new TextDecoder().decode(delivery.rawBody)).toBe(
      JSON.stringify(observer),
    );
  });

  it.each([
    [
      'invalid_signature',
      401,
      async () => signed(observer, { secret: 'wrong' }),
    ],
    [
      'invalid_signature',
      401,
      async () =>
        new Request('https://agent.example/webhook', {
          method: 'POST',
          body: '{}',
          headers: { 'content-type': 'application/json' },
        }),
    ],
    [
      'method_not_allowed',
      405,
      async () =>
        new Request('https://agent.example/webhook', { method: 'GET' }),
    ],
    [
      'unsupported_media_type',
      415,
      async () =>
        new Request('https://agent.example/webhook', {
          method: 'POST',
          body: '{}',
          headers: { 'content-type': 'text/plain' },
        }),
    ],
    [
      'invalid_body',
      400,
      async () => signed(observer, { headers: { 'content-length': 'abc' } }),
    ],
    [
      'invalid_body',
      400,
      async () => {
        const text = 'not json';
        return new Request('https://agent.example/webhook', {
          method: 'POST',
          body: text,
          headers: {
            'content-type': 'application/json',
            'payload-signature': await signShortcutWebhookBody(secret, text),
          },
        });
      },
    ],
    [
      'invalid_body',
      400,
      async () => signed({ id: 'x', workspace2: { id: 'workspace-1' } }),
    ],
    ['invalid_body', 400, async () => signed({ actions: [] })],
    [
      'invalid_body',
      400,
      async () => signed({ trigger: { type: 'observer' } }),
    ],
  ])('rejects with %s (%i)', async (code, status, make) => {
    const error = await client
      .verify(await make())
      .catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(ShortcutWebhookError);
    expect((error as ShortcutWebhookError).code).toBe(code);
    expect((error as ShortcutWebhookError).status).toBe(status);
  });

  it.each([
    ['a missing delivery id', { ...observer, id: undefined }],
    ['a missing version', { ...observer, version: undefined }],
    ['a missing timestamp', { ...observer, timestamp: undefined }],
    ['an actor without a name', { ...observer, actor: { member_id: 'm' } }],
    ['a workspace without a slug', { ...observer, workspace2: { id: 'w' } }],
    ['a missing installation id', { ...observer, installation_id: '' }],
    ['a non-array actions field', { ...observer, actions: {} }],
    [
      'an action with an unknown type',
      { ...observer, actions: [{ ...observer.actions[0], action: 'merge' }] },
    ],
    [
      'an action without a global id',
      { ...observer, actions: [{ ...observer.actions[0], global_id: '' }] },
    ],
    [
      'an action whose changes are not a list',
      { ...observer, actions: [{ ...observer.actions[0], changes: {} }] },
    ],
    [
      'an unknown trigger type',
      { ...interaction, trigger: { ...interaction.trigger, type: 'poked' } },
    ],
    [
      'a trigger without an entity',
      { ...interaction, trigger: { type: 'assigned', entity_type: 'story' } },
    ],
    [
      'a mention without a context',
      {
        ...interaction,
        trigger: { type: 'mentioned', entity_type: 'story', entity_id: '1' },
      },
    ],
    [
      'a comment reply without the parent comment',
      {
        ...interaction,
        trigger: {
          type: 'comment-reply',
          entity_type: 'story',
          entity_id: '1',
          comment_id: '2',
        },
      },
    ],
  ])('rejects a signed payload with %s', async (_label, payload) => {
    const error = await client
      .verify(await signed(payload))
      .catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(ShortcutWebhookError);
    expect((error as ShortcutWebhookError).code).toBe('invalid_body');
    expect((error as ShortcutWebhookError).status).toBe(400);
  });

  it('accepts every recognized trigger shape', async () => {
    const triggers = [
      { type: 'assigned', entity_type: 'story', entity_id: '1' },
      {
        type: 'comment-reply',
        entity_type: 'story',
        entity_id: '1',
        comment_id: '2',
        parent_comment_id: '3',
      },
      {
        type: 'mentioned',
        entity_type: 'epic',
        entity_id: '4',
        context: 'description',
      },
    ];
    for (const trigger of triggers) {
      const payload = { ...interaction, trigger };
      expect(isShortcutInteractionPayload(payload)).toBe(true);
      expect(isShortcutObserverPayload(payload)).toBe(false);
      expect(shortcutWebhookEventType(payload)).toBe('interaction');
      const delivery = await client.verify(await signed(payload));
      expect(delivery.payload).toEqual(payload);
    }
    expect(isShortcutObserverPayload(observer)).toBe(true);
    expect(isShortcutInteractionPayload(observer)).toBe(false);
    expect(shortcutWebhookEventType(observer)).toBe('observer');
    expect(shortcutWebhookEventType({ actions: [] })).toBeUndefined();
  });

  it('caps the body before verifying it', async () => {
    const small = new ShortcutWebhookClient(secret, { bodyLimit: 64 });
    const error = await small
      .verify(await signed({ ...observer, pad: 'x'.repeat(200) }))
      .catch((caught: unknown) => caught);
    expect((error as ShortcutWebhookError).code).toBe('payload_too_large');
    expect((error as ShortcutWebhookError).status).toBe(413);
  });

  it('binds deliveries to a workspace and installation when configured', async () => {
    const bound = new ShortcutWebhookClient(secret, {
      workspaceId: 'workspace-1',
      installationId: 'install-1',
    });
    await expect(bound.verify(await signed(observer))).resolves.toBeDefined();
    await expect(
      bound.verify(await signed({ type: 'validation' })),
    ).resolves.toBeDefined();
    const other = await bound
      .verify(
        await signed({
          ...observer,
          workspace2: { id: 'workspace-2', url_slug: 'x' },
        }),
      )
      .catch((caught: unknown) => caught);
    expect((other as ShortcutWebhookError).code).toBe('wrong_workspace');
    expect((other as ShortcutWebhookError).status).toBe(403);
    const install = await bound
      .verify(await signed({ ...observer, installation_id: 'install-2' }))
      .catch((caught: unknown) => caught);
    expect((install as ShortcutWebhookError).code).toBe('wrong_installation');
  });

  it('enforces a timestamp window only when asked', async () => {
    const stale = { ...observer, timestamp: '2020-01-01T00:00:00.000Z' };
    await expect(client.verify(await signed(stale))).resolves.toBeDefined();
    const strict = new ShortcutWebhookClient(secret, {
      timestampToleranceMs: 60_000,
    });
    const error = await strict
      .verify(await signed(stale))
      .catch((caught: unknown) => caught);
    expect((error as ShortcutWebhookError).code).toBe('stale_timestamp');
    await expect(strict.verify(await signed(observer))).resolves.toBeDefined();
  });

  it('rejects an invalid configuration up front', () => {
    expect(() => new ShortcutWebhookClient('')).toThrow(TypeError);
    expect(() => new ShortcutWebhookClient(secret, { bodyLimit: 0 })).toThrow(
      TypeError,
    );
    expect(
      () => new ShortcutWebhookClient(secret, { timestampToleranceMs: -1 }),
    ).toThrow(TypeError);
  });
});

describe('ShortcutWebhookClient.createHandler', () => {
  it('dispatches by payload kind and trigger type on Fetch runtimes', async () => {
    const handler = new ShortcutWebhookClient(secret).createHandler();
    const seen: string[] = [];
    handler.on('observer', (payload) => {
      seen.push(`observer:${payload.actions.length}`);
    });
    handler.on('interaction', (payload) => {
      seen.push(`interaction:${payload.trigger.type}`);
    });
    handler.on('mentioned', (payload) => {
      seen.push(`mentioned:${payload.trigger.entity_id}`);
    });
    handler.on('assigned', () => {
      seen.push('assigned');
    });
    handler.on('validation', () => {
      seen.push('validation');
    });

    expect((await handler(await signed(observer))).status).toBe(200);
    expect((await handler(await signed(interaction))).status).toBe(200);
    expect((await handler(await signed({ type: 'validation' }))).status).toBe(
      200,
    );
    expect(seen).toEqual([
      'observer:1',
      'interaction:mentioned',
      'mentioned:123',
      'validation',
    ]);

    const rejected = await handler(await signed(observer, { secret: 'wrong' }));
    expect(rejected.status).toBe(401);
    expect(await rejected.json()).toEqual({ error: 'invalid_signature' });
    expect(seen).toHaveLength(4);
  });

  it('returns 500 when a handler throws so Shortcut retries, and supports off()', async () => {
    const handler = new ShortcutWebhookClient(secret).createHandler();
    let failures = 0;
    const failing = () => {
      failures += 1;
      throw new Error('boom');
    };
    handler.on('observer', failing);
    expect((await handler(await signed(observer))).status).toBe(500);
    handler.off('observer', failing);
    expect((await handler(await signed(observer))).status).toBe(200);
    expect(failures).toBe(1);
  });

  it('serves Node.js HTTP requests and responses', async () => {
    const handler = new ShortcutWebhookClient(secret).createHandler();
    const received: unknown[] = [];
    handler.on('observer', (payload) => {
      received.push(payload.id);
    });
    const text = JSON.stringify(observer);
    const message = Object.assign(new EventEmitter(), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'payload-signature': await signShortcutWebhookBody(secret, text),
      },
      destroy() {},
      async *[Symbol.asyncIterator]() {
        yield Buffer.from(text);
      },
    });
    const response = {
      statusCode: 0,
      headers: {} as Record<string, string>,
      body: '',
      setHeader(name: string, value: string) {
        this.headers[name] = value;
      },
      end(body: string) {
        this.body = body;
      },
    };
    await handler(message as never, response as never);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({ ok: true });
    expect(received).toEqual(['delivery-1']);
  });
});
