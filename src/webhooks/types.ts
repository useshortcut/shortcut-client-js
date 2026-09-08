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

export function isShortcutValidationPayload(
  payload: ShortcutWebhookPayload,
): payload is ShortcutValidationPayload {
  return (payload as ShortcutValidationPayload).type === 'validation';
}

export function isShortcutObserverPayload(
  payload: ShortcutWebhookPayload,
): payload is ShortcutObserverPayload {
  return Array.isArray((payload as ShortcutObserverPayload).actions);
}

export function isShortcutInteractionPayload(
  payload: ShortcutWebhookPayload,
): payload is ShortcutInteractionPayload {
  const trigger = (payload as ShortcutInteractionPayload).trigger;
  return (
    typeof trigger === 'object' &&
    trigger !== null &&
    typeof trigger.type === 'string'
  );
}

/** Which event-type name a payload dispatches under. */
export function shortcutWebhookEventType(
  payload: ShortcutWebhookPayload,
): ShortcutWebhookEventType | undefined {
  if (isShortcutValidationPayload(payload)) return 'validation';
  if (isShortcutInteractionPayload(payload)) return 'interaction';
  if (isShortcutObserverPayload(payload)) return 'observer';
  return undefined;
}
