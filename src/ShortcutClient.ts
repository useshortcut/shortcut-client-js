import { Api } from './generated/Api';
import type { ApiConfig } from './generated/http-client';
import type {
  SearchStories,
  StorySearchResults,
  EpicSearchResults,
  IterationSearchResults,
  ObjectiveSearchResults,
} from './generated/data-contracts';

// Date type utilities for better type safety
/**
 * Represents a date in YYYY-MM-DD format or ISO 8601 date-time string.
 * Can also be a Date object which will be converted to ISO string.
 */
export type DateInput = string | Date;

/**
 * Date range for filtering
 */
export interface DateRange {
  /** Start date (inclusive) */
  start?: DateInput;
  /** End date (inclusive) */
  end?: DateInput;
}

/**
 * Helper function to convert DateInput to ISO string format expected by API
 */
function toISODateString(date: DateInput): string {
  if (date instanceof Date) {
    return date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD
  }
  return date;
}

/**
 * Helper function to create date ranges for common use cases
 */
export const DateRanges = {
  /** Today only */
  today: (): DateRange => ({
    start: new Date().toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0],
  }),

  /** Yesterday only */
  yesterday: (): DateRange => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dateStr = yesterday.toISOString().split('T')[0];
    return { start: dateStr, end: dateStr };
  },

  /** Current week (Monday to Sunday) */
  thisWeek: (): DateRange => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    return {
      start: monday.toISOString().split('T')[0],
      end: sunday.toISOString().split('T')[0],
    };
  },

  /** Current month */
  thisMonth: (): DateRange => {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    return {
      start: firstDay.toISOString().split('T')[0],
      end: lastDay.toISOString().split('T')[0],
    };
  },

  /** Last N days (including today) */
  lastDays: (days: number): DateRange => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days + 1);

    return {
      start: start.toISOString().split('T')[0],
      end: end.toISOString().split('T')[0],
    };
  },

  /** From a specific date to now */
  since: (date: DateInput): DateRange => ({
    start: date,
  }),

  /** Up to a specific date */
  until: (date: DateInput): DateRange => ({
    end: date,
  }),

  /** Between two specific dates */
  between: (start: DateInput, end: DateInput): DateRange => ({
    start,
    end,
  }),
};

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

  // Date filtering - can use individual fields or DateRange objects
  /** Date range for creation (alternative to created_at_start/end) */
  created_at?: DateRange;
  /** Start date for creation filter */
  created_at_start?: DateInput;
  /** End date for creation filter */
  created_at_end?: DateInput;

  /** Date range for updates (alternative to updated_at_start/end) */
  updated_at?: DateRange;
  /** Start date for update filter */
  updated_at_start?: DateInput;
  /** End date for update filter */
  updated_at_end?: DateInput;

  /** Date range for completion (alternative to completed_at_start/end) */
  completed_at?: DateRange;
  /** Start date for completion filter */
  completed_at_start?: DateInput;
  /** End date for completion filter */
  completed_at_end?: DateInput;

  /** Date range for deadline (alternative to deadline_start/end) */
  deadline?: DateRange;
  /** Start date for deadline filter */
  deadline_start?: DateInput;
  /** End date for deadline filter */
  deadline_end?: DateInput;
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

  // Date filtering - can use individual fields or DateRange objects
  /** Date range for creation (alternative to created_at_start/end) */
  created_at?: DateRange;
  /** Start date for creation filter */
  created_at_start?: DateInput;
  /** End date for creation filter */
  created_at_end?: DateInput;

  /** Date range for updates (alternative to updated_at_start/end) */
  updated_at?: DateRange;
  /** Start date for update filter */
  updated_at_start?: DateInput;
  /** End date for update filter */
  updated_at_end?: DateInput;

  /** Date range for iteration start date (alternative to start_date_start/end) */
  start_date?: DateRange;
  /** Start date for iteration start filter */
  start_date_start?: DateInput;
  /** End date for iteration start filter */
  start_date_end?: DateInput;

  /** Date range for iteration end date (alternative to end_date_start/end) */
  end_date?: DateRange;
  /** Start date for iteration end filter */
  end_date_start?: DateInput;
  /** End date for iteration end filter */
  end_date_end?: DateInput;
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

  // Date filtering - can use individual fields or DateRange objects
  /** Date range for creation (alternative to created_at_start/end) */
  created_at?: DateRange;
  /** Start date for creation filter */
  created_at_start?: DateInput;
  /** End date for creation filter */
  created_at_end?: DateInput;

  /** Date range for updates (alternative to updated_at_start/end) */
  updated_at?: DateRange;
  /** Start date for update filter */
  updated_at_start?: DateInput;
  /** End date for update filter */
  updated_at_end?: DateInput;

  /** Date range for completion (alternative to completed_at_start/end) */
  completed_at?: DateRange;
  /** Start date for completion filter */
  completed_at_start?: DateInput;
  /** End date for completion filter */
  completed_at_end?: DateInput;

  /** Date range for deadline (alternative to deadline_start/end) */
  deadline?: DateRange;
  /** Start date for deadline filter */
  deadline_start?: DateInput;
  /** End date for deadline filter */
  deadline_end?: DateInput;
}

export interface SearchStoriesParams
  extends Omit<
    SearchStories,
    | 'owner_id'
    | 'created_at_start'
    | 'created_at_end'
    | 'updated_at_start'
    | 'updated_at_end'
    | 'completed_at_start'
    | 'completed_at_end'
    | 'deadline_start'
    | 'deadline_end'
  > {
  /** Search for stories with this name (partial match) */
  name?: string;
  /** Search for stories with this description content */
  description?: string;
  /** Filter by team IDs */
  team_ids?: string[];
  /** Filter by label names */
  label_names?: string[];

  // Enhanced date filtering - can use individual fields or DateRange objects
  /** Date range for creation (alternative to created_at_start/end) */
  created_at?: DateRange;
  /** Start date for creation filter */
  created_at_start?: DateInput;
  /** End date for creation filter */
  created_at_end?: DateInput;

  /** Date range for updates (alternative to updated_at_start/end) */
  updated_at?: DateRange;
  /** Start date for update filter */
  updated_at_start?: DateInput;
  /** End date for update filter */
  updated_at_end?: DateInput;

  /** Date range for completion (alternative to completed_at_start/end) */
  completed_at?: DateRange;
  /** Start date for completion filter */
  completed_at_start?: DateInput;
  /** End date for completion filter */
  completed_at_end?: DateInput;

  /** Date range for deadline (alternative to deadline_start/end) */
  deadline?: DateRange;
  /** Start date for deadline filter */
  deadline_start?: DateInput;
  /** End date for deadline filter */
  deadline_end?: DateInput;
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

    // Helper to add date range queries with DateInput support
    const addDateRange = (
      field: string,
      start?: DateInput,
      end?: DateInput,
    ) => {
      const startStr = start ? toISODateString(start) : undefined;
      const endStr = end ? toISODateString(end) : undefined;

      if (startStr && endStr) {
        queryParts.push(`${field}:${startStr}..${endStr}`);
      } else if (startStr) {
        queryParts.push(`${field}:${startStr}..*`);
      } else if (endStr) {
        queryParts.push(`${field}:*..${endStr}`);
      }
    };

    // Helper to process DateRange objects and individual date fields
    const processDateFilter = (
      paramFieldName: string,
      queryFieldName: string,
    ) => {
      const rangeField = `${paramFieldName}` as keyof typeof params;
      const startField = `${paramFieldName}_start` as keyof typeof params;
      const endField = `${paramFieldName}_end` as keyof typeof params;

      // If DateRange object is provided, use it (takes precedence)
      if (params[rangeField]) {
        const range = params[rangeField] as DateRange;
        addDateRange(queryFieldName, range.start, range.end);
      }
      // Otherwise, use individual start/end fields
      else if (params[startField] || params[endField]) {
        addDateRange(queryFieldName, params[startField], params[endField]);
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

    // Process date filters (supports both DateRange objects and individual start/end fields)
    // Map parameter field names to search query field names
    processDateFilter('created_at', 'created');
    processDateFilter('updated_at', 'updated');
    processDateFilter('completed_at', 'completed');
    processDateFilter('deadline', 'deadline');
    processDateFilter('start_date', 'start');
    processDateFilter('end_date', 'end');

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
