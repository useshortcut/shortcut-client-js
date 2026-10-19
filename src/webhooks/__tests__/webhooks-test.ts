import { EventEmitter } from 'node:events';
import type { IncomingMessage, ServerResponse } from 'node:http';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from 'vitest';
import {
  type ShortcutNodeRequest,
  type ShortcutNodeResponse,
  ShortcutWebhookClient,
  ShortcutWebhookError,
  isShortcutInteractionPayload,
  isShortcutObserverPayload,
  isShortcutSessionEventPayload,
  isShortcutUnknownSessionEventPayload,
  shortcutWebhookEventType,
  signShortcutWebhookBody,
  signShortcutWebhookHeaders,
  verifyShortcutWebhookHeaders,
  verifyShortcutWebhookSignature,
} from '../index';

const secret = 'signing-secret';
const observer = {
  id: 'delivery-1',
  version: 'v2',
  timestamp: new Date().toISOString(),
  actor: {
    displayable_name: 'Ada',
    member_id: 'member-1',
    mention_name: 'ada',
  },
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
// The v1 agent-session envelope: no actor, timestamp, or workspace2. The
// session is the public row, the activity is the human prompt that caused
// the event, and the field values mirror the outbox payload in
// clubhouse.models.agent-session.
const session = {
  id: '6f1b4a6e-6c6a-4b7e-9d3b-2b1a0c9d8e7f',
  workspace_id: 'workspace-1',
  installation_id: 'install-1',
  agent_member_id: 'agent-1',
  created_by: 'member-1',
  entity_type: 'story',
  entity_id: 123,
  thread_comment_id: null,
  status: 'pending',
  turn: 1,
  version: 1,
  plan: [],
  external_urls: [],
  created_at: '2026-10-12T20:00:00Z',
  updated_at: '2026-10-12T20:00:00Z',
  last_agent_activity_at: null,
  first_delivery_at: null,
  last_delivery_failed_at: null,
  last_delivery_error: null,
  acknowledged_at: null,
  stop_requested_at: null,
  closed_reason: null,
};
const prompt = {
  id: 'activity-1',
  workspace_id: 'workspace-1',
  session_id: session.id,
  sequence: 1,
  turn: 1,
  author_id: 'member-1',
  in_reply_to: null,
  content: { type: 'prompt', body: 'Help me improve Story SC-123' },
  signal: null,
  signal_metadata: null,
  ephemeral: false,
  superseded: false,
  created_at: '2026-10-12T20:00:00Z',
};
const sessionCreated = {
  id: 'event-1',
  version: 'v1',
  type: 'session.created',
  workspace_id: 'workspace-1',
  installation_id: 'install-1',
  session,
  prompt_context: {
    text: 'Story 123: Fix login\n\nUsers cannot log in.',
    truncated: false,
    trigger: { type: 'assigned', entity_type: 'story', entity_id: '123' },
  },
  activity: prompt,
};
// Built without spreading sessionCreated: enqueue! adds prompt_context to
// session.created only, so a prompted event carries the envelope and the
// activity and nothing else.
const sessionPrompted = {
  id: 'event-2',
  version: 'v1',
  type: 'session.prompted',
  workspace_id: 'workspace-1',
  installation_id: 'install-1',
  session: { ...session, turn: 2, version: 4, status: 'pending' },
  activity: {
    ...prompt,
    id: 'activity-3',
    sequence: 3,
    turn: 2,
    in_reply_to: 'activity-2',
    content: { type: 'prompt', body: 'Use the backend repository.' },
  },
};
const sessionStop = {
  ...sessionPrompted,
  id: 'event-3',
  session: {
    ...sessionPrompted.session,
    status: 'active',
    stop_requested_at: '2026-10-12T20:05:00Z',
  },
  activity: {
    ...sessionPrompted.activity,
    id: 'activity-4',
    sequence: 4,
    in_reply_to: null,
    content: { type: 'prompt', body: 'Stop' },
    signal: 'stop',
  },
};
// A session event type this version does not know, as Shortcut would add one
// within envelope v1.
const sessionClosed = {
  id: 'event-4',
  version: 'v1',
  type: 'session.closed',
  workspace_id: 'workspace-1',
  installation_id: 'install-1',
  session: { ...session, status: 'complete', closed_reason: 'access_revoked' },
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

  it('verifies a pooled Node Buffer by its own bytes, not the whole pool', async () => {
    // Buffer.from of a short string is carved out of Node's shared 8 KiB
    // pool, so `.buffer` covers far more than the body. Buffer#slice is an
    // alias of subarray and would not have copied it.
    const text = '{"type":"validation"}';
    const pooled = Buffer.from(text);
    expect(pooled.buffer.byteLength).toBeGreaterThan(pooled.byteLength);
    const signature = await signShortcutWebhookBody(secret, text);
    expect(
      await verifyShortcutWebhookSignature(secret, pooled, signature),
    ).toBe(true);
    expect(await signShortcutWebhookBody(secret, pooled)).toBe(signature);
  });

  it('signs and verifies a subarray view by its own bytes', async () => {
    const text = '{"type":"validation"}';
    const standalone = new TextEncoder().encode(text);
    const larger = new Uint8Array(standalone.byteLength + 64).fill(0x78);
    larger.set(standalone, 32);
    const view = larger.subarray(32, 32 + standalone.byteLength);
    expect(view.byteOffset).toBe(32);
    const signature = await signShortcutWebhookBody(secret, standalone);
    expect(await signShortcutWebhookBody(secret, view)).toBe(signature);
    expect(await verifyShortcutWebhookSignature(secret, view, signature)).toBe(
      true,
    );
    expect(
      await verifyShortcutWebhookSignature(secret, larger, signature),
    ).toBe(false);
  });

  it('signs and verifies a large, unpooled Buffer', async () => {
    const text = JSON.stringify({ type: 'validation', pad: 'x'.repeat(8192) });
    const large = Buffer.from(text);
    expect(large.byteLength).toBeGreaterThan(4096);
    const signature = await signShortcutWebhookBody(secret, large);
    expect(signature).toBe(await signShortcutWebhookBody(secret, text));
    expect(await verifyShortcutWebhookSignature(secret, large, signature)).toBe(
      true,
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

  it('passes the actor mention name through and accepts actors without one', async () => {
    const client = new ShortcutWebhookClient(secret);
    const { payload } = await client.verify(await signed(observer));
    expect(payload.actor).toEqual({
      displayable_name: 'Ada',
      member_id: 'member-1',
      mention_name: 'ada',
    });
    const anonymous = await client.verify(
      await signed({
        ...observer,
        actor: { displayable_name: 'Automation', automation_id: 'a-1' },
      }),
    );
    expect(anonymous.payload.actor.mention_name).toBeUndefined();
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

  it('verifies a body delivered as a pooled Node Buffer', async () => {
    const text = JSON.stringify(observer);
    const body = Buffer.from(text);
    const delivery = await client.verifyBody(
      body,
      await signShortcutWebhookBody(secret, text),
    );
    expect(delivery.deliveryId).toBe('delivery-1');
    expect(delivery.payload).toEqual(observer);
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

describe('ShortcutWebhookClient agent-session events', () => {
  const client = new ShortcutWebhookClient(secret);

  it.each([
    ['session.created', sessionCreated],
    ['session.prompted', sessionPrompted],
    ['stop request', sessionStop],
  ])('verifies a signed %s event and narrows it', async (_label, event) => {
    const text = JSON.stringify(event);
    const delivery = await client.verifyBody(
      new TextEncoder().encode(text),
      await signShortcutWebhookBody(secret, text),
    );
    expect(delivery.deliveryId).toBe(event.id);
    expect(delivery.payload).toEqual(event);
    expect((await client.verify(await signed(event))).payload).toEqual(event);
    const { payload } = delivery;
    expect(isShortcutSessionEventPayload(payload)).toBe(true);
    expect(isShortcutObserverPayload(payload)).toBe(false);
    expect(isShortcutInteractionPayload(payload)).toBe(false);
    expect(shortcutWebhookEventType(payload)).toBe('session');
    if (!isShortcutSessionEventPayload(payload)) throw new Error('narrowed');
    expect(payload.session.turn).toBe(event.session.turn);
    expect(payload.type).toBe(event.type);
    expect(payload.activity?.content.body).toBe(event.activity.content.body);
    expect(payload.activity?.signal === 'stop').toBe(event === sessionStop);
  });

  it('accepts a session.prompted event, which carries no prompt context', async () => {
    const { payload } = await client.verify(await signed(sessionPrompted));
    expect(payload).toEqual(sessionPrompted);
    if (!isShortcutSessionEventPayload(payload)) throw new Error('narrowed');
    expect(payload.type).toBe('session.prompted');
    expect('prompt_context' in payload).toBe(false);
    const handler = client.createHandler();
    const seen: string[] = [];
    handler.on('session.prompted', (prompted) => {
      seen.push(prompted.activity.content.body);
    });
    expect((await handler(await signed(sessionPrompted))).status).toBe(200);
    expect(seen).toEqual(['Use the backend repository.']);
  });

  it('accepts a session.created event without an opening prompt', async () => {
    const { activity: _activity, ...silent } = sessionCreated;
    const { payload } = await client.verify(await signed(silent));
    expect(payload).toEqual(silent);
    expect(isShortcutSessionEventPayload(payload)).toBe(true);
  });

  // Shortcut may add values to these fields within envelope v1. An agent on
  // this library version must keep answering 200, or the delivery dead-letters
  // until every agent upgrades.
  it.each([
    [
      'an unknown session status',
      { ...sessionCreated, session: { ...session, status: 'paused' } },
    ],
    [
      'an unknown closed reason',
      {
        ...sessionCreated,
        session: { ...session, status: 'complete', closed_reason: 'archived' },
      },
    ],
    [
      'an unknown entity type',
      { ...sessionCreated, session: { ...session, entity_type: 'doc' } },
    ],
    [
      'an unknown trigger type',
      {
        ...sessionCreated,
        prompt_context: {
          ...sessionCreated.prompt_context,
          trigger: { type: 'poked', entity_type: 'story', entity_id: '1' },
        },
      },
    ],
    [
      'a signal other than stop',
      {
        ...sessionPrompted,
        activity: { ...sessionPrompted.activity, signal: 'pause' },
      },
    ],
  ])('accepts a signed session event with %s', async (_label, event) => {
    expect(isShortcutSessionEventPayload(event)).toBe(true);
    const { payload } = await client.verify(await signed(event));
    expect(payload).toEqual(event);
    expect(shortcutWebhookEventType(payload)).toBe('session');
  });

  // Every subscribed agent receives every session event, so an unknown
  // session.* type is acknowledged (below) rather than rejected. An unknown
  // type outside session.* is still rejected: nothing in this version sends one.
  it('acknowledges a session event of an unknown type without dispatching it', async () => {
    const { payload } = await client.verify(await signed(sessionClosed));
    expect(payload).toEqual(sessionClosed);
    expect(isShortcutSessionEventPayload(payload)).toBe(false);
    expect(isShortcutUnknownSessionEventPayload(payload)).toBe(true);
    expect(isShortcutUnknownSessionEventPayload(sessionCreated)).toBe(false);
    expect(isShortcutUnknownSessionEventPayload(sessionPrompted)).toBe(false);
    expect(shortcutWebhookEventType(payload)).toBe('session');
    const handler = client.createHandler();
    const seen: string[] = [];
    for (const event of [
      'session',
      'session.created',
      'session.prompted',
      'observer',
      'interaction',
      'validation',
    ] as const) {
      handler.on(event, () => {
        seen.push(event);
      });
    }
    const response = await handler(await signed(sessionClosed));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(seen).toEqual([]);
    const bound = new ShortcutWebhookClient(secret, {
      workspaceId: 'workspace-2',
    });
    const error = await bound
      .verify(await signed(sessionClosed))
      .catch((caught: unknown) => caught);
    expect((error as ShortcutWebhookError).code).toBe('wrong_workspace');
  });

  it.each([
    [
      'an unknown event type outside session.*',
      { ...sessionCreated, type: 'turn.ended' },
    ],
    [
      'an unknown session event type without a session',
      { ...sessionClosed, session: undefined },
    ],
    [
      'an unknown session event type with a wrong version',
      { ...sessionClosed, version: 'v2' },
    ],
    ['a missing delivery id', { ...sessionCreated, id: '' }],
    ['a missing version', { ...sessionCreated, version: undefined }],
    ['a wrong version', { ...sessionCreated, version: 'v2' }],
    ['a missing workspace id', { ...sessionCreated, workspace_id: undefined }],
    ['a missing installation id', { ...sessionCreated, installation_id: '' }],
    ['no session', { ...sessionCreated, session: undefined }],
    [
      'a session without a turn',
      { ...sessionCreated, session: { ...session, turn: undefined } },
    ],
    [
      'a session whose status is not a string',
      { ...sessionCreated, session: { ...session, status: 3 } },
    ],
    [
      'a session without an entity type',
      { ...sessionCreated, session: { ...session, entity_type: '' } },
    ],
    ['no prompt context', { ...sessionCreated, prompt_context: undefined }],
    [
      'a trigger without an entity',
      {
        ...sessionCreated,
        prompt_context: {
          ...sessionCreated.prompt_context,
          trigger: { type: 'poked', entity_type: 'story' },
        },
      },
    ],
    [
      'a known trigger type missing its fields',
      {
        ...sessionCreated,
        prompt_context: {
          ...sessionCreated.prompt_context,
          trigger: {
            type: 'comment-reply',
            entity_type: 'story',
            entity_id: '1',
          },
        },
      },
    ],
    [
      'a session.prompted event without the prompt',
      { ...sessionPrompted, activity: undefined },
    ],
    [
      'a prompt without a body',
      {
        ...sessionPrompted,
        activity: { ...sessionPrompted.activity, content: { type: 'prompt' } },
      },
    ],
    [
      'an activity that is not a prompt',
      {
        ...sessionPrompted,
        activity: {
          ...sessionPrompted.activity,
          content: { type: 'response', body: 'Done.' },
        },
      },
    ],
    [
      'a signal that is not a string',
      {
        ...sessionPrompted,
        activity: { ...sessionPrompted.activity, signal: 1 },
      },
    ],
  ])('rejects a signed session event with %s', async (_label, payload) => {
    expect(isShortcutSessionEventPayload(payload)).toBe(false);
    expect(isShortcutUnknownSessionEventPayload(payload)).toBe(false);
    const error = await client
      .verify(await signed(payload))
      .catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(ShortcutWebhookError);
    expect((error as ShortcutWebhookError).code).toBe('invalid_body');
    expect((error as ShortcutWebhookError).status).toBe(400);
  });

  it('binds session events to the configured workspace and installation', async () => {
    const bound = new ShortcutWebhookClient(secret, {
      workspaceId: 'workspace-1',
      installationId: 'install-1',
    });
    await expect(
      bound.verify(await signed(sessionCreated)),
    ).resolves.toBeDefined();
    const workspace = await bound
      .verify(await signed({ ...sessionCreated, workspace_id: 'workspace-2' }))
      .catch((caught: unknown) => caught);
    expect((workspace as ShortcutWebhookError).code).toBe('wrong_workspace');
    expect((workspace as ShortcutWebhookError).status).toBe(403);
    const install = await bound
      .verify(await signed({ ...sessionCreated, installation_id: 'install-2' }))
      .catch((caught: unknown) => caught);
    expect((install as ShortcutWebhookError).code).toBe('wrong_installation');
    expect((install as ShortcutWebhookError).status).toBe(403);
  });

  it('does not apply the timestamp window to session events, which carry none', async () => {
    const strict = new ShortcutWebhookClient(secret, {
      timestampToleranceMs: 60_000,
    });
    const { payload } = await strict.verify(await signed(sessionPrompted));
    expect(payload).toEqual(sessionPrompted);
  });

  it('dispatches session events by kind and by event type', async () => {
    const handler = new ShortcutWebhookClient(secret).createHandler();
    const seen: string[] = [];
    handler.on('session', (payload) => {
      seen.push(`session:${payload.type}:${payload.session.turn}`);
    });
    handler.on('session.created', (payload) => {
      seen.push(`created:${payload.prompt_context.trigger?.type}`);
    });
    handler.on('session.prompted', (payload) => {
      seen.push(
        `prompted:${payload.activity.signal ?? payload.activity.content.body}`,
      );
    });
    handler.on('observer', () => {
      seen.push('observer');
    });
    handler.on('interaction', () => {
      seen.push('interaction');
    });
    for (const event of [sessionCreated, sessionPrompted, sessionStop]) {
      const response = await handler(await signed(event));
      expect(response.status).toBe(200);
    }
    expect(seen).toEqual([
      'session:session.created:1',
      'created:assigned',
      'session:session.prompted:2',
      'prompted:Use the backend repository.',
      'session:session.prompted:2',
      'prompted:stop',
    ]);
  });
});

// Shortcut signs every agent webhook with Shortcut-Signature, the HMAC of
// `${timestamp}.${delivery}.${body}`, and still sends the body-only
// Payload-Signature until sc-322342. The clock is frozen so the 300-second
// window has an exact boundary.
describe('Shortcut-Signature headers', () => {
  const now = 1_700_000_000;
  const client = new ShortcutWebhookClient(secret);

  beforeEach(() => {
    vi.useFakeTimers({ now: now * 1000, toFake: ['Date'] });
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  async function signedRequest(
    body: unknown,
    options: {
      secret?: string;
      timestamp?: string;
      delivery?: string;
      headers?: Record<string, string>;
      omit?: string[];
      send?: string;
    } = {},
  ) {
    const text = JSON.stringify(body);
    const headers: Record<string, string> = {
      'content-type': 'application/json',
      ...(await signShortcutWebhookHeaders(options.secret ?? secret, text, {
        delivery: options.delivery ?? 'delivery-1',
        timestamp: options.timestamp,
      })),
      ...options.headers,
    };
    for (const name of options.omit ?? []) delete headers[name];
    return new Request('https://agent.example/webhook', {
      method: 'POST',
      body: options.send ?? text,
      headers,
    });
  }

  it('signs the timestamp, delivery id, and body the way Shortcut does', async () => {
    // Known-answer vector from clubhouse.lib.webhook-signature's tests.
    expect(
      await signShortcutWebhookHeaders('test-secret', '{"id":"evt_1"}', {
        delivery: 'delivery-1',
        timestamp: '1700000000',
      }),
    ).toEqual({
      'shortcut-timestamp': '1700000000',
      'shortcut-signature':
        '5f25068c9b8163303be6cecda87dc52af76e53409f703e6fea054f23b2fb5069',
      'shortcut-delivery': 'delivery-1',
      'payload-signature':
        'c0bd8e4de35355b11e7e98d53bb0d0122736ca05c58eb9c138a2dfa24725ac6d',
    });
    const fresh = await signShortcutWebhookHeaders(
      'test-secret',
      Buffer.from('{"id":"evt_1"}'),
      { delivery: 'delivery-1' },
    );
    expect(fresh['shortcut-timestamp']).toBe('1700000000');
    expect(fresh['shortcut-signature']).toBe(
      '5f25068c9b8163303be6cecda87dc52af76e53409f703e6fea054f23b2fb5069',
    );
  });

  it('accepts a delivery signed with the new headers and hands its delivery id to handlers', async () => {
    const delivery = await client.verify(
      await signedRequest(observer, { delivery: 'c1d2e3f4-0000-4000-8000-1' }),
    );
    expect(delivery.payload).toEqual(observer);
    expect(delivery.deliveryId).toBe('c1d2e3f4-0000-4000-8000-1');
    expect(delivery.signatureScheme).toBe('shortcut-signature');
    const handler = client.createHandler();
    const seen: Array<string | undefined> = [];
    handler.on('observer', (_payload, received) => {
      seen.push(received.deliveryId);
    });
    const response = await handler(
      await signedRequest(observer, { delivery: 'c1d2e3f4-0000-4000-8000-1' }),
    );
    expect(response.status).toBe(200);
    expect(seen).toEqual(['c1d2e3f4-0000-4000-8000-1']);
  });

  it('verifies a body already read against a Headers object or a header record', async () => {
    const text = JSON.stringify(sessionPrompted);
    const headers = await signShortcutWebhookHeaders(secret, text, {
      delivery: sessionPrompted.id,
    });
    const fromRecord = await client.verifyBody(Buffer.from(text), headers);
    expect(fromRecord.deliveryId).toBe('event-2');
    expect(fromRecord.signatureScheme).toBe('shortcut-signature');
    const fromHeaders = await client.verifyBody(
      new TextEncoder().encode(text),
      new Headers(headers),
    );
    expect(fromHeaders.payload).toEqual(sessionPrompted);
    const mixedCase = Object.fromEntries(
      Object.entries(headers).map(([name, value]) => [
        name.replace(/(^|-)[a-z]/g, (letter) => letter.toUpperCase()),
        value,
      ]),
    );
    expect(Object.keys(mixedCase)).toContain('Shortcut-Signature');
    const fromMixedCase = await client.verifyBody(Buffer.from(text), mixedCase);
    expect(fromMixedCase.deliveryId).toBe('event-2');
  });

  it.each([
    [
      'a tampered body',
      'invalid_signature',
      async () =>
        signedRequest(observer, {
          send: JSON.stringify({ ...observer, id: 'delivery-9' }),
        }),
    ],
    [
      'a wrong delivery id',
      'invalid_signature',
      async () =>
        signedRequest(observer, { headers: { 'shortcut-delivery': 'other' } }),
    ],
    [
      'a wrong timestamp',
      'invalid_signature',
      async () =>
        signedRequest(observer, {
          headers: { 'shortcut-timestamp': String(now + 1) },
        }),
    ],
    [
      'a timestamp 301 seconds old',
      'stale_timestamp',
      async () => signedRequest(observer, { timestamp: String(now - 301) }),
    ],
    [
      'a timestamp 301 seconds ahead',
      'stale_timestamp',
      async () => signedRequest(observer, { timestamp: String(now + 301) }),
    ],
    [
      'a fractional timestamp',
      'invalid_signature',
      async () => signedRequest(observer, { timestamp: `${now}.0` }),
    ],
    [
      'a timestamp in milliseconds, well-formed but 54,000 years ahead',
      'stale_timestamp',
      async () => signedRequest(observer, { timestamp: String(now * 1000) }),
    ],
    [
      'a non-numeric timestamp',
      'invalid_signature',
      async () => signedRequest(observer, { timestamp: 'now' }),
    ],
    [
      'a missing timestamp',
      'invalid_signature',
      async () => signedRequest(observer, { omit: ['shortcut-timestamp'] }),
    ],
    [
      'a missing delivery id',
      'invalid_signature',
      async () => signedRequest(observer, { omit: ['shortcut-delivery'] }),
    ],
    [
      'an invalid Shortcut-Signature beside a valid Payload-Signature',
      'invalid_signature',
      async () =>
        signedRequest(observer, {
          headers: { 'shortcut-signature': '0'.repeat(64) },
        }),
    ],
    [
      'a signature under another secret',
      'invalid_signature',
      async () => signedRequest(observer, { secret: 'other' }),
    ],
  ])('rejects %s with %s', async (_label, code, make) => {
    const error = await client
      .verify(await make())
      .catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(ShortcutWebhookError);
    expect((error as ShortcutWebhookError).code).toBe(code);
    expect((error as ShortcutWebhookError).status).toBe(401);
  });

  it('accepts a timestamp exactly 300 seconds from the clock, either way', async () => {
    for (const timestamp of [String(now - 300), String(now + 300)]) {
      const delivery = await client.verify(
        await signedRequest(observer, { timestamp }),
      );
      expect(delivery.signatureScheme).toBe('shortcut-signature');
    }
  });

  it('falls back to Payload-Signature only when Shortcut-Signature is absent, unless disabled', async () => {
    const legacy = await client.verify(await signed(observer));
    expect(legacy.signatureScheme).toBe('payload-signature');
    expect(legacy.deliveryId).toBe('delivery-1');
    const strict = new ShortcutWebhookClient(secret, {
      allowLegacySignature: false,
    });
    const error = await strict
      .verify(await signed(observer))
      .catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(ShortcutWebhookError);
    expect((error as ShortcutWebhookError).code).toBe('invalid_signature');
    expect((error as ShortcutWebhookError).status).toBe(401);
    const accepted = await strict.verify(await signedRequest(observer));
    expect(accepted.signatureScheme).toBe('shortcut-signature');
    const handler = strict.createHandler();
    expect((await handler(await signed(observer))).status).toBe(401);
    expect((await handler(await signedRequest(observer))).status).toBe(200);
    const text = JSON.stringify(observer);
    const bare = await strict
      .verifyBody(
        Buffer.from(text),
        await signShortcutWebhookBody(secret, text),
      )
      .catch((caught: unknown) => caught);
    expect((bare as ShortcutWebhookError).code).toBe('invalid_signature');
  });

  it('does not apply the payload timestamp window to a delivery verified by Shortcut-Signature', async () => {
    const strict = new ShortcutWebhookClient(secret, {
      timestampToleranceMs: 60_000,
    });
    const stale = { ...observer, timestamp: '2020-01-01T00:00:00.000Z' };
    expect((await strict.verify(await signedRequest(stale))).payload).toEqual(
      stale,
    );
    const session = await strict.verify(
      await signedRequest(sessionPrompted, { delivery: sessionPrompted.id }),
    );
    expect(session.deliveryId).toBe('event-2');
    const legacy = await strict
      .verify(await signed(stale))
      .catch((caught: unknown) => caught);
    expect((legacy as ShortcutWebhookError).code).toBe('stale_timestamp');
  });

  it('serves the new headers to the Node.js handler', async () => {
    const handler = client.createHandler();
    const seen: Array<string | undefined> = [];
    handler.on('session.prompted', (_payload, delivery) => {
      seen.push(delivery.deliveryId);
    });
    const text = JSON.stringify(sessionPrompted);
    const message = Object.assign(new EventEmitter(), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(await signShortcutWebhookHeaders(secret, text, {
          delivery: sessionPrompted.id,
        })),
      },
      destroy() {},
      async *[Symbol.asyncIterator]() {
        yield Buffer.from(text);
      },
    });
    const response = {
      statusCode: 0,
      setHeader() {},
      end() {},
    };
    await handler(message as never, response as never);
    expect(response.statusCode).toBe(200);
    expect(seen).toEqual(['event-2']);
  });

  it('verifyShortcutWebhookHeaders reports the scheme, the delivery id, and why a request failed', async () => {
    const body = '{"id":"evt_1"}';
    const headers = {
      'shortcut-timestamp': '1700000000',
      'shortcut-delivery': 'delivery-1',
      'shortcut-signature':
        '5f25068c9b8163303be6cecda87dc52af76e53409f703e6fea054f23b2fb5069',
    };
    const verified = {
      verified: true,
      scheme: 'shortcut-signature',
      deliveryId: 'delivery-1',
    };
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, headers),
    ).toEqual(verified);
    expect(
      await verifyShortcutWebhookHeaders(
        'test-secret',
        new TextEncoder().encode(body),
        new Headers(headers),
      ),
    ).toEqual(verified);
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, {
        ...headers,
        'shortcut-delivery': 'delivery-2',
      }),
    ).toEqual({ verified: false, reason: 'invalid_signature' });
    expect(
      await verifyShortcutWebhookHeaders('other-secret', body, headers),
    ).toEqual({ verified: false, reason: 'invalid_signature' });
    expect(await verifyShortcutWebhookHeaders('', body, headers)).toEqual({
      verified: false,
      reason: 'invalid_signature',
    });
    vi.setSystemTime((now + 301) * 1000);
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, headers),
    ).toEqual({ verified: false, reason: 'stale_timestamp' });
    const legacy = {
      'payload-signature':
        'c0bd8e4de35355b11e7e98d53bb0d0122736ca05c58eb9c138a2dfa24725ac6d',
    };
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, legacy),
    ).toEqual({ verified: true, scheme: 'payload-signature' });
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, legacy, {
        allowLegacySignature: false,
      }),
    ).toEqual({ verified: false, reason: 'invalid_signature' });
    expect(await verifyShortcutWebhookHeaders('test-secret', body, {})).toEqual(
      { verified: false, reason: 'invalid_signature' },
    );
  });
});

describe('ShortcutWebhookClient.createHandler', () => {
  it('accepts Node http types without depending on them', () => {
    // The handler's Node overload is typed structurally, so the entrypoint's
    // declarations stay free of `node:http` for Workers, Deno, and Bun.
    expectTypeOf<IncomingMessage>().toExtend<ShortcutNodeRequest>();
    expectTypeOf<ServerResponse>().toExtend<ShortcutNodeResponse>();
    const handler = new ShortcutWebhookClient(secret).createHandler();
    expectTypeOf(handler).toBeCallableWith(
      {} as IncomingMessage,
      {} as ServerResponse,
    );
    expectTypeOf(handler).toBeCallableWith({} as Request);
    // Never invoked: these closures only pin down each overload's result type.
    const fetchResult = () => handler({} as Request);
    const nodeResult = () =>
      handler({} as IncomingMessage, {} as ServerResponse);
    expectTypeOf<ReturnType<typeof fetchResult>>().toEqualTypeOf<
      Promise<Response>
    >();
    expectTypeOf<ReturnType<typeof nodeResult>>().toEqualTypeOf<
      Promise<void>
    >();
  });

  it('captures mixed asynchronous and synchronous listener failures', async () => {
    const handler = new ShortcutWebhookClient(secret).createHandler();
    const seen: string[] = [];
    handler.on('observer', async () => {
      seen.push('async');
      throw new Error('async failure');
    });
    handler.on('observer', () => {
      seen.push('sync');
      throw new Error('sync failure');
    });
    handler.on('observer', () => {
      seen.push('last');
    });
    const response = await handler(await signed(observer));
    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: 'handler_failed' });
    expect(seen).toEqual(['async', 'sync', 'last']);
    // Let unhandled rejections surface to Vitest before completing the test.
    await new Promise<void>((resolve) => setImmediate(resolve));
  });

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

  it.each([200, 500])(
    'serves Node.js HTTP requests with a %i response',
    async (status) => {
      const handler = new ShortcutWebhookClient(secret).createHandler();
      const received: unknown[] = [];
      handler.on('observer', (payload) => {
        received.push(payload.id);
        if (status === 500) throw new Error('handler failure');
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
      expect(response.statusCode).toBe(status);
      expect(response.headers['content-type']).toBe('application/json');
      expect(JSON.parse(response.body)).toEqual(
        status === 200 ? { ok: true } : { error: 'handler_failed' },
      );
      expect(received).toEqual(['delivery-1']);
    },
  );
});
