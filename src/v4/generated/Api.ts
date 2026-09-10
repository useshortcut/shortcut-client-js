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

import type {
  ApiError,
  BranchEntityListWrapper,
  BranchEntityWrapper,
  BranchPullRequestEntityListWrapper,
  BranchStoryEntityListWrapper,
  BulkCreateCategoriesParams,
  BulkCreateDocsParams,
  BulkCreateEntityTemplatesParams,
  BulkCreateEpicCommentsParams,
  BulkCreateEpicsParams,
  BulkCreateIterationsParams,
  BulkCreateLabelsParams,
  BulkCreateLinkedFilesParams,
  BulkCreateObjectivesParams,
  BulkCreateStoriesParams,
  BulkCreateStoryChecklistItemsParams,
  BulkCreateStoryCommentsParams,
  BulkCreateStoryLinksParams,
  BulkCreateTeamsParams,
  BulkDeleteCategoriesParams,
  BulkDeleteCustomFieldsParams,
  BulkDeleteEntityTemplatesParams,
  BulkDeleteEpicCommentsParams,
  BulkDeleteEpicsParams,
  BulkDeleteFilesParams,
  BulkDeleteIterationsParams,
  BulkDeleteLabelsParams,
  BulkDeleteLinkedFilesParams,
  BulkDeleteObjectivesParams,
  BulkDeleteStoriesParams,
  BulkDeleteStoryChecklistItemsParams,
  BulkDeleteStoryCommentsParams,
  BulkDeleteStoryLinksParams,
  BulkUpdateCategoriesParams,
  BulkUpdateCustomFieldsParams,
  BulkUpdateEntityTemplatesParams,
  BulkUpdateEpicCommentsParams,
  BulkUpdateEpicsParams,
  BulkUpdateIterationsParams,
  BulkUpdateLabelsParams,
  BulkUpdateLinkedFilesParams,
  BulkUpdateMembersParams,
  BulkUpdateObjectivesParams,
  BulkUpdateStoriesParams,
  BulkUpdateStoryChecklistItemsParams,
  BulkUpdateStoryCommentsParams,
  BulkUpdateStoryLinksParams,
  BulkUpdateTeamsParams,
  CategoryEntityListWrapper,
  CategoryEntityWrapper,
  CategoryObjectiveEntityListWrapper,
  CollectionEntityListWrapper,
  CollectionEntityWrapper,
  CommitEntityListWrapper,
  CommitEntityWrapper,
  CommitStoryEntityListWrapper,
  CreateCategoryParams,
  CreateCollectionParams,
  CreateDocBody,
  CreateEntityTemplateParams,
  CreateEpicCommentParams,
  CreateEpicHealthParams,
  CreateEpicParams,
  CreateIterationParams,
  CreateLabelParams,
  CreateLinkedFileParams,
  CreateObjectiveHealthParams,
  CreateObjectiveParams,
  CreateProjectParams,
  CreateStoryBody,
  CreateStoryChecklistItemBody,
  CreateStoryCommentParams,
  CreateStoryCommentReactionParams,
  CreateStoryLinkParams,
  CreateTeamParams,
  CurrentIterationsOutput,
  CustomFieldEntityListWrapper,
  CustomFieldEntityWrapper,
  CustomFieldStoryEntityListWrapper,
  DisabledFeatureError,
  DocCollectionEntityListWrapper,
  DocEntityListWrapper,
  DocEntityWrapper,
  DocFollowerEntityListWrapper,
  EntityTemplateEntityListWrapper,
  EntityTemplateEntityWrapper,
  EpicCommentCommentEntityListWrapper,
  EpicCommentEntityListWrapper,
  EpicCommentEntityWrapper,
  EpicCommentMentionedMemberEntityListWrapper,
  EpicCommentMentionedTeamEntityListWrapper,
  EpicEntityListWrapper,
  EpicEntityWrapper,
  EpicFollowerEntityListWrapper,
  EpicLabelEntityListWrapper,
  EpicMentionedMemberEntityListWrapper,
  EpicMentionedTeamEntityListWrapper,
  EpicObjectiveEntityListWrapper,
  EpicOwnerEntityListWrapper,
  EpicStateEntityListWrapper,
  EpicStatsWrapper,
  EpicStoryEntityListWrapper,
  EpicTeamEntityListWrapper,
  EpicWorkflowEntityWrapper,
  FileEntityListWrapper,
  FileEntityWrapper,
  FileMentionedMemberEntityListWrapper,
  FileMentionedTeamEntityListWrapper,
  FileStoryEntityListWrapper,
  HealthEntityListWrapper,
  HealthEntityWrapper,
  IterationAssociatedTeamEntityListWrapper,
  IterationEntityListWrapper,
  IterationEntityWrapper,
  IterationFollowerEntityListWrapper,
  IterationLabelEntityListWrapper,
  IterationMentionedMemberEntityListWrapper,
  IterationMentionedTeamEntityListWrapper,
  IterationStoryEntityListWrapper,
  IterationTeamEntityListWrapper,
  KeyResultEntityListWrapper,
  KeyResultEntityWrapper,
  LabelEntityListWrapper,
  LabelEntityWrapper,
  LabelEpicEntityListWrapper,
  LabelStoryEntityListWrapper,
  LinkedFileEntityListWrapper,
  LinkedFileEntityWrapper,
  LinkedFileMentionedMemberEntityListWrapper,
  LinkedFileMentionedTeamEntityListWrapper,
  LinkedFileStoryEntityListWrapper,
  MemberEntityListWrapper,
  MemberEntityWrapper,
  MemberStoryEntityListWrapper,
  MemberTeamEntityListWrapper,
  ObjectiveCategoryEntityListWrapper,
  ObjectiveEntityListWrapper,
  ObjectiveEntityWrapper,
  ObjectiveEpicEntityListWrapper,
  ObjectiveKeyResultEntityListWrapper,
  ObjectiveOwnerEntityListWrapper,
  ObjectiveTeamEntityListWrapper,
  ProjectEntityListWrapper,
  ProjectEntityWrapper,
  ProjectFollowerEntityListWrapper,
  ProjectStoryEntityListWrapper,
  PullRequestEntityListWrapper,
  PullRequestEntityWrapper,
  PullRequestStoryEntityListWrapper,
  RepositoryBranchEntityListWrapper,
  RepositoryCommitEntityListWrapper,
  RepositoryEntityListWrapper,
  RepositoryEntityWrapper,
  RepositoryPullRequestEntityListWrapper,
  SearchEntitiesOutput,
  StoryBranchEntityListWrapper,
  StoryChecklistItemEntityListWrapper,
  StoryChecklistItemEntityWrapper,
  StoryChecklistItemMentionedMemberEntityListWrapper,
  StoryChecklistItemMentionedTeamEntityListWrapper,
  StoryCommentCommentEntityListWrapper,
  StoryCommentEntityListWrapper,
  StoryCommentEntityWrapper,
  StoryCommentMentionedMemberEntityListWrapper,
  StoryCommentMentionedTeamEntityListWrapper,
  StoryCommentReactionEntityListWrapper,
  StoryCommentReactionEntityWrapper,
  StoryCommitEntityListWrapper,
  StoryCustomFieldValueEntityListWrapper,
  StoryEntityListWrapper,
  StoryEntityWrapper,
  StoryExternalLinkEntityListWrapper,
  StoryFileEntityListWrapper,
  StoryFollowerEntityListWrapper,
  StoryHistoryResponseWrapper,
  StoryIterationEntityListWrapper,
  StoryLabelEntityListWrapper,
  StoryLinkedFileEntityListWrapper,
  StoryLinkEntityListWrapper,
  StoryLinkEntityWrapper,
  StoryMentionedMemberEntityListWrapper,
  StoryMentionedTeamEntityListWrapper,
  StoryOwnerEntityListWrapper,
  StoryPullRequestEntityListWrapper,
  StoryStoryLinkEntityListWrapper,
  StorySubTaskStoryEntityListWrapper,
  TeamEntityListWrapper,
  TeamEntityWrapper,
  TeamMemberEntityListWrapper,
  TeamStoryEntityListWrapper,
  TeamWorkflowEntityListWrapper,
  UnusableEntitlementError,
  UpdateCategoryParams,
  UpdateCustomFieldParams,
  UpdateEntityTemplateParams,
  UpdateEpicCommentParams,
  UpdateEpicParams,
  UpdateIterationParams,
  UpdateKeyResultParams,
  UpdateLabelParams,
  UpdateLinkedFileParams,
  UpdateMemberParams,
  UpdateObjectiveParams,
  UpdateProjectParams,
  UpdateStoryChecklistItemParams,
  UpdateStoryCommentParams,
  UpdateStoryLinkBody,
  UpdateStoryParams,
  UpdateTeamParams,
  UploadFilesParams,
  WhoamiEntityWrapper,
  WorkflowEntityListWrapper,
  WorkflowEntityWrapper,
  WorkflowProjectEntityListWrapper,
  WorkflowStateEntityListWrapper,
  WorkflowStateEntityWrapper,
  WorkflowStoryEntityListWrapper,
  WorkflowTeamEntityListWrapper,
  WorkspaceTokenEntityListWrapper,
} from "./data-contracts";
import { ContentType, HttpClient, type RequestParams } from "./http-client";

/** 
 * Please don't use this class directly, instead use the `ShortcutClient` class we provided which is extending this class to add headers for authorization. * @internal
 * @private
 */

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns details about the currently-authenticated member and token authorization.
   *
   * @name GetWhoami
   * @summary Get Whoami
   * @request GET:/api/v4/whoami
   * @secure
   */
  getWhoami = (params: RequestParams = {}) =>
    this.request<WhoamiEntityWrapper, ApiError>({
      path: `/api/v4/whoami`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Gets the json-schema for a route.
   *
   * @name GetSchema
   * @summary Get Schema
   * @request GET:/api/v4/schemas/{schema-name}
   * @secure
   */
  getSchema = (schemaName: string, params: RequestParams = {}) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/schemas/${schemaName}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description List Workspace Tokens returns a paginated list of all API Tokens in the Workspace. Requires admin role.
   *
   * @name ListWorkspaceTokens
   * @summary List Workspace Tokens
   * @request GET:/api/v4/{workspace-slug}/admin/tokens
   * @secure
   */
  listWorkspaceTokens = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkspaceTokenEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/admin/tokens`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Delete Workspace Token disables an API Token in the Workspace. Requires admin role.
   *
   * @name DeleteWorkspaceToken
   * @summary Delete Workspace Token
   * @request DELETE:/api/v4/{workspace-slug}/admin/tokens/{token-public-id}
   * @secure
   */
  deleteWorkspaceToken = (
    workspaceSlug: string,
    tokenPublicId: string,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/admin/tokens/${tokenPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description List Branches returns a paginated list of all Branches in the Workspace that have either been associated with a Story, or used in a Pull Request that was associated with a Story.
   *
   * @name ListBranches
   * @summary List Branches
   * @request GET:/api/v4/{workspace-slug}/branches
   * @secure
   */
  listBranches = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_deleted). */
      filter?: "exclude_deleted" | "include_deleted";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BranchEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/branches`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Branch returns information about a chosen Branch.
   *
   * @name GetBranch
   * @summary Get Branch
   * @request GET:/api/v4/{workspace-slug}/branches/{branch-public-id}
   * @secure
   */
  getBranch = (
    workspaceSlug: string,
    branchPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BranchEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/branches/${branchPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Branch Stories returns a paginated list of all Stories associated with a Branch in the Workspace.
   *
   * @name ListBranchStories
   * @summary List Branch Stories
   * @request GET:/api/v4/{workspace-slug}/branches/{branch-public-id}/stories
   * @secure
   */
  listBranchStories = (
    workspaceSlug: string,
    branchPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BranchStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/branches/${branchPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Branch Pull Requests returns a paginated list of all Pull Requests associated with a Branch in the Workspace.
   *
   * @name ListBranchPullRequests
   * @summary List Branch Pull Requests
   * @request GET:/api/v4/{workspace-slug}/branches/{branch-public-id}/pull-requests
   * @secure
   */
  listBranchPullRequests = (
    workspaceSlug: string,
    branchPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :include_closed). */
      filter?: "exclude_closed" | "include_closed";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BranchPullRequestEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/branches/${branchPublicId}/pull-requests`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Categories returns a paginated list of all Categories in the Workspace.
   *
   * @name ListCategories
   * @summary List Categories
   * @request GET:/api/v4/{workspace-slug}/categories
   * @secure
   */
  listCategories = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/categories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Category allows you to create a new Category in Shortcut.
   *
   * @name CreateCategory
   * @summary Create Category
   * @request POST:/api/v4/{workspace-slug}/categories
   * @secure
   */
  createCategory = (
    workspaceSlug: string,
    data: CreateCategoryParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/categories`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Categories deletes multiple Categories.
   *
   * @name BulkDeleteCategories
   * @summary Bulk Delete Categories
   * @request DELETE:/api/v4/{workspace-slug}/categories/bulk
   * @secure
   */
  bulkDeleteCategories = (
    workspaceSlug: string,
    data: BulkDeleteCategoriesParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/categories/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Categories updates multiple Categories, and returns a paginated list of the updated Categories.
   *
   * @name BulkUpdateCategories
   * @summary Bulk Update Categories
   * @request PATCH:/api/v4/{workspace-slug}/categories/bulk
   * @secure
   */
  bulkUpdateCategories = (
    workspaceSlug: string,
    data: BulkUpdateCategoriesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/categories/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Categories creates multiple Categories, and returns a paginated list of the created Categories.
   *
   * @name BulkCreateCategories
   * @summary Bulk Create Categories
   * @request POST:/api/v4/{workspace-slug}/categories/bulk
   * @secure
   */
  bulkCreateCategories = (
    workspaceSlug: string,
    data: BulkCreateCategoriesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/categories/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete Category removes a Category from the Workspace.
   *
   * @name DeleteCategory
   * @summary Delete Category
   * @request DELETE:/api/v4/{workspace-slug}/categories/{category-public-id}
   * @secure
   */
  deleteCategory = (
    workspaceSlug: string,
    categoryPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/categories/${categoryPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get Category returns information about a chosen Category.
   *
   * @name GetCategory
   * @summary Get Category
   * @request GET:/api/v4/{workspace-slug}/categories/{category-public-id}
   * @secure
   */
  getCategory = (
    workspaceSlug: string,
    categoryPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/categories/${categoryPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Category allows you to modify a Category in your Shortcut Workspace.
   *
   * @name UpdateCategory
   * @summary Update Category
   * @request PATCH:/api/v4/{workspace-slug}/categories/{category-public-id}
   * @secure
   */
  updateCategory = (
    workspaceSlug: string,
    categoryPublicId: number,
    data: UpdateCategoryParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/categories/${categoryPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Category Objectives returns a paginated list of all Objectives associated with a Category in the Workspace.
   *
   * @name ListCategoryObjectives
   * @summary List Category Objectives
   * @request GET:/api/v4/{workspace-slug}/categories/{category-public-id}/objectives
   * @secure
   */
  listCategoryObjectives = (
    workspaceSlug: string,
    categoryPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryObjectiveEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/categories/${categoryPublicId}/objectives`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Collections returns a paginated list of all Collections in the Workspace.
   *
   * @name ListCollections
   * @summary List Collections
   * @request GET:/api/v4/{workspace-slug}/collections
   * @secure
   */
  listCollections = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived" | "favorited";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CollectionEntityListWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/collections`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Collection allows you to create a new Collection in the Workspace.
   *
   * @name CreateCollection
   * @summary Create Collection
   * @request POST:/api/v4/{workspace-slug}/collections
   * @secure
   */
  createCollection = (
    workspaceSlug: string,
    data: CreateCollectionParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CollectionEntityWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/collections`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Get Collection returns information about a chosen Collection.
   *
   * @name GetCollection
   * @summary Get Collection
   * @request GET:/api/v4/{workspace-slug}/collections/{collection-public-id}
   * @secure
   */
  getCollection = (
    workspaceSlug: string,
    collectionPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CollectionEntityWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/collections/${collectionPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Favorite Collection marks the Collection as a favorite of the current Member, and returns the updated Collection.
   *
   * @name FavoriteCollection
   * @summary Favorite Collection
   * @request PUT:/api/v4/{workspace-slug}/collections/{collection-public-id}/favorite
   * @secure
   */
  favoriteCollection = (
    workspaceSlug: string,
    collectionPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CollectionEntityWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/collections/${collectionPublicId}/favorite`,
      method: "PUT",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Unfavorite Collection removes the Collection from the current Member's favorites.
   *
   * @name UnfavoriteCollection
   * @summary Unfavorite Collection
   * @request DELETE:/api/v4/{workspace-slug}/collections/{collection-public-id}/favorite
   * @secure
   */
  unfavoriteCollection = (
    workspaceSlug: string,
    collectionPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/collections/${collectionPublicId}/favorite`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Commits returns a paginated list of all Commits in the Workspace that have been associated with Stories.
   *
   * @name ListCommits
   * @summary List Commits
   * @request GET:/api/v4/{workspace-slug}/commits
   * @secure
   */
  listCommits = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CommitEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/commits`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Commit returns information about a chosen Commit.
   *
   * @name GetCommit
   * @summary Get Commit
   * @request GET:/api/v4/{workspace-slug}/commits/{commit-public-id}
   * @secure
   */
  getCommit = (
    workspaceSlug: string,
    commitPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CommitEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/commits/${commitPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Commit Stories returns a paginated list of all Stories associated with a Commit in the Workspace.
   *
   * @name ListCommitStories
   * @summary List Commit Stories
   * @request GET:/api/v4/{workspace-slug}/commits/{commit-public-id}/stories
   * @secure
   */
  listCommitStories = (
    workspaceSlug: string,
    commitPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CommitStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/commits/${commitPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Custom Fields returns a paginated list of all Custom Fields in the Workspace.
   *
   * @name ListCustomFields
   * @summary List Custom Fields
   * @request GET:/api/v4/{workspace-slug}/custom-fields
   * @secure
   */
  listCustomFields = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CustomFieldEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/custom-fields`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Bulk Delete Custom Fields removes multiple Custom Fields from the Workspace.
   *
   * @name BulkDeleteCustomFields
   * @summary Bulk Delete Custom Fields
   * @request DELETE:/api/v4/{workspace-slug}/custom-fields/bulk
   * @secure
   */
  bulkDeleteCustomFields = (
    workspaceSlug: string,
    data: BulkDeleteCustomFieldsParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/custom-fields/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Custom Fields updates multiple Custom Fields, and returns a paginated list of the updated Custom Fields.
   *
   * @name BulkUpdateCustomFields
   * @summary Bulk Update Custom Fields
   * @request PATCH:/api/v4/{workspace-slug}/custom-fields/bulk
   * @secure
   */
  bulkUpdateCustomFields = (
    workspaceSlug: string,
    data: BulkUpdateCustomFieldsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CustomFieldEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/custom-fields/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete Custom Field removes a Custom Field from the Workspace.
   *
   * @name DeleteCustomField
   * @summary Delete Custom Field
   * @request DELETE:/api/v4/{workspace-slug}/custom-fields/{custom-field-public-id}
   * @secure
   */
  deleteCustomField = (
    workspaceSlug: string,
    customFieldPublicId: string,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/custom-fields/${customFieldPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get Custom Field returns information about a chosen Custom Field.
   *
   * @name GetCustomField
   * @summary Get Custom Field
   * @request GET:/api/v4/{workspace-slug}/custom-fields/{custom-field-public-id}
   * @secure
   */
  getCustomField = (
    workspaceSlug: string,
    customFieldPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CustomFieldEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/custom-fields/${customFieldPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Custom Field allows you to modify a Custom Field definition in your Shortcut Workspace.
   *
   * @name UpdateCustomField
   * @summary Update Custom Field
   * @request PATCH:/api/v4/{workspace-slug}/custom-fields/{custom-field-public-id}
   * @secure
   */
  updateCustomField = (
    workspaceSlug: string,
    customFieldPublicId: string,
    data: UpdateCustomFieldParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CustomFieldEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/custom-fields/${customFieldPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Stories that have a value set for the specified Custom Field.
   *
   * @name ListCustomFieldStories
   * @summary List Custom Field Stories
   * @request GET:/api/v4/{workspace-slug}/custom-fields/{custom-field-public-id}/stories
   * @secure
   */
  listCustomFieldStories = (
    workspaceSlug: string,
    customFieldPublicId: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CustomFieldStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/custom-fields/${customFieldPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Docs returns a paginated list of all accessible Docs in the Workspace.
   *
   * @name ListDocs
   * @summary List Docs
   * @request GET:/api/v4/{workspace-slug}/documents
   * @secure
   */
  listDocs = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DocEntityListWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/documents`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Doc allows you to create a new Doc in the Workspace.
   *
   * @name CreateDoc
   * @summary Create Doc
   * @request POST:/api/v4/{workspace-slug}/documents
   * @secure
   */
  createDoc = (
    workspaceSlug: string,
    data: CreateDocBody,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DocEntityWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/documents`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Docs creates multiple Docs, and returns a paginated list of the created Docs.
   *
   * @name BulkCreateDocs
   * @summary Bulk Create Docs
   * @request POST:/api/v4/{workspace-slug}/documents/bulk
   * @secure
   */
  bulkCreateDocs = (
    workspaceSlug: string,
    data: BulkCreateDocsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DocEntityListWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/documents/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Search Docs lets you search Docs by title, with optional archived/created_by_me/followed_by_me filters.
   *
   * @name SearchDocs
   * @summary Search Docs
   * @request GET:/api/v4/{workspace-slug}/documents/search
   * @secure
   */
  searchDocs = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /**
       * Search text to match against Doc titles. Supports fuzzy matching. Required if `cursor` is not sent.
       * @minLength 1
       */
      query?: string;
      /** When true, find archived Docs. When false, find non-archived Docs. */
      archived?: boolean;
      /** When true, find Docs created by the current user. When false, find Docs NOT created by the current user. */
      created_by_me?: boolean;
      /** When true, find Docs that the current user is following. When false, find Docs NOT followed by the current user. */
      followed_by_me?: boolean;
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DocEntityListWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/documents/search`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Doc returns information about a chosen Doc. Pass content_format=markdown (default) or content_format=html to include content in the response.
   *
   * @name GetDoc
   * @summary Get Doc
   * @request GET:/api/v4/{workspace-slug}/documents/{doc-public-id}
   * @secure
   */
  getDoc = (
    workspaceSlug: string,
    docPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DocEntityWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/documents/${docPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Doc Followers returns a paginated list of all Members following a Doc in the Workspace.
   *
   * @name ListDocFollowers
   * @summary List Doc Followers
   * @request GET:/api/v4/{workspace-slug}/documents/{doc-public-id}/followers
   * @secure
   */
  listDocFollowers = (
    workspaceSlug: string,
    docPublicId: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DocFollowerEntityListWrapper, ApiError | DisabledFeatureError>(
      {
        path: `/api/v4/${workspaceSlug}/documents/${docPublicId}/followers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      },
    );
  /**
   * @description List Doc Collections returns a paginated list of the Collections the Doc belongs to.
   *
   * @name ListDocCollections
   * @summary List Doc Collections
   * @request GET:/api/v4/{workspace-slug}/documents/{doc-public-id}/collections
   * @secure
   */
  listDocCollections = (
    workspaceSlug: string,
    docPublicId: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived" | "favorited";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DocCollectionEntityListWrapper,
      ApiError | DisabledFeatureError
    >({
      path: `/api/v4/${workspaceSlug}/documents/${docPublicId}/collections`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Add Doc to Collection adds the Doc to the chosen Collection, preserving its other Collection memberships, and returns the updated Doc. Requires write access to the Doc.
   *
   * @name AddDocToCollection
   * @summary Add Doc to Collection
   * @request PUT:/api/v4/{workspace-slug}/documents/{doc-public-id}/collections/{collection-public-id}
   * @secure
   */
  addDocToCollection = (
    workspaceSlug: string,
    docPublicId: string,
    collectionPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DocEntityWrapper, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/documents/${docPublicId}/collections/${collectionPublicId}`,
      method: "PUT",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Remove Doc from Collection removes the Doc from the chosen Collection, preserving its other Collection memberships. Requires write access to the Doc.
   *
   * @name RemoveDocFromCollection
   * @summary Remove Doc from Collection
   * @request DELETE:/api/v4/{workspace-slug}/documents/{doc-public-id}/collections/{collection-public-id}
   * @secure
   */
  removeDocFromCollection = (
    workspaceSlug: string,
    docPublicId: string,
    collectionPublicId: string,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError | DisabledFeatureError>({
      path: `/api/v4/${workspaceSlug}/documents/${docPublicId}/collections/${collectionPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description List Entity Templates returns a paginated list of all Entity Templates in the Workspace.
   *
   * @name ListEntityTemplates
   * @summary List Entity Templates
   * @request GET:/api/v4/{workspace-slug}/entity-templates
   * @secure
   */
  listEntityTemplates = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityTemplateEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/entity-templates`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Entity Template creates a new Entity Template in your Shortcut Workspace.
   *
   * @name CreateEntityTemplate
   * @summary Create Entity Template
   * @request POST:/api/v4/{workspace-slug}/entity-templates
   * @secure
   */
  createEntityTemplate = (
    workspaceSlug: string,
    data: CreateEntityTemplateParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityTemplateEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/entity-templates`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Entity Templates removes multiple Entity Templates from the Workspace.
   *
   * @name BulkDeleteEntityTemplates
   * @summary Bulk Delete Entity Templates
   * @request DELETE:/api/v4/{workspace-slug}/entity-templates/bulk
   * @secure
   */
  bulkDeleteEntityTemplates = (
    workspaceSlug: string,
    data: BulkDeleteEntityTemplatesParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/entity-templates/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Entity Templates updates multiple Entity Templates, and returns a paginated list of the updated Entity Templates.
   *
   * @name BulkUpdateEntityTemplates
   * @summary Bulk Update Entity Templates
   * @request PATCH:/api/v4/{workspace-slug}/entity-templates/bulk
   * @secure
   */
  bulkUpdateEntityTemplates = (
    workspaceSlug: string,
    data: BulkUpdateEntityTemplatesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityTemplateEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/entity-templates/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Entity Templates creates multiple Entity Templates, and returns a paginated list of the created Entity Templates.
   *
   * @name BulkCreateEntityTemplates
   * @summary Bulk Create Entity Templates
   * @request POST:/api/v4/{workspace-slug}/entity-templates/bulk
   * @secure
   */
  bulkCreateEntityTemplates = (
    workspaceSlug: string,
    data: BulkCreateEntityTemplatesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityTemplateEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/entity-templates/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete Entity Template removes an Entity Template from the Workspace.
   *
   * @name DeleteEntityTemplate
   * @summary Delete Entity Template
   * @request DELETE:/api/v4/{workspace-slug}/entity-templates/{entity-template-public-id}
   * @secure
   */
  deleteEntityTemplate = (
    workspaceSlug: string,
    entityTemplatePublicId: string,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/entity-templates/${entityTemplatePublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get Entity Template returns information about a given Entity Template.
   *
   * @name GetEntityTemplate
   * @summary Get Entity Template
   * @request GET:/api/v4/{workspace-slug}/entity-templates/{entity-template-public-id}
   * @secure
   */
  getEntityTemplate = (
    workspaceSlug: string,
    entityTemplatePublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityTemplateEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/entity-templates/${entityTemplatePublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Entity Template updates an existing Entity Template in your Shortcut Workspace.
   *
   * @name UpdateEntityTemplate
   * @summary Update Entity Template
   * @request PATCH:/api/v4/{workspace-slug}/entity-templates/{entity-template-public-id}
   * @secure
   */
  updateEntityTemplate = (
    workspaceSlug: string,
    entityTemplatePublicId: string,
    data: UpdateEntityTemplateParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityTemplateEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/entity-templates/${entityTemplatePublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns the Epic Workflow configuration for the Workspace.
   *
   * @name GetEpicWorkflow
   * @summary Get Epic Workflow
   * @request GET:/api/v4/{workspace-slug}/epic-workflow
   * @secure
   */
  getEpicWorkflow = (
    workspaceSlug: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicWorkflowEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epic-workflow`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Epic States in the Workspace's Epic Workflow.
   *
   * @name ListEpicWorkflowStates
   * @summary List Epic Workflow States
   * @request GET:/api/v4/{workspace-slug}/epic-workflow/states
   * @secure
   */
  listEpicWorkflowStates = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicStateEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epic-workflow/states`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epics returns a paginated list of all Epics in the Workspace.
   *
   * @name ListEpics
   * @summary List Epics
   * @request GET:/api/v4/{workspace-slug}/epics
   * @secure
   */
  listEpics = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Epic is used to create a new Epic in your Shortcut Workspace.
   *
   * @name CreateEpic
   * @summary Create Epic
   * @request POST:/api/v4/{workspace-slug}/epics
   * @secure
   */
  createEpic = (
    workspaceSlug: string,
    data: CreateEpicParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Epics deletes multiple Epics. The Epics must be archived unless `force` is set.
   *
   * @name BulkDeleteEpics
   * @summary Bulk Delete Epics
   * @request DELETE:/api/v4/{workspace-slug}/epics/bulk
   * @secure
   */
  bulkDeleteEpics = (
    workspaceSlug: string,
    data: BulkDeleteEpicsParams,
    query?: {
      /** Forces deletion of the Epics, overriding the check that they are archived. */
      force?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/bulk`,
      method: "DELETE",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Epics updates multiple Epics, and returns a paginated list of the updated Epics.
   *
   * @name BulkUpdateEpics
   * @summary Bulk Update Epics
   * @request PATCH:/api/v4/{workspace-slug}/epics/bulk
   * @secure
   */
  bulkUpdateEpics = (
    workspaceSlug: string,
    data: BulkUpdateEpicsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Epics creates multiple Epics, and returns a paginated list of the created Epics.
   *
   * @name BulkCreateEpics
   * @summary Bulk Create Epics
   * @request POST:/api/v4/{workspace-slug}/epics/bulk
   * @secure
   */
  bulkCreateEpics = (
    workspaceSlug: string,
    data: BulkCreateEpicsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Search Epics lets you search Epics based on a query.
   *
   * @name SearchEpics
   * @summary Search Epics
   * @request GET:/api/v4/{workspace-slug}/epics/search
   * @secure
   */
  searchEpics = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /**
       * The search query. Required if `cursor` is not sent. See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators).
       * @minLength 1
       */
      query?: string;
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/search`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Delete Epic removes an Epic from the Workspace. The Epic must be archived unless `force` is set.
   *
   * @name DeleteEpic
   * @summary Delete Epic
   * @request DELETE:/api/v4/{workspace-slug}/epics/{epic-public-id}
   * @secure
   */
  deleteEpic = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /** Forces deletion of the Epic, overriding the check that it is archived. */
      force?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Epic returns information about a chosen Epic.
   *
   * @name GetEpic
   * @summary Get Epic
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}
   * @secure
   */
  getEpic = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Epic is used to modify an Epic in your Shortcut Workspace.
   *
   * @name UpdateEpic
   * @summary Update Epic
   * @request PATCH:/api/v4/{workspace-slug}/epics/{epic-public-id}
   * @secure
   */
  updateEpic = (
    workspaceSlug: string,
    epicPublicId: number,
    data: UpdateEpicParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Get Epic Stats returns calculated stats for a chosen Epic. Stats are served from this dedicated sub-endpoint (rather than the Epic response itself) to avoid the performance impact of computing them on bulk list requests.
   *
   * @name GetEpicStats
   * @summary Get Epic Stats
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/stats
   * @secure
   */
  getEpicStats = (
    workspaceSlug: string,
    epicPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<EpicStatsWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/stats`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Teams returns a paginated list of all Teams associated with an Epic in the Workspace.
   *
   * @name ListEpicTeams
   * @summary List Epic Teams
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/teams
   * @secure
   */
  listEpicTeams = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Labels returns a paginated list of all Labels for an Epic in the Workspace.
   *
   * @name ListEpicLabels
   * @summary List Epic Labels
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/labels
   * @secure
   */
  listEpicLabels = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicLabelEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/labels`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Owners returns a paginated list of all Members who own an Epic in the Workspace.
   *
   * @name ListEpicOwners
   * @summary List Epic Owners
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/owners
   * @secure
   */
  listEpicOwners = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicOwnerEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/owners`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Stories returns a paginated list of all Stories associated with an Epic in the Workspace.
   *
   * @name ListEpicStories
   * @summary List Epic Stories
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/stories
   * @secure
   */
  listEpicStories = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Comments returns a paginated list of all Comments for an Epic in the Workspace. Note that deleted comments will also be returned, but will have minimal information. The deleted comments are included as they may be parents to other comments.
   *
   * @name ListEpicComments
   * @summary List Epic Comments
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments
   * @secure
   */
  listEpicComments = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** A comma-separated list of ids. If included, only those entities will be considered for listing. */
      ids?: string;
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicCommentEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Epic Comment is used to add a new Comment to an Epic. To reply to an existing Comment, provide a parent_comment_id.
   *
   * @name CreateEpicComment
   * @summary Create Epic Comment
   * @request POST:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments
   * @secure
   */
  createEpicComment = (
    workspaceSlug: string,
    epicPublicId: number,
    data: CreateEpicCommentParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicCommentEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Epic Followers returns a paginated list of all Members who are following an Epic in the Workspace.
   *
   * @name ListEpicFollowers
   * @summary List Epic Followers
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/followers
   * @secure
   */
  listEpicFollowers = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicFollowerEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/followers`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Objectives returns a paginated list of all Objectives associated with an Epic in the Workspace.
   *
   * @name ListEpicObjectives
   * @summary List Epic Objectives
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/objectives
   * @secure
   */
  listEpicObjectives = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicObjectiveEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/objectives`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of Health updates for the specified Epic.
   *
   * @name ListEpicHealths
   * @summary List Epic Healths
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/epic-healths
   * @secure
   */
  listEpicHealths = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<HealthEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/epic-healths`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Creates a new Health update for the specified Epic.
   *
   * @name CreateEpicHealth
   * @summary Create Epic Health
   * @request POST:/api/v4/{workspace-slug}/epics/{epic-public-id}/epic-healths
   * @secure
   */
  createEpicHealth = (
    workspaceSlug: string,
    epicPublicId: number,
    data: CreateEpicHealthParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<HealthEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/epic-healths`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Epic Comments deletes multiple Comments from an Epic.
   *
   * @name BulkDeleteEpicComments
   * @summary Bulk Delete Epic Comments
   * @request DELETE:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments/bulk
   * @secure
   */
  bulkDeleteEpicComments = (
    workspaceSlug: string,
    epicPublicId: number,
    data: BulkDeleteEpicCommentsParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Epic Comments updates multiple Comments on an Epic, and returns a paginated list of the updated Comments.
   *
   * @name BulkUpdateEpicComments
   * @summary Bulk Update Epic Comments
   * @request PATCH:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments/bulk
   * @secure
   */
  bulkUpdateEpicComments = (
    workspaceSlug: string,
    epicPublicId: number,
    data: BulkUpdateEpicCommentsParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicCommentEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Epic Comments creates multiple Comments on an Epic, and returns a paginated list of the created Comments.
   *
   * @name BulkCreateEpicComments
   * @summary Bulk Create Epic Comments
   * @request POST:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments/bulk
   * @secure
   */
  bulkCreateEpicComments = (
    workspaceSlug: string,
    epicPublicId: number,
    data: BulkCreateEpicCommentsParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicCommentEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Epic Mentioned Teams returns a paginated list of all Teams mentioned in an Epic in the Workspace.
   *
   * @name ListEpicMentionedTeams
   * @summary List Epic Mentioned Teams
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/mentioned-teams
   * @secure
   */
  listEpicMentionedTeams = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicMentionedTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/mentioned-teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Mentioned Members returns a paginated list of all Members mentioned in an Epic in the Workspace.
   *
   * @name ListEpicMentionedMembers
   * @summary List Epic Mentioned Members
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/mentioned-members
   * @secure
   */
  listEpicMentionedMembers = (
    workspaceSlug: string,
    epicPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicMentionedMemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/mentioned-members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Delete a Comment from an Epic.
   *
   * @name DeleteEpicComment
   * @summary Delete Epic Comment
   * @request DELETE:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments/{comment-public-id}
   * @secure
   */
  deleteEpicComment = (
    workspaceSlug: string,
    epicPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments/${commentPublicId}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Epic Comment returns information about a chosen Epic Comment.
   *
   * @name GetEpicComment
   * @summary Get Epic Comment
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments/{comment-public-id}
   * @secure
   */
  getEpicComment = (
    workspaceSlug: string,
    epicPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicCommentEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments/${commentPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Epic Comment is used to modify an existing Epic Comment.
   *
   * @name UpdateEpicComment
   * @summary Update Epic Comment
   * @request PATCH:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments/{comment-public-id}
   * @secure
   */
  updateEpicComment = (
    workspaceSlug: string,
    epicPublicId: number,
    commentPublicId: number,
    data: UpdateEpicCommentParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicCommentEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments/${commentPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns a Health for the specified Epic.
   *
   * @name GetEpicHealth
   * @summary Get Epic Health
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/epic-healths/{epic-health-public-id}
   * @secure
   */
  getEpicHealth = (
    workspaceSlug: string,
    epicPublicId: number,
    epicHealthPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<HealthEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/epic-healths/${epicHealthPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Comment Comments returns a paginated list of all threaded reply Comments for an Epic Comment in the Workspace.
   *
   * @name ListEpicCommentComments
   * @summary List Epic Comment Comments
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments/{comment-public-id}/comments
   * @secure
   */
  listEpicCommentComments = (
    workspaceSlug: string,
    epicPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicCommentCommentEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments/${commentPublicId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Comment Mentioned Teams returns a paginated list of all Teams mentioned in an Epic Comment in the Workspace.
   *
   * @name ListEpicCommentMentionedTeams
   * @summary List Epic Comment Mentioned Teams
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments/{comment-public-id}/mentioned-teams
   * @secure
   */
  listEpicCommentMentionedTeams = (
    workspaceSlug: string,
    epicPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicCommentMentionedTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments/${commentPublicId}/mentioned-teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Epic Comment Mentioned Members returns a paginated list of all Members mentioned in an Epic Comment in the Workspace.
   *
   * @name ListEpicCommentMentionedMembers
   * @summary List Epic Comment Mentioned Members
   * @request GET:/api/v4/{workspace-slug}/epics/{epic-public-id}/comments/{comment-public-id}/mentioned-members
   * @secure
   */
  listEpicCommentMentionedMembers = (
    workspaceSlug: string,
    epicPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicCommentMentionedMemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/epics/${epicPublicId}/comments/${commentPublicId}/mentioned-members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Files returns a paginated list of all Files in the Workspace.
   *
   * @name ListFiles
   * @summary List Files
   * @request GET:/api/v4/{workspace-slug}/files
   * @secure
   */
  listFiles = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/files`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Upload Files uploads one or more files and optionally associates them with a Story. Use the multipart/form-data content-type to upload. Each `file` key should contain a separate file.
   *
   * @name UploadFiles
   * @summary Upload Files
   * @request POST:/api/v4/{workspace-slug}/files
   * @secure
   */
  uploadFiles = (
    workspaceSlug: string,
    data: UploadFilesParams,
    params: RequestParams = {},
  ) =>
    this.request<FileEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description Bulk Delete Files deletes multiple Files from the Workspace.
   *
   * @name BulkDeleteFiles
   * @summary Bulk Delete Files
   * @request DELETE:/api/v4/{workspace-slug}/files/bulk
   * @secure
   */
  bulkDeleteFiles = (
    workspaceSlug: string,
    data: BulkDeleteFilesParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/files/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete File removes a previously uploaded File from the Workspace.
   *
   * @name DeleteFile
   * @summary Delete File
   * @request DELETE:/api/v4/{workspace-slug}/files/{file-public-id}
   * @secure
   */
  deleteFile = (
    workspaceSlug: string,
    filePublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/files/${filePublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get File returns information about the chosen File.
   *
   * @name GetFile
   * @summary Get File
   * @request GET:/api/v4/{workspace-slug}/files/{file-public-id}
   * @secure
   */
  getFile = (
    workspaceSlug: string,
    filePublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/files/${filePublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List File Stories returns a paginated list of all Stories associated with a File in the Workspace.
   *
   * @name ListFileStories
   * @summary List File Stories
   * @request GET:/api/v4/{workspace-slug}/files/{file-public-id}/stories
   * @secure
   */
  listFileStories = (
    workspaceSlug: string,
    filePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/files/${filePublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List File Mentioned Teams returns a paginated list of all Teams mentioned in a File in the Workspace.
   *
   * @name ListFileMentionedTeams
   * @summary List File Mentioned Teams
   * @request GET:/api/v4/{workspace-slug}/files/{file-public-id}/mentioned-teams
   * @secure
   */
  listFileMentionedTeams = (
    workspaceSlug: string,
    filePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileMentionedTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/files/${filePublicId}/mentioned-teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List File Mentioned Members returns a paginated list of all Members mentioned in a File in the Workspace.
   *
   * @name ListFileMentionedMembers
   * @summary List File Mentioned Members
   * @request GET:/api/v4/{workspace-slug}/files/{file-public-id}/mentioned-members
   * @secure
   */
  listFileMentionedMembers = (
    workspaceSlug: string,
    filePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileMentionedMemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/files/${filePublicId}/mentioned-members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Iterations returns a paginated list of all Iterations in the Workspace.
   *
   * @name ListIterations
   * @summary List Iterations
   * @request GET:/api/v4/{workspace-slug}/iterations
   * @secure
   */
  listIterations = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "start_date";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Iteration is used to create a new Iteration in your Shortcut Workspace.
   *
   * @name CreateIteration
   * @summary Create Iteration
   * @request POST:/api/v4/{workspace-slug}/iterations
   * @secure
   */
  createIteration = (
    workspaceSlug: string,
    data: CreateIterationParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Iterations deletes multiple Iterations.
   *
   * @name BulkDeleteIterations
   * @summary Bulk Delete Iterations
   * @request DELETE:/api/v4/{workspace-slug}/iterations/bulk
   * @secure
   */
  bulkDeleteIterations = (
    workspaceSlug: string,
    data: BulkDeleteIterationsParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Iterations updates multiple Iterations, and returns a paginated list of the updated Iterations.
   *
   * @name BulkUpdateIterations
   * @summary Bulk Update Iterations
   * @request PATCH:/api/v4/{workspace-slug}/iterations/bulk
   * @secure
   */
  bulkUpdateIterations = (
    workspaceSlug: string,
    data: BulkUpdateIterationsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "start_date";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Iterations creates multiple Iterations, and returns a paginated list of the created Iterations.
   *
   * @name BulkCreateIterations
   * @summary Bulk Create Iterations
   * @request POST:/api/v4/{workspace-slug}/iterations/bulk
   * @secure
   */
  bulkCreateIterations = (
    workspaceSlug: string,
    data: BulkCreateIterationsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "start_date";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Search Iterations lets you search Iterations based on a query.
   *
   * @name SearchIterations
   * @summary Search Iterations
   * @request GET:/api/v4/{workspace-slug}/iterations/search
   * @secure
   */
  searchIterations = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /**
       * The search query. Required if `cursor` is not sent. See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators).
       * @minLength 1
       */
      query?: string;
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/search`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns all currently started iterations for the authenticated user based on their team memberships. The 'current' iterations are determined by finding started iterations associated with teams the user belongs to. If multiple iterations match, all are returned sorted by start date (ascending), then end date (ascending), then ID (ascending).
   *
   * @name GetCurrentIterations
   * @summary Get Current Iterations
   * @request GET:/api/v4/{workspace-slug}/iterations/current
   * @secure
   */
  getCurrentIterations = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "start_date";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CurrentIterationsOutput, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/current`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Delete Iteration removes an Iteration from the Workspace.
   *
   * @name DeleteIteration
   * @summary Delete Iteration
   * @request DELETE:/api/v4/{workspace-slug}/iterations/{iteration-public-id}
   * @secure
   */
  deleteIteration = (
    workspaceSlug: string,
    iterationPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get Iteration returns information about a chosen Iteration.
   *
   * @name GetIteration
   * @summary Get Iteration
   * @request GET:/api/v4/{workspace-slug}/iterations/{iteration-public-id}
   * @secure
   */
  getIteration = (
    workspaceSlug: string,
    iterationPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Iteration is used to modify an Iteration in your Shortcut Workspace.
   *
   * @name UpdateIteration
   * @summary Update Iteration
   * @request PATCH:/api/v4/{workspace-slug}/iterations/{iteration-public-id}
   * @secure
   */
  updateIteration = (
    workspaceSlug: string,
    iterationPublicId: number,
    data: UpdateIterationParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Iteration Teams returns a paginated list of all Teams directly associated with an Iteration in the Workspace.
   *
   * @name ListIterationTeams
   * @summary List Iteration Teams
   * @request GET:/api/v4/{workspace-slug}/iterations/{iteration-public-id}/teams
   * @secure
   */
  listIterationTeams = (
    workspaceSlug: string,
    iterationPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}/teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Iteration Labels returns a paginated list of all Labels for an Iteration in the Workspace.
   *
   * @name ListIterationLabels
   * @summary List Iteration Labels
   * @request GET:/api/v4/{workspace-slug}/iterations/{iteration-public-id}/labels
   * @secure
   */
  listIterationLabels = (
    workspaceSlug: string,
    iterationPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationLabelEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}/labels`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Iteration Stories returns a paginated list of all Stories in an Iteration in the Workspace.
   *
   * @name ListIterationStories
   * @summary List Iteration Stories
   * @request GET:/api/v4/{workspace-slug}/iterations/{iteration-public-id}/stories
   * @secure
   */
  listIterationStories = (
    workspaceSlug: string,
    iterationPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Iteration Followers returns a paginated list of all Members who are following an Iteration in the Workspace.
   *
   * @name ListIterationFollowers
   * @summary List Iteration Followers
   * @request GET:/api/v4/{workspace-slug}/iterations/{iteration-public-id}/followers
   * @secure
   */
  listIterationFollowers = (
    workspaceSlug: string,
    iterationPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationFollowerEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}/followers`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Iteration Mentioned Teams returns a paginated list of all Teams mentioned in an Iteration in the Workspace.
   *
   * @name ListIterationMentionedTeams
   * @summary List Iteration Mentioned Teams
   * @request GET:/api/v4/{workspace-slug}/iterations/{iteration-public-id}/mentioned-teams
   * @secure
   */
  listIterationMentionedTeams = (
    workspaceSlug: string,
    iterationPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationMentionedTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}/mentioned-teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Iteration Associated Teams returns a paginated list of all Teams that own Stories in an Iteration but are not directly associated with the Iteration.
   *
   * @name ListIterationAssociatedTeams
   * @summary List Iteration Associated Teams
   * @request GET:/api/v4/{workspace-slug}/iterations/{iteration-public-id}/associated-teams
   * @secure
   */
  listIterationAssociatedTeams = (
    workspaceSlug: string,
    iterationPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationAssociatedTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}/associated-teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Iteration Mentioned Members returns a paginated list of all Members mentioned in an Iteration in the Workspace.
   *
   * @name ListIterationMentionedMembers
   * @summary List Iteration Mentioned Members
   * @request GET:/api/v4/{workspace-slug}/iterations/{iteration-public-id}/mentioned-members
   * @secure
   */
  listIterationMentionedMembers = (
    workspaceSlug: string,
    iterationPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationMentionedMemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/iterations/${iterationPublicId}/mentioned-members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Key Results in the Workspace.
   *
   * @name ListKeyResults
   * @summary List Key Results
   * @request GET:/api/v4/{workspace-slug}/key-results
   * @secure
   */
  listKeyResults = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyResultEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/key-results`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns the specified Key Result.
   *
   * @name GetKeyResult
   * @summary Get Key Result
   * @request GET:/api/v4/{workspace-slug}/key-results/{key-result-public-id}
   * @secure
   */
  getKeyResult = (
    workspaceSlug: string,
    keyResultPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyResultEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/key-results/${keyResultPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Updates the specified Key Result.
   *
   * @name UpdateKeyResult
   * @summary Update Key Result
   * @request PUT:/api/v4/{workspace-slug}/key-results/{key-result-public-id}
   * @secure
   */
  updateKeyResult = (
    workspaceSlug: string,
    keyResultPublicId: string,
    data: UpdateKeyResultParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyResultEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/key-results/${keyResultPublicId}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Labels returns a paginated list of all Labels in the Workspace.
   *
   * @name ListLabels
   * @summary List Labels
   * @request GET:/api/v4/{workspace-slug}/labels
   * @secure
   */
  listLabels = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LabelEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Label allows you to create a new Label in Shortcut.
   *
   * @name CreateLabel
   * @summary Create Label
   * @request POST:/api/v4/{workspace-slug}/labels
   * @secure
   */
  createLabel = (
    workspaceSlug: string,
    data: CreateLabelParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LabelEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Labels deletes multiple Labels.
   *
   * @name BulkDeleteLabels
   * @summary Bulk Delete Labels
   * @request DELETE:/api/v4/{workspace-slug}/labels/bulk
   * @secure
   */
  bulkDeleteLabels = (
    workspaceSlug: string,
    data: BulkDeleteLabelsParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Labels updates multiple Labels, and returns a paginated list of the updated Labels.
   *
   * @name BulkUpdateLabels
   * @summary Bulk Update Labels
   * @request PATCH:/api/v4/{workspace-slug}/labels/bulk
   * @secure
   */
  bulkUpdateLabels = (
    workspaceSlug: string,
    data: BulkUpdateLabelsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LabelEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Labels creates multiple Labels, and returns a paginated list of the created Labels.
   *
   * @name BulkCreateLabels
   * @summary Bulk Create Labels
   * @request POST:/api/v4/{workspace-slug}/labels/bulk
   * @secure
   */
  bulkCreateLabels = (
    workspaceSlug: string,
    data: BulkCreateLabelsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LabelEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete Label removes a Label from the Workspace.
   *
   * @name DeleteLabel
   * @summary Delete Label
   * @request DELETE:/api/v4/{workspace-slug}/labels/{label-public-id}
   * @secure
   */
  deleteLabel = (
    workspaceSlug: string,
    labelPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels/${labelPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get Label returns information about a chosen Label.
   *
   * @name GetLabel
   * @summary Get Label
   * @request GET:/api/v4/{workspace-slug}/labels/{label-public-id}
   * @secure
   */
  getLabel = (
    workspaceSlug: string,
    labelPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LabelEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels/${labelPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Label allows you to modify a Label in your Shortcut Workspace.
   *
   * @name UpdateLabel
   * @summary Update Label
   * @request PATCH:/api/v4/{workspace-slug}/labels/{label-public-id}
   * @secure
   */
  updateLabel = (
    workspaceSlug: string,
    labelPublicId: number,
    data: UpdateLabelParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LabelEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels/${labelPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Label Epics returns a paginated list of all Epics that have a given Label.
   *
   * @name ListLabelEpics
   * @summary List Label Epics
   * @request GET:/api/v4/{workspace-slug}/labels/{label-public-id}/epics
   * @secure
   */
  listLabelEpics = (
    workspaceSlug: string,
    labelPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LabelEpicEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels/${labelPublicId}/epics`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Label Stories returns a paginated list of all Stories that have a given Label.
   *
   * @name ListLabelStories
   * @summary List Label Stories
   * @request GET:/api/v4/{workspace-slug}/labels/{label-public-id}/stories
   * @secure
   */
  listLabelStories = (
    workspaceSlug: string,
    labelPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LabelStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/labels/${labelPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Linked Files returns a paginated list of all Linked Files in the Workspace.
   *
   * @name ListLinkedFiles
   * @summary List Linked Files
   * @request GET:/api/v4/{workspace-slug}/linked-files
   * @secure
   */
  listLinkedFiles = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LinkedFileEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Linked File is used to add a new Linked File to your Shortcut Workspace.
   *
   * @name CreateLinkedFile
   * @summary Create Linked File
   * @request POST:/api/v4/{workspace-slug}/linked-files
   * @secure
   */
  createLinkedFile = (
    workspaceSlug: string,
    data: CreateLinkedFileParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LinkedFileEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Linked Files deletes multiple Linked Files.
   *
   * @name BulkDeleteLinkedFiles
   * @summary Bulk Delete Linked Files
   * @request DELETE:/api/v4/{workspace-slug}/linked-files/bulk
   * @secure
   */
  bulkDeleteLinkedFiles = (
    workspaceSlug: string,
    data: BulkDeleteLinkedFilesParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Linked Files updates multiple Linked Files, and returns a paginated list of the updated Linked Files.
   *
   * @name BulkUpdateLinkedFiles
   * @summary Bulk Update Linked Files
   * @request PATCH:/api/v4/{workspace-slug}/linked-files/bulk
   * @secure
   */
  bulkUpdateLinkedFiles = (
    workspaceSlug: string,
    data: BulkUpdateLinkedFilesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LinkedFileEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Linked Files creates multiple Linked Files, and returns a paginated list of the created Linked Files.
   *
   * @name BulkCreateLinkedFiles
   * @summary Bulk Create Linked Files
   * @request POST:/api/v4/{workspace-slug}/linked-files/bulk
   * @secure
   */
  bulkCreateLinkedFiles = (
    workspaceSlug: string,
    data: BulkCreateLinkedFilesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LinkedFileEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete Linked File removes a Linked File from the Workspace.
   *
   * @name DeleteLinkedFile
   * @summary Delete Linked File
   * @request DELETE:/api/v4/{workspace-slug}/linked-files/{linked-file-public-id}
   * @secure
   */
  deleteLinkedFile = (
    workspaceSlug: string,
    linkedFilePublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files/${linkedFilePublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get Linked File returns information about the chosen Linked File.
   *
   * @name GetLinkedFile
   * @summary Get Linked File
   * @request GET:/api/v4/{workspace-slug}/linked-files/{linked-file-public-id}
   * @secure
   */
  getLinkedFile = (
    workspaceSlug: string,
    linkedFilePublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LinkedFileEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files/${linkedFilePublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Linked File is used to update an existing Linked File in your Shortcut Workspace.
   *
   * @name UpdateLinkedFile
   * @summary Update Linked File
   * @request PATCH:/api/v4/{workspace-slug}/linked-files/{linked-file-public-id}
   * @secure
   */
  updateLinkedFile = (
    workspaceSlug: string,
    linkedFilePublicId: number,
    data: UpdateLinkedFileParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LinkedFileEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files/${linkedFilePublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Linked File Stories returns a paginated list of all Stories associated with a Linked File in the Workspace.
   *
   * @name ListLinkedFileStories
   * @summary List Linked File Stories
   * @request GET:/api/v4/{workspace-slug}/linked-files/{linked-file-public-id}/stories
   * @secure
   */
  listLinkedFileStories = (
    workspaceSlug: string,
    linkedFilePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LinkedFileStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files/${linkedFilePublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Linked File Mentioned Teams returns a paginated list of all Teams mentioned in a Linked File in the Workspace.
   *
   * @name ListLinkedFileMentionedTeams
   * @summary List Linked File Mentioned Teams
   * @request GET:/api/v4/{workspace-slug}/linked-files/{linked-file-public-id}/mentioned-teams
   * @secure
   */
  listLinkedFileMentionedTeams = (
    workspaceSlug: string,
    linkedFilePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LinkedFileMentionedTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files/${linkedFilePublicId}/mentioned-teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Linked File Mentioned Members returns a paginated list of all Members mentioned in a Linked File in the Workspace.
   *
   * @name ListLinkedFileMentionedMembers
   * @summary List Linked File Mentioned Members
   * @request GET:/api/v4/{workspace-slug}/linked-files/{linked-file-public-id}/mentioned-members
   * @secure
   */
  listLinkedFileMentionedMembers = (
    workspaceSlug: string,
    linkedFilePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LinkedFileMentionedMemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/linked-files/${linkedFilePublicId}/mentioned-members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Members returns a paginated list of all Members in the Workspace.
   *
   * @name ListMembers
   * @summary List Members
   * @request GET:/api/v4/{workspace-slug}/members
   * @secure
   */
  listMembers = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Bulk Update Members updates multiple Members and returns a paginated list of the updated Members.
   *
   * @name BulkUpdateMembers
   * @summary Bulk Update Members
   * @request PATCH:/api/v4/{workspace-slug}/members/bulk
   * @secure
   */
  bulkUpdateMembers = (
    workspaceSlug: string,
    data: BulkUpdateMembersParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MemberEntityListWrapper, ApiError | UnusableEntitlementError>({
      path: `/api/v4/${workspaceSlug}/members/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Get Member returns information about a Member of the Workspace.
   *
   * @name GetMember
   * @summary Get Member
   * @request GET:/api/v4/{workspace-slug}/members/{member-public-id}
   * @secure
   */
  getMember = (
    workspaceSlug: string,
    memberPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MemberEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/members/${memberPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Member modifies a Member's role or disabled status in the Workspace.
   *
   * @name UpdateMember
   * @summary Update Member
   * @request PATCH:/api/v4/{workspace-slug}/members/{member-public-id}
   * @secure
   */
  updateMember = (
    workspaceSlug: string,
    memberPublicId: string,
    data: UpdateMemberParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MemberEntityWrapper, ApiError | UnusableEntitlementError>({
      path: `/api/v4/${workspaceSlug}/members/${memberPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Teams the Member belongs to.
   *
   * @name ListMemberTeams
   * @summary List Member Teams
   * @request GET:/api/v4/{workspace-slug}/members/{member-public-id}/teams
   * @secure
   */
  listMemberTeams = (
    workspaceSlug: string,
    memberPublicId: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MemberTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/members/${memberPublicId}/teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Stories owned by the specified Member.
   *
   * @name ListMemberStories
   * @summary List Member Stories
   * @request GET:/api/v4/{workspace-slug}/members/{member-public-id}/stories
   * @secure
   */
  listMemberStories = (
    workspaceSlug: string,
    memberPublicId: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MemberStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/members/${memberPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Objectives returns a paginated list of all Objectives in the Workspace.
   *
   * @name ListObjectives
   * @summary List Objectives
   * @request GET:/api/v4/{workspace-slug}/objectives
   * @secure
   */
  listObjectives = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Objective is used to create a new Objective in your Shortcut Workspace.
   *
   * @name CreateObjective
   * @summary Create Objective
   * @request POST:/api/v4/{workspace-slug}/objectives
   * @secure
   */
  createObjective = (
    workspaceSlug: string,
    data: CreateObjectiveParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Objectives deletes multiple Objectives.
   *
   * @name BulkDeleteObjectives
   * @summary Bulk Delete Objectives
   * @request DELETE:/api/v4/{workspace-slug}/objectives/bulk
   * @secure
   */
  bulkDeleteObjectives = (
    workspaceSlug: string,
    data: BulkDeleteObjectivesParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Objectives updates multiple Objectives, and returns a paginated list of the updated Objectives.
   *
   * @name BulkUpdateObjectives
   * @summary Bulk Update Objectives
   * @request PATCH:/api/v4/{workspace-slug}/objectives/bulk
   * @secure
   */
  bulkUpdateObjectives = (
    workspaceSlug: string,
    data: BulkUpdateObjectivesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Objectives creates multiple Objectives, and returns a paginated list of the created Objectives.
   *
   * @name BulkCreateObjectives
   * @summary Bulk Create Objectives
   * @request POST:/api/v4/{workspace-slug}/objectives/bulk
   * @secure
   */
  bulkCreateObjectives = (
    workspaceSlug: string,
    data: BulkCreateObjectivesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Search Objectives lets you search Objectives based on a query.
   *
   * @name SearchObjectives
   * @summary Search Objectives
   * @request GET:/api/v4/{workspace-slug}/objectives/search
   * @secure
   */
  searchObjectives = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /**
       * The search query. Required if `cursor` is not sent. See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators).
       * @minLength 1
       */
      query?: string;
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/search`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Delete Objective removes an Objective from the Workspace.
   *
   * @name DeleteObjective
   * @summary Delete Objective
   * @request DELETE:/api/v4/{workspace-slug}/objectives/{objective-public-id}
   * @secure
   */
  deleteObjective = (
    workspaceSlug: string,
    objectivePublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get Objective returns information about a chosen Objective.
   *
   * @name GetObjective
   * @summary Get Objective
   * @request GET:/api/v4/{workspace-slug}/objectives/{objective-public-id}
   * @secure
   */
  getObjective = (
    workspaceSlug: string,
    objectivePublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Objective is used to modify an Objective in your Shortcut Workspace.
   *
   * @name UpdateObjective
   * @summary Update Objective
   * @request PATCH:/api/v4/{workspace-slug}/objectives/{objective-public-id}
   * @secure
   */
  updateObjective = (
    workspaceSlug: string,
    objectivePublicId: number,
    data: UpdateObjectiveParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Objective Epics returns a paginated list of all Epics associated with an Objective in the Workspace.
   *
   * @name ListObjectiveEpics
   * @summary List Objective Epics
   * @request GET:/api/v4/{workspace-slug}/objectives/{objective-public-id}/epics
   * @secure
   */
  listObjectiveEpics = (
    workspaceSlug: string,
    objectivePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveEpicEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}/epics`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Objective Teams returns a paginated list of all Teams associated with an Objective in the Workspace.
   *
   * @name ListObjectiveTeams
   * @summary List Objective Teams
   * @request GET:/api/v4/{workspace-slug}/objectives/{objective-public-id}/teams
   * @secure
   */
  listObjectiveTeams = (
    workspaceSlug: string,
    objectivePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}/teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Objective Owners returns a paginated list of all Members who own an Objective in the Workspace.
   *
   * @name ListObjectiveOwners
   * @summary List Objective Owners
   * @request GET:/api/v4/{workspace-slug}/objectives/{objective-public-id}/owners
   * @secure
   */
  listObjectiveOwners = (
    workspaceSlug: string,
    objectivePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveOwnerEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}/owners`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Objective Categories returns a paginated list of all Categories associated with an Objective in the Workspace.
   *
   * @name ListObjectiveCategories
   * @summary List Objective Categories
   * @request GET:/api/v4/{workspace-slug}/objectives/{objective-public-id}/categories
   * @secure
   */
  listObjectiveCategories = (
    workspaceSlug: string,
    objectivePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveCategoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}/categories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Objective Key Results returns a paginated list of all Key Results associated with an Objective in the Workspace.
   *
   * @name ListObjectiveKeyResults
   * @summary List Objective Key Results
   * @request GET:/api/v4/{workspace-slug}/objectives/{objective-public-id}/key-results
   * @secure
   */
  listObjectiveKeyResults = (
    workspaceSlug: string,
    objectivePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveKeyResultEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}/key-results`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of Health updates for the specified Objective.
   *
   * @name ListObjectiveHealths
   * @summary List Objective Healths
   * @request GET:/api/v4/{workspace-slug}/objectives/{objective-public-id}/objective-healths
   * @secure
   */
  listObjectiveHealths = (
    workspaceSlug: string,
    objectivePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<HealthEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}/objective-healths`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Creates a new Health update for the specified Objective.
   *
   * @name CreateObjectiveHealth
   * @summary Create Objective Health
   * @request POST:/api/v4/{workspace-slug}/objectives/{objective-public-id}/objective-healths
   * @secure
   */
  createObjectiveHealth = (
    workspaceSlug: string,
    objectivePublicId: number,
    data: CreateObjectiveHealthParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<HealthEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}/objective-healths`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns a Health for the specified Objective.
   *
   * @name GetObjectiveHealth
   * @summary Get Objective Health
   * @request GET:/api/v4/{workspace-slug}/objectives/{objective-public-id}/objective-healths/{objective-health-public-id}
   * @secure
   */
  getObjectiveHealth = (
    workspaceSlug: string,
    objectivePublicId: number,
    objectiveHealthPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<HealthEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/objectives/${objectivePublicId}/objective-healths/${objectiveHealthPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Projects returns a paginated list of all Projects in the Workspace. Projects are a deprecated feature.
   *
   * @name ListProjects
   * @summary List Projects
   * @request GET:/api/v4/{workspace-slug}/projects
   * @deprecated
   * @secure
   */
  listProjects = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/projects`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Project allows you to create a new Project in Shortcut. Projects are a deprecated feature.
   *
   * @name CreateProject
   * @summary Create Project
   * @request POST:/api/v4/{workspace-slug}/projects
   * @deprecated
   * @secure
   */
  createProject = (
    workspaceSlug: string,
    data: CreateProjectParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/projects`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete Project can be used to delete any Project. Projects are a deprecated feature.
   *
   * @name DeleteProject
   * @summary Delete Project
   * @request DELETE:/api/v4/{workspace-slug}/projects/{project-public-id}
   * @deprecated
   * @secure
   */
  deleteProject = (
    workspaceSlug: string,
    projectPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/projects/${projectPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get Project returns information about the chosen Project. Projects are a deprecated feature.
   *
   * @name GetProject
   * @summary Get Project
   * @request GET:/api/v4/{workspace-slug}/projects/{project-public-id}
   * @deprecated
   * @secure
   */
  getProject = (
    workspaceSlug: string,
    projectPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/projects/${projectPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Project can be used to update Project properties. Projects are a deprecated feature.
   *
   * @name UpdateProject
   * @summary Update Project
   * @request PATCH:/api/v4/{workspace-slug}/projects/{project-public-id}
   * @deprecated
   * @secure
   */
  updateProject = (
    workspaceSlug: string,
    projectPublicId: number,
    data: UpdateProjectParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/projects/${projectPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Project Stories returns a paginated list of all Stories associated with a Project. Projects are a deprecated feature.
   *
   * @name ListProjectStories
   * @summary List Project Stories
   * @request GET:/api/v4/{workspace-slug}/projects/{project-public-id}/stories
   * @deprecated
   * @secure
   */
  listProjectStories = (
    workspaceSlug: string,
    projectPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/projects/${projectPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Project Followers returns a paginated list of all Members following a Project. Projects are a deprecated feature.
   *
   * @name ListProjectFollowers
   * @summary List Project Followers
   * @request GET:/api/v4/{workspace-slug}/projects/{project-public-id}/followers
   * @deprecated
   * @secure
   */
  listProjectFollowers = (
    workspaceSlug: string,
    projectPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectFollowerEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/projects/${projectPublicId}/followers`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Pull Requests returns a paginated list of all Pull Requests in the Workspace that have been associated with a Story.
   *
   * @name ListPullRequests
   * @summary List Pull Requests
   * @request GET:/api/v4/{workspace-slug}/pull-requests
   * @secure
   */
  listPullRequests = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :include_closed). */
      filter?: "exclude_closed" | "include_closed";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PullRequestEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/pull-requests`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Pull Request returns information about a chosen Pull Request.
   *
   * @name GetPullRequest
   * @summary Get Pull Request
   * @request GET:/api/v4/{workspace-slug}/pull-requests/{pull-request-public-id}
   * @secure
   */
  getPullRequest = (
    workspaceSlug: string,
    pullRequestPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PullRequestEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/pull-requests/${pullRequestPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Pull Request Stories returns a paginated list of all Stories associated with a Pull Request in the Workspace.
   *
   * @name ListPullRequestStories
   * @summary List Pull Request Stories
   * @request GET:/api/v4/{workspace-slug}/pull-requests/{pull-request-public-id}/stories
   * @secure
   */
  listPullRequestStories = (
    workspaceSlug: string,
    pullRequestPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PullRequestStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/pull-requests/${pullRequestPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Repositories returns a paginated list of all connected Repositories in the Workspace.
   *
   * @name ListRepositories
   * @summary List Repositories
   * @request GET:/api/v4/{workspace-slug}/repositories
   * @secure
   */
  listRepositories = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<RepositoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/repositories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Repository returns information about a connected Repository.
   *
   * @name GetRepository
   * @summary Get Repository
   * @request GET:/api/v4/{workspace-slug}/repositories/{repository-public-id}
   * @secure
   */
  getRepository = (
    workspaceSlug: string,
    repositoryPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<RepositoryEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/repositories/${repositoryPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Repository Commits returns a paginated list of all Commits associated with a Repository in the Workspace.
   *
   * @name ListRepositoryCommits
   * @summary List Repository Commits
   * @request GET:/api/v4/{workspace-slug}/repositories/{repository-public-id}/commits
   * @secure
   */
  listRepositoryCommits = (
    workspaceSlug: string,
    repositoryPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<RepositoryCommitEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/repositories/${repositoryPublicId}/commits`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Repository Branches returns a paginated list of all Branches associated with a Repository in the Workspace.
   *
   * @name ListRepositoryBranches
   * @summary List Repository Branches
   * @request GET:/api/v4/{workspace-slug}/repositories/{repository-public-id}/branches
   * @secure
   */
  listRepositoryBranches = (
    workspaceSlug: string,
    repositoryPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_deleted). */
      filter?: "exclude_deleted" | "include_deleted";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<RepositoryBranchEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/repositories/${repositoryPublicId}/branches`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Repository Pull Requests returns a paginated list of all Pull Requests associated with a Repository in the Workspace.
   *
   * @name ListRepositoryPullRequests
   * @summary List Repository Pull Requests
   * @request GET:/api/v4/{workspace-slug}/repositories/{repository-public-id}/pull-requests
   * @secure
   */
  listRepositoryPullRequests = (
    workspaceSlug: string,
    repositoryPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :include_closed). */
      filter?: "exclude_closed" | "include_closed";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<RepositoryPullRequestEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/repositories/${repositoryPublicId}/pull-requests`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Search lets you search across Epics, Stories, Iterations, Objectives, and Docs with a single query, returning one combined, paginated list of results.
   *
   * @name Search
   * @summary Search
   * @request GET:/api/v4/{workspace-slug}/search
   * @secure
   */
  search = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /**
       * The search query. Required if `cursor` is not sent. See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators).
       * @minLength 1
       */
      query?: string;
      /**
       * A comma-separated list of entity types to search. Defaults to all supported types. Supported: epic, story, iteration, objective, doc. Docs are only included when the docs feature is enabled for the Workspace.
       * @minLength 1
       */
      entity_types?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchEntitiesOutput, ApiError>({
      path: `/api/v4/${workspaceSlug}/search`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Stories returns a paginated list of all Stories in the Workspace.
   *
   * @name ListStories
   * @summary List Stories
   * @request GET:/api/v4/{workspace-slug}/stories
   * @secure
   */
  listStories = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** A comma-separated list of ids. If included, only those entities will be considered for listing. */
      ids?: string;
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Story is used to add a new Story to your Shortcut Workspace.
   *
   * @name CreateStory
   * @summary Create Story
   * @request POST:/api/v4/{workspace-slug}/stories
   * @secure
   */
  createStory = (
    workspaceSlug: string,
    data: CreateStoryBody,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Stories deletes multiple Stories. The Stories must be archived unless `force` is set.
   *
   * @name BulkDeleteStories
   * @summary Bulk Delete Stories
   * @request DELETE:/api/v4/{workspace-slug}/stories/bulk
   * @secure
   */
  bulkDeleteStories = (
    workspaceSlug: string,
    data: BulkDeleteStoriesParams,
    query?: {
      /** Forces deletion of the Stories, overriding the check that they are archived. */
      force?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/bulk`,
      method: "DELETE",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Stories updates multiple Stories, and returns a paginated list of the updated Stories.
   *
   * @name BulkUpdateStories
   * @summary Bulk Update Stories
   * @request PATCH:/api/v4/{workspace-slug}/stories/bulk
   * @secure
   */
  bulkUpdateStories = (
    workspaceSlug: string,
    data: BulkUpdateStoriesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Stories creates multiple Stories, and returns a paginated list of the created Stories.
   *
   * @name BulkCreateStories
   * @summary Bulk Create Stories
   * @request POST:/api/v4/{workspace-slug}/stories/bulk
   * @secure
   */
  bulkCreateStories = (
    workspaceSlug: string,
    data: BulkCreateStoriesParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Search Stories lets you search Stories based on a query.
   *
   * @name SearchStories
   * @summary Search Stories
   * @request GET:/api/v4/{workspace-slug}/stories/search
   * @secure
   */
  searchStories = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /**
       * The search query. Required if `cursor` is not sent. See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators).
       * @minLength 1
       */
      query?: string;
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/search`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns history of changes for multiple Stories in chronological order (oldest first by default; newest first with order_dir=desc), across all attributes, with a deterministic tie-break for changes at the same instant. Ordering is stable across pages. Requires ?ids= parameter. Supports cursor-based pagination. History is currently tracked for these attributes: archived, completed, custom_field_values, deadline, epic, estimate, iterations, labels, owners, project, started, story_type, team, workflow_state. Changes to other attributes are not included yet but will be added.
   *
   * @name GetMultipleStoriesHistory
   * @summary Get Multiple Stories History
   * @request GET:/api/v4/{workspace-slug}/stories/history
   * @secure
   */
  getMultipleStoriesHistory = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Comma-separated Story IDs (max 100). */
      ids?: string;
      /** Filter history to specific attributes (e.g., workflow_state,epic). */
      fields?: string;
      /** Sort direction by change instant: asc (default, oldest first) or desc (newest first). Entries at the same instant keep the same deterministic tie-break order in both directions. */
      order_dir?: "desc" | "asc";
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryHistoryResponseWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/history`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Delete Story can be used to delete a Story. The Story must be archived unless `force` is set.
   *
   * @name DeleteStory
   * @summary Delete Story
   * @request DELETE:/api/v4/{workspace-slug}/stories/{story-public-id}
   * @secure
   */
  deleteStory = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /** Forces deletion of the Story, overriding the check that it is archived. */
      force?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Story returns information about a chosen Story.
   *
   * @name GetStory
   * @summary Get Story
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}
   * @secure
   */
  getStory = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Story is used to modify a Story in your Shortcut Workspace.
   *
   * @name UpdateStory
   * @summary Update Story
   * @request PATCH:/api/v4/{workspace-slug}/stories/{story-public-id}
   * @secure
   */
  updateStory = (
    workspaceSlug: string,
    storyPublicId: number,
    data: UpdateStoryParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Story Files returns a paginated list of all Files attached to a Story in the Workspace.
   *
   * @name ListStoryFiles
   * @summary List Story Files
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/files
   * @secure
   */
  listStoryFiles = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryFileEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/files`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Labels returns a paginated list of all Labels for a Story in the Workspace.
   *
   * @name ListStoryLabels
   * @summary List Story Labels
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/labels
   * @secure
   */
  listStoryLabels = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryLabelEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/labels`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Owners returns a paginated list of all Members who own a Story in the Workspace.
   *
   * @name ListStoryOwners
   * @summary List Story Owners
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/owners
   * @secure
   */
  listStoryOwners = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryOwnerEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/owners`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Commits returns a paginated list of all Commits associated with a Story in the Workspace.
   *
   * @name ListStoryCommits
   * @summary List Story Commits
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/commits
   * @secure
   */
  listStoryCommits = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommitEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/commits`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns history of changes for a Story in chronological order (oldest first by default; newest first with order_dir=desc), across all attributes, with a deterministic tie-break for changes at the same instant. Ordering is stable across pages. Supports cursor-based pagination and optional field filtering. History is currently tracked for these attributes: archived, completed, custom_field_values, deadline, epic, estimate, iterations, labels, owners, project, started, story_type, team, workflow_state. Changes to other attributes are not included yet but will be added.
   *
   * @name GetStoryHistory
   * @summary Get Story History
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/history
   * @secure
   */
  getStoryHistory = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Filter history to specific attributes (e.g., workflow_state,epic). */
      fields?: string;
      /** Sort direction by change instant: asc (default, oldest first) or desc (newest first). Entries at the same instant keep the same deterministic tie-break order in both directions. */
      order_dir?: "desc" | "asc";
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryHistoryResponseWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/history`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Branches returns a paginated list of all Branches for a Story in the Workspace.
   *
   * @name ListStoryBranches
   * @summary List Story Branches
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/branches
   * @secure
   */
  listStoryBranches = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_deleted). */
      filter?: "exclude_deleted" | "include_deleted";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryBranchEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/branches`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Comments returns a paginated list of all Comments for a Story in the Workspace. Note that deleted comments will also be returned, but will have minimal information. The deleted comments are included as they may be parents to other comments.
   *
   * @name ListStoryComments
   * @summary List Story Comments
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/comments
   * @secure
   */
  listStoryComments = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** A comma-separated list of ids. If included, only those entities will be considered for listing. */
      ids?: string;
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Story is used to add a new Comment to a Story.
   *
   * @name CreateStoryComment
   * @summary Create Story Comment
   * @request POST:/api/v4/{workspace-slug}/stories/{story-public-id}/comments
   * @secure
   */
  createStoryComment = (
    workspaceSlug: string,
    storyPublicId: number,
    data: CreateStoryCommentParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Story Followers returns a paginated list of all Members who are following a Story in the Workspace.
   *
   * @name ListStoryFollowers
   * @summary List Story Followers
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/followers
   * @secure
   */
  listStoryFollowers = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryFollowerEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/followers`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Iterations returns a paginated list of all Iterations associated with a Story in the Workspace.
   *
   * @name ListStoryIterations
   * @summary List Story Iterations
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/iterations
   * @secure
   */
  listStoryIterations = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "start_date";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryIterationEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/iterations`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Story Links returns a paginated list of all Story Links associated with a Story in the Workspace. This includes links where the Story is either the subject or the object of the relationship.
   *
   * @name ListStoryStoryLinks
   * @summary List Story Story Links
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/story-links
   * @secure
   */
  listStoryStoryLinks = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryStoryLinkEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/story-links`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Linked Files returns a paginated list of all Linked Files attached to a Story in the Workspace.
   *
   * @name ListStoryLinkedFiles
   * @summary List Story Linked Files
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/linked-files
   * @secure
   */
  listStoryLinkedFiles = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryLinkedFileEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/linked-files`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Bulk Delete Story Comments deletes multiple Comments from a Story.
   *
   * @name BulkDeleteStoryComments
   * @summary Bulk Delete Story Comments
   * @request DELETE:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/bulk
   * @secure
   */
  bulkDeleteStoryComments = (
    workspaceSlug: string,
    storyPublicId: number,
    data: BulkDeleteStoryCommentsParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Story Comments updates multiple Comments on a Story, and returns a paginated list of the updated Comments.
   *
   * @name BulkUpdateStoryComments
   * @summary Bulk Update Story Comments
   * @request PATCH:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/bulk
   * @secure
   */
  bulkUpdateStoryComments = (
    workspaceSlug: string,
    storyPublicId: number,
    data: BulkUpdateStoryCommentsParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Story Comments creates multiple Comments on a Story, and returns a paginated list of the created Comments.
   *
   * @name BulkCreateStoryComments
   * @summary Bulk Create Story Comments
   * @request POST:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/bulk
   * @secure
   */
  bulkCreateStoryComments = (
    workspaceSlug: string,
    storyPublicId: number,
    data: BulkCreateStoryCommentsParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Story Pull Requests returns a paginated list of all Pull Requests associated with a Story in the Workspace.
   *
   * @name ListStoryPullRequests
   * @summary List Story Pull Requests
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/pull-requests
   * @secure
   */
  listStoryPullRequests = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :include_closed). */
      filter?: "exclude_closed" | "include_closed";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryPullRequestEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/pull-requests`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story External Links returns a paginated list of all External Links for a Story in the Workspace.
   *
   * @name ListStoryExternalLinks
   * @summary List Story External Links
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/external-links
   * @secure
   */
  listStoryExternalLinks = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "value";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryExternalLinkEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/external-links`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Checklist Items returns a paginated list of all Checklist Items for a Story in the Workspace.
   *
   * @name ListStoryChecklistItems
   * @summary List Story Checklist Items
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items
   * @secure
   */
  listStoryChecklistItems = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** A comma-separated list of ids. If included, only those entities will be considered for listing. */
      ids?: string;
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryChecklistItemEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Story Checklist Item is used to add a new Checklist Item to a Story.
   *
   * @name CreateStoryChecklistItem
   * @summary Create Story Checklist Item
   * @request POST:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items
   * @secure
   */
  createStoryChecklistItem = (
    workspaceSlug: string,
    storyPublicId: number,
    data: CreateStoryChecklistItemBody,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryChecklistItemEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Story Mentioned Teams returns a paginated list of all Teams mentioned in a Story in the Workspace.
   *
   * @name ListStoryMentionedTeams
   * @summary List Story Mentioned Teams
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/mentioned-teams
   * @secure
   */
  listStoryMentionedTeams = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryMentionedTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/mentioned-teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Sub-Task Stories returns a paginated list of all Sub-Task Stories for a Story in the Workspace.
   *
   * @name ListStorySubTaskStories
   * @summary List Story Sub-Task Stories
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/sub-task-stories
   * @secure
   */
  listStorySubTaskStories = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StorySubTaskStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/sub-task-stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Mentioned Members returns a paginated list of all Members mentioned in a Story in the Workspace.
   *
   * @name ListStoryMentionedMembers
   * @summary List Story Mentioned Members
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/mentioned-members
   * @secure
   */
  listStoryMentionedMembers = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryMentionedMemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/mentioned-members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Custom Field Values returns a paginated list of all Custom Field Values for a Story in the Workspace.
   *
   * @name ListStoryCustomFieldValues
   * @summary List Story Custom Field Values
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/custom-field-values
   * @secure
   */
  listStoryCustomFieldValues = (
    workspaceSlug: string,
    storyPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "field_name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCustomFieldValueEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/custom-field-values`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Bulk Delete Story Checklist Items deletes multiple Checklist Items from a Story.
   *
   * @name BulkDeleteStoryChecklistItems
   * @summary Bulk Delete Story Checklist Items
   * @request DELETE:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items/bulk
   * @secure
   */
  bulkDeleteStoryChecklistItems = (
    workspaceSlug: string,
    storyPublicId: number,
    data: BulkDeleteStoryChecklistItemsParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Story Checklist Items updates multiple Checklist Items on a Story, and returns a paginated list of the updated Checklist Items.
   *
   * @name BulkUpdateStoryChecklistItems
   * @summary Bulk Update Story Checklist Items
   * @request PATCH:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items/bulk
   * @secure
   */
  bulkUpdateStoryChecklistItems = (
    workspaceSlug: string,
    storyPublicId: number,
    data: BulkUpdateStoryChecklistItemsParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryChecklistItemEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Story Checklist Items creates multiple Checklist Items on a Story, and returns a paginated list of the created Checklist Items.
   *
   * @name BulkCreateStoryChecklistItems
   * @summary Bulk Create Story Checklist Items
   * @request POST:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items/bulk
   * @secure
   */
  bulkCreateStoryChecklistItems = (
    workspaceSlug: string,
    storyPublicId: number,
    data: BulkCreateStoryChecklistItemsParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryChecklistItemEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete a Comment from a Story.
   *
   * @name DeleteStoryComment
   * @summary Delete Story Comment
   * @request DELETE:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/{comment-public-id}
   * @secure
   */
  deleteStoryComment = (
    workspaceSlug: string,
    storyPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/${commentPublicId}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Story Comment returns information about a chosen Story Comment.
   *
   * @name GetStoryComment
   * @summary Get Story Comment
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/{comment-public-id}
   * @secure
   */
  getStoryComment = (
    workspaceSlug: string,
    storyPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/${commentPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Story Comment is used to modify a Story Comment.
   *
   * @name UpdateStoryComment
   * @summary Update Story Comment
   * @request PATCH:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/{comment-public-id}
   * @secure
   */
  updateStoryComment = (
    workspaceSlug: string,
    storyPublicId: number,
    commentPublicId: number,
    data: UpdateStoryCommentParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/${commentPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Story Comment Comments returns a paginated list of all threaded reply Comments for a Story Comment in the Workspace.
   *
   * @name ListStoryCommentComments
   * @summary List Story Comment Comments
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/{comment-public-id}/comments
   * @secure
   */
  listStoryCommentComments = (
    workspaceSlug: string,
    storyPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentCommentEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/${commentPublicId}/comments`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Comment Reactions returns a paginated list of all Reactions to a Story Comment in the Workspace.
   *
   * @name ListStoryCommentReactions
   * @summary List Story Comment Reactions
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/{comment-public-id}/reactions
   * @secure
   */
  listStoryCommentReactions = (
    workspaceSlug: string,
    storyPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "created_at";
      /** Filter options (default: :all). */
      filter?: "all";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentReactionEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/${commentPublicId}/reactions`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create a Reaction to a Story Comment.
   *
   * @name CreateStoryCommentReaction
   * @summary Create Story Comment Reaction
   * @request POST:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/{comment-public-id}/reactions
   * @secure
   */
  createStoryCommentReaction = (
    workspaceSlug: string,
    storyPublicId: number,
    commentPublicId: number,
    data: CreateStoryCommentReactionParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentReactionEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/${commentPublicId}/reactions`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete a Checklist Item from a Story.
   *
   * @name DeleteStoryChecklistItem
   * @summary Delete Story Checklist Item
   * @request DELETE:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items/{checklist-item-public-id}
   * @secure
   */
  deleteStoryChecklistItem = (
    workspaceSlug: string,
    storyPublicId: number,
    checklistItemPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items/${checklistItemPublicId}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get Story Checklist Item returns information about a chosen Checklist Item for a Story.
   *
   * @name GetStoryChecklistItem
   * @summary Get Story Checklist Item
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items/{checklist-item-public-id}
   * @secure
   */
  getStoryChecklistItem = (
    workspaceSlug: string,
    storyPublicId: number,
    checklistItemPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryChecklistItemEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items/${checklistItemPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Update Story Checklist Item is used to modify a Checklist Item on a Story.
   *
   * @name UpdateStoryChecklistItem
   * @summary Update Story Checklist Item
   * @request PATCH:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items/{checklist-item-public-id}
   * @secure
   */
  updateStoryChecklistItem = (
    workspaceSlug: string,
    storyPublicId: number,
    checklistItemPublicId: number,
    data: UpdateStoryChecklistItemParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryChecklistItemEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items/${checklistItemPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List Story Comment Mentioned Teams returns a paginated list of all Teams mentioned in a Story Comment in the Workspace.
   *
   * @name ListStoryCommentMentionedTeams
   * @summary List Story Comment Mentioned Teams
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/{comment-public-id}/mentioned-teams
   * @secure
   */
  listStoryCommentMentionedTeams = (
    workspaceSlug: string,
    storyPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentMentionedTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/${commentPublicId}/mentioned-teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Comment Mentioned Members returns a paginated list of all Members mentioned in a Story Comment in the Workspace.
   *
   * @name ListStoryCommentMentionedMembers
   * @summary List Story Comment Mentioned Members
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/{comment-public-id}/mentioned-members
   * @secure
   */
  listStoryCommentMentionedMembers = (
    workspaceSlug: string,
    storyPublicId: number,
    commentPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryCommentMentionedMemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/${commentPublicId}/mentioned-members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Checklist Item Mentioned Teams returns a paginated list of all Teams mentioned in a Story Checklist Item in the Workspace.
   *
   * @name ListStoryChecklistItemMentionedTeams
   * @summary List Story Checklist Item Mentioned Teams
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items/{checklist-item-public-id}/mentioned-teams
   * @secure
   */
  listStoryChecklistItemMentionedTeams = (
    workspaceSlug: string,
    storyPublicId: number,
    checklistItemPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryChecklistItemMentionedTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items/${checklistItemPublicId}/mentioned-teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Delete a Reaction from a Story Comment.
   *
   * @name DeleteStoryCommentReaction
   * @summary Delete Story Comment Reaction
   * @request DELETE:/api/v4/{workspace-slug}/stories/{story-public-id}/comments/{comment-public-id}/reactions/{reaction-public-id}
   * @secure
   */
  deleteStoryCommentReaction = (
    workspaceSlug: string,
    storyPublicId: number,
    commentPublicId: number,
    reactionPublicId: string,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/comments/${commentPublicId}/reactions/${reactionPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description List Story Checklist Item Mentioned Members returns a paginated list of all Members mentioned in a Story Checklist Item in the Workspace.
   *
   * @name ListStoryChecklistItemMentionedMembers
   * @summary List Story Checklist Item Mentioned Members
   * @request GET:/api/v4/{workspace-slug}/stories/{story-public-id}/checklist-items/{checklist-item-public-id}/mentioned-members
   * @secure
   */
  listStoryChecklistItemMentionedMembers = (
    workspaceSlug: string,
    storyPublicId: number,
    checklistItemPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryChecklistItemMentionedMemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/stories/${storyPublicId}/checklist-items/${checklistItemPublicId}/mentioned-members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description List Story Links returns a paginated list of all Story Links in the Workspace.
   *
   * @name ListStoryLinks
   * @summary List Story Links
   * @request GET:/api/v4/{workspace-slug}/story-links
   * @secure
   */
  listStoryLinks = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryLinkEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/story-links`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Create Story Link is used to create a semantic relationship between two Stories. The subject Story acts on the object Story. For example, "Story A blocks Story B".
   *
   * @name CreateStoryLink
   * @summary Create Story Link
   * @request POST:/api/v4/{workspace-slug}/story-links
   * @secure
   */
  createStoryLink = (
    workspaceSlug: string,
    data: CreateStoryLinkParams,
    params: RequestParams = {},
  ) =>
    this.request<StoryLinkEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/story-links`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Delete Story Links deletes multiple Story Links.
   *
   * @name BulkDeleteStoryLinks
   * @summary Bulk Delete Story Links
   * @request DELETE:/api/v4/{workspace-slug}/story-links/bulk
   * @secure
   */
  bulkDeleteStoryLinks = (
    workspaceSlug: string,
    data: BulkDeleteStoryLinksParams,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/story-links/bulk`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Update Story Links updates multiple Story Links, and returns a paginated list of the updated Story Links.
   *
   * @name BulkUpdateStoryLinks
   * @summary Bulk Update Story Links
   * @request PATCH:/api/v4/{workspace-slug}/story-links/bulk
   * @secure
   */
  bulkUpdateStoryLinks = (
    workspaceSlug: string,
    data: BulkUpdateStoryLinksParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryLinkEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/story-links/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Bulk Create Story Links creates multiple Story Links, and returns a paginated list of the created Story Links.
   *
   * @name BulkCreateStoryLinks
   * @summary Bulk Create Story Links
   * @request POST:/api/v4/{workspace-slug}/story-links/bulk
   * @secure
   */
  bulkCreateStoryLinks = (
    workspaceSlug: string,
    data: BulkCreateStoryLinksParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryLinkEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/story-links/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete Story Link removes the relationship between the Stories for the given Story Link.
   *
   * @name DeleteStoryLink
   * @summary Delete Story Link
   * @request DELETE:/api/v4/{workspace-slug}/story-links/{story-link-public-id}
   * @secure
   */
  deleteStoryLink = (
    workspaceSlug: string,
    storyLinkPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<ApiError, ApiError>({
      path: `/api/v4/${workspaceSlug}/story-links/${storyLinkPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get Story Link returns information about a chosen Story Link.
   *
   * @name GetStoryLink
   * @summary Get Story Link
   * @request GET:/api/v4/{workspace-slug}/story-links/{story-link-public-id}
   * @secure
   */
  getStoryLink = (
    workspaceSlug: string,
    storyLinkPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<StoryLinkEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/story-links/${storyLinkPublicId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Update Story Link is used to modify the stories or verb of an existing Story Link.
   *
   * @name UpdateStoryLink
   * @summary Update Story Link
   * @request PATCH:/api/v4/{workspace-slug}/story-links/{story-link-public-id}
   * @secure
   */
  updateStoryLink = (
    workspaceSlug: string,
    storyLinkPublicId: number,
    data: UpdateStoryLinkBody,
    params: RequestParams = {},
  ) =>
    this.request<StoryLinkEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/story-links/${storyLinkPublicId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Teams in the Workspace.
   *
   * @name ListTeams
   * @summary List Teams
   * @request GET:/api/v4/{workspace-slug}/teams
   * @secure
   */
  listTeams = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Creates a new Team in the Workspace.
   *
   * @name CreateTeam
   * @summary Create Team
   * @request POST:/api/v4/{workspace-slug}/teams
   * @secure
   */
  createTeam = (
    workspaceSlug: string,
    data: CreateTeamParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeamEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/teams`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Updates multiple Teams and returns a paginated list of the updated Teams.
   *
   * @name BulkUpdateTeams
   * @summary Bulk Update Teams
   * @request PATCH:/api/v4/{workspace-slug}/teams/bulk
   * @secure
   */
  bulkUpdateTeams = (
    workspaceSlug: string,
    data: BulkUpdateTeamsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/teams/bulk`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Creates multiple Teams and returns a paginated list of the created Teams.
   *
   * @name BulkCreateTeams
   * @summary Bulk Create Teams
   * @request POST:/api/v4/{workspace-slug}/teams/bulk
   * @secure
   */
  bulkCreateTeams = (
    workspaceSlug: string,
    data: BulkCreateTeamsParams,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/teams/bulk`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns the specified Team.
   *
   * @name GetTeam
   * @summary Get Team
   * @request GET:/api/v4/{workspace-slug}/teams/{team-public-id}
   * @secure
   */
  getTeam = (
    workspaceSlug: string,
    teamPublicId: string,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeamEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/teams/${teamPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Updates the specified Team.
   *
   * @name UpdateTeam
   * @summary Update Team
   * @request PATCH:/api/v4/{workspace-slug}/teams/{team-public-id}
   * @secure
   */
  updateTeam = (
    workspaceSlug: string,
    teamPublicId: string,
    data: UpdateTeamParams,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeamEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/teams/${teamPublicId}`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Members for the specified Team.
   *
   * @name ListTeamMembers
   * @summary List Team Members
   * @request GET:/api/v4/{workspace-slug}/teams/{team-public-id}/members
   * @secure
   */
  listTeamMembers = (
    workspaceSlug: string,
    teamPublicId: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_disabled). */
      filter?: "exclude_disabled" | "include_disabled";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeamMemberEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/teams/${teamPublicId}/members`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Stories assigned to the specified Team.
   *
   * @name ListTeamStories
   * @summary List Team Stories
   * @request GET:/api/v4/{workspace-slug}/teams/{team-public-id}/stories
   * @secure
   */
  listTeamStories = (
    workspaceSlug: string,
    teamPublicId: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeamStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/teams/${teamPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Workflows for the specified Team.
   *
   * @name ListTeamWorkflows
   * @summary List Team Workflows
   * @request GET:/api/v4/{workspace-slug}/teams/{team-public-id}/workflows
   * @secure
   */
  listTeamWorkflows = (
    workspaceSlug: string,
    teamPublicId: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeamWorkflowEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/teams/${teamPublicId}/workflows`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Workflow States in the Workspace.
   *
   * @name ListWorkflowStates
   * @summary List Workflow States
   * @request GET:/api/v4/{workspace-slug}/workflow-states
   * @secure
   */
  listWorkflowStates = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowStateEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/workflow-states`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns the specified Workflow State.
   *
   * @name GetWorkflowState
   * @summary Get Workflow State
   * @request GET:/api/v4/{workspace-slug}/workflow-states/{workflow-state-public-id}
   * @secure
   */
  getWorkflowState = (
    workspaceSlug: string,
    workflowStatePublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowStateEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/workflow-states/${workflowStatePublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Stories in the specified Workflow State.
   *
   * @name ListWorkflowStateStories
   * @summary List Workflow State Stories
   * @request GET:/api/v4/{workspace-slug}/workflow-states/{workflow-state-public-id}/stories
   * @secure
   */
  listWorkflowStateStories = (
    workspaceSlug: string,
    workflowStatePublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/workflow-states/${workflowStatePublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Workflows in the Workspace.
   *
   * @name ListWorkflows
   * @summary List Workflows
   * @request GET:/api/v4/{workspace-slug}/workflows
   * @secure
   */
  listWorkflows = (
    workspaceSlug: string,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/workflows`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns the specified Workflow.
   *
   * @name GetWorkflow
   * @summary Get Workflow
   * @request GET:/api/v4/{workspace-slug}/workflows/{workflow-public-id}
   * @secure
   */
  getWorkflow = (
    workspaceSlug: string,
    workflowPublicId: number,
    query?: {
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowEntityWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/workflows/${workflowPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Teams associated with the specified Workflow.
   *
   * @name ListWorkflowTeams
   * @summary List Workflow Teams
   * @request GET:/api/v4/{workspace-slug}/workflows/{workflow-public-id}/teams
   * @secure
   */
  listWorkflowTeams = (
    workspaceSlug: string,
    workflowPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "name" | "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowTeamEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/workflows/${workflowPublicId}/teams`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Workflow States within the specified Workflow.
   *
   * @name ListWorkflowStatesWithinAWorkflow
   * @summary List Workflow States within a Workflow
   * @request GET:/api/v4/{workspace-slug}/workflows/{workflow-public-id}/states
   * @secure
   */
  listWorkflowStatesWithinAWorkflow = (
    workspaceSlug: string,
    workflowPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "position";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :all). */
      filter?: "all";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowStateEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/workflows/${workflowPublicId}/states`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Stories associated with the specified Workflow.
   *
   * @name ListWorkflowStories
   * @summary List Workflow Stories
   * @request GET:/api/v4/{workspace-slug}/workflows/{workflow-public-id}/stories
   * @secure
   */
  listWorkflowStories = (
    workspaceSlug: string,
    workflowPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at" | "position" | "created_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowStoryEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/workflows/${workflowPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a paginated list of all Projects associated with the specified Workflow. Projects are a deprecated feature.
   *
   * @name ListWorkflowProjects
   * @summary List Workflow Projects
   * @request GET:/api/v4/{workspace-slug}/workflows/{workflow-public-id}/projects
   * @deprecated
   * @secure
   */
  listWorkflowProjects = (
    workspaceSlug: string,
    workflowPublicId: number,
    query?: {
      /**
       * The number of results to include in a page. Can be between 1 and 100. Defaults to 10.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** The cursor indicating where we are in a paged response. If sent, it (and an optional `fields` parameter) must be the only parameters. */
      cursor?: string;
      /** Order the results by this property and direction. */
      order_by?: "updated_at";
      /** Order order_by in this direction. If order_by not provided, the default order property for this entity type will be used. */
      order_dir?: "desc" | "asc";
      /** Filter options (default: :exclude_archived). */
      filter?: "exclude_archived" | "include_archived";
      /** Fields to include in the response, as a comma-separated string. If provided, only these fields will be included for each entity in the response. If not present, all fields will be returned. */
      fields?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowProjectEntityListWrapper, ApiError>({
      path: `/api/v4/${workspaceSlug}/workflows/${workflowPublicId}/projects`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
