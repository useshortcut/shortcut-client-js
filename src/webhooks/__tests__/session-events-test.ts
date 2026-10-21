import { describe, expect, it } from 'vitest';
import {
  ShortcutWebhookClient,
  ShortcutWebhookError,
  isShortcutInteractionPayload,
  isShortcutObserverPayload,
  isShortcutSessionEventPayload,
  isShortcutUnknownSessionEventPayload,
  shortcutWebhookEventType,
  signShortcutWebhookBody,
  signShortcutWebhookHeaders,
} from '../index';
import {
  secret,
  session,
  sessionClosed,
  sessionCreated,
  sessionPrompted,
  sessionStop,
  signed,
  signedSession,
} from './fixtures';

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
      await signShortcutWebhookHeaders(secret, text, { deliveryId: event.id }),
    );
    expect(delivery.deliveryId).toBe(event.id);
    expect(delivery.payload).toEqual(event);
    expect((await client.verify(await signedSession(event))).payload).toEqual(
      event,
    );
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
    const { payload } = await client.verify(
      await signedSession(sessionPrompted),
    );
    expect(payload).toEqual(sessionPrompted);
    if (!isShortcutSessionEventPayload(payload)) throw new Error('narrowed');
    expect(payload.type).toBe('session.prompted');
    expect('prompt_context' in payload).toBe(false);
    const handler = client.createHandler();
    const seen: string[] = [];
    handler.on('session.prompted', (prompted) => {
      seen.push(prompted.activity.content.body);
    });
    expect((await handler(await signedSession(sessionPrompted))).status).toBe(
      200,
    );
    expect(seen).toEqual(['Use the backend repository.']);
  });

  it('accepts a session.created event without an opening prompt', async () => {
    const { activity: _activity, ...silent } = sessionCreated;
    const { payload } = await client.verify(await signedSession(silent));
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
      'a mention in a context this version does not know',
      {
        ...sessionCreated,
        prompt_context: {
          ...sessionCreated.prompt_context,
          trigger: {
            type: 'mentioned',
            entity_type: 'story',
            entity_id: '1',
            context: 'title',
          },
        },
      },
    ],
    [
      'a mention in a top-level comment, whose parent id is null',
      {
        ...sessionCreated,
        prompt_context: {
          ...sessionCreated.prompt_context,
          trigger: {
            type: 'mentioned',
            entity_type: 'story',
            entity_id: '1',
            context: 'comment',
            comment_id: '9',
            comment_parent_id: null,
          },
        },
      },
    ],
    [
      'a known trigger type missing a field',
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
      'a signal other than stop',
      {
        ...sessionPrompted,
        activity: { ...sessionPrompted.activity, signal: 'pause' },
      },
    ],
  ])('accepts a signed session event with %s', async (_label, event) => {
    expect(isShortcutSessionEventPayload(event)).toBe(true);
    const { payload } = await client.verify(await signedSession(event));
    expect(payload).toEqual(event);
    expect(shortcutWebhookEventType(payload)).toBe('session');
  });

  // The session is the event; the trigger only says what started it. A 400
  // here stalls the session's ordered deliveries, so a mention context this
  // version does not know must still reach the handler.
  it('dispatches a session.created whose mention context this version does not know', async () => {
    const mentionedInTitle = {
      ...sessionCreated,
      prompt_context: {
        ...sessionCreated.prompt_context,
        trigger: {
          type: 'mentioned',
          entity_type: 'story',
          entity_id: '123',
          context: 'title',
        },
      },
    };
    const handler = client.createHandler();
    const seen: string[] = [];
    handler.on('session.created', (payload) => {
      const trigger = payload.prompt_context.trigger;
      seen.push(`${trigger?.type}:${trigger?.context}:${trigger?.entity_id}`);
    });
    const response = await handler(await signedSession(mentionedInTitle));
    expect(response.status).toBe(200);
    expect(seen).toEqual(['mentioned:title:123']);
  });

  // Every subscribed agent receives every session event, so an unknown
  // session.* type is acknowledged (below) rather than rejected. An unknown
  // type outside session.* is still rejected: nothing in this version sends one.
  it('acknowledges a session event of an unknown type without dispatching it', async () => {
    const { payload } = await client.verify(await signedSession(sessionClosed));
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
    const response = await handler(await signedSession(sessionClosed));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(seen).toEqual([]);
    const bound = new ShortcutWebhookClient(secret, {
      workspaceId: 'workspace-2',
    });
    const error = await bound
      .verify(await signedSession(sessionClosed))
      .catch((caught: unknown) => caught);
    expect((error as ShortcutWebhookError).code).toBe('wrong_workspace');
  });

  // An event type added later need not carry today's session snapshot, so
  // only the envelope that binds it to a workspace and installation is
  // checked before it is acknowledged.
  it.each([
    ['no session', { ...sessionClosed, session: undefined }],
    ['a slimmer session', { ...sessionClosed, session: { id: session.id } }],
  ])(
    'acknowledges a session event of an unknown type with %s',
    async (_label, event) => {
      expect(isShortcutUnknownSessionEventPayload(event)).toBe(true);
      expect(shortcutWebhookEventType(event)).toBe('session');
      const handler = client.createHandler();
      const seen: string[] = [];
      handler.on('session', () => {
        seen.push('session');
      });
      const response = await handler(await signedSession(event));
      expect(response.status).toBe(200);
      expect(seen).toEqual([]);
    },
  );

  // A human prompt is the only content Shortcut sends today. A content type
  // added within envelope v1 must still reach the handler, which compares
  // content.type against the values it knows. Only a prompt must carry a text
  // body: agent `action` content already has none.
  it.each([
    ['a text body', { type: 'command', body: '/retry' }, 'command'],
    ['no body', { type: 'reaction', emoji: '+1' }, 'reaction'],
  ])(
    'dispatches a session.prompted whose content type this version does not know, with %s',
    async (_label, content, contentType) => {
      const event = {
        ...sessionPrompted,
        activity: { ...sessionPrompted.activity, content },
      };
      expect(isShortcutSessionEventPayload(event)).toBe(true);
      const handler = client.createHandler();
      const seen: string[] = [];
      handler.on('session.prompted', (payload) => {
        seen.push(payload.activity.content.type);
      });
      const response = await handler(await signedSession(event));
      expect(response.status).toBe(200);
      expect(seen).toEqual([contentType]);
    },
  );

  it.each([
    [
      'an unknown event type outside session.*',
      { ...sessionCreated, type: 'turn.ended' },
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
      'a trigger whose comment id is not a string',
      {
        ...sessionCreated,
        prompt_context: {
          ...sessionCreated.prompt_context,
          trigger: {
            type: 'comment-reply',
            entity_type: 'story',
            entity_id: '1',
            comment_id: 2,
            parent_comment_id: '3',
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
      'content without a type',
      {
        ...sessionPrompted,
        activity: {
          ...sessionPrompted.activity,
          content: { body: 'Use the backend repository.' },
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
    expect(shortcutWebhookEventType(payload)).toBeUndefined();
    const error = await client
      .verify(await signedSession(payload))
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
      bound.verify(await signedSession(sessionCreated)),
    ).resolves.toBeDefined();
    const workspace = await bound
      .verify(
        await signedSession({ ...sessionCreated, workspace_id: 'workspace-2' }),
      )
      .catch((caught: unknown) => caught);
    expect((workspace as ShortcutWebhookError).code).toBe('wrong_workspace');
    expect((workspace as ShortcutWebhookError).status).toBe(403);
    const install = await bound
      .verify(
        await signedSession({
          ...sessionCreated,
          installation_id: 'install-2',
        }),
      )
      .catch((caught: unknown) => caught);
    expect((install as ShortcutWebhookError).code).toBe('wrong_installation');
    expect((install as ShortcutWebhookError).status).toBe(403);
  });

  // Every session event Shortcut sends carries Shortcut-Signature. One that
  // verifies only by Payload-Signature had the timestamped headers stripped,
  // which is how a captured event would be replayed.
  it.each([
    ['a session.created event', sessionCreated],
    ['a session.prompted event', sessionPrompted],
    ['a stop request', sessionStop],
    ['a session event of an unknown type', sessionClosed],
  ])('rejects %s signed only by Payload-Signature', async (_label, event) => {
    const text = JSON.stringify(event);
    for (const attempt of [
      client.verify(await signed(event)),
      client.verifyBody(
        new TextEncoder().encode(text),
        await signShortcutWebhookBody(secret, text),
      ),
    ]) {
      const error = await attempt.catch((caught: unknown) => caught);
      expect(error).toBeInstanceOf(ShortcutWebhookError);
      expect((error as ShortcutWebhookError).code).toBe('invalid_signature');
      expect((error as ShortcutWebhookError).status).toBe(401);
    }
    const handler = client.createHandler();
    expect((await handler(await signed(event))).status).toBe(401);
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
      const response = await handler(await signedSession(event));
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
