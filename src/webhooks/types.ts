/**
 * Payload shapes delivered to Shortcut Custom Agent webhooks.
 *
 * Every delivery is a JSON body signed with HMAC-SHA256 over the exact request
 * bytes; the hex digest arrives in the `Payload-Signature` header. See the
 * Custom Agents reference for trigger semantics.
 */

/** Who performed the change. Exactly one id is present in practice. */
export interface ShortcutWebhookActor {
  displayable_name: string;
  /** The acting member's permission id. Compare against the agent's own `permission_id` to ignore its own writes. */
  member_id?: string;
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
      comment_parent_id?: string;
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

export type ShortcutWebhookPayload =
  | ShortcutObserverPayload
  | ShortcutInteractionPayload
  | ShortcutValidationPayload;

export type ShortcutWebhookEventType =
  | 'observer'
  | 'interaction'
  | 'validation';

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
const INTERACTION_TRIGGER_TYPES: ReadonlySet<string> = new Set([
  'assigned',
  'comment-reply',
  'mentioned',
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

function isShortcutInteractionTrigger(
  value: unknown,
): value is ShortcutInteractionTrigger {
  if (
    !isRecord(value) ||
    typeof value.type !== 'string' ||
    !INTERACTION_TRIGGER_TYPES.has(value.type) ||
    !isNonEmptyString(value.entity_type) ||
    !isNonEmptyString(value.entity_id)
  ) {
    return false;
  }
  switch (value.type) {
    case 'comment-reply':
      return (
        isNonEmptyString(value.comment_id) &&
        isNonEmptyString(value.parent_comment_id)
      );
    case 'mentioned':
      return value.context === 'comment' || value.context === 'description';
    default:
      return true;
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

/** Which event-type name a payload dispatches under. */
export function shortcutWebhookEventType(
  payload: unknown,
): ShortcutWebhookEventType | undefined {
  if (isShortcutValidationPayload(payload)) return 'validation';
  if (isShortcutInteractionPayload(payload)) return 'interaction';
  if (isShortcutObserverPayload(payload)) return 'observer';
  return undefined;
}
