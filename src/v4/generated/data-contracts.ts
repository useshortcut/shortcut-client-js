/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CommitSlim {
  /** The type of this entity. */
  entity_type: "commit:slim";
  /**
   * The unique ID of the Commit.
   * @format int64
   */
  id: number;
  /** The message of the Commit. */
  message: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface BulkUpdateEntityTemplatesParams1 {
  /**
   * The UUID of the Entity Template to update.
   * @format uuid
   */
  id: string;
  /**
   * The updated template name.
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
  /** Updated attributes for the template to populate. */
  story_contents?: UpdateEntityTemplateStoryContentsParams;
}

export interface StoryChecklistItemEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: ChecklistItem;
}

/** The default Workflow State of the Workspace's default Workflow. */
export interface WorkflowStateSlim {
  /** The type of this entity. */
  entity_type: "workflow-state:slim";
  /**
   * The unique ID of the Workflow State.
   * @format int64
   */
  id: number;
  /** The name of the Workflow State. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
  /** The name of the Workflow this state belongs to. */
  workflow_name: string;
}

export interface DocEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Doc;
}

export interface BulkUpdateCustomFieldsParams1 {
  /**
   * The unique ID of the Custom Field to update.
   * @format uuid
   */
  id: string;
  /**
   * Move this Custom Field to after the field with this ID.
   * @format uuid
   */
  after_id?: string;
  /**
   * Move this Custom Field to before the field with this ID.
   * @format uuid
   */
  before_id?: string;
  /**
   * A description of the Custom Field.
   * @maxLength 1024
   */
  description?: string;
  /** Whether the Custom Field is enabled. */
  enabled?: boolean;
  /**
   * An identifier for the icon set for this Custom Field.
   * @minLength 1
   * @maxLength 63
   */
  icon_set_identifier?: string;
  /**
   * The name of the Custom Field.
   * @minLength 1
   * @maxLength 63
   */
  name?: string;
  /** The ordered list of enum values. Existing values not included will be deleted. */
  values?: UpdateCustomFieldEnumValueParams[];
  /** Enum values to add to the Custom Field. Existing values are unchanged. */
  values_add?: UpdateCustomFieldEnumValueParams[];
  /** IDs of enum values to remove from the Custom Field. */
  values_remove?: string[];
}

export interface Objective {
  /**
   * The Shortcut application url for the Objective.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string;
  /** Whether the Objective is archived. */
  archived?: boolean;
  /** The Categories associated with the Objective. */
  categories?: CategorySlim[];
  /** Whether the Objective has been completed. */
  completed?: boolean;
  /**
   * The time/date the Objective was completed.
   * @format date-time
   */
  completed_at?: string | null;
  /**
   * A manual override for the time/date the Objective was completed.
   * @format date-time
   */
  completed_at_override?: string | null;
  /**
   * The time/date the Objective was created.
   * @format date-time
   */
  created_at?: string;
  /** The description of the Objective. */
  description?: string;
  /** The type of this entity. */
  entity_type?: "objective";
  /** The Epics associated with the Objective. */
  epics?: NestedEpicSlimList;
  /** The Health updates on the Objective. */
  healths?: NestedHealthSlimList;
  /**
   * The unique ID of the Objective.
   * @format int64
   */
  id?: number;
  /** The Key Results associated with the Objective. */
  key_results?: NestedKeyResultSlimList;
  /**
   * The name of the Objective.
   * @maxLength 512
   */
  name?: string;
  /** The Members who followers of the Doc. */
  owners?: NestedMemberSlimList;
  /** Whether the Objective has been started. */
  started?: boolean;
  /**
   * The time/date the Objective was started.
   * @format date-time
   */
  started_at?: string | null;
  /**
   * A manual override for the time/date the Objective was started.
   * @format date-time
   */
  started_at_override?: string | null;
  /** The workflow state of the Objective. */
  state?: "in progress" | "to do" | "done";
  /** A list of Teams that this Member belongs to. */
  teams?: NestedTeamSlimList;
  /**
   * The time/date the Objective was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface LinkedFileEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: LinkedFile;
}

export interface StoryCommentEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Comment[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The Members who followers of the Doc. */
export interface NestedMemberSlimList {
  /** @format int64 */
  current_items: number;
  entities: MemberSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface WorkflowStateEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: WorkflowState;
}

export interface MemberStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of linked files attached to the Story. */
export interface NestedLinkedFileSlimList {
  /** @format int64 */
  current_items: number;
  entities: LinkedFileSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface IterationStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A map of story attributes this template populates. */
export interface CreateEntityTemplateStoryContentsParams {
  /** An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
  custom_fields?: CreateCustomFieldValueParams[];
  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string | null;
  /**
   * The description of the story.
   * @maxLength 512
   */
  description?: string;
  /**
   * The ID of the epic to be populated.
   * @format int64
   */
  epic_id?: number | null;
  /**
   * The numeric point estimate to be populated.
   * @format int64
   */
  estimate?: number | null;
  /** An array of external links to be populated. */
  external_links?: string[];
  /**
   * An array of the attached file IDs to be populated.
   * @uniqueItems true
   */
  file_ids?: number[];
  /** An array of UUIDs for any Members you want to add as Followers. */
  follower_ids?: string[];
  /**
   * The ID of the group to be populated.
   * @format uuid
   */
  group_id?: string | null;
  /**
   * The ID of the iteration to be populated.
   * @format int64
   */
  iteration_id?: number | null;
  /**
   * An array of IDs for Labels to be populated by the template.
   * @uniqueItems true
   */
  label_ids?: number[];
  /**
   * An array of the linked file IDs to be populated.
   * @uniqueItems true
   */
  linked_file_ids?: number[];
  /**
   * The name of the story.
   * @maxLength 512
   */
  name?: string;
  /** An array of UUIDs for any Members you want to add as Owners. */
  owner_ids?: string[];
  /** The type of story (feature, bug, chore). */
  story_type?: "chore" | "bug" | "feature";
  /** An array of sub-tasks to be populated by the template. */
  sub_tasks?: CreateEntityTemplateSubTaskParams[];
  /** An array of tasks to be populated by the template. */
  tasks?: CreateEntityTemplateTaskParams[];
  /**
   * The ID of the workflow state to be populated.
   * @format int64
   */
  workflow_state_id?: number | null;
}

export interface IterationLabelEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Label[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface ReactionSlim {
  /** The emoji used for the Reaction. */
  emoji: string;
  /** The type of this entity. */
  entity_type: "reaction:slim";
  /**
   * The unique ID of the Reaction.
   * @format uuid
   */
  id: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

/** A list of Teams that this Member belongs to. */
export interface NestedTeamSlimList {
  /** @format int64 */
  current_items: number;
  entities: TeamSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface BulkUpdateLinkedFilesParams1 {
  /**
   * The id of the Linked File to update.
   * @format int64
   */
  id: number;
  /**
   * The description of the Linked File.
   * @maxLength 512
   */
  description?: string;
  /**
   * The name of the Linked File.
   * @minLength 1
   * @maxLength 256
   */
  name?: string;
  /**
   * The URL of the thumbnail.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  thumbnail_url?: string;
  /**
   * The integration type (e.g. google, dropbox, box, onedrive, url).
   * @minLength 1
   * @maxLength 63
   */
  type?: string;
  /**
   * The URL of the Linked File.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  url?: string;
}

export interface EntityTemplateSubTask {
  /** The name of the Sub-Task. */
  name?: string;
  /** An array of Members who own this Sub-Task. */
  owners?: MemberSlim[];
  /**
   * The position of the Sub-Task within the list.
   * @format int64
   */
  position?: number;
  /** The default Workflow State of the Workspace's default Workflow. */
  workflow_state?: WorkflowStateSlim;
}

export interface CreateLabelParams {
  /**
   * The name of the new Label.
   * @minLength 1
   * @maxLength 128
   */
  name: string;
  /**
   * The hex color to be displayed with the Label (for example, "#ff0000").
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;
  /**
   * The description of the new Label.
   * @maxLength 1024
   */
  description?: string;
  /**
   * This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
   * @minLength 1
   * @maxLength 128
   */
  external_id?: string;
}

export interface CollectionEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: Collection;
}

/** The entity for this response. */
export interface EntityTemplate {
  /** The Member who created the Doc. */
  author?: MemberSlim;
  /**
   * The time/date when the entity template was created.
   * @format date-time
   */
  created_at?: string;
  /** A string description of this resource. */
  entity_type?: string;
  /**
   * The unique identifier for the entity template.
   * @format uuid
   */
  id?: string;
  /**
   * The last time that someone created an entity using this template.
   * @format date-time
   */
  last_used_at?: string;
  /** The template's name. */
  name?: string;
  /** A container entity for the attributes this template should populate. */
  story_contents?: EntityTemplateStoryContents;
  /**
   * The time/date when the entity template was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

/** The Comments on the Epic. */
export interface NestedThreadedCommentSlimList {
  /** @format int64 */
  current_items: number;
  entities: ThreadedCommentSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface BulkUpdateEpicCommentsParams1 {
  /**
   * The id of the Comment to update.
   * @format int64
   */
  id: number;
  /**
   * The comment text.
   * @maxLength 100000
   */
  text?: string;
}

export interface EpicEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Epic[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of Iterations that this Story has been attached to. */
export interface NestedIterationSlimList {
  /** @format int64 */
  current_items: number;
  entities: IterationSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface EpicState {
  /** The color of the Epic State. */
  color?: string | null;
  /**
   * The time/date the Epic State was created.
   * @format date-time
   */
  created_at?: string;
  /** The description of the Epic State. */
  description?: string;
  /** The type of this entity. */
  entity_type?: "epic-state";
  /**
   * The unique ID of the Epic State.
   * @format int64
   */
  id?: number;
  /** The name of the Epic State. */
  name?: string;
  /**
   * The position of the Epic State.
   * @format int64
   */
  position?: number;
  /** The type of the Epic State (unstarted, started, done). */
  type?: string;
  /**
   * The time/date the Epic State was last updated.
   * @format date-time
   */
  updated_at?: string;
}

export interface Comment {
  /**
   * The Shortcut application url for the Comment. Will be null if the comment is deleted.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string | null;
  /** The Member who created the Doc. */
  author?: MemberSlim;
  /**
   * The time/date the Comment was created.
   * @format date-time
   */
  created_at?: string;
  /** True if the comment has been deleted. */
  deleted?: boolean;
  /** The type of this entity. */
  entity_type?: "comment";
  /** This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;
  /**
   * The unique ID of the Comment. Will be null if the comment is deleted.
   * @format int64
   */
  id?: number | null;
  /** The Members who followers of the Doc. */
  mentioned_members?: NestedMemberSlimList;
  /** A list of Teams that this Member belongs to. */
  mentioned_teams?: NestedTeamSlimList;
  parent_comment?: CommentSlim | null;
  /**
   * The Comment's position within the Story.
   * @format int64
   */
  position?: number;
  /** A list of Reactions to this Comment. */
  reactions?: NestedReactionSlimList;
  /** The Story this Checklist Item belongs to. */
  story?: StorySlim;
  /** The text of the Comment. Will be null if the comment is deleted. */
  text?: string | null;
  /**
   * The time/date the Comment was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation. Will be null if the comment is deleted.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string | null;
}

/** A list of Pull/Merge Requests attached to the Story. */
export interface NestedPullRequestSlimList {
  /** @format int64 */
  current_items: number;
  entities: PullRequestSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface EpicTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface Health {
  /** The Member who created the Doc. */
  author?: MemberSlim;
  /**
   * The time/date the Health was created.
   * @format date-time
   */
  created_at?: string;
  /** The type of this entity. */
  entity_type?: "health";
  /** The Epic the story belongs to. */
  epic?: EpicSlim | null;
  /**
   * The unique ID of the Health.
   * @format uuid
   */
  id?: string;
  objective?: ObjectiveSlim | null;
  /** The status of the Health. */
  status?: "At Risk" | "On Track" | "Off Track" | "No Health";
  /** The text body of the Health update. */
  text?: string | null;
  /**
   * The time/date the Health was last updated.
   * @format date-time
   */
  updated_at?: string;
}

/** The Collections the Doc belongs to. */
export interface NestedCollectionSlimList {
  /** @format int64 */
  current_items: number;
  entities: CollectionSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface CommitStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface HealthEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Health[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface Category {
  /** A true/false boolean indicating if the Category has been archived. */
  archived?: boolean;
  /** The hex color to be displayed with the Category (for example, "#ff0000"). */
  color?: string | null;
  /**
   * The time/date the Category was created.
   * @format date-time
   */
  created_at?: string;
  /** The type of this entity. */
  entity_type?: "category";
  /** An optional external ID for the Category. */
  external_id?: string | null;
  /**
   * The unique ID of the Category.
   * @format int64
   */
  id?: number;
  /**
   * The name of the Category.
   * @maxLength 128
   */
  name?: string;
  /**
   * The time/date the Category was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface StoryLabelEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Label[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CreateEpicCommentParams {
  /**
   * The comment text.
   * @maxLength 100000
   */
  text: string;
  /**
   * The Member ID of the Comment's author. Defaults to the user identified by the API token. Requires the admin role to set.
   * @format uuid
   */
  author_id?: string;
  /**
   * This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
   * @maxLength 128
   */
  external_id?: string;
  /**
   * The ID of the Comment to reply to. When provided, creates a threaded reply rather than a top-level Comment.
   * @format int64
   */
  parent_comment_id?: number;
}

/** The entity for this response. */
export interface Branch {
  /**
   * The time/date the Branch was created.
   * @format date-time
   */
  created_at?: string;
  /** Boolean indicating whether the Branch has been deleted. */
  deleted?: boolean;
  /** The type of this entity. */
  entity_type?: "branch";
  /** The URL of the Branch in the VCS provider. */
  external_url?: string;
  /**
   * The unique ID of the Branch.
   * @format int64
   */
  id?: number;
  /** The name of the Branch. */
  name?: string;
  /** A list of Pull/Merge Requests attached to the Story. */
  pull_requests?: NestedPullRequestSlimList;
  /** The Repository that contains the Commit. */
  repository?: RepositorySlim;
  /** A list of Stories associated with this Project. */
  stories?: NestedStorySlimList;
  /**
   * The time/date the Branch was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface IterationMentionedMemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryMentionedTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface BranchEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: Branch;
}

export interface StoryMentionedMemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryCommentMentionedTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The Repository that contains the Commit. */
export interface RepositorySlim {
  /** The type of this entity. */
  entity_type: "repository:slim";
  /**
   * The unique ID of the Repository.
   * @format int64
   */
  id: number;
  /** The name of the Repository. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface CustomFieldValue {
  /** The color key associated with this enum value. */
  color_key?:
    | "blue"
    | "purple"
    | "midnight-blue"
    | "orange"
    | "yellow-green"
    | "brass"
    | "gray"
    | "fuchsia"
    | "yellow"
    | "pink"
    | "sky-blue"
    | "green"
    | "red"
    | "black"
    | "slate"
    | "turquoise"
    | null;
  /** Whether this enum value is enabled. */
  enabled?: boolean;
  /** The type of this entity. */
  entity_type?: "custom-field-value";
  /** The Custom Field for this value. */
  field?: CustomFieldSlim;
  /**
   * The unique public ID for the enum value.
   * @format uuid
   */
  id?: string;
  /**
   * The position of this enum value in the ordered list.
   * @format int64
   */
  position?: number;
  /**
   * The string value for this enum value.
   * @maxLength 63
   */
  value?: string;
}

export interface EpicWorkflowEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: EpicWorkflow;
}

export interface BulkUpdateObjectivesParams1 {
  /**
   * The id of the Objective to update.
   * @format int64
   */
  id: number;
  /** Whether the Objective is archived. */
  archived?: boolean;
  /** An array of IDs of Categories to set on the Objective. Replaces current Categories. */
  category_ids?: number[];
  /** An array of IDs of Categories to add to the Objective. */
  category_ids_add?: number[];
  /** An array of IDs of Categories to remove from the Objective. */
  category_ids_remove?: number[];
  /**
   * A manual override for the time/date the Objective was completed.
   * @format date-time
   */
  completed_at_override?: string | null;
  /**
   * The Objective's description.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The name of the Objective.
   * @minLength 1
   * @maxLength 256
   */
  name?: string;
  /** An array of UUIDs for Members to set as Owners. This will replace the current Owners on the Objective. Sending an empty array will delete all existing Owners. */
  owner_ids?: string[];
  /** An array of UUIDs for Members to add as Owners. These will be added to the current Owners on the Objective. */
  owner_ids_add?: string[];
  /** An array of UUIDs for Members to remove as Owners. These will be removed from the current Owners on the Objective. */
  owner_ids_remove?: string[];
  /**
   * A manual override for the time/date the Objective was started.
   * @format date-time
   */
  started_at_override?: string | null;
  /** The workflow state of the Objective. */
  state?: "in progress" | "to do" | "done";
  /** An array of UUIDs for Teams to associate with the Objective. This will replace the current Teams on the Objective. Sending an empty array will remove all existing Teams. */
  team_ids?: string[];
  /** An array of UUIDs for Teams to add to the Objective. These will be added to the current Teams on the Objective. */
  team_ids_add?: string[];
  /** An array of UUIDs for Teams to remove from the Objective. These will be removed from the current Teams on the Objective. */
  team_ids_remove?: string[];
}

export interface CreateEntityTemplateTaskParams {
  /**
   * The Task description.
   * @minLength 1
   * @maxLength 2048
   */
  description: string;
  /** True/false boolean indicating whether the Task is completed. Defaults to false. */
  complete?: boolean;
  /** An array of UUIDs for any members you want to add as Owners on this new Task. */
  owner_ids?: string[];
}

export interface CustomFieldEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: CustomField[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of Reactions to this Comment. */
export interface NestedReactionSlimList {
  /** @format int64 */
  current_items: number;
  entities: ReactionSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

/** The entity for this response. */
export interface ThreadedComment {
  /**
   * The Shortcut application url for the Comment. Will be null if the comment is deleted.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string | null;
  /** The Member who created the Doc. */
  author?: MemberSlim;
  /** The Comments on the Epic. */
  comments?: NestedThreadedCommentSlimList;
  /**
   * The time/date the Comment was created.
   * @format date-time
   */
  created_at?: string;
  /** Whether the Comment has been deleted. */
  deleted?: boolean;
  /** The type of this entity. */
  entity_type?: "threaded-comment";
  /** The Epic the story belongs to. */
  epic?: EpicSlim;
  /** This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;
  /**
   * The unique ID of the Comment. Will be null if the comment is deleted.
   * @format int64
   */
  id?: number | null;
  /** The Members who followers of the Doc. */
  mentioned_members?: NestedMemberSlimList;
  /** A list of Teams that this Member belongs to. */
  mentioned_teams?: NestedTeamSlimList;
  parent_comment?: ThreadedCommentSlim | null;
  /** The text of the Comment. Will be null if the comment is deleted. */
  text?: string | null;
  /**
   * The time/date the Comment was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation. Will be null if the comment is deleted.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string | null;
}

export interface StoryIterationEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Iteration[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface LinkedFileMentionedTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CurrentIterationsOutput {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Iteration[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The entity for this response. */
export interface CustomField {
  /** The canonical name of a Shortcut-defined Custom Field. */
  canonical_name?: string | null;
  /**
   * The time/date the Custom Field was created.
   * @format date-time
   */
  created_at?: string;
  /**
   * A description of the Custom Field.
   * @maxLength 1024
   */
  description?: string | null;
  /** Whether the Custom Field is enabled for the Workspace. */
  enabled?: boolean;
  /** The type of this entity. */
  entity_type?: "custom-field";
  /** The type of the Custom Field (e.g. "enum"). */
  field_type?: string;
  /** Whether this Custom Field has a fixed position. */
  fixed_position?: boolean;
  /**
   * An identifier for the icon set used for this Custom Field.
   * @maxLength 63
   */
  icon_set_identifier?: string | null;
  /**
   * The unique public ID for the Custom Field.
   * @format uuid
   */
  id?: string;
  /**
   * The name of the Custom Field.
   * @maxLength 63
   */
  name?: string;
  /**
   * The display position of the Custom Field.
   * @format int64
   */
  position?: number | null;
  /** The story types this Custom Field applies to, if restricted. */
  story_types?: ("feature" | "chore" | "bug")[] | null;
  /**
   * The time/date the Custom Field was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
  /** The ordered list of enum values for this Custom Field. */
  values?: CustomFieldValue[] | null;
}

export interface StoryEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Story;
}

export interface LinkedFileEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: LinkedFile[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface PullRequestSlim {
  /** The type of this entity. */
  entity_type: "pull-request:slim";
  /**
   * The unique ID of the Pull Request.
   * @format int64
   */
  id: number;
  /** The name of the Pull Request. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface HealthSlim {
  /**
   * The time/date the Health was created.
   * @format date-time
   */
  created_at?: string;
  /** The type of this entity. */
  entity_type?: "health:slim";
  /**
   * The unique ID of the Health.
   * @format uuid
   */
  id?: string;
  /** The status of the Health (On Track, At Risk, Off Track, No Health). */
  status?: string;
  /**
   * The time/date the Health was last updated.
   * @format date-time
   */
  updated_at?: string;
}

export interface CreateEntityTemplateSubTaskParams {
  /**
   * The name of the Sub-Task.
   * @minLength 1
   * @maxLength 512
   */
  name: string;
  /** An array of UUIDs of the owners of this Sub-Task. */
  owner_ids?: string[];
  /**
   * The ID of the workflow state the Sub-Task is in.
   * @format int64
   */
  workflow_state_id?: number;
}

export interface EntityTemplateEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: EntityTemplate[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface WorkflowProjectEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Project[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface TeamStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of comments attached to the Story. */
export interface NestedCommentSlimList {
  /** @format int64 */
  current_items: number;
  entities: CommentSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

/** The Workspace the caller is authenticated against. */
export interface WorkspaceSlim {
  /**
   * The Shortcut application url for the Workspace.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string;
  /** The type of this entity. */
  entity_type?: "workspace:slim";
  /**
   * The unique ID of the Workspace.
   * @format uuid
   */
  id?: string;
  /** The name of the Workspace. */
  name?: string;
  /** The URL Slug for the Workspace (aka `workspace-slug`). */
  slug?: string;
}

/** The authorization details for the token used to authenticate this request. */
export interface TokenAuthorization {
  /** The scopes granted by the token. Possible values are "read", "write", "story-write", "comment-write", and "admin". */
  scopes?: string[];
}

/** The entity for this response. */
export interface StoryLink {
  /**
   * The time/date the Story Link was created.
   * @format date-time
   */
  created_at?: string;
  /** The type of this entity. */
  entity_type?: "story-link";
  /**
   * The unique identifier of the Story Link.
   * @format int64
   */
  id?: number;
  /** The Story this Checklist Item belongs to. */
  object?: StorySlim;
  /** The Story this Checklist Item belongs to. */
  subject?: StorySlim;
  /**
   * The time/date the Story Link was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
  /** How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to". */
  verb?: "blocks" | "duplicates" | "relates to";
}

export interface ObjectiveOwnerEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface BranchStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The Member the caller is authenticated as. */
export interface Member {
  /**
   * The time/date the Member was created.
   * @format date-time
   */
  created_at?: string;
  /** True if the Member is disabled (no longer has access to the Workspace). */
  disabled?: boolean;
  /** The Member's email address, if the Member has one. Commonly null for bot/application users such as Korey. */
  email_address?: string | null;
  /** The type of this entity. */
  entity_type?: "member";
  /**
   * The unique ID of the Member.
   * @format uuid
   */
  id?: string;
  /** The Member's mention name, used to @mention them in text fields. */
  mention_name?: string;
  /** The full name of the Member. */
  name?: string;
  /** The role of the Member in the Workspace. */
  role?: string;
  /** A list of Teams that this Member belongs to. */
  teams?: NestedTeamSlimList;
  /**
   * The time/date the Member was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

/** The Key Results associated with the Objective. */
export interface NestedKeyResultSlimList {
  /** @format int64 */
  current_items: number;
  entities: KeyResultSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface ObjectiveKeyResultEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: KeyResult[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryCommitEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Commit[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface File {
  /** The content type of the File. */
  content_type?: string;
  /**
   * The time/date the File was created.
   * @format date-time
   */
  created_at?: string;
  /** The description of the File. */
  description?: string;
  /** The type of this entity. */
  entity_type?: "file";
  /** This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;
  /**
   * The unique ID for the File.
   * @format int64
   */
  id?: number;
  /** The Members who followers of the Doc. */
  mentioned_members?: NestedMemberSlimList;
  /** A list of Teams that this Member belongs to. */
  mentioned_teams?: NestedTeamSlimList;
  /** The name of the File. */
  name?: string;
  /**
   * The size of the File in bytes.
   * @format int64
   */
  size?: number;
  /** A list of Stories associated with this Project. */
  stories?: NestedStorySlimList;
  /**
   * The URL of the thumbnail for the File.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  thumbnail_url?: string | null;
  /**
   * The time/date the File was last updated.
   * @format date-time
   */
  updated_at?: string;
  /** The Member who created the Doc. */
  uploader?: MemberSlim;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
  /**
   * The URL for the File.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  url?: string;
}

export interface ObjectiveTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface BulkUpdateMembersParams1 {
  /**
   * The unique ID of the Member to update.
   * @format uuid
   */
  id: string;
  /** Set to true to disable the Member, false to re-enable them. */
  disabled?: boolean;
  /** The new role to assign to the Member. One of "admin", "member", or "observer". */
  role?: "member" | "observer" | "admin";
}

export interface Repository {
  /** A list of Git branches attached to the Story. */
  branches?: NestedBranchSlimList;
  /** A list of commits attached to the Story. */
  commits?: NestedCommitSlimList;
  /**
   * The time/date the Repository was created.
   * @format date-time
   */
  created_at?: string;
  /** The type of this entity. */
  entity_type?: "repository";
  /** The URL of the Repository in the VCS provider. */
  external_url?: string;
  /** The full name of the Repository (e.g. owner/repo-name). */
  full_name?: string;
  /**
   * The unique ID of the Repository.
   * @format int64
   */
  id?: number;
  /** The name of the Repository. */
  name?: string;
  /** A list of Pull/Merge Requests attached to the Story. */
  pull_requests?: NestedPullRequestSlimList;
  /**
   * The time/date the Repository was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

/** A list of Story links attached to the Story. */
export interface NestedStoryLinkSlimList {
  /** @format int64 */
  current_items: number;
  entities: StoryLinkSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface CategoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Category[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface PullRequest {
  branch?: BranchSlim;
  /** True/False boolean indicating whether the VCS Pull Request has been closed. */
  closed?: boolean;
  /**
   * The time/date the Pull Request was created.
   * @format date-time
   */
  created_at?: string;
  /** True/False boolean indicating whether the Pull Request is in draft state. */
  draft?: boolean;
  /** The type of this entity. */
  entity_type?: "pull-request";
  /** The Pull Request's id in the VCS provider. */
  external_id?: string;
  /** The URL for the Pull Request in the VCS provider. */
  external_url?: string;
  /**
   * The unique ID of the Pull Request.
   * @format int64
   */
  id?: number;
  /** The Repository that contains the Commit. */
  repository?: RepositorySlim;
  /** A list of Stories associated with this Project. */
  stories?: NestedStorySlimList;
  target_branch?: BranchSlim;
  /** The title of the Pull Request. */
  title?: string;
  /**
   * The time/date the Pull Request was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

/** The Health updates on the Objective. */
export interface NestedHealthSlimList {
  /** @format int64 */
  current_items: number;
  entities: HealthSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface CreateStoryLinkParams {
  /**
   * The unique ID of the Story defined as object.
   * @format int64
   */
  object_story_id: number;
  /**
   * The unique ID of the Story defined as subject.
   * @format int64
   */
  subject_story_id: number;
  /** How the subject Story acts on the object Story. This can be one of: "blocks", "duplicates", "relates to" */
  verb: "blocks" | "duplicates" | "relates to";
}

/** A list of Checklist Items attached to the Story. */
export interface NestedChecklistItemSlimList {
  /** @format int64 */
  current_items: number;
  entities: ChecklistItemSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

/** A list of Workflows associated with this Team. */
export interface NestedWorkflowSlimList {
  /** @format int64 */
  current_items: number;
  entities: WorkflowSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

/** A single history change entry. */
export interface StoryHistoryChange {
  /** Values that were added. */
  adds: any[];
  /** The attribute that was changed. */
  attribute: string;
  /** The story that was changed (slim representation). */
  entity: any;
  /** Values that were removed. */
  removes: any[];
  /**
   * When this change occurred.
   * @format date-time
   */
  timestamp: string;
  /**
   * The unique identifier for the transaction.
   * @format uuid
   */
  tx_id: string;
  /** The type of action: create, update, or delete. */
  action?: string;
  /** The actor who made this change (slim representation): a member:slim, or a vcs-identity:slim for changes driven by an external VCS identity. Null when no actor can be resolved. */
  actor?: any;
}

export interface PullRequestStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The entity for this response. */
export interface EpicWorkflow {
  /**
   * The time/date the Epic Workflow was created.
   * @format date-time
   */
  created_at?: string;
  /** The current Epic State. */
  default_epic_state?: EpicStateSlim;
  /** The type of this entity. */
  entity_type?: "epic-workflow";
  /** A list of Epic States in the Epic Workflow. */
  epic_states?: NestedEpicStateList;
  /**
   * The unique ID of the Epic Workflow.
   * @format int64
   */
  id?: number;
  /**
   * The time/date the Epic Workflow was last updated.
   * @format date-time
   */
  updated_at?: string;
}

export interface EpicCommentEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: ThreadedComment;
}

/** The Story this Checklist Item belongs to. */
export interface StorySlim {
  /**
   * The Shortcut application url for the Story.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url: string;
  /** The type of this entity. */
  entity_type: "story:slim";
  /**
   * The unique ID of the Story.
   * @format int64
   */
  id: number;
  /** The name of the Story. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface WorkflowState {
  /** The color of the Workflow State. */
  color?: string | null;
  /**
   * The time/date the Workflow State was created.
   * @format date-time
   */
  created_at?: string;
  /** The description of what sort of Stories belong in that Workflow State. */
  description?: string;
  /** The type of this entity. */
  entity_type?: "workflow-state";
  /**
   * The unique ID of the Workflow State.
   * @format int64
   */
  id?: number;
  /** The name of the Workflow State. */
  name?: string;
  /**
   * The number of Stories currently in that Workflow State.
   * @format int64
   */
  num_stories?: number;
  /**
   * The number of Story Templates associated with that Workflow State.
   * @format int64
   */
  num_story_templates?: number;
  /**
   * The position that the Workflow State is in, starting with 0 at the left.
   * @format int64
   */
  position?: number;
  /** The type of the Workflow State (backlog, unstarted, started, done). */
  type?: string;
  /**
   * The time/date the Workflow State was last updated.
   * @format date-time
   */
  updated_at?: string;
  /** The verb that triggers a move to that Workflow State when making VCS commits. */
  verb?: string | null;
  /** The default Workflow for the Workspace the caller is authenticated against. */
  workflow?: WorkflowSlim;
}

export interface CreateCategoryParams {
  /**
   * The name of the new Category.
   * @minLength 1
   * @maxLength 128
   */
  name: string;
  /**
   * The hex color to be displayed with the Category (for example, "#ff0000").
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;
  /**
   * An optional external ID for the Category.
   * @minLength 1
   * @maxLength 128
   */
  external_id?: string;
}

export interface WorkspaceTokenEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Token[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CreateStoryCommentParams {
  /**
   * The comment text.
   * @maxLength 100000
   */
  text: string;
  /**
   * The Member ID of the Comment's author. Defaults to the user identified by the API token. Requires the admin role to set.
   * @format uuid
   */
  author_id?: string;
  /**
   * This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
   * @maxLength 128
   */
  external_id?: string;
  /**
   * The ID of the Comment that this comment is threaded under.
   * @format int64
   */
  parent_comment_id?: number;
}

/** The current Epic State. */
export interface EpicStateSlim {
  /** The type of this entity. */
  entity_type: "epic-state:slim";
  /**
   * The unique ID of the Epic State.
   * @format int64
   */
  id: number;
  /** The name of the Epic State. */
  name: string;
  /** The type of the Epic State (unstarted, started, done). */
  type: string;
}

export interface StoryPullRequestEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: PullRequest[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface MemberEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The Member the caller is authenticated as. */
  entity: Member;
}

export interface EpicFollowerEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface RepositoryPullRequestEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: PullRequest[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface LabelEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Label;
}

/** The Custom Field for this value. */
export interface CustomFieldSlim {
  /** The type of this entity. */
  entity_type: "custom-field:slim";
  /**
   * The unique public ID for the Custom Field.
   * @format uuid
   */
  id: string;
  /** The name of the Custom Field. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

/** Request parameters for creating a Checklist Item on a Story. */
export interface CreateStoryChecklistItemParams {
  /**
   * The Checklist Item description.
   * @minLength 1
   * @maxLength 2048
   */
  description: string;
  /** True/false boolean indicating whether the Checklist Item is completed. Defaults to false. */
  completed?: boolean;
  /**
   * This field can be set to another unique ID. In the case that the Checklist Item has been imported from another tool, the ID in the other tool can be indicated here.
   * @maxLength 128
   */
  external_id?: string;
  /** One of "first", "last", "before", or "after". This can be used to move the Checklist Item to the first or last position in the Story's checklist, or before or after a given Checklist Item. */
  set_position?: SetPosition;
}

export interface BulkUpdateStoryChecklistItemsParams1 {
  /**
   * The id of the Checklist Item to update.
   * @format int64
   */
  id: number;
  /** True/false boolean indicating whether the Checklist Item is completed. Defaults to false. */
  completed?: boolean;
  /**
   * The Checklist Item description.
   * @minLength 1
   * @maxLength 2048
   */
  description?: string;
  /** One of "first", "last", "before", or "after". This can be used to move the Checklist Item to the first or last position in the Story's checklist, or before or after a given Checklist Item. */
  set_position?: SetPosition;
}

export interface FileStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of Stories associated with this Project. */
export interface NestedStorySlimList {
  /** @format int64 */
  current_items: number;
  entities: StorySlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

/** The Iteration the story belongs to. */
export interface IterationSlim {
  /**
   * The Shortcut application url for the Iteration.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url: string;
  /** The type of this entity. */
  entity_type: "iteration:slim";
  /**
   * The unique ID of the Iteration.
   * @format int64
   */
  id: number;
  /** The name of the Iteration. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface UpdateCustomFieldEnumValueParams {
  /** The color key for this enum value. Pass null to clear. */
  color_key?:
    | "blue"
    | "purple"
    | "midnight-blue"
    | "orange"
    | "yellow-green"
    | "brass"
    | "gray"
    | "fuchsia"
    | "yellow"
    | "pink"
    | "sky-blue"
    | "green"
    | "red"
    | "black"
    | "slate"
    | "turquoise"
    | null;
  /** Whether this enum value is enabled. */
  enabled?: boolean;
  /**
   * The ID of an existing enum value to update. Omit to create a new value.
   * @format uuid
   */
  id?: string;
  /**
   * The string value for this enum value.
   * @minLength 1
   * @maxLength 63
   */
  value?: string;
}

export interface Epic {
  /**
   * The Shortcut application url for the Epic.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string;
  /** Whether the Epic is archived. */
  archived?: boolean;
  /** The Comments on the Epic. */
  comments?: NestedThreadedCommentSlimList;
  /** Whether the Epic is completed. */
  completed?: boolean;
  /**
   * The time/date the Epic was completed.
   * @format date-time
   */
  completed_at?: string | null;
  /**
   * A manual override for the time/date the Epic was completed.
   * @format date-time
   */
  completed_at_override?: string | null;
  /**
   * The time/date the Epic was created.
   * @format date-time
   */
  created_at?: string;
  /**
   * The Epic's deadline.
   * @format date-time
   */
  deadline?: string | null;
  /** The Epic's description. */
  description?: string;
  /** The type of this entity. */
  entity_type?: "epic";
  /** The current Epic State. */
  epic_state?: EpicStateSlim;
  /** An external ID that can be used to identify the Epic. */
  external_id?: string | null;
  /** The Members who followers of the Doc. */
  followers?: NestedMemberSlimList;
  /** The Health updates on the Objective. */
  healths?: NestedHealthSlimList;
  /**
   * The unique ID of the Epic.
   * @format int64
   */
  id?: number;
  /** A list of labels attached to the Story. */
  labels?: NestedLabelSlimList;
  /** The Members who followers of the Doc. */
  mentioned_members?: NestedMemberSlimList;
  /** A list of Teams that this Member belongs to. */
  mentioned_teams?: NestedTeamSlimList;
  /** The name of the Epic. */
  name?: string;
  /** The Objectives associated with this Epic. */
  objectives?: NestedObjectiveSlimList;
  /** The Members who followers of the Doc. */
  owners?: NestedMemberSlimList;
  /**
   * The Epic's planned start date.
   * @format date-time
   */
  planned_start_date?: string | null;
  /** The Member who created the Doc. */
  requester?: MemberSlim | null;
  /** Whether the Epic has been started. */
  started?: boolean;
  /**
   * The time/date the Epic was started.
   * @format date-time
   */
  started_at?: string | null;
  /**
   * A manual override for the time/date the Epic was started.
   * @format date-time
   */
  started_at_override?: string | null;
  /** A list of Stories associated with this Project. */
  stories?: NestedStorySlimList;
  /** A list of Teams that this Member belongs to. */
  teams?: NestedTeamSlimList;
  /**
   * The time/date the Epic was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface FileEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: File[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface WhoamiEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: Whoami;
}

/** A list of Epic States in the Epic Workflow. */
export interface NestedEpicStateList {
  /** @format int64 */
  current_items: number;
  entities: EpicState[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface LinkedFile {
  /**
   * The content type of the linked file.
   * @maxLength 128
   */
  content_type?: string | null;
  /**
   * The time/date the Linked File was created.
   * @format date-time
   */
  created_at?: string;
  /**
   * The description of the Linked File.
   * @maxLength 512
   */
  description?: string | null;
  /** The type of this entity. */
  entity_type?: "linked-file";
  /**
   * The unique ID of the Linked File.
   * @format int64
   */
  id?: number;
  /** The Members who followers of the Doc. */
  mentioned_members?: NestedMemberSlimList;
  /** A list of Teams that this Member belongs to. */
  mentioned_teams?: NestedTeamSlimList;
  /**
   * The name of the Linked File.
   * @maxLength 256
   */
  name?: string;
  /**
   * The size of the Linked File, if available.
   * @format int64
   */
  size?: number | null;
  /** A list of Stories associated with this Project. */
  stories?: NestedStorySlimList;
  /**
   * The URL of the thumbnail, if the integration provided it.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  thumbnail_url?: string | null;
  /**
   * The integration type (e.g. google, dropbox, box, onedrive, url).
   * @maxLength 63
   */
  type?: string;
  /**
   * The time/date the Linked File was updated.
   * @format date-time
   */
  updated_at?: string;
  /** The Member who created the Doc. */
  uploader?: MemberSlim;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
  /**
   * The URL of the Linked File.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  url?: string;
}

export interface StoryFollowerEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CreateTeamParams {
  /**
   * The Team's mention name.
   * @minLength 1
   * @pattern ^[a-z0-9._-]+$
   */
  mention_name: string;
  /**
   * The Team's name.
   * @minLength 1
   * @maxLength 63
   */
  name: string;
  /**
   * An array of IDs for Workflows to associate with the Team. At least one Workflow is required.
   * @maxItems 100
   * @minItems 1
   */
  workflow_ids: number[];
  /** The card aging mode for stories in this Team: "gradual" (fixed fade steps at 1, 2, and 4 weeks), "immediate", or "off" (explicitly disabled for this Team). Set to null to inherit the Workspace default. */
  card_aging_mode?: "off" | "gradual" | "immediate" | null;
  /**
   * The number of days an in-progress Story can go without activity before it is considered stale. Required when card_aging_mode is "immediate"; not allowed otherwise.
   * @format int64
   */
  card_aging_threshold_days?: number | null;
  /**
   * The hex color to be displayed with the Team (for example, "#ff0000").
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;
  /** The color key to be displayed with the Team. */
  color_key?:
    | "blue"
    | "purple"
    | "midnight-blue"
    | "orange"
    | "yellow-green"
    | "brass"
    | "gray"
    | "fuchsia"
    | "yellow"
    | "pink"
    | "sky-blue"
    | "green"
    | "red"
    | "black"
    | "slate"
    | "turquoise";
  /**
   * The ID of the default Workflow for Stories created in this Team.
   * @format int64
   */
  default_workflow_id?: number;
  /**
   * The Team's description.
   * @maxLength 4096
   */
  description?: string;
  /** An array of UUIDs for Members to add to the Team. */
  member_ids?: string[];
}

export interface StoryOwnerEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CollectionEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Collection[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CustomFieldEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: CustomField;
}

export interface StoryCommentReactionEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Reaction;
}

export interface ProjectStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface DocFollowerEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface WorkflowEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Workflow[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface Commit {
  /** The Member who created the Doc. */
  author?: MemberSlim | null;
  /**
   * The time/date the Commit was created.
   * @format date-time
   */
  created_at?: string;
  /** The type of this entity. */
  entity_type?: "commit";
  /** The URL of the Commit in the VCS provider. */
  external_url?: string;
  /** The Commit hash. */
  hash?: string;
  /**
   * The unique ID of the Commit.
   * @format int64
   */
  id?: number;
  /** The Commit message, truncated to the first line (up to 1024 characters). */
  message?: string;
  /** The Repository that contains the Commit. */
  repository?: RepositorySlim;
  /** A list of Stories associated with this Project. */
  stories?: NestedStorySlimList;
  /**
   * The time/date the Commit was pushed.
   * @format date-time
   */
  timestamp?: string;
  /**
   * The time/date the Commit was updated.
   * @format date-time
   */
  updated_at?: string | null;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface CommentSlim {
  /**
   * The Shortcut application url for the Comment. Will be null if the comment is deleted.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url: string | null;
  /** True if the comment has been deleted. */
  deleted: boolean;
  /** The type of this entity. */
  entity_type: "comment:slim";
  /**
   * The unique ID of the Comment. Will be null if the comment is deleted.
   * @format int64
   */
  id: number | null;
  /** The text of the Comment. Will be null if the comment is deleted. */
  text: string | null;
  /**
   * A resolvable URI for the entity that will return the full representation. Will be null if the comment is deleted.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string | null;
}

export interface WorkflowStateEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: WorkflowState[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface MemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryTemplateSlim {
  /** The type of this entity. */
  entity_type: "story-template:slim";
  /**
   * The unique ID of the Story Template.
   * @format uuid
   */
  id: string;
  /** The name of the Story Template. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface StoryChecklistItemMentionedMemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface DocEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Doc[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StorySubTaskStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryLinkSlim {
  /** The type of this entity. */
  entity_type: "story-link:slim";
  /**
   * The unique identifier of the Story Link.
   * @format int64
   */
  id: number;
  /** The Story this Checklist Item belongs to. */
  object: StorySlim;
  /** The Story this Checklist Item belongs to. */
  subject: StorySlim;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
  /** How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to". */
  verb: string;
}

export interface StoryLinkEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: StoryLink[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CollectionSlim {
  /** The type of this entity. */
  entity_type: "collection:slim";
  /**
   * The unique ID of the Collection.
   * @format uuid
   */
  id: string;
  /**
   * The name of the Collection.
   * @minLength 1
   * @maxLength 63
   */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface EpicCommentCommentEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: ThreadedComment[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface UpdateStoryLinkParams {
  /**
   * The unique ID of the Story Link to update.
   * @format int64
   */
  id: number;
  /**
   * The unique ID of the Story defined as object.
   * @format int64
   */
  object_story_id?: number;
  /**
   * The unique ID of the Story defined as subject.
   * @format int64
   */
  subject_story_id?: number;
  /** How the subject Story acts on the object Story. This can be one of: "blocks", "duplicates", "relates to" */
  verb?: "blocks" | "duplicates" | "relates to";
}

export interface WorkflowEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Workflow;
}

export interface IterationEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Iteration;
}

export interface FileMentionedMemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of Workflow States in the Workflow. */
export interface NestedWorkflowStateSlimList {
  /** @format int64 */
  current_items: number;
  entities: WorkflowStateSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface DocCollectionEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Collection[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of commits attached to the Story. */
export interface NestedCommitSlimList {
  /** @format int64 */
  current_items: number;
  entities: CommitSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface StoryCommentReactionEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Reaction[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface EpicStatsWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: EpicStats;
}

export interface KeyResultEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: KeyResult;
}

export interface HealthEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Health;
}

/** The Epic the story belongs to. */
export interface EpicSlim {
  /**
   * The Shortcut application url for the Epic.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url: string;
  /** The type of this entity. */
  entity_type: "epic:slim";
  /**
   * The unique ID of the Epic.
   * @format int64
   */
  id: number;
  /** The name of the Epic. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface ProjectEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Project[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface WorkflowTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CreateCustomFieldValueParams {
  /**
   * The unique public ID for the Custom Field value.
   * @format uuid
   */
  field_id: string;
  /**
   * The unique public ID for the CustomFieldEnumValue.
   * @format uuid
   */
  value_id: string;
}

export interface ChecklistItemSlim {
  /** The description of the Checklist Item. */
  description: string;
  /** The type of this entity. */
  entity_type: "checklist-item:slim";
  /**
   * The unique ID of the Checklist Item.
   * @format int64
   */
  id: number;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface CommitEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Commit;
}

export interface TeamWorkflowEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Workflow[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryLinkEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: StoryLink;
}

export interface EpicStateEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: EpicState[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface Team {
  /**
   * The Shortcut application url for the Team.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string;
  /** True if the Team has been archived. */
  archived?: boolean;
  /** The card aging mode for stories in this Team: "gradual" or "immediate". Null if card aging is off. */
  card_aging_mode?: "off" | "gradual" | "immediate" | null;
  /**
   * The number of days an in-progress Story can go without activity before it is considered stale.
   * @format int64
   */
  card_aging_threshold_days?: number | null;
  /**
   * The hex color to be displayed with the Team (for example, "#ff0000").
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;
  /** The color key to be displayed with the Team. */
  color_key?:
    | "blue"
    | "purple"
    | "midnight-blue"
    | "orange"
    | "yellow-green"
    | "brass"
    | "gray"
    | "fuchsia"
    | "yellow"
    | "pink"
    | "sky-blue"
    | "green"
    | "red"
    | "black"
    | "slate"
    | "turquoise"
    | null;
  /**
   * The time/date the Team was created.
   * @format date-time
   */
  created_at?: string;
  /** The default Workflow for the Workspace the caller is authenticated against. */
  default_workflow?: WorkflowSlim | null;
  /** The description of the Team. */
  description?: string;
  /** The type of this entity. */
  entity_type?: "team";
  /**
   * The unique ID of the Team.
   * @format uuid
   */
  id?: string;
  /** The Members who followers of the Doc. */
  members?: NestedMemberSlimList;
  /** The Team's mention name, used to @mention the team in text fields. */
  mention_name?: string | null;
  /** The name of the Team. */
  name?: string;
  /**
   * The time/date the Team was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
  /** A list of Workflows associated with this Team. */
  workflows?: NestedWorkflowSlimList;
}

/** The Member who created the Doc. */
export interface MemberSlim {
  /** The type of this entity. */
  entity_type: "member:slim";
  /**
   * The unique ID of the Member.
   * @format uuid
   */
  id: string;
  /** The name of the Member. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface BulkUpdateIterationsParams1 {
  /**
   * The id of the Iteration to update.
   * @format int64
   */
  id: number;
  /**
   * The description of the Iteration.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The date this Iteration ends (ISO 8601 date format, e.g. '2024-01-15').
   * @minLength 1
   */
  end_date?: string;
  /** An array of UUIDs for any Members you want to set as Followers, replacing existing Followers. */
  follower_ids?: string[];
  /** An array of UUIDs for any Members you want to add as Followers. */
  follower_ids_add?: string[];
  /** An array of UUIDs for any Members you want to remove as Followers. */
  follower_ids_remove?: string[];
  /**
   * The name of this Iteration.
   * @minLength 1
   * @maxLength 256
   */
  name?: string;
  /**
   * The date this Iteration begins (ISO 8601 date format, e.g. '2024-01-01').
   * @minLength 1
   */
  start_date?: string;
  /** An array of UUIDs for any Teams you want to set on the Iteration, replacing existing Teams. */
  team_ids?: string[];
  /** An array of UUIDs for any Teams you want to add to the Iteration. */
  team_ids_add?: string[];
  /** An array of UUIDs for any Teams you want to remove from the Iteration. */
  team_ids_remove?: string[];
}

export interface CategoryObjectiveEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: ObjectiveSlim[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface ChecklistItem {
  /** Boolean indicating whether the Checklist Item has been completed. */
  completed?: boolean;
  /**
   * The time/date the Checklist Item was completed.
   * @format date-time
   */
  completed_at?: string | null;
  /**
   * The time/date the Checklist Item was created.
   * @format date-time
   */
  created_at?: string;
  /** The description of the Checklist Item. */
  description?: string;
  /** The type of this entity. */
  entity_type?: "checklist-item";
  /** This field can be set to another unique ID. In the case that the Checklist Item has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;
  /**
   * The unique ID of the Checklist Item.
   * @format int64
   */
  id?: number;
  /** The Members who followers of the Doc. */
  mentioned_members?: NestedMemberSlimList;
  /** A list of Teams that this Member belongs to. */
  mentioned_teams?: NestedTeamSlimList;
  /**
   * The Comment's position within the Story.
   * @format int64
   */
  position?: number;
  /** The Story this Checklist Item belongs to. */
  story?: StorySlim;
  /**
   * The time/date the Checklist Item was updated.
   * @format date-time
   */
  updated_at?: string | null;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface CreateObjectiveParams {
  /**
   * The name of the Objective.
   * @minLength 1
   * @maxLength 256
   */
  name: string;
  /** An array of IDs of Categories attached to the Objective. */
  category_ids?: number[];
  /**
   * A manual override for the time/date the Objective was completed.
   * @format date-time
   */
  completed_at_override?: string;
  /**
   * The Objective's description.
   * @maxLength 100000
   */
  description?: string;
  /** An array of UUIDs for Members to add as Owners. */
  owner_ids?: string[];
  /**
   * A manual override for the time/date the Objective was started.
   * @format date-time
   */
  started_at_override?: string;
  /** The workflow state of the Objective. */
  state?: "in progress" | "to do" | "done";
  /** An array of UUIDs for Teams to associate with the Objective. */
  team_ids?: string[];
}

export interface EpicLabelEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Label[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryCommentEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Comment;
}

export interface Workflow {
  /** Indicates if an owner is automatically assigned when an unowned story is started. */
  auto_assign_owner?: boolean;
  /**
   * The time/date the Workflow was created.
   * @format date-time
   */
  created_at?: string;
  /** The default Workflow State of the Workspace's default Workflow. */
  default_workflow_state?: WorkflowStateSlim;
  /** The description of the Workflow. */
  description?: string | null;
  /** The type of this entity. */
  entity_type?: "workflow";
  /**
   * The unique ID of the Workflow.
   * @format int64
   */
  id?: number;
  /** The name of the Workflow. */
  name?: string;
  /** A list of Teams that this Member belongs to. */
  teams?: NestedTeamSlimList;
  /**
   * The time/date the Workflow was last updated.
   * @format date-time
   */
  updated_at?: string;
  /** A list of Workflow States in the Workflow. */
  workflow_states?: NestedWorkflowStateSlimList;
}

export interface StoryStoryLinkEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: StoryLink[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface LinkedFileStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The entity for this response. */
export interface Project {
  /** The Project's abbreviation. */
  abbreviation?: string | null;
  /**
   * The Shortcut application url for the Project.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string;
  /** True if the Project has been archived. */
  archived?: boolean;
  /** The hex color assigned to the Project. */
  color?: string | null;
  /**
   * The time/date the Project was created.
   * @format date-time
   */
  created_at?: string;
  /**
   * The number of days before the thermometer is shown.
   * @format int64
   */
  days_to_thermometer?: number | null;
  /** The description of the Project. */
  description?: string | null;
  /** The type of this entity. */
  entity_type?: "project";
  /** The external ID for the Project, set when imported from another tool. */
  external_id?: string | null;
  /** The Members who followers of the Doc. */
  followers?: NestedMemberSlimList;
  /**
   * The unique ID of the Project.
   * @format int64
   */
  id?: number;
  /**
   * The number of weeks per iteration in this Project.
   * @format int64
   */
  iteration_length?: number;
  /** The name of the Project. */
  name?: string;
  /** Whether the thermometer is shown for this Project. */
  show_thermometer?: boolean;
  /**
   * The date at which the Project was started.
   * @format date-time
   */
  start_time?: string | null;
  /** A list of Stories associated with this Project. */
  stories?: NestedStorySlimList;
  /**
   * The time/date the Project was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
  /** The default Workflow for the Workspace the caller is authenticated against. */
  workflow?: WorkflowSlim | null;
}

export interface EpicCommentMentionedMemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface EpicStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of Git branches attached to the Story. */
export interface NestedBranchSlimList {
  /** @format int64 */
  current_items: number;
  entities: BranchSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface ProjectEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: Project;
}

/** Updated attributes for the template to populate. */
export interface UpdateEntityTemplateStoryContentsParams {
  /** An array of CustomField value assertions to set on the template, replacing existing values. */
  custom_fields?: CreateCustomFieldValueParams[];
  /** An array of CustomField value assertions to add to the template. */
  custom_fields_add?: CreateCustomFieldValueParams[];
  /** An array of CustomField value assertions to remove from the template. */
  custom_fields_remove?: CreateCustomFieldValueParams[];
  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string | null;
  /**
   * The description of the story.
   * @maxLength 512
   */
  description?: string;
  /**
   * The ID of the epic to be populated.
   * @format int64
   */
  epic_id?: number | null;
  /**
   * The numeric point estimate to be populated.
   * @format int64
   */
  estimate?: number | null;
  /** An array of external links to set on the template, replacing existing links. */
  external_links?: string[];
  /** An array of external links to add to the template. */
  external_links_add?: string[];
  /** An array of external links to remove from the template. */
  external_links_remove?: string[];
  /**
   * An array of file IDs to set on the template, replacing existing files.
   * @uniqueItems true
   */
  file_ids?: number[];
  /**
   * An array of file IDs to add to the template.
   * @uniqueItems true
   */
  file_ids_add?: number[];
  /**
   * An array of file IDs to remove from the template.
   * @uniqueItems true
   */
  file_ids_remove?: number[];
  /** An array of UUIDs for any Members you want to set as Followers, replacing existing Followers. */
  follower_ids?: string[];
  /** An array of UUIDs for any Members you want to add as Followers. */
  follower_ids_add?: string[];
  /** An array of UUIDs for any Members you want to remove as Followers. */
  follower_ids_remove?: string[];
  /**
   * The ID of the group to be populated.
   * @format uuid
   */
  group_id?: string | null;
  /**
   * The ID of the iteration to be populated.
   * @format int64
   */
  iteration_id?: number | null;
  /**
   * An array of label IDs to set on the template, replacing existing labels.
   * @uniqueItems true
   */
  label_ids?: number[];
  /**
   * An array of label IDs to add to the template.
   * @uniqueItems true
   */
  label_ids_add?: number[];
  /**
   * An array of label IDs to remove from the template.
   * @uniqueItems true
   */
  label_ids_remove?: number[];
  /**
   * An array of linked file IDs to set on the template, replacing existing linked files.
   * @uniqueItems true
   */
  linked_file_ids?: number[];
  /**
   * An array of linked file IDs to add to the template.
   * @uniqueItems true
   */
  linked_file_ids_add?: number[];
  /**
   * An array of linked file IDs to remove from the template.
   * @uniqueItems true
   */
  linked_file_ids_remove?: number[];
  /**
   * The name of the story.
   * @maxLength 512
   */
  name?: string;
  /** An array of UUIDs for any Members you want to set as Owners, replacing existing Owners. */
  owner_ids?: string[];
  /** An array of UUIDs for any Members you want to add as Owners. */
  owner_ids_add?: string[];
  /** An array of UUIDs for any Members you want to remove as Owners. */
  owner_ids_remove?: string[];
  /**
   * The ID of the project the story belongs to.
   * @format int64
   */
  project_id?: number | null;
  /** The type of story (feature, bug, chore). */
  story_type?: "chore" | "bug" | "feature";
  /** An array of sub-tasks to be populated by the template. */
  sub_tasks?: CreateEntityTemplateSubTaskParams[];
  /** An array of tasks to be populated by the template. */
  tasks?: CreateEntityTemplateTaskParams[];
  /**
   * The ID of the workflow state to be populated.
   * @format int64
   */
  workflow_state_id?: number | null;
}

export interface TeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CreateDocParams {
  /** The content of the new Doc. */
  content: string;
  /**
   * The title of the new Doc.
   * @minLength 1
   * @maxLength 256
   */
  title: string;
  /** Format of the content being sent. Defaults to 'html'. If 'markdown', content will be converted to HTML for storage. */
  content_format?: "markdown" | "html";
  /**
   * An optional description for the Doc.
   * @maxLength 1024
   */
  description?: string;
}

export interface EpicCommentEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: ThreadedComment[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface ThreadedCommentSlim {
  /**
   * The Shortcut application url for the Comment.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string;
  /** Whether the Comment has been deleted. */
  deleted?: boolean;
  /** The type of this entity. */
  entity_type?: "threaded-comment:slim";
  /**
   * The unique ID of the Comment.
   * @format int64
   */
  id?: number;
  /** The text of the Comment. */
  text?: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface KeyResultSlim {
  /** The type of this entity. */
  entity_type: "key-result:slim";
  /**
   * The unique ID of the Key Result.
   * @format uuid
   */
  id: string;
  /**
   * The name of the Key Result.
   * @maxLength 1024
   */
  name: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface LabelEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Label[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface Doc {
  /** A true/false boolean indicating if the Doc has been archived. */
  archived?: boolean;
  /** The Collections the Doc belongs to. */
  collections?: NestedCollectionSlimList;
  /** The Doc content in HTML format. Only present on get-doc when content_format=html. */
  content_html?: string | null;
  /** The Doc content in Markdown format. Only present on get-doc when content_format is omitted or 'markdown'. */
  content_markdown?: string | null;
  /**
   * The time/date the Doc was created.
   * @format date-time
   */
  created_at?: string;
  /** The Member who created the Doc. */
  creator?: MemberSlim;
  /** The type of this entity. */
  entity_type?: "doc";
  /** The Members who followers of the Doc. */
  followers?: NestedMemberSlimList;
  /**
   * The unique ID of the Doc.
   * @format uuid
   */
  id?: string;
  /**
   * The title of the Doc.
   * @minLength 1
   * @maxLength 256
   */
  title?: string;
  /**
   * The time/date the Doc was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface LinkedFileSlim {
  /** The type of this entity. */
  entity_type: "linked-file:slim";
  /**
   * The unique ID of the Linked File.
   * @format int64
   */
  id: number;
  /**
   * The name of the Linked File.
   * @maxLength 256
   */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface StoryFileEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: File[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface RepositoryBranchEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Branch[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The starting value of the Key Result. */
export interface UpdateKeyResultValueParams {
  /** The boolean value. */
  boolean_value?: boolean;
  /** The numeric value as a decimal string. No more than two decimal places are allowed. */
  numeric_value?: string;
}

export interface Label {
  /**
   * The Shortcut application url for the Label.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string;
  /** A true/false boolean indicating if the Label has been archived. */
  archived?: boolean;
  /** The hex color to be displayed with the Label (for example, "#ff0000"). */
  color?: string | null;
  /**
   * The time/date that the Label was created.
   * @format date-time
   */
  created_at?: string;
  /** The description of the Label. */
  description?: string;
  /** The type of this entity. */
  entity_type?: "label";
  /** The Epics associated with the Objective. */
  epics?: NestedEpicSlimList;
  /** This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;
  /**
   * The unique ID of the Label.
   * @format int64
   */
  id?: number;
  /** The name of the Label. */
  name?: string;
  /** A list of Stories associated with this Project. */
  stories?: NestedStorySlimList;
  /**
   * The time/date that the Label was updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

/** Response wrapper for story history. */
export interface StoryHistoryResponseWrapper {
  /** The URI of the JSON schema for this response. */
  $schema: string;
  /** The list of change entries, ordered chronologically by the instant each change occurred (ascending by default; descending with order_dir=desc) across all attributes. Entries at the same instant are ordered deterministically by attribute, in the same tie-break order in both directions. Ordering is stable across pages. */
  changes: StoryHistoryChange[];
  /**
   * The number of items on this page.
   * @format int64
   */
  current_items: number;
  /**
   * The current page number.
   * @format int64
   */
  current_page: number;
  /**
   * The total number of items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /** URL to fetch the next page, if available. */
  next_page_url?: string;
}

export interface FileEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: File;
}

export interface ObjectiveEpicEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: EpicSlim[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface KeyResult {
  /**
   * The time/date the Key Result was created.
   * @format date-time
   */
  created_at?: string;
  /** The starting observed value of the Key Result. */
  current_observed_value?: KeyResultValue;
  /** The starting observed value of the Key Result. */
  current_target_value?: KeyResultValue;
  /** The type of this entity. */
  entity_type?: "key-result";
  /**
   * The unique ID of the Key Result.
   * @format uuid
   */
  id?: string;
  /** The starting observed value of the Key Result. */
  initial_observed_value?: KeyResultValue;
  /**
   * The name of the Key Result.
   * @maxLength 1024
   */
  name?: string;
  objective?: ObjectiveSlim;
  /**
   * A percentage (0-100) indicating progress toward the target value.
   * @format int64
   */
  progress?: number;
  /** The type of this Key Result's values. */
  type?: "percent" | "boolean" | "numeric";
  /**
   * The time/date the Key Result was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the Key Result.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface IterationMentionedTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface FileMentionedTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface EpicMentionedMemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface BranchPullRequestEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: PullRequest[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface RepositoryEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Repository;
}

export interface LabelSlim {
  /**
   * The Shortcut application url for the Label.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url: string;
  /** The type of this entity. */
  entity_type: "label:slim";
  /**
   * The unique ID of the Label.
   * @format int64
   */
  id: number;
  /** The name of the Label. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface Reaction {
  /** The Member who created the Doc. */
  author?: MemberSlim;
  comment?: CommentSlim;
  /**
   * The time/date the Reaction was created.
   * @format date-time
   */
  created_at?: string;
  /** The emoji used for the Reaction. */
  emoji?: string;
  /** The type of this entity. */
  entity_type?: "reaction";
  /**
   * The unique ID of the Reaction.
   * @format uuid
   */
  id?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

/** A list of external links connected to the Story. */
export interface NestedExternalLinkList {
  /** @format int64 */
  current_items: number;
  entities: ExternalLink[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface EpicOwnerEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The Epics associated with the Objective. */
export interface NestedEpicSlimList {
  /** @format int64 */
  current_items: number;
  entities: EpicSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface ObjectiveEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Objective[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The Objectives associated with this Epic. */
export interface NestedObjectiveSlimList {
  /** @format int64 */
  current_items: number;
  entities: ObjectiveSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface FileSlim {
  /** The type of this entity. */
  entity_type: "file:slim";
  /**
   * The unique ID for the file.
   * @format int64
   */
  id: number;
  /** The name of the file. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface RepositoryCommitEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Commit[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface IterationAssociatedTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface KeyResultEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: KeyResult[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface EpicEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Epic;
}

export interface LabelEpicEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Epic[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface RepositoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Repository[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface DisabledFeatureError {
  /** The feature that is disabled. */
  feature_tag: string;
  /** The message explaining the error. */
  message: string;
}

export interface ObjectiveEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Objective;
}

export interface EpicMentionedTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface EntityTemplateTask {
  /** True/false boolean indicating whether the Task has been completed. */
  complete?: boolean;
  /** Full text of the Task. */
  description?: string;
  /** An array of Members who own this Task. */
  owners?: MemberSlim[];
  /**
   * The number corresponding to the Task's position within a list of Tasks on a Story.
   * @format int64
   */
  position?: number;
}

export interface LabelStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface Story {
  /**
   * The Shortcut application url for the Story.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string;
  /** True if the Story has been archived or not. */
  archived?: boolean;
  /** A true/false boolean indicating if the Story is currently blocked. */
  blocked?: boolean;
  /** A true/false boolean indicating if the Story is currently a blocker of another Story. */
  blocker?: boolean;
  /** A list of Git branches attached to the Story. */
  branches?: NestedBranchSlimList;
  /** A list of Checklist Items attached to the Story. */
  checklist_items?: NestedChecklistItemSlimList;
  /** A list of comments attached to the Story. */
  comments?: NestedCommentSlimList;
  /** A list of commits attached to the Story. */
  commits?: NestedCommitSlimList;
  /** A true/false boolean indicating if the Story has been completed. */
  completed?: boolean;
  /**
   * The time/date the Story was completed.
   * @format date-time
   */
  completed_at?: string | null;
  /**
   * A manual override for the time/date the Story was completed.
   * @format date-time
   */
  completed_at_override?: string | null;
  /**
   * The time/date the Story was created.
   * @format date-time
   */
  created_at?: string;
  /** A list of Custom Field values for the Story. */
  custom_field_values?: NestedCustomFieldValueSlimList;
  /**
   * The Story's deadline.
   * @format date-time
   */
  deadline?: string | null;
  /** The description of the Story. */
  description?: string;
  /** The type of this entity. */
  entity_type?: "story";
  /** The Epic the story belongs to. */
  epic?: EpicSlim | null;
  /**
   * The numeric point estimate of the Story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;
  /** This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;
  /** A list of external links connected to the Story. */
  external_links?: NestedExternalLinkList;
  /** A list of files attached to the Story. */
  files?: NestedFileSlimList;
  /** The Members who followers of the Doc. */
  followers?: NestedMemberSlimList;
  /**
   * The unique ID of the Story.
   * @format int64
   */
  id?: number;
  /** A list of Iterations that this Story has been attached to. */
  iterations?: NestedIterationSlimList;
  /** A list of labels attached to the Story. */
  labels?: NestedLabelSlimList;
  /** A list of linked files attached to the Story. */
  linked_files?: NestedLinkedFileSlimList;
  /** The Members who followers of the Doc. */
  mentioned_members?: NestedMemberSlimList;
  /** A list of Teams that this Member belongs to. */
  mentioned_teams?: NestedTeamSlimList;
  /**
   * The time this Story was last moved between Workflow States.
   * @format date-time
   */
  moved_at?: string | null;
  /** The name of the Story. */
  name?: string;
  /** The Members who followers of the Doc. */
  owners?: NestedMemberSlimList;
  /** The Story this Checklist Item belongs to. */
  parent_story?: StorySlim | null;
  /**
   * The Story's relative position.
   * @format int64
   */
  position?: number;
  /** The Project the story belongs to. */
  project?: ProjectSlim | null;
  /** A list of Pull/Merge Requests attached to the Story. */
  pull_requests?: NestedPullRequestSlimList;
  /** The Member who created the Doc. */
  requester?: MemberSlim;
  /** A true/false boolean indicating if the Story has been started. */
  started?: boolean;
  /**
   * The time/date the Story was started.
   * @format date-time
   */
  started_at?: string | null;
  /**
   * A manual override for the time/date the Story was started.
   * @format date-time
   */
  started_at_override?: string | null;
  /** A list of Story links attached to the Story. */
  story_links?: NestedStoryLinkSlimList;
  story_template?: StoryTemplateSlim | null;
  /** The type of Story (feature, bug, chore). */
  story_type?: "chore" | "bug" | "feature";
  /** A list of Stories associated with this Project. */
  sub_task_stories?: NestedStorySlimList;
  team?: TeamSlim | null;
  /**
   * The time/date the Story was updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
  /** The default Workflow for the Workspace the caller is authenticated against. */
  workflow?: WorkflowSlim;
  /** The default Workflow State of the Workspace's default Workflow. */
  workflow_state?: WorkflowStateSlim;
}

export interface ObjectiveCategoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Category[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface BranchSlim {
  /** The type of this entity. */
  entity_type: "branch:slim";
  /**
   * The unique ID of the Branch.
   * @format int64
   */
  id: number;
  /** The name of the Branch. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface CreateIterationParams {
  /**
   * The date this Iteration ends (ISO 8601 date format, e.g. '2024-01-15').
   * @minLength 1
   */
  end_date: string;
  /**
   * The name of this Iteration.
   * @minLength 1
   * @maxLength 256
   */
  name: string;
  /**
   * The date this Iteration begins (ISO 8601 date format, e.g. '2024-01-01').
   * @minLength 1
   */
  start_date: string;
  /**
   * The description of the Iteration.
   * @maxLength 100000
   */
  description?: string;
  /** An array of UUIDs for any Members you want to add as Followers. */
  follower_ids?: string[];
  /** An array of UUIDs for any Teams you want to associate with the Iteration. */
  team_ids?: string[];
}

export interface BulkUpdateStoriesParams1 {
  /**
   * The id of the Story to update.
   * @format int64
   */
  id: number;
  /** Controls the Story's archived state. */
  archived?: boolean;
  /** An array of objects specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a Custom Field. This will replace the current Custom Field values on the Story. Sending an empty array will delete all existing Custom Field values. */
  custom_field_values?: CreateCustomFieldValueParams[];
  /** An array of objects specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a Custom Field. These will be added to the current Custom Field values on the Story. */
  custom_field_values_add?: CreateCustomFieldValueParams[];
  /** An array of objects specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a Custom Field. These will be removed from the current Custom Field values on the Story. */
  custom_field_values_remove?: CreateCustomFieldValueParams[];
  /**
   * The due date of the Story.
   * @format date-time
   */
  deadline?: string | null;
  /**
   * The description of the story.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The ID of the Epic the Story belongs to.
   * @format int64
   */
  epic_id?: number | null;
  /**
   * The numeric point estimate of the Story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;
  /**
   * This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
   * @maxLength 128
   */
  external_id?: string;
  /**
   * An array of External Links associated with the Story. This will replace the current External Links on the Story. Sending an empty array will delete all existing External Links.
   * @uniqueItems true
   */
  external_links?: string[];
  /**
   * An array of External Links associated with the Story. These will be added to the current External Links on the Story.
   * @uniqueItems true
   */
  external_links_add?: string[];
  /**
   * An array of External Links associated with the Story. These will be removed from the current External Links on the Story.
   * @uniqueItems true
   */
  external_links_remove?: string[];
  /**
   * An array of IDs of Files attached to the Story. This will replace the current Files on the Story. Sending an empty array will delete all existing Files.
   * @uniqueItems true
   */
  file_ids?: number[];
  /**
   * An array of IDs of Files attached to the Story. These will be added to the current files on the Story.
   * @uniqueItems true
   */
  file_ids_add?: number[];
  /**
   * An array of IDs of Files attached to the Story. These will be added to the current files on the Story.
   * @uniqueItems true
   */
  file_ids_remove?: number[];
  /**
   * An array of UUIDs of the Members that follow this Story. This will replace the current Followers on the Story. Sending an empty array will delete all existing Followers.
   * @uniqueItems true
   */
  follower_ids?: string[];
  /**
   * An array of UUIDs of the Members that follow this Story. These will be added to the current followers on the Story.
   * @uniqueItems true
   */
  follower_ids_add?: string[];
  /**
   * An array of UUIDs of the Members that follow this Story. These will be removed from the current followers on the Story.
   * @uniqueItems true
   */
  follower_ids_remove?: string[];
  /**
   * The ID of the Iteration the Story belongs to.
   * @format int64
   */
  iteration_id?: number | null;
  /**
   * Labels to attach to the Story. This will replace the current Labels on the Story. Sending an empty array will delete all existing Labels.
   * @uniqueItems true
   */
  label_ids?: number[];
  /**
   * Labels to attach to the Story. These will be added to the current Labels on the Story.
   * @uniqueItems true
   */
  label_ids_add?: number[];
  /**
   * Labels to detach from the Story. These will be removed to the current Labels on the Story.
   * @uniqueItems true
   */
  label_ids_remove?: number[];
  /**
   * An array of IDs of Linked Files attached to the Story. This will replace the current Linked Files on the Story. Sending an empty array will delete all existing Linked Files.
   * @uniqueItems true
   */
  linked_file_ids?: number[];
  /**
   * An array of IDs of Linked Files attached to the Story. These will be added to the current files on the Story.
   * @uniqueItems true
   */
  linked_file_ids_add?: number[];
  /**
   * An array of IDs of Linked Files attached to the Story. These will be added to the current files on the Story.
   * @uniqueItems true
   */
  linked_file_ids_remove?: number[];
  /**
   * The name of the Story.
   * @minLength 1
   * @maxLength 512
   */
  name?: string;
  /**
   * An array of UUIDs of the Members that own this Story. This will replace the current Owners on the Story. Sending an empty array will delete all existing Owners.
   * @uniqueItems true
   */
  owner_ids?: string[];
  /**
   * An array of UUIDs of the Members that own this Story. These will be added to the current owners on the Story.
   * @uniqueItems true
   */
  owner_ids_add?: string[];
  /**
   * An array of UUIDs of the Members that own this Story. These will be removed from the current owners on the Story.
   * @uniqueItems true
   */
  owner_ids_remove?: string[];
  /**
   * The ID of the parent Story to associate with this Story (making the Story a sub-task).
   * Field only applicable when Sub-task feature is enabled.
   * @format int64
   */
  parent_story_id?: number | null;
  /**
   * The ID of the Project the Story belongs to.
   * @format int64
   */
  project_id?: number | null;
  /**
   * The ID of the Member that requested the Story. Will default to the Member making the API call if not provided.
   * @format uuid
   */
  requester_id?: string;
  /** One of "first", "last", "before", or "after". This can be used to move the given story to the first or last position in the Workflow State, or before or after a given Story. */
  set_position?: StorySetPosition;
  /** The type of Story (feature, bug, chore). */
  story_type?: "feature" | "chore" | "bug";
  /**
   * The id of the Team to associate with this Story.
   * @format uuid
   */
  team_id?: string | null;
  /**
   * The ID of the Workflow State to move the Story to.
   * @format int64
   */
  workflow_state_id?: number;
}

/** A list of Custom Field values for the Story. */
export interface NestedCustomFieldValueSlimList {
  /** @format int64 */
  current_items: number;
  entities: CustomFieldValueSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface CustomFieldStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface SearchEntitiesOutput {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: (Epic | Story | Iteration | Objective | Doc)[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryBranchEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Branch[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface BulkUpdateTeamsParams1 {
  /**
   * The UUID of the Team to update.
   * @format uuid
   */
  id: string;
  /** Whether the Team is archived. */
  archived?: boolean;
  /** The card aging mode for stories in this Team: "gradual" (fixed fade steps at 1, 2, and 4 weeks), "immediate", or "off" (explicitly disabled for this Team). Set to null to inherit the Workspace default (also clears card_aging_threshold_days). */
  card_aging_mode?: "off" | "gradual" | "immediate" | null;
  /**
   * The number of days an in-progress Story can go without activity before it is considered stale. Required when card_aging_mode is "immediate"; not allowed otherwise.
   * @format int64
   */
  card_aging_threshold_days?: number | null;
  /**
   * The hex color to be displayed with the Team (for example, "#ff0000"). Set to null to clear.
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;
  /** The color key to be displayed with the Team. Set to null to clear. */
  color_key?:
    | "blue"
    | "purple"
    | "midnight-blue"
    | "orange"
    | "yellow-green"
    | "brass"
    | "gray"
    | "fuchsia"
    | "yellow"
    | "pink"
    | "sky-blue"
    | "green"
    | "red"
    | "black"
    | "slate"
    | "turquoise"
    | null;
  /**
   * The ID of the default Workflow for Stories created in this Team. Set to null to clear.
   * @format int64
   */
  default_workflow_id?: number | null;
  /**
   * The Team's description.
   * @maxLength 4096
   */
  description?: string;
  /** An array of UUIDs for Members to set as the Team's members. Replaces current members. */
  member_ids?: string[];
  /** An array of UUIDs for Members to add to the Team. */
  member_ids_add?: string[];
  /** An array of UUIDs for Members to remove from the Team. */
  member_ids_remove?: string[];
  /**
   * The Team's mention name.
   * @minLength 1
   * @pattern ^[a-z0-9._-]+$
   */
  mention_name?: string;
  /**
   * The Team's name.
   * @minLength 1
   * @maxLength 63
   */
  name?: string;
  /** An array of IDs for Workflows to associate with the Team. Replaces current Workflows. */
  workflow_ids?: number[];
  /** An array of IDs for Workflows to add to the Team. */
  workflow_ids_add?: number[];
  /** An array of IDs for Workflows to remove from the Team. */
  workflow_ids_remove?: number[];
}

export interface IterationTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of files attached to the Story. */
export interface NestedFileSlimList {
  /** @format int64 */
  current_items: number;
  entities: FileSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface ObjectiveSlim {
  /**
   * The Shortcut application url for the Objective.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url: string;
  /** The type of this entity. */
  entity_type: "objective:slim";
  /**
   * The unique ID of the Objective.
   * @format int64
   */
  id: number;
  /** The name of the Objective. */
  name: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface TeamEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Team;
}

export interface ProjectFollowerEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CreateLinkedFileParams {
  /**
   * The name of the Linked File.
   * @minLength 1
   * @maxLength 256
   */
  name: string;
  /**
   * The integration type (e.g. google, dropbox, box, onedrive, url).
   * @minLength 1
   * @maxLength 63
   */
  type: string;
  /**
   * The URL of the Linked File.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  url: string;
  /**
   * The content type of the Linked File.
   * @maxLength 128
   */
  content_type?: string;
  /**
   * The description of the Linked File.
   * @maxLength 512
   */
  description?: string;
  /**
   * The size of the Linked File.
   * @format int64
   */
  size?: number;
  /**
   * The URL of the thumbnail.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  thumbnail_url?: string;
}

export interface CommitEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Commit[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CreateNestedStoryLinkParams {
  /** How the subject Story acts on the object Story. This can be one of: "blocks", "duplicates", "relates to" */
  verb: "blocks" | "duplicates" | "relates to";
  /**
   * The unique ID of the Story defined as object. At least one of `object_story_id` or `subject_story_id` must be present.
   * @format int64
   */
  object_story_id?: number;
  /**
   * The unique ID of the Story defined as subject. At least one of `object_story_id` or `subject_story_id` must be present.
   * @format int64
   */
  subject_story_id?: number;
}

export interface CustomFieldValueSlim {
  /** The type of this entity. */
  entity_type?: "custom-field-value:slim";
  /** The Custom Field for this value. */
  field?: CustomFieldSlim;
  /**
   * The unique public ID for the Custom Field Value.
   * @format uuid
   */
  id?: string;
  /** A string representation of the value. */
  value?: string;
}

export interface MemberTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The default Workflow for the Workspace the caller is authenticated against. */
export interface WorkflowSlim {
  /** The type of this entity. */
  entity_type: "workflow:slim";
  /**
   * The unique ID of the Workflow.
   * @format int64
   */
  id: number;
  /** The name of the Workflow. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface BulkUpdateCategoriesParams1 {
  /**
   * The id of the Category to update.
   * @format int64
   */
  id: number;
  /** A true/false boolean indicating if the Category has been archived. */
  archived?: boolean;
  /**
   * The hex color to be displayed with the Category (for example, "#ff0000").
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;
  /**
   * The name of the Category.
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
}

export interface TeamMemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface PullRequestEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: PullRequest[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface WorkflowStoryEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Story[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CreateEntityTemplateParams {
  /**
   * The name of the new entity template.
   * @minLength 1
   * @maxLength 128
   */
  name: string;
  /** A map of story attributes this template populates. */
  story_contents: CreateEntityTemplateStoryContentsParams;
  /**
   * The ID of the member creating this template.
   * @format uuid
   */
  author_id?: string;
}

export interface CreateStoryParams {
  /**
   * The name of the Story.
   * @minLength 1
   * @maxLength 512
   */
  name: string;
  /**
   * The ID of the Workflow State the Story will be in.
   * @format int64
   */
  workflow_state_id: number;
  /** Controls the Story's archived state. */
  archived?: boolean;
  /** An array of Checklist Items connected to the Story. */
  checklist_items?: CreateStoryChecklistItemParams[];
  /** An array of objects specifying a Custom Field value ID and CustomFieldEnumValue ID that represents an assertion of some value for a Custom Field value. */
  custom_field_values?: CreateCustomFieldValueParams[];
  /**
   * The due date of the Story.
   * @format date-time
   */
  deadline?: string | null;
  /**
   * The description of the story.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The ID of the Epic the Story belongs to.
   * @format int64
   */
  epic_id?: number | null;
  /**
   * The numeric point estimate of the Story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;
  /**
   * This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
   * @maxLength 128
   */
  external_id?: string;
  /**
   * An array of External Links associated with the Story.
   * @uniqueItems true
   */
  external_links?: string[];
  /**
   * An array of IDs of Files attached to the Story.
   * @uniqueItems true
   */
  file_ids?: number[];
  /**
   * An array of UUIDs of the Members that follow this Story.
   * @uniqueItems true
   */
  follower_ids?: string[];
  /**
   * The ID of the Iteration the Story belongs to.
   * @format int64
   */
  iteration_id?: number | null;
  /**
   * Labels to attach to the Story.
   * @uniqueItems true
   */
  label_ids?: number[];
  /**
   * An array of IDs of Linked Files attached to the Story.
   * @uniqueItems true
   */
  linked_file_ids?: number[];
  /**
   * An array of UUIDs of the Members that own this Story.
   * @uniqueItems true
   */
  owner_ids?: string[];
  /**
   * The ID of the parent Story to associate with this Story (making the Story a sub-task).
   * Field only applicable when Sub-task feature is enabled.
   * @format int64
   */
  parent_story_id?: number | null;
  /**
   * The ID of the Project the Story belongs to.
   * @format int64
   */
  project_id?: number | null;
  /**
   * The ID of the Member that requested the Story. Will default to the Member making the API call if not provided.
   * @format uuid
   */
  requester_id?: string;
  /** One of "first", "last", "before", or "after". This can be used to move the given story to the first or last position in the Workflow State, or before or after a given Story. */
  set_position?: StorySetPosition;
  /** An array of Story links attached to the Story. */
  story_links?: CreateNestedStoryLinkParams[];
  /** The type of Story (feature, bug, chore). */
  story_type?: "feature" | "chore" | "bug";
  /**
   * The id of the Team to associate with this Story.
   * @format uuid
   */
  team_id?: string | null;
}

export interface StoryLinkedFileEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: LinkedFile[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface EpicObjectiveEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: ObjectiveSlim[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface TeamSlim {
  /**
   * The Shortcut application url for the Team.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url: string;
  /** The type of this entity. */
  entity_type: "team:slim";
  /**
   * The unique ID of the Team.
   * @format uuid
   */
  id: string;
  /** The name of the Team. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface EpicCommentMentionedTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface CategoryEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: Category;
}

export interface StoryCustomFieldValueEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: CustomFieldValue[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface PullRequestEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  entity: PullRequest;
}

/** The entity for this response. */
export interface Whoami {
  /** The authorization details for the token used to authenticate this request. */
  authorization?: TokenAuthorization;
  /** The default Workflow for the Workspace the caller is authenticated against. */
  default_workflow?: WorkflowSlim;
  /** The default Workflow State of the Workspace's default Workflow. */
  default_workflow_state?: WorkflowStateSlim;
  /** The type of this entity. */
  entity_type?: "whoami";
  /** The Member the caller is authenticated as. */
  member?: Member;
  /** The Workspace the caller is authenticated against. */
  workspace?: WorkspaceSlim;
}

export interface ExternalLink {
  /** The type of this entity. */
  entity_type?: "external-link";
  /**
   * The URL of the external link.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  value?: string;
}

export interface Token {
  /**
   * The time/date the Token was created.
   * @format date-time
   */
  created_at?: string;
  /** The description of the Token. */
  description?: string;
  /** True if the Token has been disabled. */
  disabled?: boolean;
  /** The email address of the Member this Token belongs to. */
  email_address?: string;
  /** The type of this entity. */
  entity_type?: "token";
  /**
   * The unique ID of the Token.
   * @format uuid
   */
  id?: string;
  /**
   * The date the Token was last used. Null if never used.
   * @format date-time
   */
  last_used_at?: string | null;
  /** The Member who created the Doc. */
  member?: MemberSlim;
  /** The scopes granted to this token. Possible values: "read", "write", "story-write", "comment-write", "admin". Null for legacy tokens. */
  scopes?: string[] | null;
  /**
   * The time/date the Token was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface StoryChecklistItemMentionedTeamEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Team[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface BulkUpdateLabelsParams1 {
  /**
   * The id of the Label to update.
   * @format int64
   */
  id: number;
  /** A true/false boolean indicating if the Label has been archived. */
  archived?: boolean;
  /**
   * The hex color to be displayed with the Label (for example, "#ff0000").
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;
  /**
   * The description of the Label.
   * @maxLength 1024
   */
  description?: string;
  /**
   * The name of the Label.
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
}

export interface CategorySlim {
  /** The type of this entity. */
  entity_type: "category:slim";
  /**
   * The unique ID of the Category.
   * @format int64
   */
  id: number;
  /**
   * The name of the Category.
   * @maxLength 128
   */
  name: string;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface StoryChecklistItemEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: ChecklistItem[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface IterationFollowerEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** A list of labels attached to the Story. */
export interface NestedLabelSlimList {
  /** @format int64 */
  current_items: number;
  entities: LabelSlim[];
  /**
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  list_url: string;
  /** @format int64 */
  total_items: number;
}

export interface Iteration {
  /**
   * The Shortcut application url for the Iteration.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url?: string;
  /** A list of Teams that this Member belongs to. */
  associated_teams?: NestedTeamSlimList;
  /**
   * The time/date the Iteration was created.
   * @format date-time
   */
  created_at?: string;
  /** The description of the Iteration. */
  description?: string | null;
  /** The end date of the Iteration (ISO 8601 date format, e.g. '2024-01-15'). */
  end_date?: string;
  /** The type of this entity. */
  entity_type?: "iteration";
  /** The Members who followers of the Doc. */
  followers?: NestedMemberSlimList;
  /**
   * The unique ID of the Iteration.
   * @format int64
   */
  id?: number;
  /** A list of labels attached to the Story. */
  labels?: NestedLabelSlimList;
  /** The Members who followers of the Doc. */
  mentioned_members?: NestedMemberSlimList;
  /** A list of Teams that this Member belongs to. */
  mentioned_teams?: NestedTeamSlimList;
  /** The name of the Iteration. */
  name?: string;
  /** The start date of the Iteration (ISO 8601 date format, e.g. '2024-01-01'). */
  start_date?: string;
  /** A list of Stories associated with this Project. */
  stories?: NestedStorySlimList;
  /** A list of Teams that this Member belongs to. */
  teams?: NestedTeamSlimList;
  /**
   * The time/date the Iteration was last updated.
   * @format date-time
   */
  updated_at?: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface BulkUpdateStoryCommentsParams1 {
  /**
   * The id of the Comment to update.
   * @format int64
   */
  id: number;
  /**
   * The comment text.
   * @maxLength 100000
   */
  text?: string;
}

export interface UnusableEntitlementError {
  /**
   * Short tag describing the unusable entitlement action taken by the user.
   * @minLength 1
   * @maxLength 63
   */
  entitlement_tag: string;
  /**
   * Message displayed to the user on why their action failed.
   * @minLength 1
   * @maxLength 256
   */
  message: string;
  /** The tag for violating an entitlement action. */
  reason_tag: "entitlement-violation";
}

/** The entity for this response. */
export interface EpicStats {
  /**
   * The average cycle time (in seconds) of done Stories in this Epic. Null if no Stories are done.
   * @format int64
   */
  average_cycle_time: number | null;
  /**
   * The average lead time (in seconds) of done Stories in this Epic. Null if no Stories are done.
   * @format int64
   */
  average_lead_time: number | null;
  /**
   * The date of the last update of a Story in this Epic.
   * @format date-time
   */
  last_story_update: string | null;
  /**
   * The total number of points in this Epic.
   * @format int64
   */
  num_points: number;
  /**
   * The total number of backlog points in this Epic.
   * @format int64
   */
  num_points_backlog: number;
  /**
   * The total number of completed points in this Epic.
   * @format int64
   */
  num_points_done: number;
  /**
   * The total number of started points in this Epic.
   * @format int64
   */
  num_points_started: number;
  /**
   * The total number of unstarted points in this Epic.
   * @format int64
   */
  num_points_unstarted: number;
  /**
   * The total number of documents associated with this Epic.
   * @format int64
   */
  num_related_documents: number;
  /**
   * The total number of backlog Stories in this Epic.
   * @format int64
   */
  num_stories_backlog: number;
  /**
   * The total number of done Stories in this Epic.
   * @format int64
   */
  num_stories_done: number;
  /**
   * The total number of started Stories in this Epic.
   * @format int64
   */
  num_stories_started: number;
  /**
   * The total number of Stories in this Epic.
   * @format int64
   */
  num_stories_total: number;
  /**
   * The total number of Stories with no point estimate.
   * @format int64
   */
  num_stories_unestimated: number;
  /**
   * The total number of unstarted Stories in this Epic.
   * @format int64
   */
  num_stories_unstarted: number;
}

export interface IterationEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Iteration[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryCommentMentionedMemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface StoryExternalLinkEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: ExternalLink[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface BranchEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Branch[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

export interface LinkedFileMentionedMemberEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Member[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** The starting observed value of the Key Result. */
export interface KeyResultValue {
  /**
   * The time/date this value was created.
   * @format date-time
   */
  created_at: string;
  /** The Member who created the Doc. */
  creator: MemberSlim;
  /** The boolean value. Present for boolean key results. */
  boolean_value?: boolean;
  /** The numeric value as a decimal string. Present for numeric and percent key results. */
  numeric_value?: string;
}

export interface CreateEpicParams {
  /**
   * The Epic's name.
   * @minLength 1
   * @maxLength 256
   */
  name: string;
  /**
   * A manual override for the time/date the Epic was completed.
   * @format date-time
   */
  completed_at_override?: string;
  /**
   * The Epic's deadline.
   * @format date-time
   */
  deadline?: string | null;
  /**
   * The Epic's description.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The ID of the Epic State.
   * @format int64
   */
  epic_state_id?: number;
  /**
   * An external ID for the Epic.
   * @maxLength 128
   */
  external_id?: string;
  /** An array of UUIDs for Members to add as Followers. */
  follower_ids?: string[];
  /** An array of IDs for Objectives to which this Epic is related. */
  objective_ids?: number[];
  /** An array of UUIDs for Members to add as Owners. */
  owner_ids?: string[];
  /**
   * The Epic's planned start date.
   * @format date-time
   */
  planned_start_date?: string | null;
  /**
   * The UUID of the Member that requested the Epic.
   * @format uuid
   */
  requested_by_id?: string;
  /**
   * A manual override for the time/date the Epic was started.
   * @format date-time
   */
  started_at_override?: string;
  /** An array of UUIDs for Teams to associate with the Epic. */
  team_ids?: string[];
}

export interface EntityTemplateEntityWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /** The entity for this response. */
  entity: EntityTemplate;
}

/** A container entity for the attributes this template should populate. */
export interface EntityTemplateStoryContents {
  /** An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
  custom_fields?: CreateCustomFieldValueParams[];
  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string;
  /** The description of the story. */
  description?: string | null;
  /** A string description of this resource. */
  entity_type?: string;
  /** The Epic the story belongs to. */
  epic?: EpicSlim;
  /**
   * The numeric point estimate of the story.
   * @format int64
   */
  estimate?: number;
  /** An array of external links connected to the story. */
  external_links?: string[];
  /** An array of files attached to the story. */
  files?: FileSlim[];
  /** An array of Members listed as Followers. */
  followers?: MemberSlim[];
  /** The Iteration the story belongs to. */
  iteration?: IterationSlim;
  /** An array of labels attached to the story. */
  labels?: LabelSlim[];
  /** An array of linked files attached to the story. */
  linked_files?: LinkedFileSlim[];
  /** The name of the story. */
  name?: string;
  /** An array of Members who own the story. */
  owners?: MemberSlim[];
  /** The Project the story belongs to. */
  project?: ProjectSlim;
  /** The type of story (feature, bug, chore). */
  story_type?: string;
  /** An array of sub-tasks connected to the story. */
  sub_tasks?: EntityTemplateSubTask[];
  /** An array of tasks connected to the story. */
  tasks?: EntityTemplateTask[];
  team?: TeamSlim;
  /** The default Workflow State of the Workspace's default Workflow. */
  workflow_state?: WorkflowStateSlim;
}

/** The entity for this response. */
export interface Collection {
  /** A true/false boolean indicating if the Collection has been archived. */
  archived?: boolean;
  /**
   * The time/date the Collection was created.
   * @format date-time
   */
  created_at?: string;
  /** The type of this entity. */
  entity_type?: "collection";
  /** True if the current Member has favorited the Collection. */
  favorited?: boolean;
  /**
   * The unique ID of the Collection.
   * @format uuid
   */
  id?: string;
  /**
   * The name of the Collection.
   * @minLength 1
   * @maxLength 63
   */
  name?: string;
  parent_collection?: CollectionSlim | null;
  /**
   * A resolvable URI for the entity.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri?: string;
}

export interface BulkUpdateEpicsParams1 {
  /**
   * The id of the Epic to update.
   * @format int64
   */
  id: number;
  /** Whether the Epic is archived. */
  archived?: boolean;
  /**
   * A manual override for the time/date the Epic was completed.
   * @format date-time
   */
  completed_at_override?: string | null;
  /**
   * The Epic's deadline.
   * @format date-time
   */
  deadline?: string | null;
  /**
   * The Epic's description.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The ID of the Epic State.
   * @format int64
   */
  epic_state_id?: number;
  /**
   * An external ID for the Epic.
   * @maxLength 128
   */
  external_id?: string;
  /** An array of UUIDs for Members to set as Followers. This will replace the current Followers on the Epic. Sending an empty array will delete all existing Followers. */
  follower_ids?: string[];
  /** An array of UUIDs for Members to add as Followers. These will be added to the current Followers on the Epic. */
  follower_ids_add?: string[];
  /** An array of UUIDs for Members to remove as Followers. These will be removed from the current Followers on the Epic. */
  follower_ids_remove?: string[];
  /**
   * The Epic's name.
   * @minLength 1
   * @maxLength 256
   */
  name?: string;
  /** An array of IDs for Objectives to which this Epic is related. This will replace the current Objectives on the Epic. Sending an empty array will remove all existing Objectives. */
  objective_ids?: number[];
  /** An array of IDs for Objectives to add to the Epic. These will be added to the current Objectives on the Epic. */
  objective_ids_add?: number[];
  /** An array of IDs for Objectives to remove from the Epic. These will be removed from the current Objectives on the Epic. */
  objective_ids_remove?: number[];
  /** An array of UUIDs for Members to set as Owners. This will replace the current Owners on the Epic. Sending an empty array will delete all existing Owners. */
  owner_ids?: string[];
  /** An array of UUIDs for Members to add as Owners. These will be added to the current Owners on the Epic. */
  owner_ids_add?: string[];
  /** An array of UUIDs for Members to remove as Owners. These will be removed from the current Owners on the Epic. */
  owner_ids_remove?: string[];
  /**
   * The Epic's planned start date.
   * @format date-time
   */
  planned_start_date?: string | null;
  /**
   * The UUID of the Member that requested the Epic.
   * @format uuid
   */
  requested_by_id?: string;
  /**
   * A manual override for the time/date the Epic was started.
   * @format date-time
   */
  started_at_override?: string | null;
  /** An array of UUIDs for Teams to associate with the Epic. This will replace the current Teams on the Epic. Sending an empty array will remove all existing Teams. */
  team_ids?: string[];
  /** An array of UUIDs for Teams to add to the Epic. These will be added to the current Teams on the Epic. */
  team_ids_add?: string[];
  /** An array of UUIDs for Teams to remove from the Epic. These will be removed from the current Teams on the Epic. */
  team_ids_remove?: string[];
}

/** The Project the story belongs to. */
export interface ProjectSlim {
  /**
   * The Shortcut application url for the Project.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  app_url: string;
  /** The type of this entity. */
  entity_type: "project:slim";
  /**
   * The unique ID of the Project.
   * @format int64
   */
  id: number;
  /** The name of the Project. */
  name: string;
  /**
   * A resolvable URI for the entity that will return the full representation.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  uri: string;
}

export interface StoryCommentCommentEntityListWrapper {
  /**
   * The URI for the json-schema for this response.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  $schema: string;
  /**
   * The number of items on the current page.
   * @format int64
   */
  current_items: number;
  /**
   * The number of the current page.
   * @format int64
   */
  current_page: number;
  /** The entities for this page. */
  entities: Comment[];
  /**
   * The number of total items across all pages.
   * @format int64
   */
  total_items: number;
  /**
   * The total number of pages.
   * @format int64
   */
  total_pages: number;
  /**
   * A URL to get the next page. Will be absent on the last page.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  next_page_url?: string;
}

/** Error response body. */
export interface ApiError {
  /** Human-readable description of the error. */
  message: string;
  /** Machine-readable error tag. */
  tag?: string;
  /** Field-level details, when present. */
  errors?: Record<string, any>;
  [key: string]: any;
}

export interface BulkDeleteCategoriesParams {
  /**
   * Ids of the archived Categories to delete.
   * @maxItems 100
   * @minItems 1
   */
  category_ids: number[];
}

export interface BulkUpdateCategoriesParams {
  /**
   * Payloads for each Category to update.
   * @maxItems 100
   * @minItems 1
   */
  categories: BulkUpdateCategoriesParams1[];
}

export interface BulkCreateCategoriesParams {
  /**
   * Payloads for each Category to create.
   * @maxItems 100
   * @minItems 1
   */
  categories: CreateCategoryParams[];
}

export interface UpdateCategoryParams {
  /** A true/false boolean indicating if the Category has been archived. */
  archived?: boolean;
  /**
   * The hex color to be displayed with the Category (for example, "#ff0000").
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;
  /**
   * The name of the Category.
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
}

export interface CreateCollectionParams {
  /**
   * The name of the new Collection. Must be between 1 and 40 characters and unique (case-insensitive) among Collections with the same parent.
   * @minLength 1
   * @maxLength 63
   */
  name: string;
  /**
   * The ID of an existing Collection to nest the new Collection under.
   * @format uuid
   */
  parent_collection_id?: string;
}

export interface BulkDeleteCustomFieldsParams {
  /**
   * The unique IDs of the Custom Fields to delete.
   * @maxItems 100
   * @minItems 1
   */
  custom_field_ids: string[];
}

export interface BulkUpdateCustomFieldsParams {
  /**
   * Payloads for each Custom Field to update.
   * @maxItems 100
   * @minItems 1
   */
  custom_fields: BulkUpdateCustomFieldsParams1[];
}

export interface UpdateCustomFieldParams {
  /**
   * Move this Custom Field to after the field with this ID.
   * @format uuid
   */
  after_id?: string;
  /**
   * Move this Custom Field to before the field with this ID.
   * @format uuid
   */
  before_id?: string;
  /**
   * A description of the Custom Field.
   * @maxLength 1024
   */
  description?: string;
  /** Whether the Custom Field is enabled. */
  enabled?: boolean;
  /**
   * An identifier for the icon set for this Custom Field.
   * @minLength 1
   * @maxLength 63
   */
  icon_set_identifier?: string;
  /**
   * The name of the Custom Field.
   * @minLength 1
   * @maxLength 63
   */
  name?: string;
  /** The ordered list of enum values. Existing values not included will be deleted. */
  values?: UpdateCustomFieldEnumValueParams[];
  /** Enum values to add to the Custom Field. Existing values are unchanged. */
  values_add?: UpdateCustomFieldEnumValueParams[];
  /** IDs of enum values to remove from the Custom Field. */
  values_remove?: string[];
}

export interface CreateDocBody {
  /** The content of the new Doc. */
  content: string;
  /**
   * The title of the new Doc.
   * @minLength 1
   * @maxLength 256
   */
  title: string;
  /** The IDs of Collections to add the new Doc to. */
  collection_ids?: string[];
  /** Format of the content being sent. Defaults to 'html'. If 'markdown', content will be converted to HTML for storage. */
  content_format?: "markdown" | "html";
  /**
   * An optional description for the Doc.
   * @maxLength 1024
   */
  description?: string;
}

export interface BulkCreateDocsParams {
  /**
   * Payloads for each Doc to create.
   * @maxItems 100
   * @minItems 1
   */
  documents: CreateDocParams[];
}

export interface BulkDeleteEntityTemplatesParams {
  /**
   * UUIDs of the Entity Templates to delete.
   * @maxItems 100
   * @minItems 1
   */
  entity_template_ids: string[];
}

export interface BulkUpdateEntityTemplatesParams {
  /**
   * Payloads for each Entity Template to update.
   * @maxItems 100
   * @minItems 1
   */
  entity_templates: BulkUpdateEntityTemplatesParams1[];
}

export interface BulkCreateEntityTemplatesParams {
  /**
   * Payloads for each Entity Template to create.
   * @maxItems 100
   * @minItems 1
   */
  entity_templates: CreateEntityTemplateParams[];
}

export interface UpdateEntityTemplateParams {
  /**
   * The updated template name.
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
  /** Updated attributes for the template to populate. */
  story_contents?: UpdateEntityTemplateStoryContentsParams;
}

export interface BulkDeleteEpicsParams {
  /**
   * Ids of the Epics to delete.
   * @maxItems 100
   * @minItems 1
   */
  epic_ids: number[];
}

export interface BulkUpdateEpicsParams {
  /**
   * Payloads for each Epic to update.
   * @maxItems 100
   * @minItems 1
   */
  epics: BulkUpdateEpicsParams1[];
}

export interface BulkCreateEpicsParams {
  /**
   * Payloads for each Epic to create.
   * @maxItems 100
   * @minItems 1
   */
  epics: CreateEpicParams[];
}

export interface UpdateEpicParams {
  /** Whether the Epic is archived. */
  archived?: boolean;
  /**
   * A manual override for the time/date the Epic was completed.
   * @format date-time
   */
  completed_at_override?: string | null;
  /**
   * The Epic's deadline.
   * @format date-time
   */
  deadline?: string | null;
  /**
   * The Epic's description.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The ID of the Epic State.
   * @format int64
   */
  epic_state_id?: number;
  /**
   * An external ID for the Epic.
   * @maxLength 128
   */
  external_id?: string;
  /** An array of UUIDs for Members to set as Followers. This will replace the current Followers on the Epic. Sending an empty array will delete all existing Followers. */
  follower_ids?: string[];
  /** An array of UUIDs for Members to add as Followers. These will be added to the current Followers on the Epic. */
  follower_ids_add?: string[];
  /** An array of UUIDs for Members to remove as Followers. These will be removed from the current Followers on the Epic. */
  follower_ids_remove?: string[];
  /**
   * The Epic's name.
   * @minLength 1
   * @maxLength 256
   */
  name?: string;
  /** An array of IDs for Objectives to which this Epic is related. This will replace the current Objectives on the Epic. Sending an empty array will remove all existing Objectives. */
  objective_ids?: number[];
  /** An array of IDs for Objectives to add to the Epic. These will be added to the current Objectives on the Epic. */
  objective_ids_add?: number[];
  /** An array of IDs for Objectives to remove from the Epic. These will be removed from the current Objectives on the Epic. */
  objective_ids_remove?: number[];
  /** An array of UUIDs for Members to set as Owners. This will replace the current Owners on the Epic. Sending an empty array will delete all existing Owners. */
  owner_ids?: string[];
  /** An array of UUIDs for Members to add as Owners. These will be added to the current Owners on the Epic. */
  owner_ids_add?: string[];
  /** An array of UUIDs for Members to remove as Owners. These will be removed from the current Owners on the Epic. */
  owner_ids_remove?: string[];
  /**
   * The Epic's planned start date.
   * @format date-time
   */
  planned_start_date?: string | null;
  /**
   * The UUID of the Member that requested the Epic.
   * @format uuid
   */
  requested_by_id?: string;
  /**
   * A manual override for the time/date the Epic was started.
   * @format date-time
   */
  started_at_override?: string | null;
  /** An array of UUIDs for Teams to associate with the Epic. This will replace the current Teams on the Epic. Sending an empty array will remove all existing Teams. */
  team_ids?: string[];
  /** An array of UUIDs for Teams to add to the Epic. These will be added to the current Teams on the Epic. */
  team_ids_add?: string[];
  /** An array of UUIDs for Teams to remove from the Epic. These will be removed from the current Teams on the Epic. */
  team_ids_remove?: string[];
}

export interface CreateEpicHealthParams {
  /** The health status. */
  status: "At Risk" | "On Track" | "Off Track" | "No Health";
  /** The text body of the Health update. */
  text?: string;
}

export interface BulkDeleteEpicCommentsParams {
  /**
   * Ids of the Comments to delete.
   * @maxItems 100
   * @minItems 1
   */
  comment_ids: number[];
}

export interface BulkUpdateEpicCommentsParams {
  /**
   * Payloads for each Comment to update.
   * @maxItems 100
   * @minItems 1
   */
  comments: BulkUpdateEpicCommentsParams1[];
}

export interface BulkCreateEpicCommentsParams {
  /**
   * Payloads for each Comment to create.
   * @maxItems 100
   * @minItems 1
   */
  comments: CreateEpicCommentParams[];
}

export interface UpdateEpicCommentParams {
  /**
   * The comment text.
   * @maxLength 100000
   */
  text?: string;
}

export interface UploadFilesParams {
  /**
   * The ID of the Story to attach the files to.
   * @format int64
   */
  story_id?: number;
  [key: string]: any;
}

export interface BulkDeleteFilesParams {
  /**
   * Ids of the Files to delete.
   * @maxItems 100
   * @minItems 1
   */
  file_ids: number[];
}

export interface BulkDeleteIterationsParams {
  /**
   * Ids of the Iterations to delete.
   * @maxItems 100
   * @minItems 1
   */
  iteration_ids: number[];
}

export interface BulkUpdateIterationsParams {
  /**
   * Payloads for each Iteration to update.
   * @maxItems 100
   * @minItems 1
   */
  iterations: BulkUpdateIterationsParams1[];
}

export interface BulkCreateIterationsParams {
  /**
   * Payloads for each Iteration to create.
   * @maxItems 100
   * @minItems 1
   */
  iterations: CreateIterationParams[];
}

export interface UpdateIterationParams {
  /**
   * The description of the Iteration.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The date this Iteration ends (ISO 8601 date format, e.g. '2024-01-15').
   * @minLength 1
   */
  end_date?: string;
  /** An array of UUIDs for any Members you want to set as Followers, replacing existing Followers. */
  follower_ids?: string[];
  /** An array of UUIDs for any Members you want to add as Followers. */
  follower_ids_add?: string[];
  /** An array of UUIDs for any Members you want to remove as Followers. */
  follower_ids_remove?: string[];
  /**
   * The name of this Iteration.
   * @minLength 1
   * @maxLength 256
   */
  name?: string;
  /**
   * The date this Iteration begins (ISO 8601 date format, e.g. '2024-01-01').
   * @minLength 1
   */
  start_date?: string;
  /** An array of UUIDs for any Teams you want to set on the Iteration, replacing existing Teams. */
  team_ids?: string[];
  /** An array of UUIDs for any Teams you want to add to the Iteration. */
  team_ids_add?: string[];
  /** An array of UUIDs for any Teams you want to remove from the Iteration. */
  team_ids_remove?: string[];
}

export interface UpdateKeyResultParams {
  /** The starting value of the Key Result. */
  initial_observed_value?: UpdateKeyResultValueParams;
  /**
   * The new name of the Key Result.
   * @maxLength 1024
   */
  name?: string;
  /** The starting value of the Key Result. */
  observed_value?: UpdateKeyResultValueParams;
  /** The starting value of the Key Result. */
  target_value?: UpdateKeyResultValueParams;
}

export interface BulkDeleteLabelsParams {
  /**
   * Ids of the Labels to delete.
   * @maxItems 100
   * @minItems 1
   */
  label_ids: number[];
}

export interface BulkUpdateLabelsParams {
  /**
   * Payloads for each Label to update.
   * @maxItems 100
   * @minItems 1
   */
  labels: BulkUpdateLabelsParams1[];
}

export interface BulkCreateLabelsParams {
  /**
   * Payloads for each Label to create.
   * @maxItems 100
   * @minItems 1
   */
  labels: CreateLabelParams[];
}

export interface UpdateLabelParams {
  /** A true/false boolean indicating if the Label has been archived. */
  archived?: boolean;
  /**
   * The hex color to be displayed with the Label (for example, "#ff0000").
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;
  /**
   * The description of the Label.
   * @maxLength 1024
   */
  description?: string;
  /**
   * The name of the Label.
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
}

export interface BulkDeleteLinkedFilesParams {
  /**
   * Ids of the Linked Files to delete.
   * @maxItems 100
   * @minItems 1
   */
  linked_file_ids: number[];
}

export interface BulkUpdateLinkedFilesParams {
  /**
   * Payloads for each Linked File to update.
   * @maxItems 100
   * @minItems 1
   */
  linked_files: BulkUpdateLinkedFilesParams1[];
}

export interface BulkCreateLinkedFilesParams {
  /**
   * Payloads for each Linked File to create.
   * @maxItems 100
   * @minItems 1
   */
  linked_files: CreateLinkedFileParams[];
}

export interface UpdateLinkedFileParams {
  /**
   * The description of the Linked File.
   * @maxLength 512
   */
  description?: string;
  /**
   * The name of the Linked File.
   * @minLength 1
   * @maxLength 256
   */
  name?: string;
  /**
   * The URL of the thumbnail.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  thumbnail_url?: string;
  /**
   * The integration type (e.g. google, dropbox, box, onedrive, url).
   * @minLength 1
   * @maxLength 63
   */
  type?: string;
  /**
   * The URL of the Linked File.
   * @maxLength 2048
   * @pattern ^https?://.+$
   */
  url?: string;
}

export interface BulkUpdateMembersParams {
  /**
   * Payloads for each Member to update.
   * @maxItems 100
   * @minItems 1
   */
  members: BulkUpdateMembersParams1[];
}

export interface UpdateMemberParams {
  /** Set to true to disable the Member, false to re-enable them. */
  disabled?: boolean;
  /** The new role to assign to the Member. One of "admin", "member", or "observer". */
  role?: "member" | "observer" | "admin";
}

export interface BulkDeleteObjectivesParams {
  /**
   * Ids of the Objectives to delete.
   * @maxItems 100
   * @minItems 1
   */
  objective_ids: number[];
}

export interface BulkUpdateObjectivesParams {
  /**
   * Payloads for each Objective to update.
   * @maxItems 100
   * @minItems 1
   */
  objectives: BulkUpdateObjectivesParams1[];
}

export interface BulkCreateObjectivesParams {
  /**
   * Payloads for each Objective to create.
   * @maxItems 100
   * @minItems 1
   */
  objectives: CreateObjectiveParams[];
}

export interface UpdateObjectiveParams {
  /** Whether the Objective is archived. */
  archived?: boolean;
  /** An array of IDs of Categories to set on the Objective. Replaces current Categories. */
  category_ids?: number[];
  /** An array of IDs of Categories to add to the Objective. */
  category_ids_add?: number[];
  /** An array of IDs of Categories to remove from the Objective. */
  category_ids_remove?: number[];
  /**
   * A manual override for the time/date the Objective was completed.
   * @format date-time
   */
  completed_at_override?: string | null;
  /**
   * The Objective's description.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The name of the Objective.
   * @minLength 1
   * @maxLength 256
   */
  name?: string;
  /** An array of UUIDs for Members to set as Owners. This will replace the current Owners on the Objective. Sending an empty array will delete all existing Owners. */
  owner_ids?: string[];
  /** An array of UUIDs for Members to add as Owners. These will be added to the current Owners on the Objective. */
  owner_ids_add?: string[];
  /** An array of UUIDs for Members to remove as Owners. These will be removed from the current Owners on the Objective. */
  owner_ids_remove?: string[];
  /**
   * A manual override for the time/date the Objective was started.
   * @format date-time
   */
  started_at_override?: string | null;
  /** The workflow state of the Objective. */
  state?: "in progress" | "to do" | "done";
  /** An array of UUIDs for Teams to associate with the Objective. This will replace the current Teams on the Objective. Sending an empty array will remove all existing Teams. */
  team_ids?: string[];
  /** An array of UUIDs for Teams to add to the Objective. These will be added to the current Teams on the Objective. */
  team_ids_add?: string[];
  /** An array of UUIDs for Teams to remove from the Objective. These will be removed from the current Teams on the Objective. */
  team_ids_remove?: string[];
}

export interface CreateObjectiveHealthParams {
  /** The health status. */
  status: "At Risk" | "On Track" | "Off Track" | "No Health";
  /** The text body of the Health update. */
  text?: string;
}

export interface CreateProjectParams {
  /**
   * The name of the Project.
   * @minLength 1
   * @maxLength 2048
   */
  name: string;
  /**
   * The abbreviation for the Project. Should be kept to 3 characters at most.
   * @maxLength 63
   */
  abbreviation?: string;
  /**
   * The hex color for the Project (e.g., "#ff0000").
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;
  /**
   * The description of the Project.
   * @maxLength 100000
   */
  description?: string;
  /**
   * An external ID for the Project, for use when importing from another tool.
   * @maxLength 128
   */
  external_id?: string;
  /** UUIDs of Members to add as Followers of the Project. */
  follower_ids?: string[];
  /**
   * The number of weeks per iteration in this Project.
   * @format int64
   */
  iteration_length?: number;
  /**
   * The date at which the Project was started.
   * @format date-time
   */
  start_time?: string;
  /**
   * The ID of the Workflow for the Project. Defaults to the workspace default.
   * @format int64
   */
  workflow_id?: number;
}

export interface UpdateProjectParams {
  /**
   * The abbreviation for the Project. Set to null to clear.
   * @maxLength 63
   */
  abbreviation?: string | null;
  /** Whether the Project is archived. */
  archived?: boolean;
  /**
   * The hex color for the Project. Set to null to clear.
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;
  /**
   * The number of days before the thermometer is shown.
   * @format int64
   */
  days_to_thermometer?: number;
  /**
   * The description of the Project.
   * @maxLength 100000
   */
  description?: string | null;
  /** UUIDs of Members to set as Followers. Replaces current followers. */
  follower_ids?: string[];
  /** UUIDs of Members to add as Followers. */
  follower_ids_add?: string[];
  /** UUIDs of Members to remove as Followers. */
  follower_ids_remove?: string[];
  /**
   * The name of the Project.
   * @minLength 1
   * @maxLength 2048
   */
  name?: string;
  /** Whether the thermometer is shown. */
  show_thermometer?: boolean;
}

export interface CreateStoryBody {
  /**
   * The name of the Story.
   * @minLength 1
   * @maxLength 512
   */
  name: string;
  /**
   * The ID of the Workflow State the Story will be in.
   * @format int64
   */
  workflow_state_id: number;
  /** Controls the Story's archived state. */
  archived?: boolean;
  /** An array of Checklist Items connected to the Story. */
  checklist_items?: CreateStoryChecklistItemParams[];
  /** An array of objects specifying a Custom Field value ID and CustomFieldEnumValue ID that represents an assertion of some value for a Custom Field value. */
  custom_field_values?: CreateCustomFieldValueParams[];
  /**
   * The due date of the Story.
   * @format date-time
   */
  deadline?: string | null;
  /**
   * The description of the story.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The ID of the Epic the Story belongs to.
   * @format int64
   */
  epic_id?: number | null;
  /**
   * The numeric point estimate of the Story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;
  /**
   * This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
   * @maxLength 128
   */
  external_id?: string;
  /**
   * An array of External Links associated with the Story.
   * @uniqueItems true
   */
  external_links?: string[];
  /**
   * An array of IDs of Files attached to the Story.
   * @uniqueItems true
   */
  file_ids?: number[];
  /**
   * An array of UUIDs of the Members that follow this Story.
   * @uniqueItems true
   */
  follower_ids?: string[];
  /**
   * The ID of the Iteration the Story belongs to.
   * @format int64
   */
  iteration_id?: number | null;
  /**
   * Labels to attach to the Story.
   * @uniqueItems true
   */
  label_ids?: number[];
  /**
   * An array of IDs of Linked Files attached to the Story.
   * @uniqueItems true
   */
  linked_file_ids?: number[];
  /**
   * An array of UUIDs of the Members that own this Story.
   * @uniqueItems true
   */
  owner_ids?: string[];
  /**
   * The ID of the parent Story to associate with this Story (making the Story a sub-task).
   * Field only applicable when Sub-task feature is enabled.
   * @format int64
   */
  parent_story_id?: number | null;
  /**
   * The ID of the Project the Story belongs to.
   * @format int64
   */
  project_id?: number | null;
  /**
   * The ID of the Member that requested the Story. Will default to the Member making the API call if not provided.
   * @format uuid
   */
  requester_id?: string;
  /** One of "first", "last", "before", or "after". This can be used to move the given story to the first or last position in the Workflow State, or before or after a given Story. */
  set_position?: StorySetPosition;
  /** An array of Story links attached to the Story. */
  story_links?: CreateNestedStoryLinkParams[];
  /** The type of Story (feature, bug, chore). */
  story_type?: "feature" | "chore" | "bug";
  /**
   * The id of the Team to associate with this Story.
   * @format uuid
   */
  team_id?: string | null;
}

export interface BulkDeleteStoriesParams {
  /**
   * Ids of the archived Stories to delete.
   * @maxItems 100
   * @minItems 1
   */
  story_ids: number[];
}

export interface BulkUpdateStoriesParams {
  /**
   * Payloads for each Story to update.
   * @maxItems 100
   * @minItems 1
   */
  stories: BulkUpdateStoriesParams1[];
}

export interface BulkCreateStoriesParams {
  /**
   * Payloads for each Story to create.
   * @maxItems 100
   * @minItems 1
   */
  stories: CreateStoryParams[];
}

export interface UpdateStoryParams {
  /** Controls the Story's archived state. */
  archived?: boolean;
  /** An array of objects specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a Custom Field. This will replace the current Custom Field values on the Story. Sending an empty array will delete all existing Custom Field values. */
  custom_field_values?: CreateCustomFieldValueParams[];
  /** An array of objects specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a Custom Field. These will be added to the current Custom Field values on the Story. */
  custom_field_values_add?: CreateCustomFieldValueParams[];
  /** An array of objects specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a Custom Field. These will be removed from the current Custom Field values on the Story. */
  custom_field_values_remove?: CreateCustomFieldValueParams[];
  /**
   * The due date of the Story.
   * @format date-time
   */
  deadline?: string | null;
  /**
   * The description of the story.
   * @maxLength 100000
   */
  description?: string;
  /**
   * The ID of the Epic the Story belongs to.
   * @format int64
   */
  epic_id?: number | null;
  /**
   * The numeric point estimate of the Story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;
  /**
   * This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
   * @maxLength 128
   */
  external_id?: string;
  /**
   * An array of External Links associated with the Story. This will replace the current External Links on the Story. Sending an empty array will delete all existing External Links.
   * @uniqueItems true
   */
  external_links?: string[];
  /**
   * An array of External Links associated with the Story. These will be added to the current External Links on the Story.
   * @uniqueItems true
   */
  external_links_add?: string[];
  /**
   * An array of External Links associated with the Story. These will be removed from the current External Links on the Story.
   * @uniqueItems true
   */
  external_links_remove?: string[];
  /**
   * An array of IDs of Files attached to the Story. This will replace the current Files on the Story. Sending an empty array will delete all existing Files.
   * @uniqueItems true
   */
  file_ids?: number[];
  /**
   * An array of IDs of Files attached to the Story. These will be added to the current files on the Story.
   * @uniqueItems true
   */
  file_ids_add?: number[];
  /**
   * An array of IDs of Files attached to the Story. These will be added to the current files on the Story.
   * @uniqueItems true
   */
  file_ids_remove?: number[];
  /**
   * An array of UUIDs of the Members that follow this Story. This will replace the current Followers on the Story. Sending an empty array will delete all existing Followers.
   * @uniqueItems true
   */
  follower_ids?: string[];
  /**
   * An array of UUIDs of the Members that follow this Story. These will be added to the current followers on the Story.
   * @uniqueItems true
   */
  follower_ids_add?: string[];
  /**
   * An array of UUIDs of the Members that follow this Story. These will be removed from the current followers on the Story.
   * @uniqueItems true
   */
  follower_ids_remove?: string[];
  /**
   * The ID of the Iteration the Story belongs to.
   * @format int64
   */
  iteration_id?: number | null;
  /**
   * Labels to attach to the Story. This will replace the current Labels on the Story. Sending an empty array will delete all existing Labels.
   * @uniqueItems true
   */
  label_ids?: number[];
  /**
   * Labels to attach to the Story. These will be added to the current Labels on the Story.
   * @uniqueItems true
   */
  label_ids_add?: number[];
  /**
   * Labels to detach from the Story. These will be removed to the current Labels on the Story.
   * @uniqueItems true
   */
  label_ids_remove?: number[];
  /**
   * An array of IDs of Linked Files attached to the Story. This will replace the current Linked Files on the Story. Sending an empty array will delete all existing Linked Files.
   * @uniqueItems true
   */
  linked_file_ids?: number[];
  /**
   * An array of IDs of Linked Files attached to the Story. These will be added to the current files on the Story.
   * @uniqueItems true
   */
  linked_file_ids_add?: number[];
  /**
   * An array of IDs of Linked Files attached to the Story. These will be added to the current files on the Story.
   * @uniqueItems true
   */
  linked_file_ids_remove?: number[];
  /**
   * The name of the Story.
   * @minLength 1
   * @maxLength 512
   */
  name?: string;
  /**
   * An array of UUIDs of the Members that own this Story. This will replace the current Owners on the Story. Sending an empty array will delete all existing Owners.
   * @uniqueItems true
   */
  owner_ids?: string[];
  /**
   * An array of UUIDs of the Members that own this Story. These will be added to the current owners on the Story.
   * @uniqueItems true
   */
  owner_ids_add?: string[];
  /**
   * An array of UUIDs of the Members that own this Story. These will be removed from the current owners on the Story.
   * @uniqueItems true
   */
  owner_ids_remove?: string[];
  /**
   * The ID of the parent Story to associate with this Story (making the Story a sub-task).
   * Field only applicable when Sub-task feature is enabled.
   * @format int64
   */
  parent_story_id?: number | null;
  /**
   * The ID of the Project the Story belongs to.
   * @format int64
   */
  project_id?: number | null;
  /**
   * The ID of the Member that requested the Story. Will default to the Member making the API call if not provided.
   * @format uuid
   */
  requester_id?: string;
  /** One of "first", "last", "before", or "after". This can be used to move the given story to the first or last position in the Workflow State, or before or after a given Story. */
  set_position?: StorySetPosition;
  /** The type of Story (feature, bug, chore). */
  story_type?: "feature" | "chore" | "bug";
  /**
   * The id of the Team to associate with this Story.
   * @format uuid
   */
  team_id?: string | null;
  /**
   * The ID of the Workflow State to move the Story to.
   * @format int64
   */
  workflow_state_id?: number;
}

export interface BulkDeleteStoryCommentsParams {
  /**
   * Ids of the Comments to delete.
   * @maxItems 100
   * @minItems 1
   */
  comment_ids: number[];
}

export interface BulkUpdateStoryCommentsParams {
  /**
   * Payloads for each Comment to update.
   * @maxItems 100
   * @minItems 1
   */
  comments: BulkUpdateStoryCommentsParams1[];
}

export interface BulkCreateStoryCommentsParams {
  /**
   * Payloads for each Comment to create.
   * @maxItems 100
   * @minItems 1
   */
  comments: CreateStoryCommentParams[];
}

export interface CreateStoryChecklistItemBody {
  /**
   * The Checklist Item description.
   * @minLength 1
   * @maxLength 2048
   */
  description: string;
  /** True/false boolean indicating whether the Checklist Item is completed. Defaults to false. */
  completed?: boolean;
  /**
   * This field can be set to another unique ID. In the case that the Checklist Item has been imported from another tool, the ID in the other tool can be indicated here.
   * @maxLength 128
   */
  external_id?: string;
  /** One of "first", "last", "before", or "after". This can be used to move the Checklist Item to the first or last position in the Story's checklist, or before or after a given Checklist Item. */
  set_position?: SetPosition;
}

export interface BulkDeleteStoryChecklistItemsParams {
  /**
   * Ids of the Checklist Items to delete.
   * @maxItems 100
   * @minItems 1
   */
  checklist_item_ids: number[];
}

export interface BulkUpdateStoryChecklistItemsParams {
  /**
   * Payloads for each Checklist Item to update.
   * @maxItems 100
   * @minItems 1
   */
  checklist_items: BulkUpdateStoryChecklistItemsParams1[];
}

export interface BulkCreateStoryChecklistItemsParams {
  /**
   * Payloads for each Checklist Item to create.
   * @maxItems 100
   * @minItems 1
   */
  checklist_items: CreateStoryChecklistItemParams[];
}

export interface UpdateStoryCommentParams {
  /**
   * The comment text.
   * @maxLength 100000
   */
  text?: string;
}

export interface CreateStoryCommentReactionParams {
  /** The emoji short-code to add. E.g. `:thumbsup::skin-tone-4:`. */
  emoji: string;
}

export interface UpdateStoryChecklistItemParams {
  /** True/false boolean indicating whether the Checklist Item is completed. Defaults to false. */
  completed?: boolean;
  /**
   * The Checklist Item description.
   * @minLength 1
   * @maxLength 2048
   */
  description?: string;
  /** One of "first", "last", "before", or "after". This can be used to move the Checklist Item to the first or last position in the Story's checklist, or before or after a given Checklist Item. */
  set_position?: SetPosition;
}

export interface BulkDeleteStoryLinksParams {
  /**
   * IDs of the Story Links to delete.
   * @maxItems 100
   * @minItems 1
   */
  story_link_ids: number[];
}

export interface BulkUpdateStoryLinksParams {
  /**
   * Payloads for each Story Link to update.
   * @maxItems 100
   * @minItems 1
   */
  story_links: UpdateStoryLinkParams[];
}

export interface BulkCreateStoryLinksParams {
  /**
   * Payloads for each Story Link to create.
   * @maxItems 100
   * @minItems 1
   */
  story_links: CreateStoryLinkParams[];
}

export interface UpdateStoryLinkBody {
  /**
   * The unique ID of the Story defined as object.
   * @format int64
   */
  object_story_id?: number;
  /**
   * The unique ID of the Story defined as subject.
   * @format int64
   */
  subject_story_id?: number;
  /** How the subject Story acts on the object Story. This can be one of: "blocks", "duplicates", "relates to" */
  verb?: "blocks" | "duplicates" | "relates to";
}

export interface BulkUpdateTeamsParams {
  /**
   * Payloads for each Team to update.
   * @maxItems 100
   * @minItems 1
   */
  teams: BulkUpdateTeamsParams1[];
}

export interface BulkCreateTeamsParams {
  /**
   * Payloads for each Team to create.
   * @maxItems 100
   * @minItems 1
   */
  teams: CreateTeamParams[];
}

export interface UpdateTeamParams {
  /** Whether the Team is archived. */
  archived?: boolean;
  /** The card aging mode for stories in this Team: "gradual" (fixed fade steps at 1, 2, and 4 weeks), "immediate", or "off" (explicitly disabled for this Team). Set to null to inherit the Workspace default (also clears card_aging_threshold_days). */
  card_aging_mode?: "off" | "gradual" | "immediate" | null;
  /**
   * The number of days an in-progress Story can go without activity before it is considered stale. Required when card_aging_mode is "immediate"; not allowed otherwise.
   * @format int64
   */
  card_aging_threshold_days?: number | null;
  /**
   * The hex color to be displayed with the Team (for example, "#ff0000"). Set to null to clear.
   * @format css-color
   * @minLength 1
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;
  /** The color key to be displayed with the Team. Set to null to clear. */
  color_key?:
    | "blue"
    | "purple"
    | "midnight-blue"
    | "orange"
    | "yellow-green"
    | "brass"
    | "gray"
    | "fuchsia"
    | "yellow"
    | "pink"
    | "sky-blue"
    | "green"
    | "red"
    | "black"
    | "slate"
    | "turquoise"
    | null;
  /**
   * The ID of the default Workflow for Stories created in this Team. Set to null to clear.
   * @format int64
   */
  default_workflow_id?: number | null;
  /**
   * The Team's description.
   * @maxLength 4096
   */
  description?: string;
  /** An array of UUIDs for Members to set as the Team's members. Replaces current members. */
  member_ids?: string[];
  /** An array of UUIDs for Members to add to the Team. */
  member_ids_add?: string[];
  /** An array of UUIDs for Members to remove from the Team. */
  member_ids_remove?: string[];
  /**
   * The Team's mention name.
   * @minLength 1
   * @pattern ^[a-z0-9._-]+$
   */
  mention_name?: string;
  /**
   * The Team's name.
   * @minLength 1
   * @maxLength 63
   */
  name?: string;
  /** An array of IDs for Workflows to associate with the Team. Replaces current Workflows. */
  workflow_ids?: number[];
  /** An array of IDs for Workflows to add to the Team. */
  workflow_ids_add?: number[];
  /** An array of IDs for Workflows to remove from the Team. */
  workflow_ids_remove?: number[];
}

/** One of "first", "last", "before", or "after". This can be used to move the Checklist Item to the first or last position in the Story's checklist, or before or after a given Checklist Item. */
export interface SetPosition {
  position: "after" | "last" | "before" | "first";
  /** @format int64 */
  anchor_checklist_item_id?: number;
}

/** One of "first", "last", "before", or "after". This can be used to move the given story to the first or last position in the Workflow State, or before or after a given Story. */
export interface StorySetPosition {
  position: "after" | "last" | "before" | "first";
  /** @format int64 */
  anchor_story_id?: number;
}
