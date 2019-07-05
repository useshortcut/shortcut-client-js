/* @flow */

export type ID = string | number;

export interface Entity {
  id: ID;
  created_at: string;
  updated_at: string;
}

export interface RequestFactory<T> {
  baseURL: string;
  version: string;
  createRequest(uri: string, method?: string, body?: Object): T;
  prefixURI(uri: string): string;
}

export interface RequestPerformer<T, U> {
  performRequest(request: T): Promise<U>;
}

export interface ResponseParser<U> {
  parseResponse(response: U): Promise<*>;
}

/* Users */

export type Profile = {
  deactivated: boolean,
  email_address: string,
  entity_type: string,
  gravatar_hash: string,
  id: string,
  mention_name: string,
  name: string,
  two_factor_auth_activated: boolean,
};

export type Member = {
  id: ID,
  created_at: string,
  updated_at: string,
  role: string,
  disabled: boolean,
  profile: Profile,
  overrides: {
    email_address?: string,
    gravatar_hash?: string,
    display_icon?: string,
  },
};

/* Projects */

export type Project = {
  id: ID,
  name: string,
  entity_type: string,
  description: ?string,
  abbreviation: string,
  color: string,
  iteration_length: number,
  start_time: string,
  created_at: string,
  updated_at: string,
  archived: boolean,
  follower_ids: Array<ID>,
  stats: any,
};

/*
  The front end include a lower case version of the project name
*/
export type ProjectChange = {
  name?: string,
  team_id?: number,
  description?: string,
  created_at?: string,
  updated_at?: string,
  color?: string,
  abbreviation?: string,
  archived?: boolean,
  start_time?: string,
  show_thermometer?: boolean,
  days_to_thermometer?: string,
  external_id?: string,
  follower_ids?: Array<ID>,
};

/* Labels */

export type Label = {
  id: ID,
  created_at: string,
  updated_at: string,
  name: string,
  color?: string,
  external_id?: string,
  stats: any,
};

/* File */
export type File = {
  id: ID,
  created_at: string,
  updated_at: string,
  content_type: string,
  description: string,
  filename: string,
  mention_ids: Array<ID>,
  name: string,
  size: number,
  story_ids: Array<ID>,
  thumbnail_url: string,
  uploader_id: ID,
  url: string,
};

export type FileChange = {
  name?: string,
  description?: string,
  external_id?: string,
  updated_at?: string,
  uploader_id?: ID,
};

/* LinkedFile */

export type LinkedFileType = 'google url' | 'dropbox' | 'box' | 'onedrive';

export type LinkedFile = {
  id: ID,
  name: string,
  description: string,
  content_type: string,
  created_at: string,
  updated_at: string,
  size: string,
  mentiond_ids: string,
  story_ids: Array<ID>,
  type: string,
  uploader_id: ID,
  url: string,
};

export type LinkedFileChange = {
  name?: string,
  description?: string,
  content_type?: string,
  size?: number,
  story_id: ID,
  thumbnail_url: string,
  type: string,
  uploader_id: ID,
  url: string,
};

/* StoryComment */

export type StoryComment = {
  id: ID,
  author_id: ID,
  created_at: Date,
  entity_type: string,
  external_id: string,
  mention_ids: Array<ID>,
  position: number,
  story_id: ID,
  text: string,
  updated_at: Date,
};

/* Task */

export type Task = {
  id: ID,
  created_at: string,
  updated_at: string,
  completed: boolean,
  completed_at: string,
  description: string,
  external_id?: string,
  mention_ids?: Array<ID>,
  story_id: ID,
  position: number,
};

export type TaskChange = {
  text?: string,
  description?: string,
  complete?: boolean,
  create_at?: string,
  update_at?: string,
  owner_ids?: Array<ID>,
  external_id?: string,
};

/* Stories */

export type StoryType = 'bug' | 'chore' | 'feature';

export type Story = {
  entity_type: string,
  created_at: string,
  updated_at: string,
  id: ID,
  external_id: string,
  name: string,
  story_type: StoryType,
  description: string,
  archived: boolean,
  position: number,
  workflow_state_id: ID,
  started: boolean,
  started_at: string,
  started_at_override: string,
  completed: boolean,
  completed_at: string,
  completed_at_override: string,
  blocked: boolean,
  blocker: boolean,
  estimate: number,
  deadline: string,
  project_id: ID,
  comments: Array<StoryComment>,
  files: Array<File>,
  labels: Array<Label>,
  tasks: Array<Task>,
  requested_by_id: ID,
  owner_ids: Array<ID>,
  follower_ids: Array<ID>,
  epic_id: ID,
  tasks_id: Array<ID>,
  app_url: string,
};

export type StoryChange = {
  name?: string,
  description?: string,
  created_at?: string,
  updated_at?: string,
  archived?: boolean,
  after_id?: ID,
  before_id?: ID,
  branch_ids?: Array<ID>,
  project_id?: ID,
  workflow_state_id?: ID,
  requested_by_id?: ID,
  owner_ids?: Array<ID>,
  follower_ids?: Array<ID>,
  epic_id?: ID,
  story_type: StoryType,
  estimate?: number,
  deadline?: string,
  labels?: Array<Label>,
  file_ids?: Array<ID>,
  linked_file_ids?: Array<ID>,
};

export type StorySearchResult = {
  data: Array<Story>,
  next?: string,
  fetchNext: () => Promise<StorySearchResult>,
};

/* Epic */

export type EpicStates = 'to do' | 'in progress' | 'done';

export type Epic = {
  entity_type: string,
  id: ID,
  external_id?: string,
  name: string,
  description: string,
  created_at: string,
  updated_at: string,
  deadline: string,
  state: EpicStates,
  position: number,
  archived?: string,
  started: boolean,
  started_at: string,
  started_at_override: string,
  completed: boolean,
  completed_at?: string,
  completed_at_override?: string,
  milestone_id?: string,
  follower_ids: Array<ID>,
  owner_ids: Array<ID>,
  project_ids: Array<ID>,
  stats: any,
};

export type EpicChange = {
  name?: string,
  owner_ids?: Array<ID>,
  state?: EpicStates,
  created_at?: string,
  updated_at?: string,
  deadline?: string,
  description?: string,
  external_id?: string,
  follower_ids?: Array<ID>,
  /* update only */
  after_id?: string,
  before_id?: string,
  acrhived?: string,
};

export type WorkflowStateTypes = 'unstarted' | 'started' | 'done';

export type WorkflowState = {
  type: WorkflowStateTypes,
  name: string,
  id: ID,
  color: string,
  created_at: Date,
  description: string,
  entity_type: string,
  num_stories: number,
  position: number,
  updated_at: Date,
  verb: string,
};

export type Workflow = {
  id: ID,
  created_at: string,
  updated_at: string,
  default_state_id: number,
  description: string,
  name: string,
  states: Array<WorkflowState>,
};

/* StoryLink */
export type StoryLinkVerb = 'blocks' | 'duplicates' | 'relates to';

export type StoryLink = {
  id: ID,
  created_at: string,
  updated_at: string,
  type: string,
  subject_id: ID,
  object_id: ID,
  verb: StoryLinkVerb,
};

export type StoryLinkChange = {
  object_id: ID,
  verb_id: ID,
  verb: StoryLinkVerb,
};

/* Milestones */

export type Milestone = {
  id: ID,
};

export type MilestoneUpdate = {
  name: string,
};

/* Fact aka History */

export type Fact = {
  at: string,
  scope: string,
};

/* Teams */

export type Team = {
  created_at: string,
  description: string,
  id: ID,
  name: string,
  position: number,
  project_ids: Array<ID>,
  updated_at: string,
  workflow: Workflow,
};

/* Iterations */

export type IterationStats = {
  average_cycle_time: number,
  average_lead_time: number,
  num_points: number,
  num_points_done: number,
  num_points_started: number,
  num_points_unstarted: number,
  num_stories_done: number,
  num_stories_started: number,
  num_stories_unestimated: number,
  num_stories_unstarted: number,
};

export type Iteration = {
  created_at: string,
  updated_at: string,
  start_date: string,
  end_date: string,
  description: string,
  id: ID,
  name: string,
  entity_type: string,
  status: string,
  follower_ids: Array<ID>,
  mention_ids: Array<ID>,
  stats: IterationStats,
};

export type IterationChange = {
  name?: string,
  description?: string,
  start_date?: string,
  end_date?: string,
  follower_ids?: Array<ID>,
};
