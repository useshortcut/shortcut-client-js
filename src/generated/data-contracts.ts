/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BasicWorkspaceInfo {
  url_slug: string;
  estimate_scale: number[];
}

/**
 * Branch refers to a VCS branch. Branches are feature branches associated with Shortcut Stories.
 */
export interface Branch {
  /** A string description of this resource. */
  entity_type: string;

  /** A true/false boolean indicating if the Branch has been deleted. */
  deleted: boolean;

  /** The name of the Branch. */
  name: string;

  /** A true/false boolean indicating if the Branch is persistent; e.g. master. */
  persistent: boolean;

  /**
   * The time/date the Branch was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** An array of PullRequests attached to the Branch (there is usually only one). */
  pull_requests: PullRequest[];

  /** The IDs of the Branches the Branch has been merged into. */
  merged_branch_ids: number[];

  /**
   * The unique ID of the Branch.
   * @format int64
   */
  id?: number | null;

  /** The URL of the Branch. */
  url: string;

  /**
   * The ID of the Repository that contains the Branch.
   * @format int64
   */
  repository_id?: number | null;

  /**
   * The time/date the Branch was created.
   * @format date-time
   */
  created_at?: string | null;
}

/**
 * A Category can be used to associate Milestones.
 */
export interface Category {
  /** A true/false boolean indicating if the Category has been archived. */
  archived: boolean;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * The hex color to be displayed with the Category (for example, "#ff0000").
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;

  /** The name of the Category. */
  name: string;

  /** The type of entity this Category is associated with; currently Milestone is the only type of Category. */
  type: string;

  /**
   * The time/date that the Category was updated.
   * @format date-time
   */
  updated_at: string;

  /** This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Category.
   * @format int64
   */
  id: number;

  /**
   * The time/date that the Category was created.
   * @format date-time
   */
  created_at: string;
}

/**
 * A Comment is any note added within the Comment field of a Story.
 */
export interface Comment {
  /** The Shortcut application url for the Comment. */
  app_url: string;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * The ID of the Story on which the Comment appears.
   * @format int64
   */
  story_id: number;

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /**
   * The unique ID of the Member who is the Comment's author.
   * @format uuid
   */
  author_id?: string | null;

  /** The unique IDs of the Member who are mentioned in the Comment. */
  member_mention_ids: string[];

  /**
   * The time/date when the Comment was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** The unique IDs of the Group who are mentioned in the Comment. */
  group_mention_ids: string[];

  /** This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Comment.
   * @format int64
   */
  id: number;

  /**
   * The Comments numerical position in the list from oldest to newest.
   * @format int64
   */
  position: number;

  /** A set of Reactions to this Comment. */
  reactions: Reaction[];

  /**
   * The time/date when the Comment was created.
   * @format date-time
   */
  created_at: string;

  /** The text of the Comment. */
  text: string;
}

/**
 * Commit refers to a VCS commit and all associated details.
 */
export interface Commit {
  /** A string description of this resource. */
  entity_type: string;

  /**
   * The ID of the Member that authored the Commit, if known.
   * @format uuid
   */
  author_id?: string | null;

  /** The Commit hash. */
  hash: string;

  /**
   * The time/date the Commit was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** The IDs of the Branches the Commit has been merged into. */
  merged_branch_ids: number[];

  /**
   * The unique ID of the Commit.
   * @format int64
   */
  id?: number | null;

  /** The URL of the Commit. */
  url: string;

  /** The email address of the VCS user that authored the Commit. */
  author_email: string;

  /**
   * The time/date the Commit was pushed.
   * @format date-time
   */
  timestamp: string;

  /** The Identity of the VCS user that authored the Commit. */
  author_identity: Identity;

  /**
   * The ID of the Repository that contains the Commit.
   * @format int64
   */
  repository_id?: number | null;

  /**
   * The time/date the Commit was created.
   * @format date-time
   */
  created_at: string;

  /** The Commit message. */
  message: string;
}

export interface CreateCategory {
  /** The name of the new Category. */
  name: string;

  /**
   * The hex color to be displayed with the Category (for example, "#ff0000").
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;

  /** This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;

  /** The type of entity this Category is associated with; currently Milestone is the only type of Category. */
  type: "milestone";
}

/**
 * Request parameters for creating a Category with a Milestone.
 */
export interface CreateCategoryParams {
  /** The name of the new Category. */
  name: string;

  /**
   * The hex color to be displayed with the Category (for example, "#ff0000").
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;

  /** This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;
}

export interface CreateComment {
  /** The comment text. */
  text: string;

  /**
   * The Member ID of the Comment's author. Defaults to the user identified by the API token.
   * @format uuid
   */
  author_id?: string;

  /**
   * Defaults to the time/date the comment is created, but can be set to reflect another date.
   * @format date-time
   */
  created_at?: string;

  /**
   * Defaults to the time/date the comment is last updated, but can be set to reflect another date.
   * @format date-time
   */
  updated_at?: string;

  /** This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;
}

export interface CreateCommentComment {
  /** The comment text. */
  text: string;

  /**
   * The Member ID of the Comment's author. Defaults to the user identified by the API token.
   * @format uuid
   */
  author_id?: string;

  /**
   * Defaults to the time/date the comment is created, but can be set to reflect another date.
   * @format date-time
   */
  created_at?: string;

  /**
   * Defaults to the time/date the comment is last updated, but can be set to reflect another date.
   * @format date-time
   */
  updated_at?: string;

  /** This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;
}

/**
 * Request paramaters for creating an entirely new entity template.
 */
export interface CreateEntityTemplate {
  /** The name of the new entity template */
  name: string;

  /**
   * The id of the user creating this template.
   * @format uuid
   */
  author_id?: string;

  /** A map of story attributes this template populates. */
  story_contents: CreateStoryContents;
}

export interface CreateEpic {
  /** The Epic's description. */
  description?: string;

  /** An array of Labels attached to the Epic. */
  labels?: CreateLabelParams[];

  /**
   * A manual override for the time/date the Epic was completed.
   * @format date-time
   */
  completed_at_override?: string;

  /** The Epic's name. */
  name: string;

  /**
   * The Epic's planned start date.
   * @format date-time
   */
  planned_start_date?: string | null;

  /** `Deprecated` The Epic's state (to do, in progress, or done); will be ignored when `epic_state_id` is set. */
  state?: "in progress" | "to do" | "done";

  /**
   * The ID of the Milestone this Epic is related to.
   * @format int64
   */
  milestone_id?: number | null;

  /**
   * The ID of the member that requested the epic.
   * @format uuid
   */
  requested_by_id?: string;

  /**
   * The ID of the Epic State.
   * @format int64
   */
  epic_state_id?: number;

  /**
   * A manual override for the time/date the Epic was started.
   * @format date-time
   */
  started_at_override?: string;

  /**
   * The ID of the group to associate with the epic.
   * @format uuid
   */
  group_id?: string | null;

  /**
   * Defaults to the time/date it is created but can be set to reflect another date.
   * @format date-time
   */
  updated_at?: string;

  /** An array of UUIDs for any Members you want to add as Followers on this new Epic. */
  follower_ids?: string[];

  /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
  owner_ids?: string[];

  /** This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;

  /**
   * The Epic's deadline.
   * @format date-time
   */
  deadline?: string | null;

  /**
   * Defaults to the time/date it is created but can be set to reflect another date.
   * @format date-time
   */
  created_at?: string;
}

export interface CreateEpicComment {
  /** The comment text. */
  text: string;

  /**
   * The Member ID of the Comment's author. Defaults to the user identified by the API token.
   * @format uuid
   */
  author_id?: string;

  /**
   * Defaults to the time/date the comment is created, but can be set to reflect another date.
   * @format date-time
   */
  created_at?: string;

  /**
   * Defaults to the time/date the comment is last updated, but can be set to reflect another date.
   * @format date-time
   */
  updated_at?: string;

  /** This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;
}

export interface CreateGroup {
  /** The description of the Group. */
  description?: string;

  /** The Member ids to add to this Group. */
  member_ids?: string[];

  /** The Workflow ids to add to the Group. */
  workflow_ids?: number[];

  /** The name of this Group. */
  name: string;

  /** The mention name of this Group. */
  mention_name: string;

  /**
   * The color you wish to use for the Group in the system.
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;

  /** The color key you wish to use for the Group in the system. */
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
   * The Icon id for the avatar of this Group.
   * @format uuid
   */
  display_icon_id?: string;
}

export interface CreateIteration {
  /** An array of UUIDs for any Members you want to add as Followers. */
  follower_ids?: string[];

  /** An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI. */
  group_ids?: string[];

  /** An array of Labels attached to the Iteration. */
  labels?: CreateLabelParams[];

  /** The description of the Iteration. */
  description?: string;

  /** The name of this Iteration. */
  name: string;

  /** The date this Iteration begins, e.g. 2019-07-01. */
  start_date: string;

  /** The date this Iteration ends, e.g. 2019-07-01. */
  end_date: string;
}

/**
 * Request parameters for creating a Label on a Shortcut Story.
 */
export interface CreateLabelParams {
  /** The name of the new Label. */
  name: string;

  /** The description of the new Label. */
  description?: string;

  /**
   * The hex color to be displayed with the Label (for example, "#ff0000").
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;

  /** This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;
}

export interface CreateLinkedFile {
  /** The description of the file. */
  description?: string;

  /**
   * The ID of the linked story.
   * @format int64
   */
  story_id?: number;

  /** The name of the file. */
  name: string;

  /**
   * The URL of the thumbnail, if the integration provided it.
   * @pattern ^https?://.+$
   */
  thumbnail_url?: string;

  /** The integration type of the file (e.g. google, dropbox, box). */
  type: "google" | "url" | "dropbox" | "box" | "onedrive";

  /**
   * The filesize, if the integration provided it.
   * @format int64
   */
  size?: number;

  /**
   * The UUID of the member that uploaded the file.
   * @format uuid
   */
  uploader_id?: string;

  /** The content type of the image (e.g. txt/plain). */
  content_type?: string;

  /**
   * The URL of linked file.
   * @pattern ^https?://.+$
   */
  url: string;
}

export interface CreateMilestone {
  /** The name of the Milestone. */
  name: string;

  /** The Milestone's description. */
  description?: string;

  /** The workflow state that the Milestone is in. */
  state?: "in progress" | "to do" | "done";

  /**
   * A manual override for the time/date the Milestone was started.
   * @format date-time
   */
  started_at_override?: string;

  /**
   * A manual override for the time/date the Milestone was completed.
   * @format date-time
   */
  completed_at_override?: string;

  /** An array of IDs of Categories attached to the Milestone. */
  categories?: CreateCategoryParams[];
}

export interface CreateOrDeleteReaction {
  /** The emoji short-code to add / remove. E.g. `:thumbsup::skin-tone-4:`. */
  emoji: string;
}

export interface CreateProject {
  /** The Project description. */
  description?: string;

  /**
   * The color you wish to use for the Project in the system.
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;

  /** The name of the Project. */
  name: string;

  /**
   * The date at which the Project was started.
   * @format date-time
   */
  start_time?: string;

  /**
   * Defaults to the time/date it is created but can be set to reflect another date.
   * @format date-time
   */
  updated_at?: string;

  /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
  follower_ids?: string[];

  /** This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;

  /**
   * The ID of the team the project belongs to.
   * @format int64
   */
  team_id: number;

  /**
   * The number of weeks per iteration in this Project.
   * @format int64
   */
  iteration_length?: number;

  /** The Project abbreviation used in Story summaries. Should be kept to 3 characters at most. */
  abbreviation?: string;

  /**
   * Defaults to the time/date it is created but can be set to reflect another date.
   * @format date-time
   */
  created_at?: string;
}

export interface CreateStories {
  /** An array of stories to be created. */
  stories: CreateStoryParams[];
}

/**
 * Request parameters for creating a Comment on a Shortcut Story.
 */
export interface CreateStoryCommentParams {
  /** The comment text. */
  text: string;

  /**
   * The Member ID of the Comment's author. Defaults to the user identified by the API token.
   * @format uuid
   */
  author_id?: string;

  /**
   * Defaults to the time/date the comment is created, but can be set to reflect another date.
   * @format date-time
   */
  created_at?: string;

  /**
   * Defaults to the time/date the comment is last updated, but can be set to reflect another date.
   * @format date-time
   */
  updated_at?: string;

  /** This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;
}

/**
 * A map of story attributes this template populates.
 */
export interface CreateStoryContents {
  /** The description of the story. */
  description?: string;

  /** A string description of this resource. */
  entity_type?: string;

  /** An array of labels to be populated by the template. */
  labels?: CreateLabelParams[];

  /** The type of story (feature, bug, chore). */
  story_type?: string;

  /** An array of linked files attached to the story. */
  linked_files?: LinkedFile[];

  /** An array of the attached file IDs to be populated. */
  file_ids?: number[];

  /** The name of the story. */
  name?: string;

  /**
   * The ID of the epic the to be populated.
   * @format int64
   */
  epic_id?: number | null;

  /** An array of external links to be populated. */
  external_links?: string[];

  /**
   * The ID of the iteration the to be populated.
   * @format int64
   */
  iteration_id?: number | null;

  /** An array of tasks to be populated by the template. */
  tasks?: EntityTemplateTask[];

  /** An array of label ids attached to the story. */
  label_ids?: number[];

  /**
   * The ID of the group to be populated.
   * @format uuid
   */
  group_id?: string | null;

  /**
   * The ID of the workflow state the story is currently in.
   * @format int64
   */
  workflow_state_id?: number;

  /** An array of UUIDs for any Members listed as Followers. */
  follower_ids?: string[];

  /** An array of UUIDs of the owners of this story. */
  owner_ids?: string[];

  /**
   * The numeric point estimate to be populated.
   * @format int64
   */
  estimate?: number | null;

  /** An array of files attached to the story. */
  files?: File[];

  /**
   * The ID of the project the story belongs to.
   * @format int64
   */
  project_id?: number;

  /** An array of the linked file IDs to be populated. */
  linked_file_ids?: number[];

  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string | null;
}

export interface CreateStoryLink {
  /** The type of link. */
  verb: "blocks" | "duplicates" | "relates to";

  /**
   * The ID of the subject Story.
   * @format int64
   */
  subject_id: number;

  /**
   * The ID of the object Story.
   * @format int64
   */
  object_id: number;
}

/**
 * Request parameters for creating a Story Link within a Story.
 */
export interface CreateStoryLinkParams {
  /**
   * The unique ID of the Story defined as subject.
   * @format int64
   */
  subject_id?: number;

  /** How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to". */
  verb: "blocks" | "duplicates" | "relates to";

  /**
   * The unique ID of the Story defined as object.
   * @format int64
   */
  object_id?: number;
}

/**
 * Request parameters for creating a story.
 */
export interface CreateStoryParams {
  /** The description of the story. */
  description?: string;

  /** Controls the story's archived state. */
  archived?: boolean;

  /** An array of story links attached to the story. */
  story_links?: CreateStoryLinkParams[];

  /** An array of labels attached to the story. */
  labels?: CreateLabelParams[];

  /** The type of story (feature, bug, chore). */
  story_type?: "feature" | "chore" | "bug";

  /** An array of IDs of files attached to the story. */
  file_ids?: number[];

  /**
   * A manual override for the time/date the Story was completed.
   * @format date-time
   */
  completed_at_override?: string;

  /** The name of the story. */
  name: string;

  /** An array of comments to add to the story. */
  comments?: CreateStoryCommentParams[];

  /**
   * The ID of the epic the story belongs to.
   * @format int64
   */
  epic_id?: number | null;

  /**
   * The id of the story template used to create this story, if applicable.
   * @format uuid
   */
  story_template_id?: string | null;

  /** An array of External Links associated with this story. */
  external_links?: string[];

  /**
   * The ID of the member that requested the story.
   * @format uuid
   */
  requested_by_id?: string;

  /**
   * The ID of the iteration the story belongs to.
   * @format int64
   */
  iteration_id?: number | null;

  /** An array of tasks connected to the story. */
  tasks?: CreateTaskParams[];

  /**
   * A manual override for the time/date the Story was started.
   * @format date-time
   */
  started_at_override?: string;

  /**
   * The id of the group to associate with this story.
   * @format uuid
   */
  group_id?: string | null;

  /**
   * The ID of the workflow state the story will be in.
   * @format int64
   */
  workflow_state_id?: number;

  /**
   * The time/date the Story was updated.
   * @format date-time
   */
  updated_at?: string;

  /** An array of UUIDs of the followers of this story. */
  follower_ids?: string[];

  /** An array of UUIDs of the owners of this story. */
  owner_ids?: string[];

  /** This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;

  /**
   * The numeric point estimate of the story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;

  /**
   * The ID of the project the story belongs to.
   * @format int64
   */
  project_id?: number | null;

  /** An array of IDs of linked files attached to the story. */
  linked_file_ids?: number[];

  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string | null;

  /**
   * The time/date the Story was created.
   * @format date-time
   */
  created_at?: string;
}

export interface CreateTask {
  /** The Task description. */
  description: string;

  /** True/false boolean indicating whether the Task is completed. Defaults to false. */
  complete?: boolean;

  /** An array of UUIDs for any members you want to add as Owners on this new Task. */
  owner_ids?: string[];

  /**
   * Defaults to the time/date the Task is created but can be set to reflect another creation time/date.
   * @format date-time
   */
  created_at?: string;

  /**
   * Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.
   * @format date-time
   */
  updated_at?: string;

  /** This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;
}

/**
 * Request parameters for creating a Task on a Story.
 */
export interface CreateTaskParams {
  /** The Task description. */
  description: string;

  /** True/false boolean indicating whether the Task is completed. Defaults to false. */
  complete?: boolean;

  /** An array of UUIDs for any members you want to add as Owners on this new Task. */
  owner_ids?: string[];

  /**
   * Defaults to the time/date the Task is created but can be set to reflect another creation time/date.
   * @format date-time
   */
  created_at?: string;

  /**
   * Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.
   * @format date-time
   */
  updated_at?: string;

  /** This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;
}

export interface DeleteStories {
  /** An array of IDs of Stories to delete. */
  story_ids: number[];
}

/**
 * An entity template can be used to prefill various fields when creating new stories.
 */
export interface EntityTemplate {
  /** A string description of this resource. */
  entity_type: string;

  /**
   * The unique identifier for the entity template.
   * @format uuid
   */
  id: string;

  /**
   * The time/date when the entity template was created.
   * @format date-time
   */
  created_at: string;

  /**
   * The time/date when the entity template was last updated.
   * @format date-time
   */
  updated_at: string;

  /** The template's name. */
  name: string;

  /**
   * The unique ID of the member who created the template.
   * @format uuid
   */
  author_id: string;

  /**
   * The last time that someone created an entity using this template.
   * @format date-time
   */
  last_used_at: string;

  /** A container entity for the attributes this template should populate. */
  story_contents: StoryContents;
}

/**
 * Request parameters for specifying how to pre-populate a task through a template.
 */
export interface EntityTemplateTask {
  /** The Task description. */
  description: string;

  /** True/false boolean indicating whether the Task is completed. Defaults to false. */
  complete?: boolean;

  /** An array of UUIDs for any members you want to add as Owners on this new Task. */
  owner_ids?: string[];

  /** This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string;
}

/**
 * An Epic is a collection of stories that together might make up a release, a milestone, or some other large initiative that your organization is working on.
 */
export interface Epic {
  /** The Shortcut application url for the Epic. */
  app_url: string;

  /** The Epic's description. */
  description: string;

  /** True/false boolean that indicates whether the Epic is archived or not. */
  archived: boolean;

  /** A true/false boolean indicating if the Epic has been started. */
  started: boolean;

  /** A string description of this resource. */
  entity_type: string;

  /** An array of Labels attached to the Epic. */
  labels: LabelSlim[];

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /** An array of Member IDs that have been mentioned in the Epic description. */
  member_mention_ids: string[];

  /** The IDs of Projects related to this Epic. */
  project_ids: number[];

  /**
   * The number of stories in this epic which are not associated with a project.
   * @format int64
   */
  stories_without_projects: number;

  /**
   * A manual override for the time/date the Epic was completed.
   * @format date-time
   */
  completed_at_override?: string | null;

  /**
   * The ID of the associated productboard integration.
   * @format uuid
   */
  productboard_plugin_id?: string | null;

  /**
   * The time/date the Epic was started.
   * @format date-time
   */
  started_at?: string | null;

  /**
   * The time/date the Epic was completed.
   * @format date-time
   */
  completed_at?: string | null;

  /** The name of the Epic. */
  name: string;

  /** A true/false boolean indicating if the Epic has been completed. */
  completed: boolean;

  /** A nested array of threaded comments. */
  comments: ThreadedComment[];

  /** The URL of the associated productboard feature. */
  productboard_url?: string | null;

  /**
   * The Epic's planned start date.
   * @format date-time
   */
  planned_start_date?: string | null;

  /** `Deprecated` The workflow state that the Epic is in. */
  state: string;

  /**
   * The ID of the Milestone this Epic is related to.
   * @format int64
   */
  milestone_id?: number | null;

  /**
   * The ID of the Member that requested the epic.
   * @format uuid
   */
  requested_by_id: string;

  /**
   * The ID of the Epic State.
   * @format int64
   */
  epic_state_id: number;

  /** An array of Label ids attached to the Epic. */
  label_ids: number[];

  /**
   * A manual override for the time/date the Epic was started.
   * @format date-time
   */
  started_at_override?: string | null;

  /** @format uuid */
  group_id?: string | null;

  /**
   * The time/date the Epic was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** An array of Group IDs that have been mentioned in the Epic description. */
  group_mention_ids: string[];

  /**
   * The ID of the associated productboard feature.
   * @format uuid
   */
  productboard_id?: string | null;

  /** An array of UUIDs for any Members you want to add as Followers on this Epic. */
  follower_ids: string[];

  /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
  owner_ids: string[];

  /** This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Epic.
   * @format int64
   */
  id: number;

  /**
   * The Epic's relative position in the Epic workflow state.
   * @format int64
   */
  position: number;

  /** The name of the associated productboard feature. */
  productboard_name?: string | null;

  /**
   * The Epic's deadline.
   * @format date-time
   */
  deadline?: string | null;

  /** A group of calculated values for this Epic. */
  stats: EpicStats;

  /**
   * The time/date the Epic was created.
   * @format date-time
   */
  created_at?: string | null;
}

/**
 * The results of the Epic search query.
 */
export interface EpicSearchResults {
  /**
   * The total number of matches for the search query. The first 1000 matches can be paged through via the API.
   * @format int64
   */
  total: number;

  /** A list of search results. */
  data: Epic[];

  /** The URL path and query string for the next page of search results. */
  next?: string | null;
  cursors?: string[];
}

/**
 * EpicSlim represents the same resource as an Epic but is more light-weight, including all Epic fields except the comments array. The description string can be optionally included. Use the [Get Epic](#Get-Epic) endpoint to fetch the unabridged payload for an Epic.
 */
export interface EpicSlim {
  /** The Shortcut application url for the Epic. */
  app_url: string;

  /** The Epic's description. */
  description?: string;

  /** True/false boolean that indicates whether the Epic is archived or not. */
  archived: boolean;

  /** A true/false boolean indicating if the Epic has been started. */
  started: boolean;

  /** A string description of this resource. */
  entity_type: string;

  /** An array of Labels attached to the Epic. */
  labels: LabelSlim[];

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /** An array of Member IDs that have been mentioned in the Epic description. */
  member_mention_ids: string[];

  /** The IDs of Projects related to this Epic. */
  project_ids: number[];

  /**
   * The number of stories in this epic which are not associated with a project.
   * @format int64
   */
  stories_without_projects: number;

  /**
   * A manual override for the time/date the Epic was completed.
   * @format date-time
   */
  completed_at_override?: string | null;

  /**
   * The ID of the associated productboard integration.
   * @format uuid
   */
  productboard_plugin_id?: string | null;

  /**
   * The time/date the Epic was started.
   * @format date-time
   */
  started_at?: string | null;

  /**
   * The time/date the Epic was completed.
   * @format date-time
   */
  completed_at?: string | null;

  /** The name of the Epic. */
  name: string;

  /** A true/false boolean indicating if the Epic has been completed. */
  completed: boolean;

  /** The URL of the associated productboard feature. */
  productboard_url?: string | null;

  /**
   * The Epic's planned start date.
   * @format date-time
   */
  planned_start_date?: string | null;

  /** `Deprecated` The workflow state that the Epic is in. */
  state: string;

  /**
   * The ID of the Milestone this Epic is related to.
   * @format int64
   */
  milestone_id?: number | null;

  /**
   * The ID of the Member that requested the epic.
   * @format uuid
   */
  requested_by_id: string;

  /**
   * The ID of the Epic State.
   * @format int64
   */
  epic_state_id: number;

  /** An array of Label ids attached to the Epic. */
  label_ids: number[];

  /**
   * A manual override for the time/date the Epic was started.
   * @format date-time
   */
  started_at_override?: string | null;

  /** @format uuid */
  group_id?: string | null;

  /**
   * The time/date the Epic was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** An array of Group IDs that have been mentioned in the Epic description. */
  group_mention_ids: string[];

  /**
   * The ID of the associated productboard feature.
   * @format uuid
   */
  productboard_id?: string | null;

  /** An array of UUIDs for any Members you want to add as Followers on this Epic. */
  follower_ids: string[];

  /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
  owner_ids: string[];

  /** This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Epic.
   * @format int64
   */
  id: number;

  /**
   * The Epic's relative position in the Epic workflow state.
   * @format int64
   */
  position: number;

  /** The name of the associated productboard feature. */
  productboard_name?: string | null;

  /**
   * The Epic's deadline.
   * @format date-time
   */
  deadline?: string | null;

  /** A group of calculated values for this Epic. */
  stats: EpicStats;

  /**
   * The time/date the Epic was created.
   * @format date-time
   */
  created_at?: string | null;
}

/**
 * Epic State is any of the at least 3 columns. Epic States correspond to one of 3 types: Unstarted, Started, or Done.
 */
export interface EpicState {
  /** The description of what sort of Epics belong in that Epic State. */
  description: string;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * The hex color for this Epic State.
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;

  /** The Epic State's name. */
  name: string;

  /** The type of Epic State (Unstarted, Started, or Done) */
  type: string;

  /**
   * When the Epic State was last updated.
   * @format date-time
   */
  updated_at: string;

  /**
   * The unique ID of the Epic State.
   * @format int64
   */
  id: number;

  /**
   * The position that the Epic State is in, starting with 0 at the left.
   * @format int64
   */
  position: number;

  /**
   * The time/date the Epic State was created.
   * @format date-time
   */
  created_at: string;
}

/**
 * A group of calculated values for this Epic.
 */
export interface EpicStats {
  /**
   * The total number of completed points in this Epic.
   * @format int64
   */
  num_points_done: number;

  /**
   * The total number of documents associated with this Epic.
   * @format int64
   */
  num_related_documents: number;

  /**
   * The average cycle time (in seconds) of completed stories in this Epic.
   * @format int64
   */
  average_cycle_time?: number;

  /**
   * The total number of unstarted Stories in this Epic.
   * @format int64
   */
  num_stories_unstarted: number;

  /**
   * The total number of Stories in this Epic.
   * @format int64
   */
  num_stories_total: number;

  /**
   * The date of the last update of a Story in this Epic.
   * @format date-time
   */
  last_story_update?: string | null;

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
   * The total number of started Stories in this Epic.
   * @format int64
   */
  num_stories_started: number;

  /**
   * The total number of Stories with no point estimate.
   * @format int64
   */
  num_stories_unestimated: number;

  /**
   * The average lead time (in seconds) of completed stories in this Epic.
   * @format int64
   */
  average_lead_time?: number;

  /**
   * The total number of points in this Epic.
   * @format int64
   */
  num_points: number;

  /**
   * The total number of done Stories in this Epic.
   * @format int64
   */
  num_stories_done: number;
}

/**
 * Epic Workflow is the array of defined Epic States. Epic Workflow can be queried using the API but must be updated in the Shortcut UI.
 */
export interface EpicWorkflow {
  /** A string description of this resource. */
  entity_type: string;

  /**
   * The unique ID of the Epic Workflow.
   * @format int64
   */
  id: number;

  /**
   * The date the Epic Workflow was created.
   * @format date-time
   */
  created_at: string;

  /**
   * The date the Epic Workflow was updated.
   * @format date-time
   */
  updated_at: string;

  /**
   * The unique ID of the default Epic State that new Epics are assigned by default.
   * @format int64
   */
  default_epic_state_id: number;

  /** A map of the Epic States in this Epic Workflow. */
  epic_states: EpicState[];
}

/**
 * A File is any document uploaded to your Shortcut. Files attached from a third-party service can be accessed using the Linked Files endpoint.
 */
export interface File {
  /** The description of the file. */
  description?: string | null;

  /** A string description of this resource. */
  entity_type: string;

  /** The unique IDs of the Stories associated with this file. */
  story_ids: number[];

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /** The unique IDs of the Members who are mentioned in the file description. */
  member_mention_ids: string[];

  /** The optional User-specified name of the file. */
  name: string;

  /** The url where the thumbnail of the file can be found in Shortcut. */
  thumbnail_url?: string | null;

  /**
   * The size of the file.
   * @format int64
   */
  size: number;

  /**
   * The unique ID of the Member who uploaded the file.
   * @format uuid
   */
  uploader_id: string;

  /** Free form string corresponding to a text or image file. */
  content_type: string;

  /**
   * The time/date that the file was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** The name assigned to the file in Shortcut upon upload. */
  filename: string;

  /** The unique IDs of the Groups who are mentioned in the file description. */
  group_mention_ids: string[];

  /** This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID for the file.
   * @format int64
   */
  id: number;

  /** The URL for the file. */
  url?: string | null;

  /**
   * The time/date that the file was created.
   * @format date-time
   */
  created_at: string;
}

export interface GetEpicStories {
  /** A true/false boolean indicating whether to return Stories with their descriptions. */
  includes_description?: boolean;
}

export interface GetExternalLinkStoriesParams {
  /**
   * The external link associated with one or more stories.
   * @pattern ^https?://.+$
   */
  external_link: string;
}

export interface GetIterationStories {
  /** A true/false boolean indicating whether to return Stories with their descriptions. */
  includes_description?: boolean;
}

export interface GetLabelStories {
  /** A true/false boolean indicating whether to return Stories with their descriptions. */
  includes_description?: boolean;
}

export interface GetMember {
  /**
   * The unique ID of the Organization to limit the lookup to.
   * @format uuid
   */
  "org-public-id"?: string;
}

export interface GetProjectStories {
  /** A true/false boolean indicating whether to return Stories with their descriptions. */
  includes_description?: boolean;
}

/**
 * A Group.
 */
export interface Group {
  /** The Shortcut application url for the Group. */
  app_url: string;

  /** The description of the Group. */
  description: string;

  /** Whether or not the Group is archived. */
  archived: boolean;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * The hex color to be displayed with the Group (for example, "#ff0000").
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;

  /**
   * The number of stories assigned to the group which are in a started workflow state.
   * @format int64
   */
  num_stories_started: number;

  /**
   * The mention name of the Group.
   * @pattern ^[a-z0-9\-\_\.]+$
   */
  mention_name: string;

  /** The name of the Group. */
  name: string;

  /** The color key to be displayed with the Group. */
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
   * The total number of stories assigned ot the group.
   * @format int64
   */
  num_stories: number;

  /**
   * The number of epics assigned to the group which are in the started workflow state.
   * @format int64
   */
  num_epics_started: number;

  /**
   * The id of the Group.
   * @format uuid
   */
  id: string;

  /** Icons are used to attach images to Organizations, Members, and Loading screens in the Shortcut web application. */
  display_icon: Icon | null;

  /** The Member IDs contain within the Group. */
  member_ids: string[];

  /** The Workflow IDs which have stories assigned to the group. */
  story_workflow_ids: number[];

  /** The Workflow IDs contained within the Group. */
  workflow_ids: number[];
}

/**
 * A history item is a group of actions that represent a transactional change to a Story.
 */
export interface History {
  /** The date when the change occurred. */
  changed_at: string;

  /**
   * The ID of the primary entity that has changed, if applicable.
   * @format int64
   */
  primary_id?: number;

  /** An array of objects affected by the change. Reference objects provide basic information for the entities reference in the history actions. Some have specific fields, but they always contain an id, entity_type, and a name. */
  references?: (
    | HistoryReferenceBranch
    | HistoryReferenceCommit
    | HistoryReferenceEpic
    | HistoryReferenceGroup
    | HistoryReferenceIteration
    | HistoryReferenceLabel
    | HistoryReferenceProject
    | HistoryReferenceStory
    | HistoryReferenceStoryTask
    | HistoryReferenceWorkflowState
    | HistoryReferenceGeneral
  )[];

  /** An array of actions that were performed for the change. */
  actions: (
    | HistoryActionBranchCreate
    | HistoryActionBranchMerge
    | HistoryActionBranchPush
    | HistoryActionLabelCreate
    | HistoryActionLabelUpdate
    | HistoryActionLabelDelete
    | HistoryActionProjectUpdate
    | HistoryActionPullRequest
    | HistoryActionStoryCreate
    | HistoryActionStoryUpdate
    | HistoryActionStoryDelete
    | HistoryActionStoryCommentCreate
    | HistoryActionStoryLinkCreate
    | HistoryActionStoryLinkUpdate
    | HistoryActionStoryLinkDelete
    | HistoryActionTaskCreate
    | HistoryActionTaskUpdate
    | HistoryActionTaskDelete
  )[];

  /**
   * The ID of the member who performed the change.
   * @format uuid
   */
  member_id?: string;

  /** The ID of the webhook that handled the change. */
  external_id?: string;

  /**
   * The ID representing the change for the story.
   * @format uuid
   */
  id: string;

  /** The version of the change format. */
  version: "v1";

  /** The ID of the webhook that handled the change. */
  webhook_id?: string | null;
}

/**
 * An action representing a VCS Branch being created.
 */
export interface HistoryActionBranchCreate {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The name of the VCS Branch that was pushed */
  name: string;

  /** The URL from the provider of the VCS Branch that was pushed */
  url: string;

  /** The action of the entity referenced. */
  action: "create";
}

/**
 * An action representing a VCS Branch being merged.
 */
export interface HistoryActionBranchMerge {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The name of the VCS Branch that was pushed */
  name: string;

  /** The URL from the provider of the VCS Branch that was pushed */
  url: string;

  /** The action of the entity referenced. */
  action: "merge";
}

/**
 * An action representing a VCS Branch being pushed.
 */
export interface HistoryActionBranchPush {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The name of the VCS Branch that was pushed */
  name: string;

  /** The URL from the provider of the VCS Branch that was pushed */
  url: string;

  /** The action of the entity referenced. */
  action: "push";
}

/**
 * An action representing a Label being created.
 */
export interface HistoryActionLabelCreate {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "create";

  /**
   * The application URL of the Label.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The name of the Label. */
  name: string;
}

/**
 * An action representing a Label being deleted.
 */
export interface HistoryActionLabelDelete {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "delete";

  /** The name of the Label. */
  name: string;
}

/**
 * An action representing a Label being updated.
 */
export interface HistoryActionLabelUpdate {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "update";
}

/**
 * An action representing a Project being updated.
 */
export interface HistoryActionProjectUpdate {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "update";

  /**
   * The application URL of the Project.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The name of the Project. */
  name: string;
}

/**
 * An action representing various operations for a Pull Request.
 */
export interface HistoryActionPullRequest {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "open" | "update" | "reopen" | "close" | "sync" | "comment";

  /**
   * The VCS Repository-specific ID for the Pull Request.
   * @format int64
   */
  number: number;

  /** The title of the Pull Request. */
  title: string;

  /**
   * The URL from the provider of the VCS Pull Request.
   * @pattern ^https?://.+$
   */
  url: string;
}

/**
 * An action representing a Story Comment being created.
 */
export interface HistoryActionStoryCommentCreate {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "create";

  /**
   * The application URL of the Story Comment.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The text of the Story Comment. */
  text: string;

  /**
   * The Member ID of who created the Story Comment.
   * @format uuid
   */
  author_id: string;
}

/**
 * An action representing a Story being created.
 */
export interface HistoryActionStoryCreate {
  /**
   * The application URL of the Story.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The description of the Story. */
  description?: string;

  /** Whether or not the Story has been started. */
  started?: boolean;

  /** The type of entity referenced. */
  entity_type: string;

  /** An array of Task IDs on this Story. */
  task_ids?: number[];

  /** The type of Story; either feature, bug, or chore. */
  story_type: "feature" | "chore" | "bug";

  /** The name of the Story. */
  name: string;

  /** Whether or not the Story is completed. */
  completed?: boolean;

  /** Whether or not the Story is blocking another Story. */
  blocker?: boolean;

  /**
   * The Epic ID for this Story.
   * @format int64
   */
  epic_id?: number;

  /**
   * The ID of the Member that requested the Story.
   * @format uuid
   */
  requested_by_id?: string;

  /**
   * The Iteration ID the Story is in.
   * @format int64
   */
  iteration_id?: number | null;

  /** An array of Labels IDs attached to the Story. */
  label_ids?: number[];

  /**
   * An array of Workflow State IDs attached to the Story.
   * @format int64
   */
  workflow_state_id?: number;

  /** An array of Story IDs that are the object of a Story Link relationship. */
  object_story_link_ids?: number[];

  /** An array of Member IDs for the followers of the Story. */
  follower_ids?: string[];

  /** An array of Member IDs that are the owners of the Story. */
  owner_ids?: string[];

  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /**
   * The estimate (or point value) for the Story.
   * @format int64
   */
  estimate?: number;

  /** An array of Story IDs that are the subject of a Story Link relationship. */
  subject_story_link_ids?: number[];

  /** The action of the entity referenced. */
  action: "create";

  /** Whether or not the Story is blocked by another Story. */
  blocked?: boolean;

  /**
   * The Project ID of the Story is in.
   * @format int64
   */
  project_id?: number;

  /** The timestamp representing the Story's deadline. */
  deadline?: string;
}

/**
 * An action representing a Story being deleted.
 */
export interface HistoryActionStoryDelete {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "delete";

  /** The name of the Story. */
  name: string;

  /** The type of Story; either feature, bug, or chore. */
  story_type: "feature" | "chore" | "bug";
}

/**
 * An action representing a Story Link being created.
 */
export interface HistoryActionStoryLinkCreate {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "create";

  /** The verb describing the link's relationship. */
  verb: "blocks" | "duplicates" | "relates to";

  /**
   * The Story ID of the subject Story.
   * @format int64
   */
  subject_id: number;

  /**
   * The Story ID of the object Story.
   * @format int64
   */
  object_id: number;
}

/**
 * An action representing a Story Link being deleted.
 */
export interface HistoryActionStoryLinkDelete {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "delete";

  /** The verb describing the link's relationship. */
  verb: "blocks" | "duplicates" | "relates to";

  /**
   * The Story ID of the subject Story.
   * @format int64
   */
  subject_id?: number | null;

  /**
   * The Story ID of the object Story.
   * @format int64
   */
  object_id?: number | null;
}

/**
 * An action representing a Story Link being updated.
 */
export interface HistoryActionStoryLinkUpdate {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "update";

  /** The verb describing the link's relationship. */
  verb: "blocks" | "duplicates" | "relates to";

  /**
   * The Story ID of the subject Story.
   * @format int64
   */
  subject_id: number;

  /**
   * The Story ID of the object Story.
   * @format int64
   */
  object_id: number;

  /** The changes that have occurred as a result of the action. */
  changes: HistoryChangesStoryLink;
}

/**
 * An action representing a Story being updated.
 */
export interface HistoryActionStoryUpdate {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "update";

  /**
   * The application URL of the Story.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The changes that have occurred as a result of the action. */
  changes?: HistoryChangesStory;

  /** The name of the Story. */
  name: string;

  /** The type of Story; either feature, bug, or chore. */
  story_type: "feature" | "chore" | "bug";
}

/**
 * An action representing a Task being created.
 */
export interface HistoryActionTaskCreate {
  /** The description of the Task. */
  description: string;

  /** The type of entity referenced. */
  entity_type: string;

  /** An array of Member IDs that represent who has been mentioned in the Task. */
  mention_ids?: string[];

  /** An array of Groups IDs that represent which have been mentioned in the Task. */
  group_mention_ids?: string[];

  /** An array of Member IDs that represent the Task's owners. */
  owner_ids?: string[];

  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The action of the entity referenced. */
  action: "create";

  /** Whether or not the Task is complete. */
  complete: boolean;

  /** A timestamp that represent's the Task's deadline. */
  deadline?: string;
}

/**
 * An action representing a Task being deleted.
 */
export interface HistoryActionTaskDelete {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "delete";

  /** The description of the Task being deleted. */
  description: string;
}

/**
 * An action representing a Task being updated.
 */
export interface HistoryActionTaskUpdate {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The action of the entity referenced. */
  action: "update";

  /** The changes that have occurred as a result of the action. */
  changes: HistoryChangesTask;

  /** Whether or not the Task is complete. */
  complete?: boolean;

  /** The description of the Task. */
  description: string;

  /**
   * The Story ID that contains the Task.
   * @format int64
   */
  story_id: number;
}

/**
 * The changes that have occurred as a result of the action.
 */
export interface HistoryChangesStory {
  /** A timestamp that represents the Story's deadline. */
  description?: StoryHistoryChangeOldNewStr;

  /** True if the Story has archived, otherwise false. */
  archived?: StoryHistoryChangeOldNewBool;

  /** True if the Story has archived, otherwise false. */
  started?: StoryHistoryChangeOldNewBool;

  /** Task IDs that have been added or removed from the Story. */
  task_ids?: StoryHistoryChangeAddsRemovesInt;

  /** Member IDs that have been added or removed as a owner of the Story. */
  mention_ids?: StoryHistoryChangeAddsRemovesUuid;

  /** A timestamp that represents the Story's deadline. */
  story_type?: StoryHistoryChangeOldNewStr;

  /** A timestamp that represents the Story's deadline. */
  name?: StoryHistoryChangeOldNewStr;

  /** True if the Story has archived, otherwise false. */
  completed?: StoryHistoryChangeOldNewBool;

  /** True if the Story has archived, otherwise false. */
  blocker?: StoryHistoryChangeOldNewBool;

  /** The estimate value for the Story */
  epic_id?: StoryHistoryChangeOldNewInt;

  /** Task IDs that have been added or removed from the Story. */
  branch_ids?: StoryHistoryChangeAddsRemovesInt;

  /** Task IDs that have been added or removed from the Story. */
  commit_ids?: StoryHistoryChangeAddsRemovesInt;

  /** The Member ID of the preson who requested the Story. */
  requested_by_id?: StoryHistoryChangeOldNewUuid;

  /** The estimate value for the Story */
  iteration_id?: StoryHistoryChangeOldNewInt;

  /** Task IDs that have been added or removed from the Story. */
  label_ids?: StoryHistoryChangeAddsRemovesInt;

  /** The estimate value for the Story */
  workflow_state_id?: StoryHistoryChangeOldNewInt;

  /** Task IDs that have been added or removed from the Story. */
  object_story_link_ids?: StoryHistoryChangeAddsRemovesInt;

  /** Member IDs that have been added or removed as a owner of the Story. */
  follower_ids?: StoryHistoryChangeAddsRemovesUuid;

  /** Member IDs that have been added or removed as a owner of the Story. */
  owner_ids?: StoryHistoryChangeAddsRemovesUuid;

  /** The estimate value for the Story */
  estimate?: StoryHistoryChangeOldNewInt;

  /** Task IDs that have been added or removed from the Story. */
  subject_story_link_ids?: StoryHistoryChangeAddsRemovesInt;

  /** True if the Story has archived, otherwise false. */
  blocked?: StoryHistoryChangeOldNewBool;

  /** The estimate value for the Story */
  project_id?: StoryHistoryChangeOldNewInt;

  /** A timestamp that represents the Story's deadline. */
  deadline?: StoryHistoryChangeOldNewStr;
}

/**
 * The changes that have occurred as a result of the action.
 */
export interface HistoryChangesStoryLink {
  /** A timestamp that represents the Story's deadline. */
  verb?: StoryHistoryChangeOldNewStr;

  /** The estimate value for the Story */
  object_id?: StoryHistoryChangeOldNewInt;

  /** The estimate value for the Story */
  subject_id?: StoryHistoryChangeOldNewInt;
}

/**
 * The changes that have occurred as a result of the action.
 */
export interface HistoryChangesTask {
  /** True if the Story has archived, otherwise false. */
  complete?: StoryHistoryChangeOldNewBool;

  /** A timestamp that represents the Story's deadline. */
  description?: StoryHistoryChangeOldNewStr;

  /** Member IDs that have been added or removed as a owner of the Story. */
  mention_ids?: StoryHistoryChangeAddsRemovesUuid;

  /** Member IDs that have been added or removed as a owner of the Story. */
  owner_ids?: StoryHistoryChangeAddsRemovesUuid;
}

/**
 * A reference to a VCS Branch.
 */
export interface HistoryReferenceBranch {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The name of the entity referenced. */
  name: string;

  /**
   * The external URL for the Branch.
   * @pattern ^https?://.+$
   */
  url: string;
}

/**
 * A reference to a VCS Commit.
 */
export interface HistoryReferenceCommit {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The message from the Commit. */
  message: string;

  /**
   * The external URL for the Branch.
   * @pattern ^https?://.+$
   */
  url: string;
}

/**
 * A reference to an Epic.
 */
export interface HistoryReferenceEpic {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /**
   * The application URL of the Epic.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The name of the entity referenced. */
  name: string;
}

/**
 * A default reference for entity types that don't have extra fields.
 */
export interface HistoryReferenceGeneral {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The name of the entity referenced. */
  name: string;
}

/**
 * A reference to a Group.
 */
export interface HistoryReferenceGroup {
  /**
   * The ID of the entity referenced.
   * @format uuid
   */
  id: string;

  /** The type of entity referenced. */
  entity_type: string;

  /** The name of the entity referenced. */
  name: string;
}

/**
 * A reference to an Iteration.
 */
export interface HistoryReferenceIteration {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /**
   * The application URL of the Iteration.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The name of the entity referenced. */
  name: string;
}

/**
 * A reference to an Label.
 */
export interface HistoryReferenceLabel {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /**
   * The application URL of the Label.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The name of the entity referenced. */
  name: string;
}

/**
 * A reference to an Project.
 */
export interface HistoryReferenceProject {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /**
   * The application URL of the Project.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The name of the entity referenced. */
  name: string;
}

/**
 * A reference to a Story.
 */
export interface HistoryReferenceStory {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /**
   * The application URL of the Story.
   * @pattern ^https?://.+$
   */
  app_url: string;

  /** The name of the entity referenced. */
  name: string;

  /** If the referenced entity is a Story, either "bug", "chore", or "feature". */
  story_type: "feature" | "chore" | "bug";
}

/**
 * A reference to a Story Task.
 */
export interface HistoryReferenceStoryTask {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** The description of the Story Task. */
  description: string;
}

/**
 * A references to a Story Workflow State.
 */
export interface HistoryReferenceWorkflowState {
  /**
   * The ID of the entity referenced.
   * @format int64
   */
  id: number;

  /** The type of entity referenced. */
  entity_type: string;

  /** Either "unstarted", "started", or "done". */
  type: "started" | "unstarted" | "done";

  /** The name of the entity referenced. */
  name: string;
}

/**
 * Icons are used to attach images to Organizations, Members, and Loading screens in the Shortcut web application.
 */
export interface Icon {
  /** A string description of this resource. */
  entity_type: string;

  /**
   * The unique ID of the Icon.
   * @format uuid
   */
  id: string;

  /**
   * The time/date that the Icon was created.
   * @format date-time
   */
  created_at: string;

  /**
   * The time/date that the Icon was updated.
   * @format date-time
   */
  updated_at: string;

  /** The URL of the Icon. */
  url: string;
}

/**
 * The Identity of the VCS user that authored the Commit.
 */
export interface Identity {
  /** A string description of this resource. */
  entity_type: string;

  /** This is your login in VCS. */
  name?: string | null;

  /** The type of Identity; currently only type is github. */
  type?: string | null;
}

/**
 * An Iteration is a defined, time-boxed period of development for a collection of Stories. See https://help.shortcut.com/hc/en-us/articles/360028953452-Iterations-Overview for more information.
 */
export interface Iteration {
  /** The Shortcut application url for the Iteration. */
  app_url: string;

  /** The description of the iteration. */
  description: string;

  /** A string description of this resource */
  entity_type: string;

  /** An array of labels attached to the iteration. */
  labels: Label[];

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /** An array of Member IDs that have been mentioned in the Story description. */
  member_mention_ids: string[];

  /** The name of the iteration. */
  name: string;

  /** An array of label ids attached to the iteration. */
  label_ids: number[];

  /**
   * The instant when this iteration was last updated.
   * @format date-time
   */
  updated_at: string;

  /** An array of Group IDs that have been mentioned in the Story description. */
  group_mention_ids: string[];

  /**
   * The date this iteration begins.
   * @format date-time
   */
  end_date: string;

  /** An array of UUIDs for any Members listed as Followers. */
  follower_ids: string[];

  /** An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI. */
  group_ids: string[];

  /**
   * The date this iteration begins.
   * @format date-time
   */
  start_date: string;

  /** The status of the iteration. Values are either "unstarted", "started", or "done". */
  status: string;

  /**
   * The ID of the iteration.
   * @format int64
   */
  id: number;

  /** A group of calculated values for this Iteration. */
  stats: IterationStats;

  /**
   * The instant when this iteration was created.
   * @format date-time
   */
  created_at: string;
}

/**
 * IterationSlim represents the same resource as an Iteration, but is more light-weight. Use the [Get Iteration](#Get-Iteration) endpoint to fetch the unabridged payload for an Iteration.
 */
export interface IterationSlim {
  /** The Shortcut application url for the Iteration. */
  app_url: string;

  /** A string description of this resource */
  entity_type: string;

  /** An array of labels attached to the iteration. */
  labels: Label[];

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /** An array of Member IDs that have been mentioned in the Story description. */
  member_mention_ids: string[];

  /** The name of the iteration. */
  name: string;

  /** An array of label ids attached to the iteration. */
  label_ids: number[];

  /**
   * The instant when this iteration was last updated.
   * @format date-time
   */
  updated_at: string;

  /** An array of Group IDs that have been mentioned in the Story description. */
  group_mention_ids: string[];

  /**
   * The date this iteration begins.
   * @format date-time
   */
  end_date: string;

  /** An array of UUIDs for any Members listed as Followers. */
  follower_ids: string[];

  /** An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI. */
  group_ids: string[];

  /**
   * The date this iteration begins.
   * @format date-time
   */
  start_date: string;

  /** The status of the iteration. Values are either "unstarted", "started", or "done". */
  status: string;

  /**
   * The ID of the iteration.
   * @format int64
   */
  id: number;

  /** A group of calculated values for this Iteration. */
  stats: IterationStats;

  /**
   * The instant when this iteration was created.
   * @format date-time
   */
  created_at: string;
}

/**
 * A group of calculated values for this Iteration.
 */
export interface IterationStats {
  /**
   * The total number of completed points in this Iteration.
   * @format int64
   */
  num_points_done: number;

  /**
   * The total number of documents related to an Iteration
   * @format int64
   */
  num_related_documents: number;

  /**
   * The average cycle time (in seconds) of completed stories in this Iteration.
   * @format int64
   */
  average_cycle_time?: number;

  /**
   * The total number of unstarted Stories in this Iteration.
   * @format int64
   */
  num_stories_unstarted: number;

  /**
   * The total number of started points in this Iteration.
   * @format int64
   */
  num_points_started: number;

  /**
   * The total number of unstarted points in this Iteration.
   * @format int64
   */
  num_points_unstarted: number;

  /**
   * The total number of started Stories in this Iteration.
   * @format int64
   */
  num_stories_started: number;

  /**
   * The total number of Stories with no point estimate.
   * @format int64
   */
  num_stories_unestimated: number;

  /**
   * The average lead time (in seconds) of completed stories in this Iteration.
   * @format int64
   */
  average_lead_time?: number;

  /**
   * The total number of points in this Iteration.
   * @format int64
   */
  num_points: number;

  /**
   * The total number of done Stories in this Iteration.
   * @format int64
   */
  num_stories_done: number;
}

/**
 * A Label can be used to associate and filter Stories and Epics, and also create new Workspaces.
 */
export interface Label {
  /** The Shortcut application url for the Label. */
  app_url: string;

  /** The description of the Label. */
  description?: string | null;

  /** A true/false boolean indicating if the Label has been archived. */
  archived: boolean;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * The hex color to be displayed with the Label (for example, "#ff0000").
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;

  /** The name of the Label. */
  name: string;

  /**
   * The time/date that the Label was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Label.
   * @format int64
   */
  id: number;

  /** A group of calculated values for this Label. This is not included if the slim? flag is set to true for the List Labels endpoint. */
  stats?: LabelStats;

  /**
   * The time/date that the Label was created.
   * @format date-time
   */
  created_at?: string | null;
}

/**
 * A Label can be used to associate and filter Stories and Epics, and also create new Workspaces. A slim Label does not include aggregate stats. Fetch the Label using the labels endpoint to retrieve them.
 */
export interface LabelSlim {
  /** The Shortcut application url for the Label. */
  app_url: string;

  /** The description of the Label. */
  description?: string | null;

  /** A true/false boolean indicating if the Label has been archived. */
  archived: boolean;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * The hex color to be displayed with the Label (for example, "#ff0000").
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;

  /** The name of the Label. */
  name: string;

  /**
   * The time/date that the Label was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Label.
   * @format int64
   */
  id: number;

  /**
   * The time/date that the Label was created.
   * @format date-time
   */
  created_at?: string | null;
}

/**
 * A group of calculated values for this Label. This is not included if the slim? flag is set to true for the List Labels endpoint.
 */
export interface LabelStats {
  /**
   * The total number of Documents associated this Label.
   * @format int64
   */
  num_related_documents: number;

  /**
   * The total number of Epics with this Label.
   * @format int64
   */
  num_epics: number;

  /**
   * The total number of stories unstarted Stories with this Label.
   * @format int64
   */
  num_stories_unstarted: number;

  /**
   * The total number of Stories with this Label.
   * @format int64
   */
  num_stories_total: number;

  /**
   * The number of unstarted epics assoicated with this label.
   * @format int64
   */
  num_epics_unstarted: number;

  /**
   * The number of in progress epics assoicated with this label.
   * @format int64
   */
  num_epics_in_progress: number;

  /**
   * The total number of unstarted points with this Label.
   * @format int64
   */
  num_points_unstarted: number;

  /**
   * The total number of Stories with no point estimate with this Label.
   * @format int64
   */
  num_stories_unestimated: number;

  /**
   * The total number of in-progress points with this Label.
   * @format int64
   */
  num_points_in_progress: number;

  /**
   * The total number of Epics assoicated with this Label.
   * @format int64
   */
  num_epics_total: number;

  /**
   * The total number of completed Stories with this Label.
   * @format int64
   */
  num_stories_completed: number;

  /**
   * The total number of completed points with this Label.
   * @format int64
   */
  num_points_completed: number;

  /**
   * The total number of points with this Label.
   * @format int64
   */
  num_points_total: number;

  /**
   * The total number of in-progress Stories with this Label.
   * @format int64
   */
  num_stories_in_progress: number;

  /**
   * The number of completed Epics assoicated with this Label.
   * @format int64
   */
  num_epics_completed: number;
}

/**
 * Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL.
 */
export interface LinkedFile {
  /** The description of the file. */
  description?: string | null;

  /** A string description of this resource. */
  entity_type: string;

  /** The IDs of the stories this file is attached to. */
  story_ids: number[];

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /** The members that are mentioned in the description of the file. */
  member_mention_ids: string[];

  /** The name of the linked file. */
  name: string;

  /** The URL of the file thumbnail, if the integration provided it. */
  thumbnail_url?: string | null;

  /** The integration type (e.g. google, dropbox, box). */
  type: string;

  /**
   * The filesize, if the integration provided it.
   * @format int64
   */
  size?: number | null;

  /**
   * The UUID of the member that uploaded the file.
   * @format uuid
   */
  uploader_id: string;

  /** The content type of the image (e.g. txt/plain). */
  content_type?: string | null;

  /**
   * The time/date the LinkedFile was updated.
   * @format date-time
   */
  updated_at: string;

  /** The groups that are mentioned in the description of the file. */
  group_mention_ids: string[];

  /**
   * The unique identifier for the file.
   * @format int64
   */
  id: number;

  /** The URL of the file. */
  url: string;

  /**
   * The time/date the LinkedFile was created.
   * @format date-time
   */
  created_at: string;
}

export interface ListEpics {
  /** A true/false boolean indicating whether to return Epics with their descriptions. */
  includes_description?: boolean;
}

export interface ListGroupStories {
  /**
   * The maximum number of results to return. (Defaults to 1000, max 1000)
   * @format int64
   */
  limit?: number;

  /**
   * The offset at which to begin returning results. (Defaults to 0)
   * @format int64
   */
  offset?: number;
}

export interface ListLabels {
  /** A true/false boolean indicating if the slim versions of the Label should be returned. */
  slim?: boolean;
}

export interface ListMembers {
  /**
   * The unique ID of the Organization to limit the list to.
   * @format uuid
   */
  "org-public-id"?: string;
}

/**
 * Error returned when total maximum supported results have been reached.
 */
export interface MaxSearchResultsExceededError {
  /** The name for this type of error, `maximum-results-exceeded` */
  error: "maximum-results-exceeded";

  /** An explanatory message: "A maximum of 1000 search results are supported." */
  message: string;

  /**
   * The maximum number of search results supported, `1000`
   * @format int64
   */
  "maximum-results": 1000;
}

/**
 * Details about individual Shortcut user within the Shortcut organization that has issued the token.
 */
export interface Member {
  /** The Member's role in the Shortcut organization. */
  role: string;

  /** A string description of this resource. */
  entity_type: string;

  /** True/false boolean indicating whether the Member has been disabled within this Organization. */
  disabled: boolean;

  /**
   * The user state, one of partial, full, disabled, or imported.  A partial
   *            user is disabled, has no means to log in, and is not an import user.  A full
   *            user is enabled and has a means to log in.  A disabled user is disabled and has
   *            a means to log in.  An import user is disabled, has no means to log in, and is
   *            marked as an import user.
   */
  state: "partial" | "full" | "disabled" | "imported";

  /**
   * The time/date the Member was last updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** Whether this member was created as a placeholder entity. */
  created_without_invite: boolean;

  /** The Member's group ids */
  group_ids: string[];

  /**
   * The Member's ID in Shortcut.
   * @format uuid
   */
  id: string;

  /** A group of Member profile details. */
  profile: Profile;

  /**
   * The time/date the Member was created.
   * @format date-time
   */
  created_at?: string | null;

  /**
   * The id of the member that replaces this one when merged.
   * @format uuid
   */
  replaced_by?: string;
}

export interface MemberInfo {
  /** @format uuid */
  id: string;
  name: string;
  mention_name: string;
  workspace2: BasicWorkspaceInfo;
}

/**
 * A Milestone is a collection of Epics that represent a release or some other large initiative that your organization is working on.
 */
export interface Milestone {
  /** The Shortcut application url for the Milestone. */
  app_url: string;

  /** The Milestone's description. */
  description: string;

  /** A true/false boolean indicating if the Milestone has been started. */
  started: boolean;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * A manual override for the time/date the Milestone was completed.
   * @format date-time
   */
  completed_at_override?: string | null;

  /**
   * The time/date the Milestone was started.
   * @format date-time
   */
  started_at?: string | null;

  /**
   * The time/date the Milestone was completed.
   * @format date-time
   */
  completed_at?: string | null;

  /** The name of the Milestone. */
  name: string;

  /** A true/false boolean indicating if the Milestone has been completed. */
  completed: boolean;

  /** The workflow state that the Milestone is in. */
  state: string;

  /**
   * A manual override for the time/date the Milestone was started.
   * @format date-time
   */
  started_at_override?: string | null;

  /**
   * The time/date the Milestone was updated.
   * @format date-time
   */
  updated_at: string;

  /** An array of Categories attached to the Milestone. */
  categories: Category[];

  /**
   * The unique ID of the Milestone.
   * @format int64
   */
  id: number;

  /**
   * A number representing the position of the Milestone in relation to every other Milestone within the Organization.
   * @format int64
   */
  position: number;

  /** A group of calculated values for this Milestone. */
  stats?: MilestoneStats;

  /**
   * The time/date the Milestone was created.
   * @format date-time
   */
  created_at: string;
}

/**
 * A group of calculated values for this Milestone.
 */
export interface MilestoneStats {
  /**
   * The average cycle time (in seconds) of completed stories in this Milestone.
   * @format int64
   */
  average_cycle_time?: number;

  /**
   * The average lead time (in seconds) of completed stories in this Milestone.
   * @format int64
   */
  average_lead_time?: number;

  /**
   * The number of related documents tp this Milestone.
   * @format int64
   */
  num_related_documents: number;
}

/**
 * A group of Member profile details.
 */
export interface Profile {
  /** A string description of this resource. */
  entity_type: string;

  /** A true/false boolean indicating whether the Member has been deactivated within Shortcut. */
  deactivated: boolean;

  /** If Two Factor Authentication is activated for this User. */
  two_factor_auth_activated?: boolean;

  /** The Member's username within the Organization. */
  mention_name: string;

  /** The Member's name within the Organization. */
  name?: string | null;

  /** This is the gravatar hash associated with email_address. */
  gravatar_hash?: string | null;

  /**
   * The unique identifier of the profile.
   * @format uuid
   */
  id: string;

  /** Icons are used to attach images to Organizations, Members, and Loading screens in the Shortcut web application. */
  display_icon: Icon | null;

  /** The primary email address of the Member with the Organization. */
  email_address?: string | null;
}

/**
 * Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative.
 */
export interface Project {
  /** The Shortcut application url for the Project. */
  app_url: string;

  /** The description of the Project. */
  description?: string | null;

  /** True/false boolean indicating whether the Project is in an Archived state. */
  archived: boolean;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * The number of days before the thermometer appears in the Story summary.
   * @format int64
   */
  days_to_thermometer: number;

  /**
   * The color associated with the Project in the Shortcut member interface.
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;

  /**
   * The ID of the workflow the project belongs to.
   * @format int64
   */
  workflow_id: number;

  /** The name of the Project */
  name: string;

  /**
   * The date at which the Project was started.
   * @format date-time
   */
  start_time: string;

  /**
   * The time/date that the Project was last updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** An array of UUIDs for any Members listed as Followers. */
  follower_ids: string[];

  /** This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Project.
   * @format int64
   */
  id: number;

  /** Configuration to enable or disable thermometers in the Story summary. */
  show_thermometer: boolean;

  /**
   * The ID of the team the project belongs to.
   * @format int64
   */
  team_id: number;

  /**
   * The number of weeks per iteration in this Project.
   * @format int64
   */
  iteration_length: number;

  /** The Project abbreviation used in Story summaries. Should be kept to 3 characters at most. */
  abbreviation?: string | null;

  /** A group of calculated values for this Project. */
  stats: ProjectStats;

  /**
   * The time/date that the Project was created.
   * @format date-time
   */
  created_at?: string | null;
}

/**
 * A group of calculated values for this Project.
 */
export interface ProjectStats {
  /**
   * The total number of stories in this Project.
   * @format int64
   */
  num_stories: number;

  /**
   * The total number of points in this Project.
   * @format int64
   */
  num_points: number;

  /**
   * The total number of documents related to this Project
   * @format int64
   */
  num_related_documents: number;
}

/**
 * Corresponds to a VCS Pull Request attached to a Shortcut story.
 */
export interface PullRequest {
  /** A string description of this resource. */
  entity_type: string;

  /** True/False boolean indicating whether the VCS pull request has been closed. */
  closed: boolean;

  /** True/False boolean indicating whether the VCS pull request has been merged. */
  merged: boolean;

  /**
   * Number of lines added in the pull request, according to VCS.
   * @format int64
   */
  num_added: number;

  /**
   * The ID of the branch for the particular pull request.
   * @format int64
   */
  branch_id: number;

  /**
   * The pull request's unique number ID in VCS.
   * @format int64
   */
  number: number;

  /** The name of the branch for the particular pull request. */
  branch_name: string;

  /** The name of the target branch for the particular pull request. */
  target_branch_name: string;

  /**
   * The number of commits on the pull request.
   * @format int64
   */
  num_commits?: number | null;

  /** The title of the pull request. */
  title: string;

  /**
   * The time/date the pull request was created.
   * @format date-time
   */
  updated_at: string;

  /** True/False boolean indicating whether the VCS pull request is in the draft state. */
  draft: boolean;

  /**
   * The unique ID associated with the pull request in Shortcut.
   * @format int64
   */
  id: number;

  /** An array of PullRequestLabels attached to the PullRequest. */
  vcs_labels?: PullRequestLabel[] | null;

  /** The URL for the pull request. */
  url: string;

  /**
   * Number of lines removed in the pull request, according to VCS.
   * @format int64
   */
  num_removed: number;

  /** The status of the review for the pull request. */
  review_status?: string;

  /**
   * Number of lines modified in the pull request, according to VCS.
   * @format int64
   */
  num_modified?: number | null;

  /** The status of the Continuous Integration workflow for the pull request. */
  build_status?: string;

  /**
   * The ID of the target branch for the particular pull request.
   * @format int64
   */
  target_branch_id: number;

  /**
   * The ID of the repository for the particular pull request.
   * @format int64
   */
  repository_id: number;

  /**
   * The time/date the pull request was created.
   * @format date-time
   */
  created_at: string;
}

/**
 * Corresponds to a VCS Label associated with a Pull Request.
 */
export interface PullRequestLabel {
  /** A string description of this resource. */
  entity_type: string;

  /**
   * The unique ID of the VCS Label.
   * @format int64
   */
  id: number;

  /**
   * The color of the VCS label.
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color: string;

  /** The description of the VCS label. */
  description?: string | null;

  /** The name of the VCS label. */
  name: string;
}

/**
 * Emoji reaction on a comment.
 */
export interface Reaction {
  /** Emoji text of the reaction. */
  emoji: string;

  /** Permissions who have reacted with this. */
  permission_ids: string[];
}

/**
 * Repository refers to a VCS repository.
 */
export interface Repository {
  /** A string description of this resource. */
  entity_type: string;

  /** The shorthand name of the VCS repository. */
  name?: string | null;

  /** The type of Repository. Currently this can only be "github". */
  type: string;

  /**
   * The time/date the Repository was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** The VCS unique identifier for the Repository. */
  external_id?: string | null;

  /**
   * The ID associated to the VCS repository in Shortcut.
   * @format int64
   */
  id?: number | null;

  /** The URL of the Repository. */
  url?: string | null;

  /** The full name of the VCS repository. */
  full_name?: string | null;

  /**
   * The time/date the Repository was created.
   * @format date-time
   */
  created_at?: string | null;
}

export interface Search {
  /** See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) */
  query: string;

  /**
   * The number of search results to include in a page. Minimum of 1 and maximum of 25.
   * @format int64
   */
  page_size?: number;

  /** The next page token. */
  next?: string;
  include?: "cursors";
}

/**
 * The results of the multi-entity search query.
 */
export interface SearchResults {
  /** The results of the Epic search query. */
  epics: EpicSearchResults;

  /** The results of the Story search query. */
  stories: StorySearchResults;
}

export interface SearchStories {
  /** A true/false boolean indicating whether the Story is in archived state. */
  archived?: boolean;

  /**
   * An array of UUIDs for any Users who may be Owners of the Stories.
   * @format uuid
   */
  owner_id?: string | null;

  /** The type of Stories that you want returned. */
  story_type?: "feature" | "chore" | "bug";

  /** The Epic IDs that may be associated with the Stories. */
  epic_ids?: number[];

  /** The IDs for the Projects the Stories may be assigned to. */
  project_ids?: number[];

  /**
   * Stories should have been updated before this date.
   * @format date-time
   */
  updated_at_end?: string;

  /**
   * Stories should have been completed before this date.
   * @format date-time
   */
  completed_at_end?: string;

  /** The type of Workflow State the Stories may be in. */
  workflow_state_types?: ("started" | "unstarted" | "done")[];

  /**
   * Stories should have a deadline before this date.
   * @format date-time
   */
  deadline_end?: string;

  /**
   * Stories should have been created after this date.
   * @format date-time
   */
  created_at_start?: string;

  /**
   * The Epic IDs that may be associated with the Stories.
   * @format int64
   */
  epic_id?: number | null;

  /** The name of any associated Labels. */
  label_name?: string;

  /**
   * The UUID of any Users who may have requested the Stories.
   * @format uuid
   */
  requested_by_id?: string;

  /**
   * The Iteration ID that may be associated with the Stories.
   * @format int64
   */
  iteration_id?: number | null;

  /** The Label IDs that may be associated with the Stories. */
  label_ids?: number[];

  /**
   * The Group ID that is associated with the Stories
   * @format uuid
   */
  group_id?: string | null;

  /**
   * The unique IDs of the specific Workflow States that the Stories should be in.
   * @format int64
   */
  workflow_state_id?: number;

  /** The Iteration IDs that may be associated with the Stories. */
  iteration_ids?: number[];

  /**
   * Stories should have been created before this date.
   * @format date-time
   */
  created_at_end?: string;

  /**
   * Stories should have a deadline after this date.
   * @format date-time
   */
  deadline_start?: string;

  /** The Group IDs that are associated with the Stories */
  group_ids?: string[];

  /** An array of UUIDs for any Users who may be Owners of the Stories. */
  owner_ids?: string[];

  /** An ID or URL that references an external resource. Useful during imports. */
  external_id?: string;

  /** Whether to include the story description in the response. */
  includes_description?: boolean;

  /**
   * The number of estimate points associate with the Stories.
   * @format int64
   */
  estimate?: number;

  /**
   * The IDs for the Projects the Stories may be assigned to.
   * @format int64
   */
  project_id?: number;

  /**
   * Stories should have been competed after this date.
   * @format date-time
   */
  completed_at_start?: string;

  /**
   * Stories should have been updated after this date.
   * @format date-time
   */
  updated_at_start?: string;
}

/**
 * Stories are the standard unit of work in Shortcut and represent individual features, bugs, and chores.
 */
export interface Story {
  /** The Shortcut application url for the Story. */
  app_url: string;

  /** The description of the story. */
  description: string;

  /** True if the story has been archived or not. */
  archived: boolean;

  /** A true/false boolean indicating if the Story has been started. */
  started: boolean;

  /** An array of story links attached to the Story. */
  story_links: TypedStoryLink[];

  /** A string description of this resource. */
  entity_type: string;

  /** An array of labels attached to the story. */
  labels: LabelSlim[];

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /** An array of Member IDs that have been mentioned in the Story description. */
  member_mention_ids: string[];

  /** The type of story (feature, bug, chore). */
  story_type: string;

  /** An array of linked files attached to the story. */
  linked_files: LinkedFile[];

  /**
   * The ID of the workflow the story belongs to.
   * @format int64
   */
  workflow_id: number;

  /**
   * A manual override for the time/date the Story was completed.
   * @format date-time
   */
  completed_at_override?: string | null;

  /**
   * The time/date the Story was started.
   * @format date-time
   */
  started_at?: string | null;

  /**
   * The time/date the Story was completed.
   * @format date-time
   */
  completed_at?: string | null;

  /** The name of the story. */
  name: string;

  /** A true/false boolean indicating if the Story has been completed. */
  completed: boolean;

  /** An array of comments attached to the story. */
  comments: Comment[];

  /** A true/false boolean indicating if the Story is currently a blocker of another story. */
  blocker: boolean;

  /** An array of Git branches attached to the story. */
  branches: Branch[];

  /**
   * The ID of the epic the story belongs to.
   * @format int64
   */
  epic_id?: number | null;

  /**
   * The ID of the story template used to create this story, or null if not created using a template.
   * @format uuid
   */
  story_template_id?: string | null;

  /** An array of external links (strings) associated with a Story */
  external_links: string[];

  /** The IDs of the iteration the story belongs to. */
  previous_iteration_ids: number[];

  /**
   * The ID of the Member that requested the story.
   * @format uuid
   */
  requested_by_id: string;

  /**
   * The ID of the iteration the story belongs to.
   * @format int64
   */
  iteration_id?: number | null;

  /** An array of tasks connected to the story. */
  tasks: Task[];

  /** An array of label ids attached to the story. */
  label_ids: number[];

  /**
   * A manual override for the time/date the Story was started.
   * @format date-time
   */
  started_at_override?: string | null;

  /**
   * The ID of the group associated with the story.
   * @format uuid
   */
  group_id?: string | null;

  /**
   * The ID of the workflow state the story is currently in.
   * @format int64
   */
  workflow_state_id: number;

  /**
   * The time/date the Story was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** An array of Pull/Merge Requests attached to the story. */
  pull_requests: PullRequest[];

  /** An array of Group IDs that have been mentioned in the Story description. */
  group_mention_ids: string[];

  /** An array of UUIDs for any Members listed as Followers. */
  follower_ids: string[];

  /** An array of UUIDs of the owners of this story. */
  owner_ids: string[];

  /** This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Story.
   * @format int64
   */
  id: number;

  /**
   * The lead time (in seconds) of this story when complete.
   * @format int64
   */
  lead_time?: number;

  /**
   * The numeric point estimate of the story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;

  /** An array of commits attached to the story. */
  commits: Commit[];

  /** An array of files attached to the story. */
  files: File[];

  /**
   * A number representing the position of the story in relation to every other story in the current project.
   * @format int64
   */
  position: number;

  /** A true/false boolean indicating if the Story is currently blocked. */
  blocked: boolean;

  /**
   * The ID of the project the story belongs to.
   * @format int64
   */
  project_id?: number | null;

  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string | null;

  /** The stats object for Stories */
  stats: StoryStats;

  /**
   * The cycle time (in seconds) of this story when complete.
   * @format int64
   */
  cycle_time?: number;

  /**
   * The time/date the Story was created.
   * @format date-time
   */
  created_at: string;

  /**
   * The time/date the Story was last changed workflow-state.
   * @format date-time
   */
  moved_at?: string | null;
}

/**
 * A container entity for the attributes this template should populate.
 */
export interface StoryContents {
  /** The description of the story. */
  description?: string;

  /** A string description of this resource. */
  entity_type?: string;

  /** An array of labels attached to the story. */
  labels?: LabelSlim[];

  /** The type of story (feature, bug, chore). */
  story_type?: string;

  /** An array of linked files attached to the story. */
  linked_files?: LinkedFile[];

  /** The name of the story. */
  name?: string;

  /**
   * The ID of the epic the story belongs to.
   * @format int64
   */
  epic_id?: number;

  /** An array of external links connected to the story. */
  external_links?: string[];

  /**
   * The ID of the iteration the story belongs to.
   * @format int64
   */
  iteration_id?: number;

  /** An array of tasks connected to the story. */
  tasks?: StoryContentsTask[];

  /** An array of label ids attached to the story. */
  label_ids?: number[];

  /**
   * The ID of the group to which the story is assigned.
   * @format uuid
   */
  group_id?: string;

  /**
   * The ID of the workflow state the story is currently in.
   * @format int64
   */
  workflow_state_id?: number;

  /** An array of UUIDs for any Members listed as Followers. */
  follower_ids?: string[];

  /** An array of UUIDs of the owners of this story. */
  owner_ids?: string[];

  /**
   * The numeric point estimate of the story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number;

  /** An array of files attached to the story. */
  files?: File[];

  /**
   * The ID of the project the story belongs to.
   * @format int64
   */
  project_id?: number;

  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string;
}

export interface StoryContentsTask {
  /** Full text of the Task. */
  description: string;

  /**
   * The number corresponding to the Task's position within a list of Tasks on a Story.
   * @format int64
   */
  position?: number;

  /** True/false boolean indicating whether the Task has been completed. */
  complete?: boolean;

  /** An array of UUIDs of the Owners of this Task. */
  owner_ids?: string[];

  /** This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;
}

/**
 * Task IDs that have been added or removed from the Story.
 */
export interface StoryHistoryChangeAddsRemovesInt {
  /** The values that have been added. */
  adds?: number[];

  /** The values that have been removed */
  removes?: number[];
}

/**
 * Member IDs that have been added or removed as a owner of the Story.
 */
export interface StoryHistoryChangeAddsRemovesUuid {
  /** The values that have been added. */
  adds?: string[];

  /** The values that have been removed */
  removes?: string[];
}

/**
 * True if the Story has archived, otherwise false.
 */
export interface StoryHistoryChangeOldNewBool {
  /** The old value. */
  old?: boolean;

  /** The new value. */
  new?: boolean;
}

/**
 * The estimate value for the Story
 */
export interface StoryHistoryChangeOldNewInt {
  /**
   * The old value.
   * @format int64
   */
  old?: number;

  /**
   * The new value.
   * @format int64
   */
  new?: number;
}

/**
 * A timestamp that represents the Story's deadline.
 */
export interface StoryHistoryChangeOldNewStr {
  /** The old value. */
  old?: string;

  /** The new value. */
  new?: string;
}

/**
 * The Member ID of the preson who requested the Story.
 */
export interface StoryHistoryChangeOldNewUuid {
  /**
   * The old value.
   * @format uuid
   */
  old?: string;

  /**
   * The new value.
   * @format uuid
   */
  new?: string;
}

/**
 * Story links allow you create semantic relationships between two stories. Relationship types are relates to, blocks / blocked by, and duplicates / is duplicated by. The format is `subject -> link -> object`, or for example "story 5 blocks story 6".
 */
export interface StoryLink {
  /** A string description of this resource. */
  entity_type: string;

  /**
   * The unique identifier of the Story Link.
   * @format int64
   */
  id: number;

  /**
   * The ID of the subject Story.
   * @format int64
   */
  subject_id: number;

  /**
   * The workflow state of the "subject" story.
   * @format int64
   */
  subject_workflow_state_id: number;

  /** How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to". */
  verb: string;

  /**
   * The ID of the object Story.
   * @format int64
   */
  object_id: number;

  /**
   * The time/date when the Story Link was created.
   * @format date-time
   */
  created_at: string;

  /**
   * The time/date when the Story Link was last updated.
   * @format date-time
   */
  updated_at: string;
}

/**
 * The results of the Story search query.
 */
export interface StorySearchResults {
  /**
   * The total number of matches for the search query. The first 1000 matches can be paged through via the API.
   * @format int64
   */
  total: number;

  /** A list of search results. */
  data: Story[];

  /** The URL path and query string for the next page of search results. */
  next?: string | null;
  cursors?: string[];
}

/**
 * StorySlim represents the same resource as a Story, but is more light-weight. For certain fields it provides ids rather than full resources (e.g., `comment_ids` and `file_ids`) and it also excludes certain aggregate values (e.g., `cycle_time`). The `description` field can be optionally included. Use the [Get Story](#Get-Story) endpoint to fetch the unabridged payload for a Story.
 */
export interface StorySlim {
  /** The Shortcut application url for the Story. */
  app_url: string;

  /** The description of the Story. */
  description?: string;

  /** True if the story has been archived or not. */
  archived: boolean;

  /** A true/false boolean indicating if the Story has been started. */
  started: boolean;

  /** An array of story links attached to the Story. */
  story_links: TypedStoryLink[];

  /** A string description of this resource. */
  entity_type: string;

  /** An array of labels attached to the story. */
  labels: LabelSlim[];

  /** An array of IDs of Tasks attached to the story. */
  task_ids: number[];

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /** An array of Member IDs that have been mentioned in the Story description. */
  member_mention_ids: string[];

  /** The type of story (feature, bug, chore). */
  story_type: string;

  /** An array of IDs of Files attached to the story. */
  file_ids: number[];

  /**
   * The number of tasks on the story which are complete.
   * @format int64
   */
  num_tasks_completed: number;

  /**
   * The ID of the workflow the story belongs to.
   * @format int64
   */
  workflow_id: number;

  /**
   * A manual override for the time/date the Story was completed.
   * @format date-time
   */
  completed_at_override?: string | null;

  /**
   * The time/date the Story was started.
   * @format date-time
   */
  started_at?: string | null;

  /**
   * The time/date the Story was completed.
   * @format date-time
   */
  completed_at?: string | null;

  /** The name of the story. */
  name: string;

  /** A true/false boolean indicating if the Story has been completed. */
  completed: boolean;

  /** A true/false boolean indicating if the Story is currently a blocker of another story. */
  blocker: boolean;

  /**
   * The ID of the epic the story belongs to.
   * @format int64
   */
  epic_id?: number | null;

  /**
   * The ID of the story template used to create this story, or null if not created using a template.
   * @format uuid
   */
  story_template_id?: string | null;

  /** An array of external links (strings) associated with a Story */
  external_links: string[];

  /** The IDs of the iteration the story belongs to. */
  previous_iteration_ids: number[];

  /**
   * The ID of the Member that requested the story.
   * @format uuid
   */
  requested_by_id: string;

  /**
   * The ID of the iteration the story belongs to.
   * @format int64
   */
  iteration_id?: number | null;

  /** An array of label ids attached to the story. */
  label_ids: number[];

  /**
   * A manual override for the time/date the Story was started.
   * @format date-time
   */
  started_at_override?: string | null;

  /**
   * The ID of the group associated with the story.
   * @format uuid
   */
  group_id?: string | null;

  /**
   * The ID of the workflow state the story is currently in.
   * @format int64
   */
  workflow_state_id: number;

  /**
   * The time/date the Story was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** An array of Group IDs that have been mentioned in the Story description. */
  group_mention_ids: string[];

  /** An array of UUIDs for any Members listed as Followers. */
  follower_ids: string[];

  /** An array of UUIDs of the owners of this story. */
  owner_ids: string[];

  /** This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Story.
   * @format int64
   */
  id: number;

  /**
   * The lead time (in seconds) of this story when complete.
   * @format int64
   */
  lead_time?: number;

  /**
   * The numeric point estimate of the story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;

  /**
   * A number representing the position of the story in relation to every other story in the current project.
   * @format int64
   */
  position: number;

  /** A true/false boolean indicating if the Story is currently blocked. */
  blocked: boolean;

  /**
   * The ID of the project the story belongs to.
   * @format int64
   */
  project_id?: number | null;

  /** An array of IDs of LinkedFiles attached to the story. */
  linked_file_ids: number[];

  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string | null;

  /** The stats object for Stories */
  stats: StoryStats;

  /** An array of IDs of Comments attached to the story. */
  comment_ids: number[];

  /**
   * The cycle time (in seconds) of this story when complete.
   * @format int64
   */
  cycle_time?: number;

  /**
   * The time/date the Story was created.
   * @format date-time
   */
  created_at: string;

  /**
   * The time/date the Story was last changed workflow-state.
   * @format date-time
   */
  moved_at?: string | null;
}

/**
 * The stats object for Stories
 */
export interface StoryStats {
  /**
   * The number of documents related to this Story.
   * @format int64
   */
  num_related_documents: number;
}

export interface Task {
  /** Full text of the Task. */
  description: string;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * The unique identifier of the parent Story.
   * @format int64
   */
  story_id: number;

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /** An array of UUIDs of Members mentioned in this Task. */
  member_mention_ids: string[];

  /**
   * The time/date the Task was completed.
   * @format date-time
   */
  completed_at?: string | null;

  /**
   * The time/date the Task was updated.
   * @format date-time
   */
  updated_at?: string | null;

  /** An array of UUIDs of Groups mentioned in this Task. */
  group_mention_ids: string[];

  /** An array of UUIDs of the Owners of this Task. */
  owner_ids: string[];

  /** This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Task.
   * @format int64
   */
  id: number;

  /**
   * The number corresponding to the Task's position within a list of Tasks on a Story.
   * @format int64
   */
  position: number;

  /** True/false boolean indicating whether the Task has been completed. */
  complete: boolean;

  /**
   * The time/date the Task was created.
   * @format date-time
   */
  created_at: string;
}

/**
 * Comments associated with Epic Discussions.
 */
export interface ThreadedComment {
  /** The Shortcut application url for the Comment. */
  app_url: string;

  /** A string description of this resource. */
  entity_type: string;

  /** True/false boolean indicating whether the Comment is deleted. */
  deleted: boolean;

  /** Deprecated: use member_mention_ids. */
  mention_ids: string[];

  /**
   * The unique ID of the Member that authored the Comment.
   * @format uuid
   */
  author_id: string;

  /** An array of Member IDs that have been mentioned in this Comment. */
  member_mention_ids: string[];

  /** A nested array of threaded comments. */
  comments: ThreadedComment[];

  /**
   * The time/date the Comment was updated.
   * @format date-time
   */
  updated_at: string;

  /** An array of Group IDs that have been mentioned in this Comment. */
  group_mention_ids: string[];

  /** This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here. */
  external_id?: string | null;

  /**
   * The unique ID of the Comment.
   * @format int64
   */
  id: number;

  /**
   * The time/date the Comment was created.
   * @format date-time
   */
  created_at: string;

  /** The text of the Comment. */
  text: string;
}

/**
 * The type of Story Link. The string can be subject or object.
 */
export interface TypedStoryLink {
  /** A string description of this resource. */
  entity_type: string;

  /**
   * The ID of the object Story.
   * @format int64
   */
  object_id: number;

  /** How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to". */
  verb: string;

  /** This indicates whether the Story is the subject or object in the Story Link. */
  type: string;

  /**
   * The time/date when the Story Link was last updated.
   * @format date-time
   */
  updated_at: string;

  /**
   * The unique identifier of the Story Link.
   * @format int64
   */
  id: number;

  /**
   * The ID of the subject Story.
   * @format int64
   */
  subject_id: number;

  /**
   * The workflow state of the "subject" story.
   * @format int64
   */
  subject_workflow_state_id: number;

  /**
   * The time/date when the Story Link was created.
   * @format date-time
   */
  created_at: string;
}

export interface UnusableEntitlementError {
  /** The tag for violating an entitlement action. */
  reason_tag: "entitlement-violation";

  /** Short tag describing the unusable entitlement action taken by the user. */
  entitlement_tag: string;

  /** Message displayed to the user on why their action failed. */
  message: string;
}

export interface UpdateCategory {
  /** The new name of the Category. */
  name?: string;

  /**
   * The hex color to be displayed with the Category (for example, "#ff0000").
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;

  /** A true/false boolean indicating if the Category has been archived. */
  archived?: boolean;
}

export interface UpdateComment {
  /** The updated comment text. */
  text: string;
}

/**
* Request parameters for changing either a template's name or any of
  the attributes it is designed to pre-populate.
*/
export interface UpdateEntityTemplate {
  /** The updated template name. */
  name?: string;

  /** A map of story attributes this template populates. */
  story_contents?: CreateStoryContents;
}

export interface UpdateEpic {
  /** The Epic's description. */
  description?: string;

  /** A true/false boolean indicating whether the Epic is in archived state. */
  archived?: boolean;

  /** An array of Labels attached to the Epic. */
  labels?: CreateLabelParams[];

  /**
   * A manual override for the time/date the Epic was completed.
   * @format date-time
   */
  completed_at_override?: string | null;

  /** The Epic's name. */
  name?: string;

  /**
   * The Epic's planned start date.
   * @format date-time
   */
  planned_start_date?: string | null;

  /** `Deprecated` The Epic's state (to do, in progress, or done); will be ignored when `epic_state_id` is set. */
  state?: "in progress" | "to do" | "done";

  /**
   * The ID of the Milestone this Epic is related to.
   * @format int64
   */
  milestone_id?: number | null;

  /**
   * The ID of the member that requested the epic.
   * @format uuid
   */
  requested_by_id?: string;

  /**
   * The ID of the Epic State.
   * @format int64
   */
  epic_state_id?: number;

  /**
   * A manual override for the time/date the Epic was started.
   * @format date-time
   */
  started_at_override?: string | null;

  /**
   * The ID of the group to associate with the epic.
   * @format uuid
   */
  group_id?: string | null;

  /** An array of UUIDs for any Members you want to add as Followers on this Epic. */
  follower_ids?: string[];

  /** An array of UUIDs for any members you want to add as Owners on this Epic. */
  owner_ids?: string[];

  /**
   * The ID of the Epic we want to move this Epic before.
   * @format int64
   */
  before_id?: number;

  /**
   * The ID of the Epic we want to move this Epic after.
   * @format int64
   */
  after_id?: number;

  /**
   * The Epic's deadline.
   * @format date-time
   */
  deadline?: string | null;
}

export interface UpdateFile {
  /** The description of the file. */
  description?: string;

  /**
   * The time/date that the file was uploaded.
   * @format date-time
   */
  created_at?: string;

  /**
   * The time/date that the file was last updated.
   * @format date-time
   */
  updated_at?: string;

  /** The name of the file. */
  name?: string;

  /**
   * The unique ID assigned to the Member who uploaded the file to Shortcut.
   * @format uuid
   */
  uploader_id?: string;

  /** An additional ID that you may wish to assign to the file. */
  external_id?: string;
}

export interface UpdateGroup {
  /** The description of this Group. */
  description?: string;

  /** Whether or not this Group is archived. */
  archived?: boolean | null;

  /**
   * The color you wish to use for the Group in the system.
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;

  /**
   * The Icon id for the avatar of this Group.
   * @format uuid
   */
  display_icon_id?: string | null;

  /** The mention name of this Group. */
  mention_name?: string;

  /** The name of this Group. */
  name?: string;

  /** The color key you wish to use for the Group in the system. */
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

  /** The Member ids to add to this Group. */
  member_ids?: string[];

  /** The Workflow ids to add to the Group. */
  workflow_ids?: number[];
}

export interface UpdateIteration {
  /** An array of UUIDs for any Members you want to add as Followers. */
  follower_ids?: string[];

  /** An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI. */
  group_ids?: string[];

  /** An array of Labels attached to the Iteration. */
  labels?: CreateLabelParams[];

  /** The description of the Iteration. */
  description?: string;

  /** The name of this Iteration */
  name?: string;

  /** The date this Iteration begins, e.g. 2019-07-01 */
  start_date?: string;

  /** The date this Iteration ends, e.g. 2019-07-05. */
  end_date?: string;
}

export interface UpdateLabel {
  /** The new name of the label. */
  name?: string;

  /** The new description of the label. */
  description?: string;

  /**
   * The hex color to be displayed with the Label (for example, "#ff0000").
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string | null;

  /** A true/false boolean indicating if the Label has been archived. */
  archived?: boolean;
}

export interface UpdateLinkedFile {
  /** The description of the file. */
  description?: string;

  /**
   * The ID of the linked story.
   * @format int64
   */
  story_id?: number;

  /** The name of the file. */
  name?: string;

  /**
   * The URL of the thumbnail, if the integration provided it.
   * @pattern ^https?://.+$
   */
  thumbnail_url?: string;

  /** The integration type of the file (e.g. google, dropbox, box). */
  type?: "google" | "url" | "dropbox" | "box" | "onedrive";

  /**
   * The filesize, if the integration provided it.
   * @format int64
   */
  size?: number;

  /**
   * The UUID of the member that uploaded the file.
   * @format uuid
   */
  uploader_id?: string;

  /**
   * The URL of linked file.
   * @pattern ^https?://.+$
   */
  url?: string;
}

export interface UpdateMilestone {
  /** The Milestone's description. */
  description?: string;

  /**
   * A manual override for the time/date the Milestone was completed.
   * @format date-time
   */
  completed_at_override?: string | null;

  /** The name of the Milestone. */
  name?: string;

  /** The workflow state that the Milestone is in. */
  state?: "in progress" | "to do" | "done";

  /**
   * A manual override for the time/date the Milestone was started.
   * @format date-time
   */
  started_at_override?: string | null;

  /** An array of IDs of Categories attached to the Milestone. */
  categories?: CreateCategoryParams[];

  /**
   * The ID of the Milestone we want to move this Milestone before.
   * @format int64
   */
  before_id?: number;

  /**
   * The ID of the Milestone we want to move this Milestone after.
   * @format int64
   */
  after_id?: number;
}

export interface UpdateProject {
  /** The Project's description. */
  description?: string;

  /** A true/false boolean indicating whether the Story is in archived state. */
  archived?: boolean;

  /**
   * The number of days before the thermometer appears in the Story summary.
   * @format int64
   */
  days_to_thermometer?: number;

  /**
   * The color that represents the Project in the UI.
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;

  /** The Project's name. */
  name?: string;

  /** An array of UUIDs for any Members you want to add as Followers. */
  follower_ids?: string[];

  /** Configuration to enable or disable thermometers in the Story summary. */
  show_thermometer?: boolean;

  /**
   * The ID of the team the project belongs to.
   * @format int64
   */
  team_id?: number;

  /** The Project abbreviation used in Story summaries. Should be kept to 3 characters at most. */
  abbreviation?: string;
}

export interface UpdateStories {
  /** If the Stories should be archived or not. */
  archived?: boolean;

  /** The Ids of the Stories you wish to update. */
  story_ids: number[];

  /** The type of story (feature, bug, chore). */
  story_type?: "feature" | "chore" | "bug";

  /** One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state. */
  move_to?: "last" | "first";

  /** The UUIDs of the new followers to be added. */
  follower_ids_add?: string[];

  /**
   * The ID of the epic the story belongs to.
   * @format int64
   */
  epic_id?: number | null;

  /** An array of External Links associated with this story. */
  external_links?: string[];

  /** The UUIDs of the followers to be removed. */
  follower_ids_remove?: string[];

  /**
   * The ID of the member that requested the story.
   * @format uuid
   */
  requested_by_id?: string;

  /**
   * The ID of the iteration the story belongs to.
   * @format int64
   */
  iteration_id?: number | null;

  /** An array of labels to be added. */
  labels_add?: CreateLabelParams[];

  /**
   * The Id of the Group the Stories should belong to.
   * @format uuid
   */
  group_id?: string | null;

  /**
   * The ID of the workflow state to put the stories in.
   * @format int64
   */
  workflow_state_id?: number;

  /**
   * The ID of the story that the stories are to be moved before.
   * @format int64
   */
  before_id?: number;

  /**
   * The numeric point estimate of the story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;

  /**
   * The ID of the story that the stories are to be moved below.
   * @format int64
   */
  after_id?: number;

  /** The UUIDs of the owners to be removed. */
  owner_ids_remove?: string[];

  /**
   * The ID of the Project the Stories should belong to.
   * @format int64
   */
  project_id?: number | null;

  /** An array of labels to be removed. */
  labels_remove?: CreateLabelParams[];

  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string | null;

  /** The UUIDs of the new owners to be added. */
  owner_ids_add?: string[];
}

export interface UpdateStory {
  /** The description of the story. */
  description?: string;

  /** True if the story is archived, otherwise false. */
  archived?: boolean;

  /** An array of labels attached to the story. */
  labels?: CreateLabelParams[];

  /** An array of IDs of Pull/Merge Requests attached to the story. */
  pull_request_ids?: number[];

  /** The type of story (feature, bug, chore). */
  story_type?: "feature" | "chore" | "bug";

  /** One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state. */
  move_to?: "last" | "first";

  /** An array of IDs of files attached to the story. */
  file_ids?: number[];

  /**
   * A manual override for the time/date the Story was completed.
   * @format date-time
   */
  completed_at_override?: string | null;

  /** The title of the story. */
  name?: string;

  /**
   * The ID of the epic the story belongs to.
   * @format int64
   */
  epic_id?: number | null;

  /** An array of External Links associated with this story. */
  external_links?: string[];

  /** An array of IDs of Branches attached to the story. */
  branch_ids?: number[];

  /** An array of IDs of Commits attached to the story. */
  commit_ids?: number[];

  /**
   * The ID of the member that requested the story.
   * @format uuid
   */
  requested_by_id?: string;

  /**
   * The ID of the iteration the story belongs to.
   * @format int64
   */
  iteration_id?: number | null;

  /**
   * A manual override for the time/date the Story was started.
   * @format date-time
   */
  started_at_override?: string | null;

  /**
   * The ID of the group to associate with this story
   * @format uuid
   */
  group_id?: string | null;

  /**
   * The ID of the workflow state to put the story in.
   * @format int64
   */
  workflow_state_id?: number;

  /** An array of UUIDs of the followers of this story. */
  follower_ids?: string[];

  /** An array of UUIDs of the owners of this story. */
  owner_ids?: string[];

  /**
   * The ID of the story we want to move this story before.
   * @format int64
   */
  before_id?: number;

  /**
   * The numeric point estimate of the story. Can also be null, which means unestimated.
   * @format int64
   */
  estimate?: number | null;

  /**
   * The ID of the story we want to move this story after.
   * @format int64
   */
  after_id?: number;

  /**
   * The ID of the project the story belongs to.
   * @format int64
   */
  project_id?: number | null;

  /** An array of IDs of linked files attached to the story. */
  linked_file_ids?: number[];

  /**
   * The due date of the story.
   * @format date-time
   */
  deadline?: string | null;
}

export interface UpdateStoryLink {
  /** The type of link. */
  verb?: "blocks" | "duplicates" | "relates to";

  /**
   * The ID of the subject Story.
   * @format int64
   */
  subject_id?: number;

  /**
   * The ID of the object Story.
   * @format int64
   */
  object_id?: number;
}

export interface UpdateTask {
  /** The Task's description. */
  description?: string;

  /** An array of UUIDs of the owners of this story. */
  owner_ids?: string[];

  /** A true/false boolean indicating whether the task is complete. */
  complete?: boolean;

  /**
   * Move task before this task ID.
   * @format int64
   */
  before_id?: number;

  /**
   * Move task after this task ID.
   * @format int64
   */
  after_id?: number;
}

/**
 * Workflow is the array of defined Workflow States. Workflow can be queried using the API but must be updated in the Shortcut UI.
 */
export interface Workflow {
  /** A description of the workflow. */
  description: string;

  /** A string description of this resource. */
  entity_type: string;

  /** An array of IDs of projects within the Workflow. */
  project_ids: number[];

  /** A map of the states in this Workflow. */
  states: WorkflowState[];

  /** The name of the workflow. */
  name: string;

  /**
   * The date the Workflow was updated.
   * @format date-time
   */
  updated_at: string;

  /** Indicates if an owner is automatically assigned when an unowned story is started. */
  auto_assign_owner: boolean;

  /**
   * The unique ID of the Workflow.
   * @format int64
   */
  id: number;

  /**
   * The ID of the team the workflow belongs to.
   * @format int64
   */
  team_id: number;

  /**
   * The date the Workflow was created.
   * @format date-time
   */
  created_at: string;

  /**
   * The unique ID of the default state that new Stories are entered into.
   * @format int64
   */
  default_state_id: number;
}

/**
 * Workflow State is any of the at least 3 columns. Workflow States correspond to one of 3 types: Unstarted, Started, or Done.
 */
export interface WorkflowState {
  /** The description of what sort of Stories belong in that Workflow state. */
  description: string;

  /** A string description of this resource. */
  entity_type: string;

  /**
   * The hex color for this Workflow State.
   * @format css-color
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  color?: string;

  /** The verb that triggers a move to that Workflow State when making VCS commits. */
  verb?: string | null;

  /** The Workflow State's name. */
  name: string;

  /**
   * The number of Stories currently in that Workflow State.
   * @format int64
   */
  num_stories: number;

  /** The type of Workflow State (Unstarted, Started, or Finished) */
  type: string;

  /**
   * When the Workflow State was last updated.
   * @format date-time
   */
  updated_at: string;

  /**
   * The unique ID of the Workflow State.
   * @format int64
   */
  id: number;

  /**
   * The number of Story Templates associated with that Workflow State.
   * @format int64
   */
  num_story_templates: number;

  /**
   * The position that the Workflow State is in, starting with 0 at the left.
   * @format int64
   */
  position: number;

  /**
   * The time/date the Workflow State was created.
   * @format date-time
   */
  created_at: string;
}
