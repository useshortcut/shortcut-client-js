import { signShortcutWebhookBody, signShortcutWebhookHeaders } from '../index';

export const secret = 'signing-secret';
export const observer = {
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
export const interaction = {
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
export const session = {
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
export const sessionCreated = {
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
export const sessionPrompted = {
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
export const sessionStop = {
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
export const sessionClosed = {
  id: 'event-4',
  version: 'v1',
  type: 'session.closed',
  workspace_id: 'workspace-1',
  installation_id: 'install-1',
  session: { ...session, status: 'complete', closed_reason: 'access_revoked' },
};

export async function signed(
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

// Session events as Shortcut sends them: with Shortcut-Signature, whose
// Shortcut-Delivery is the event id, beside Payload-Signature.
export async function signedSession(body: unknown) {
  const text = JSON.stringify(body);
  const id = (body as { id?: unknown }).id;
  return new Request('https://agent.example/webhook', {
    method: 'POST',
    body: text,
    headers: {
      'content-type': 'application/json',
      ...(await signShortcutWebhookHeaders(secret, text, {
        deliveryId: typeof id === 'string' && id ? id : 'delivery-1',
      })),
    },
  });
}
