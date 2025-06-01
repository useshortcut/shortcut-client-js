import { Api } from './generated/Api';
import type { ApiConfig } from './generated/http-client';
import type {
  SearchStories,
  StorySearchResults,
  EpicSearchResults,
  IterationSearchResults,
  ObjectiveSearchResults,
} from './generated/data-contracts';

// Extended search parameter interfaces for typed search queries
export interface SearchEpicsParams {
  /** Search for epics with this name (partial match) */
  name?: string;
  /** Search for epics with this description content */
  description?: string;
  /** Filter by epic state */
  state?: 'unstarted' | 'started' | 'done';
  /** Filter by archived status */
  archived?: boolean;
  /** Filter by owner IDs */
  owner_ids?: string[];
  /** Filter by objective IDs */
  objective_ids?: number[];
  /** Filter by team IDs */
  team_ids?: string[];
  /** Filter by label names */
  label_names?: string[];
  /** Date range for creation */
  created_at_start?: string;
  created_at_end?: string;
  /** Date range for updates */
  updated_at_start?: string;
  updated_at_end?: string;
  /** Date range for completion */
  completed_at_start?: string;
  completed_at_end?: string;
  /** Date range for deadline */
  deadline_start?: string;
  deadline_end?: string;
}

export interface SearchIterationsParams {
  /** Search for iterations with this name (partial match) */
  name?: string;
  /** Search for iterations with this description content */
  description?: string;
  /** Filter by iteration state */
  state?: 'unstarted' | 'started' | 'done';
  /** Filter by team IDs */
  team_ids?: string[];
  /** Date range for creation */
  created_at_start?: string;
  created_at_end?: string;
  /** Date range for updates */
  updated_at_start?: string;
  updated_at_end?: string;
  /** Date range for start date */
  start_date_start?: string;
  start_date_end?: string;
  /** Date range for end date */
  end_date_start?: string;
  end_date_end?: string;
}

export interface SearchObjectivesParams {
  /** Search for objectives with this name (partial match) */
  name?: string;
  /** Search for objectives with this description content */
  description?: string;
  /** Filter by objective state */
  state?: 'unstarted' | 'started' | 'done';
  /** Filter by archived status */
  archived?: boolean;
  /** Filter by owner IDs */
  owner_ids?: string[];
  /** Filter by team IDs */
  team_ids?: string[];
  /** Date range for creation */
  created_at_start?: string;
  created_at_end?: string;
  /** Date range for updates */
  updated_at_start?: string;
  updated_at_end?: string;
  /** Date range for completion */
  completed_at_start?: string;
  completed_at_end?: string;
  /** Date range for deadline */
  deadline_start?: string;
  deadline_end?: string;
}

export interface SearchStoriesParams extends Omit<SearchStories, 'owner_id'> {
  /** Search for stories with this name (partial match) */
  name?: string;
  /** Search for stories with this description content */
  description?: string;
  /** Filter by team IDs */
  team_ids?: string[];
  /** Filter by label names */
  label_names?: string[];
}

// Common search options that apply to all search methods
export interface SearchOptions {
  /** Number of results per page (1-25) */
  page_size?: number;
  /** Level of detail in results */
  detail?: 'full' | 'slim';
  /** Pagination token for next page */
  next?: string;
}

export class ShortcutClient<
  SecurityDataType = unknown,
> extends Api<SecurityDataType> {
  constructor(apiToken: string, config: ApiConfig<SecurityDataType> = {}) {
    if (apiToken == null || typeof apiToken !== 'string') {
      // eslint-disable-next-line no-console
      console.error('You need to supply an API Token.');
    }

    super({
      headers: { 'Shortcut-Token': apiToken, ...config.headers },
      ...config,
    });
  }

  /**
   * Build a search query string from typed parameters
   * @private
   */
  private static buildSearchQuery(params: Record<string, any>): string {
    const queryParts: string[] = [];

    // Helper to add date range queries
    const addDateRange = (field: string, start?: string, end?: string) => {
      if (start && end) {
        queryParts.push(`${field}:${start}..${end}`);
      } else if (start) {
        queryParts.push(`${field}:${start}..*`);
      } else if (end) {
        queryParts.push(`${field}:*..${end}`);
      }
    };

    // Text searches
    if (params.name) {
      queryParts.push(`name:"${params.name}"`);
    }
    if (params.description) {
      queryParts.push(`description:"${params.description}"`);
    }

    // State filters
    if (params.state) {
      queryParts.push(`state:${params.state}`);
    }

    // Boolean filters
    if (params.archived !== undefined) {
      queryParts.push(`archived:${params.archived}`);
    }

    // Array filters
    if (params.owner_ids?.length) {
      params.owner_ids.forEach((id: string) => {
        queryParts.push(`owner:${id}`);
      });
    }
    if (params.team_ids?.length) {
      params.team_ids.forEach((id: string) => {
        queryParts.push(`team:${id}`);
      });
    }
    if (params.objective_ids?.length) {
      params.objective_ids.forEach((id: number) => {
        queryParts.push(`objective:${id}`);
      });
    }
    if (params.label_names?.length) {
      params.label_names.forEach((name: string) => {
        queryParts.push(`label:"${name}"`);
      });
    }

    // Story-specific filters
    if (params.story_type) {
      queryParts.push(`type:${params.story_type}`);
    }
    if (params.estimate !== undefined) {
      queryParts.push(`estimate:${params.estimate}`);
    }
    if (params.epic_ids?.length) {
      params.epic_ids.forEach((id: number) => {
        queryParts.push(`epic:${id}`);
      });
    }
    if (params.project_ids?.length) {
      params.project_ids.forEach((id: number | null) => {
        if (id === null) {
          queryParts.push('project:none');
        } else {
          queryParts.push(`project:${id}`);
        }
      });
    }
    if (params.iteration_ids?.length) {
      params.iteration_ids.forEach((id: number) => {
        queryParts.push(`iteration:${id}`);
      });
    }

    // Date ranges
    addDateRange('created', params.created_at_start, params.created_at_end);
    addDateRange('updated', params.updated_at_start, params.updated_at_end);
    addDateRange(
      'completed',
      params.completed_at_start,
      params.completed_at_end,
    );
    addDateRange('deadline', params.deadline_start, params.deadline_end);
    addDateRange('start', params.start_date_start, params.start_date_end);
    addDateRange('end', params.end_date_start, params.end_date_end);

    return queryParts.join(' ');
  }

  /**
   * Search stories with typed parameters
   */
  async searchStoriesTyped(
    params: SearchStoriesParams,
    options: SearchOptions = {},
  ): Promise<StorySearchResults> {
    const query = ShortcutClient.buildSearchQuery(params);
    const response = await this.searchStories({
      query,
      ...options,
    });
    return response.data;
  }

  /**
   * Search epics with typed parameters
   */
  async searchEpicsTyped(
    params: SearchEpicsParams,
    options: SearchOptions = {},
  ): Promise<EpicSearchResults> {
    const query = ShortcutClient.buildSearchQuery(params);
    const response = await this.searchEpics({
      query,
      ...options,
    });
    return response.data;
  }

  /**
   * Search iterations with typed parameters
   */
  async searchIterationsTyped(
    params: SearchIterationsParams,
    options: SearchOptions = {},
  ): Promise<IterationSearchResults> {
    const query = ShortcutClient.buildSearchQuery(params);
    const response = await this.searchIterations({
      query,
      ...options,
    });
    return response.data;
  }

  /**
   * Search objectives with typed parameters
   */
  async searchObjectivesTyped(
    params: SearchObjectivesParams,
    options: SearchOptions = {},
  ): Promise<ObjectiveSearchResults> {
    const query = ShortcutClient.buildSearchQuery(params);
    const response = await this.searchObjectives({
      query,
      ...options,
    });
    return response.data;
  }
}
