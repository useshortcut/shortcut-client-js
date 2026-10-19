/**
 * Payload shapes delivered to Shortcut Custom Agent webhooks.
 *
 * Every delivery is a JSON body signed with HMAC-SHA256 and the webhook
 * secret. Agent-application deliveries are moving to a signature over the
 * `Shortcut-Timestamp`, the `Shortcut-Delivery` id, and the exact request
 * bytes, whose hex digest arrives in `Shortcut-Signature` beside the
 * body-only `Payload-Signature`; until that is deployed, and for classic
 * workspace webhooks after it, only `Payload-Signature` is sent. See
 * `verify.ts` for both schemes and the Custom Agents reference for trigger
 * semantics.
 */

/** Who performed the change. Exactly one id is present in practice. */
export interface ShortcutWebhookActor {
  displayable_name: string;
  /** The acting member's permission id. Compare against the agent's own `permission_id` to ignore its own writes. */
  member_id?: string;
  /** The acting member's @-handle, when the actor is a member with one; address them with `@${mention_name}`. */
  mention_name?: string;
  automation_id?: string;
  webhook_id?: string;
}

export interface ShortcutWebhookWorkspace {
  id: string;
  url_slug: string;
}

/** A slim reference to another entity inside a change entry. */
export interface ShortcutChangeRef {
  id: number | string;
  entity_type: string;
  name?: string;
  [key: string]: unknown;
}

export type ShortcutChangeValue =
  | ShortcutChangeRef
  | string
  | number
  | boolean
  | null;

/**
 * One tracked attribute a transaction touched, in the same shape as v4 story
 * history entries. A replacement is `adds=[new] removes=[old]`; setting a
 * previously unset attribute has `removes=[]`; clearing one has `adds=[]`.
 */
export interface ShortcutChangeEntry {
  attribute: string;
  adds: ShortcutChangeValue[];
  removes: ShortcutChangeValue[];
  /** A string value was cut at 8,192 characters. Fetch the entity for the full value. */
  truncated?: boolean;
}

export type ShortcutObserverActionType = 'create' | 'update' | 'delete';

export interface ShortcutObserverAction {
  action: ShortcutObserverActionType;
  id: number | string;
  entity_type: string;
  global_id: string;
  app_url: string | null;
  /** @deprecated Frozen for legacy consumers. Read `app_url`. */
  uri?: string | null;
  /**
   * Story `update` actions only. `[]` means nothing tracked changed. An absent
   * key means the diff was unavailable for this delivery, never that nothing
   * changed.
   */
  changes?: ShortcutChangeEntry[];
}

/** Fan-out of every change in a workspace to the entity types an agent subscribed to. */
export interface ShortcutObserverPayload {
  /** Unique delivery id. Redeliveries reuse it. */
  id: string;
  version: 'v2';
  /** ISO 8601 with milliseconds. */
  timestamp: string;
  actor: ShortcutWebhookActor;
  workspace2: ShortcutWebhookWorkspace;
  installation_id: string;
  actions: ShortcutObserverAction[];
  references?: Array<{
    entity_type: string;
    id: number | string;
    [key: string]: unknown;
  }>;
}

export type ShortcutInteractionTrigger =
  | { type: 'assigned'; entity_type: string; entity_id: string }
  | {
      type: 'comment-reply';
      entity_type: string;
      entity_id: string;
      comment_id: string;
      parent_comment_id: string;
    }
  | {
      type: 'mentioned';
      entity_type: string;
      entity_id: string;
      context: 'comment' | 'description';
      comment_id?: string;
      /** For a `comment` context: the parent comment's id when the mentioning comment is a reply, `null` when it is top-level. */
      comment_parent_id?: string | null;
    };

export type ShortcutInteractionTriggerType = ShortcutInteractionTrigger['type'];

/** A user explicitly addressed the agent: assigned it, @-mentioned it, or replied to its comment. */
export interface ShortcutInteractionPayload {
  id: string;
  version: 'v2';
  timestamp: string;
  actor: ShortcutWebhookActor;
  workspace2: ShortcutWebhookWorkspace;
  installation_id: string;
  trigger: ShortcutInteractionTrigger;
}

/** Sent when a webhook URL is saved. Carries no workspace. Respond 200. */
export interface ShortcutValidationPayload {
  type: 'validation';
  [key: string]: unknown;
}

/*
 * The enum-like session fields (`status`, `closed_reason`, `entity_type`,
 * `plan[].status`, the prompt-context `trigger.type`, and the prompt
 * `signal`) list the values this version knows and also admit any other
 * string, because Shortcut adds values inside envelope `v1` without a version
 * bump. A guard that rejected
 * them would make every agent on this version answer 400 to the new
 * delivery, which Shortcut retries and dead-letters. Compare against the
 * known values and treat anything else as unknown.
 */

export type ShortcutAgentSessionStatus =
  | 'pending'
  | 'active'
  | 'awaiting_input'
  | 'complete'
  | 'error'
  | 'stale'
  | (string & {});

/** Why a session can take no more work. `null` while it is open. */
export type ShortcutAgentSessionClosedReason =
  | 'installation_unavailable'
  | 'access_revoked'
  | 'stop_timed_out'
  | (string & {});

export type ShortcutAgentSessionPlanItemStatus =
  | 'pending'
  | 'in_progress'
  | 'completed'
  | 'canceled'
  | (string & {});

export interface ShortcutAgentSessionPlanItem {
  content: string;
  status: ShortcutAgentSessionPlanItemStatus;
}

export interface ShortcutAgentSessionExternalUrl {
  label: string;
  url: string;
}

/**
 * An agent session as the v4 `agent-sessions` API returns it. Timestamps are
 * ISO 8601 strings in UTC. A session event carries the snapshot taken when
 * the event was written, so `turn` is the turn the event belongs to.
 */
export interface ShortcutAgentSession {
  id: string;
  workspace_id: string;
  installation_id: string;
  /** The agent's member id. Activities are published in its name. */
  agent_member_id: string;
  /** The member who started the session, or the agent when nobody wrote anything. */
  created_by: string;
  entity_type: 'story' | 'epic' | (string & {});
  /** The Story or Epic public id. */
  entity_id: number;
  /** The comment thread the session started from, for a mention or reply. */
  thread_comment_id: number | null;
  status: ShortcutAgentSessionStatus;
  /** Advances on every human prompt that is not a stop request. Send it back with every activity. */
  turn: number;
  /** Optimistic-concurrency version required by `PATCH /agent-sessions/{id}`. */
  version: number;
  plan: ShortcutAgentSessionPlanItem[];
  external_urls: ShortcutAgentSessionExternalUrl[];
  created_at: string;
  updated_at: string;
  last_agent_activity_at: string | null;
  first_delivery_at: string | null;
  last_delivery_failed_at: string | null;
  last_delivery_error: string | null;
  acknowledged_at: string | null;
  stop_requested_at: string | null;
  closed_reason: ShortcutAgentSessionClosedReason | null;
}

/** The human prompt that caused a session event. */
export interface ShortcutSessionPromptActivity {
  id: string;
  workspace_id: string;
  session_id: string;
  /** Position in the session's activity list, starting at 1. */
  sequence: number;
  /** The turn the prompt opened, or the current turn for a stop request. */
  turn: number;
  /** The member who wrote the prompt. */
  author_id: string;
  /** The elicitation activity this prompt answers. */
  in_reply_to: string | null;
  content: { type: 'prompt'; body: string };
  /** `stop` asks the agent to finish the turn with a `response` or `error`. It does not advance the turn. */
  signal: 'stop' | (string & {}) | null;
  signal_metadata: null;
  ephemeral: boolean;
  superseded: boolean;
  created_at: string;
}

/**
 * What started a session. The known shapes are the `ShortcutInteractionTrigger`
 * variants, and every one of them is assignable here. The session is the
 * event, so only the entity reference is required and each per-type field is
 * checked for its type, never for this version's enum values or for the
 * combination a known `type` usually carries: a value Shortcut adds within
 * envelope `v1` must not stall the session with a 400. Narrowing on `type`
 * therefore leaves the per-type fields optional.
 */
export interface ShortcutSessionTrigger {
  type: ShortcutInteractionTriggerType | (string & {});
  entity_type: string;
  entity_id: string;
  /** `comment-reply` and a `mentioned` in a comment. */
  comment_id?: string;
  /** `comment-reply` only. */
  parent_comment_id?: string;
  /** `mentioned` only. The values this version knows, or one Shortcut added later. */
  context?: 'comment' | 'description' | (string & {});
  /** `mentioned` in a comment: the parent comment's id for a reply, `null` for a top-level comment. */
  comment_parent_id?: string | null;
}

/** Bounded text about the Story or Epic, so the agent can start without a fetch. */
export interface ShortcutSessionPromptContext {
  /** Title and description, with the triggering comment when there is one. Cut at 16,000 characters. */
  text: string;
  truncated: boolean;
  /** The comment that mentioned or replied to the agent. */
  comment_text?: string;
  /** Present when an assignment, mention, or reply started the session. Absent when the agent created it. */
  trigger?: ShortcutSessionTrigger;
}

export type ShortcutSessionEventType = 'session.created' | 'session.prompted';

interface ShortcutSessionEventEnvelope {
  /** The event id. Retries reuse it, so persist it before answering. */
  id: string;
  version: 'v1';
  workspace_id: string;
  installation_id: string;
  session: ShortcutAgentSession;
}

/**
 * A session was opened for the agent. Delivered once per session, to the
 * agent's webhook URL, after an assignment, mention, reply, or the agent's own
 * `POST /agent-sessions`.
 */
export interface ShortcutSessionCreatedPayload extends ShortcutSessionEventEnvelope {
  type: 'session.created';
  /** Only `session.created` carries the prompt context. Later prompts arrive with the activity alone. */
  prompt_context: ShortcutSessionPromptContext;
  /** The opening prompt. Absent when no person wrote anything, as for an automation's assignment. */
  activity?: ShortcutSessionPromptActivity;
}

/** A person replied to the session or asked it to stop. Carries no `prompt_context`. */
export interface ShortcutSessionPromptedPayload extends ShortcutSessionEventEnvelope {
  type: 'session.prompted';
  activity: ShortcutSessionPromptActivity;
}

declare const unknownSessionEventType: unique symbol;

/**
 * The `type` of a session event this version does not know. It is a
 * `session.*` string, branded so TypeScript never narrows a known literal
 * (`'validation'`, `'session.created'`) to the unknown payload and never
 * drops the known payloads from the unknown guard's false branch. Read it as
 * a string, as in `String(payload.type)`, or compare it through a cast.
 */
export type ShortcutUnknownSessionEventType = `session.${string}` & {
  readonly [unknownSessionEventType]: true;
};

/**
 * A `session.*` event whose `type` this version does not know. Shortcut adds
 * event types within envelope `v1`, and every subscribed agent receives every
 * session event, so the client verifies the envelope and answers `200` to
 * keep the session's later events flowing, but dispatches it to no handler.
 * Read it from `verify()` or `verifyBody()` to log or persist it.
 */
export interface ShortcutUnknownSessionEventPayload extends ShortcutSessionEventEnvelope {
  type: ShortcutUnknownSessionEventType;
}

/**
 * Agent-session deliveries. Unlike observer and interaction deliveries they
 * carry no `actor`, `timestamp`, or `workspace2`; the workspace slug for API
 * calls comes from the installation's OAuth token.
 */
export type ShortcutSessionEventPayload =
  | ShortcutSessionCreatedPayload
  | ShortcutSessionPromptedPayload;

export type ShortcutWebhookPayload =
  | ShortcutObserverPayload
  | ShortcutInteractionPayload
  | ShortcutValidationPayload
  | ShortcutSessionEventPayload
  | ShortcutUnknownSessionEventPayload;

export type ShortcutWebhookEventType =
  | 'observer'
  | 'interaction'
  | 'validation'
  | 'session';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.length > 0;
const isEntityId = (value: unknown): value is string | number =>
  isNonEmptyString(value) ||
  (typeof value === 'number' && Number.isFinite(value));

const OBSERVER_ACTION_TYPES: ReadonlySet<string> = new Set([
  'create',
  'update',
  'delete',
]);

/**
 * The fields every observer and interaction delivery carries. Validation
 * pings carry none of them. `version` is only required to be present so a
 * future additive bump is not rejected outright.
 */
function hasShortcutWebhookEnvelope(payload: unknown): payload is Record<
  string,
  unknown
> & {
  id: string;
  version: string;
  timestamp: string;
  actor: ShortcutWebhookActor;
  workspace2: ShortcutWebhookWorkspace;
  installation_id: string;
} {
  if (!isRecord(payload)) return false;
  const { actor, workspace2 } = payload;
  return (
    isNonEmptyString(payload.id) &&
    isNonEmptyString(payload.version) &&
    isNonEmptyString(payload.timestamp) &&
    isRecord(actor) &&
    isNonEmptyString(actor.displayable_name) &&
    isRecord(workspace2) &&
    isNonEmptyString(workspace2.id) &&
    isNonEmptyString(workspace2.url_slug) &&
    isNonEmptyString(payload.installation_id)
  );
}

function isShortcutObserverAction(
  value: unknown,
): value is ShortcutObserverAction {
  return (
    isRecord(value) &&
    typeof value.action === 'string' &&
    OBSERVER_ACTION_TYPES.has(value.action) &&
    isEntityId(value.id) &&
    isNonEmptyString(value.entity_type) &&
    isNonEmptyString(value.global_id) &&
    (value.changes === undefined || Array.isArray(value.changes))
  );
}

const isOptionalString = (value: unknown): value is string | undefined =>
  value === undefined || typeof value === 'string';

/**
 * The entity reference every trigger carries, with each per-type field of
 * its type when present. What a session's prompt context requires: see
 * `ShortcutSessionTrigger`.
 */
function isShortcutTriggerShape(
  value: unknown,
): value is ShortcutSessionTrigger {
  return (
    isRecord(value) &&
    isNonEmptyString(value.type) &&
    isNonEmptyString(value.entity_type) &&
    isNonEmptyString(value.entity_id) &&
    isOptionalString(value.comment_id) &&
    isOptionalString(value.parent_comment_id) &&
    isOptionalString(value.context) &&
    (value.comment_parent_id === null ||
      isOptionalString(value.comment_parent_id))
  );
}

/**
 * A trigger of a `type` this version knows, carrying that type's fields. What
 * an interaction delivery requires, since the handler dispatches on it.
 */
function isShortcutInteractionTrigger(
  value: unknown,
): value is ShortcutInteractionTrigger {
  if (!isShortcutTriggerShape(value)) return false;
  switch (value.type) {
    case 'assigned':
      return true;
    case 'comment-reply':
      return (
        isNonEmptyString(value.comment_id) &&
        isNonEmptyString(value.parent_comment_id)
      );
    case 'mentioned':
      return value.context === 'comment' || value.context === 'description';
    default:
      return false;
  }
}

export function isShortcutValidationPayload(
  payload: unknown,
): payload is ShortcutValidationPayload {
  return isRecord(payload) && payload.type === 'validation';
}

/** True for a delivery with the full envelope and a well-formed `actions` list. */
export function isShortcutObserverPayload(
  payload: unknown,
): payload is ShortcutObserverPayload {
  return (
    hasShortcutWebhookEnvelope(payload) &&
    Array.isArray(payload.actions) &&
    payload.actions.every(isShortcutObserverAction)
  );
}

/** True for a delivery with the full envelope and a recognized `trigger`. */
export function isShortcutInteractionPayload(
  payload: unknown,
): payload is ShortcutInteractionPayload {
  return (
    hasShortcutWebhookEnvelope(payload) &&
    isShortcutInteractionTrigger(payload.trigger)
  );
}

const SESSION_EVENT_TYPES: ReadonlySet<string> = new Set([
  'session.created',
  'session.prompted',
]);

const isPositiveInteger = (value: unknown): value is number =>
  typeof value === 'number' && Number.isInteger(value) && value > 0;

function isShortcutAgentSession(value: unknown): value is ShortcutAgentSession {
  return (
    isRecord(value) &&
    isNonEmptyString(value.id) &&
    isNonEmptyString(value.workspace_id) &&
    isNonEmptyString(value.installation_id) &&
    isNonEmptyString(value.agent_member_id) &&
    isNonEmptyString(value.entity_type) &&
    isPositiveInteger(value.entity_id) &&
    isNonEmptyString(value.status) &&
    isPositiveInteger(value.turn) &&
    isPositiveInteger(value.version) &&
    Array.isArray(value.plan) &&
    Array.isArray(value.external_urls)
  );
}

function isShortcutSessionPromptActivity(
  value: unknown,
): value is ShortcutSessionPromptActivity {
  return (
    isRecord(value) &&
    isNonEmptyString(value.id) &&
    isPositiveInteger(value.turn) &&
    isRecord(value.content) &&
    value.content.type === 'prompt' &&
    typeof value.content.body === 'string' &&
    (value.signal == null || isNonEmptyString(value.signal))
  );
}

function isShortcutSessionPromptContext(
  value: unknown,
): value is ShortcutSessionPromptContext {
  return (
    isRecord(value) &&
    typeof value.text === 'string' &&
    typeof value.truncated === 'boolean' &&
    (value.trigger === undefined || isShortcutTriggerShape(value.trigger))
  );
}

/** The `v1` envelope every `session.*` delivery carries, whatever its `type`. */
function hasShortcutSessionEnvelope(
  payload: unknown,
): payload is Record<string, unknown> &
  ShortcutSessionEventEnvelope & { type: string } {
  return (
    isRecord(payload) &&
    typeof payload.type === 'string' &&
    payload.type.startsWith('session.') &&
    isNonEmptyString(payload.id) &&
    payload.version === 'v1' &&
    isNonEmptyString(payload.workspace_id) &&
    isNonEmptyString(payload.installation_id) &&
    isShortcutAgentSession(payload.session)
  );
}

/**
 * True for a `v1` agent-session delivery with a recognized `type` and the
 * session snapshot, plus the prompt context that `session.created` carries or
 * the human prompt that `session.prompted` requires. Enum-like fields only
 * have to be strings; see the note above `ShortcutAgentSessionStatus`.
 */
export function isShortcutSessionEventPayload(
  payload: unknown,
): payload is ShortcutSessionEventPayload {
  if (!hasShortcutSessionEnvelope(payload)) return false;
  switch (payload.type) {
    case 'session.created':
      return (
        isShortcutSessionPromptContext(payload.prompt_context) &&
        (payload.activity === undefined ||
          isShortcutSessionPromptActivity(payload.activity))
      );
    case 'session.prompted':
      return isShortcutSessionPromptActivity(payload.activity);
    default:
      return false;
  }
}

/** True for a well-formed `v1` session envelope whose `type` this version does not know. */
export function isShortcutUnknownSessionEventPayload(
  payload: unknown,
): payload is ShortcutUnknownSessionEventPayload {
  return (
    hasShortcutSessionEnvelope(payload) &&
    !SESSION_EVENT_TYPES.has(payload.type)
  );
}

/**
 * Which kind a payload `verify()` would accept belongs to. An unknown
 * `session.*` type is `session`, although `createHandler()` dispatches it to
 * no handler.
 */
export function shortcutWebhookEventType(
  payload: unknown,
): ShortcutWebhookEventType | undefined {
  if (isShortcutValidationPayload(payload)) return 'validation';
  if (
    isShortcutSessionEventPayload(payload) ||
    isShortcutUnknownSessionEventPayload(payload)
  ) {
    return 'session';
  }
  if (isShortcutInteractionPayload(payload)) return 'interaction';
  if (isShortcutObserverPayload(payload)) return 'observer';
  return undefined;
}
