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
} from '../index';
import {
  secret,
  session,
  sessionClosed,
  sessionCreated,
  sessionPrompted,
  sessionStop,
  signed,
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
    const { payload } = await client.verify(await signed(event));
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
    const response = await handler(await signed(mentionedInTitle));
    expect(response.status).toBe(200);
    expect(seen).toEqual(['mentioned:title:123']);
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
    expect(shortcutWebhookEventType(payload)).toBeUndefined();
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
