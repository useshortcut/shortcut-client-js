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
  Category,
  CreateCategory,
  CreateCommentComment,
  CreateDoc,
  CreateEntityTemplate,
  CreateEpic,
  CreateEpicComment,
  CreateEpicHealth,
  CreateGenericIntegration,
  CreateGroup,
  CreateIteration,
  CreateLabelParams,
  CreateLinkedFile,
  CreateMilestone,
  CreateObjective,
  CreateOrDeleteStoryReaction,
  CreateProject,
  CreateStories,
  CreateStoryComment,
  CreateStoryFromTemplateParams,
  CreateStoryLink,
  CreateStoryParams,
  CreateTask,
  CustomField,
  DataConflictError,
  DeleteStories,
  DisabledFeatureError,
  DocSlim,
  EntityTemplate,
  Epic,
  EpicPaginatedResults,
  EpicSearchResults,
  EpicSlim,
  EpicWorkflow,
  Group,
  Health,
  History,
  Iteration,
  IterationSearchResults,
  IterationSlim,
  KeyResult,
  Label,
  LinkedFile,
  MaxSearchResultsExceededError,
  Member,
  MemberInfo,
  Milestone,
  Objective,
  ObjectiveSearchResults,
  Project,
  Repository,
  SearchResults,
  SearchStories,
  Story,
  StoryComment,
  StoryLink,
  StoryReaction,
  StorySearchResults,
  StorySlim,
  Task,
  ThreadedComment,
  UnusableEntitlementError,
  UpdateCategory,
  UpdateComment,
  UpdateCustomField,
  UpdateEntityTemplate,
  UpdateEpic,
  UpdateFile,
  UpdateGroup,
  UpdateHealth,
  UpdateIteration,
  UpdateKeyResult,
  UpdateLabel,
  UpdateLinkedFile,
  UpdateMilestone,
  UpdateObjective,
  UpdateProject,
  UpdateStories,
  UpdateStory,
  UpdateStoryComment,
  UpdateStoryLink,
  UpdateTask,
  UploadedFile,
  Workflow,
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
   * @description List Categories returns a list of all Categories and their attributes.
   *
   * @name ListCategories
   * @summary List Categories
   * @request GET:/api/v3/categories
   * @secure
   */
  listCategories = (params: RequestParams = {}) =>
    this.request<Category[], void>({
      path: `/api/v3/categories`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create Category allows you to create a new Category in Shortcut.
   *
   * @name CreateCategory
   * @summary Create Category
   * @request POST:/api/v3/categories
   * @secure
   */
  createCategory = (
    CreateCategory: CreateCategory,
    params: RequestParams = {},
  ) =>
    this.request<Category, void>({
      path: `/api/v3/categories`,
      method: "POST",
      body: CreateCategory,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get Category returns information about the selected Category.
   *
   * @name GetCategory
   * @summary Get Category
   * @request GET:/api/v3/categories/{category-public-id}
   * @secure
   */
  getCategory = (categoryPublicId: number, params: RequestParams = {}) =>
    this.request<Category, void>({
      path: `/api/v3/categories/${categoryPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
   *
   * @name UpdateCategory
   * @summary Update Category
   * @request PUT:/api/v3/categories/{category-public-id}
   * @secure
   */
  updateCategory = (
    categoryPublicId: number,
    UpdateCategory: UpdateCategory,
    params: RequestParams = {},
  ) =>
    this.request<Category, void>({
      path: `/api/v3/categories/${categoryPublicId}`,
      method: "PUT",
      body: UpdateCategory,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Category can be used to delete any Category.
   *
   * @name DeleteCategory
   * @summary Delete Category
   * @request DELETE:/api/v3/categories/{category-public-id}
   * @secure
   */
  deleteCategory = (categoryPublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/categories/${categoryPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description List Category Milestones returns a list of all Milestones with the Category.
   *
   * @name ListCategoryMilestones
   * @summary List Category Milestones
   * @request GET:/api/v3/categories/{category-public-id}/milestones
   * @secure
   */
  listCategoryMilestones = (
    categoryPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<Milestone[], void>({
      path: `/api/v3/categories/${categoryPublicId}/milestones`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of all Objectives with the Category.
   *
   * @name ListCategoryObjectives
   * @summary List Category Objectives
   * @request GET:/api/v3/categories/{category-public-id}/objectives
   * @secure
   */
  listCategoryObjectives = (
    categoryPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<Milestone[], void>({
      path: `/api/v3/categories/${categoryPublicId}/objectives`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name ListCustomFields
   * @summary List Custom Fields
   * @request GET:/api/v3/custom-fields
   * @secure
   */
  listCustomFields = (params: RequestParams = {}) =>
    this.request<CustomField[], void>({
      path: `/api/v3/custom-fields`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name GetCustomField
   * @summary Get Custom Field
   * @request GET:/api/v3/custom-fields/{custom-field-public-id}
   * @secure
   */
  getCustomField = (customFieldPublicId: string, params: RequestParams = {}) =>
    this.request<CustomField, void>({
      path: `/api/v3/custom-fields/${customFieldPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Custom Field can be used to update the definition of a Custom Field. The order of items in the 'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the 'values' collection. New enum values may be created inline by including an object in the 'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).
   *
   * @name UpdateCustomField
   * @summary Update Custom Field
   * @request PUT:/api/v3/custom-fields/{custom-field-public-id}
   * @secure
   */
  updateCustomField = (
    customFieldPublicId: string,
    UpdateCustomField: UpdateCustomField,
    params: RequestParams = {},
  ) =>
    this.request<CustomField, void | DataConflictError>({
      path: `/api/v3/custom-fields/${customFieldPublicId}`,
      method: "PUT",
      body: UpdateCustomField,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name DeleteCustomField
   * @summary Delete Custom Field
   * @request DELETE:/api/v3/custom-fields/{custom-field-public-id}
   * @secure
   */
  deleteCustomField = (
    customFieldPublicId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/custom-fields/${customFieldPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description List Docs returns a list of Doc that the current user can read.
   *
   * @name ListDocs
   * @summary List Docs
   * @request GET:/api/v3/documents
   * @secure
   */
  listDocs = (params: RequestParams = {}) =>
    this.request<DocSlim[], void | DisabledFeatureError>({
      path: `/api/v3/documents`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new Doc.
   *
   * @name CreateDoc
   * @summary Create Doc
   * @request POST:/api/v3/documents
   * @secure
   */
  createDoc = (CreateDoc: CreateDoc, params: RequestParams = {}) =>
    this.request<DocSlim, void | DisabledFeatureError>({
      path: `/api/v3/documents`,
      method: "POST",
      body: CreateDoc,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description List all the entity templates for the Workspace.
   *
   * @name ListEntityTemplates
   * @summary List Entity Templates
   * @request GET:/api/v3/entity-templates
   * @secure
   */
  listEntityTemplates = (params: RequestParams = {}) =>
    this.request<EntityTemplate[], void>({
      path: `/api/v3/entity-templates`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create a new entity template for the Workspace.
   *
   * @name CreateEntityTemplate
   * @summary Create Entity Template
   * @request POST:/api/v3/entity-templates
   * @secure
   */
  createEntityTemplate = (
    CreateEntityTemplate: CreateEntityTemplate,
    params: RequestParams = {},
  ) =>
    this.request<EntityTemplate, void>({
      path: `/api/v3/entity-templates`,
      method: "POST",
      body: CreateEntityTemplate,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Disables the Story Template feature for the Workspace.
   *
   * @name DisableStoryTemplates
   * @summary Disable Story Templates
   * @request PUT:/api/v3/entity-templates/disable
   * @secure
   */
  disableStoryTemplates = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/entity-templates/disable`,
      method: "PUT",
      secure: true,
      ...params,
    });
  /**
   * @description Enables the Story Template feature for the Workspace.
   *
   * @name EnableStoryTemplates
   * @summary Enable Story Templates
   * @request PUT:/api/v3/entity-templates/enable
   * @secure
   */
  enableStoryTemplates = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/entity-templates/enable`,
      method: "PUT",
      secure: true,
      ...params,
    });
  /**
   * @description Get Entity Template returns information about a given entity template.
   *
   * @name GetEntityTemplate
   * @summary Get Entity Template
   * @request GET:/api/v3/entity-templates/{entity-template-public-id}
   * @secure
   */
  getEntityTemplate = (
    entityTemplatePublicId: string,
    params: RequestParams = {},
  ) =>
    this.request<EntityTemplate, void>({
      path: `/api/v3/entity-templates/${entityTemplatePublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update an entity template's name or its contents.
   *
   * @name UpdateEntityTemplate
   * @summary Update Entity Template
   * @request PUT:/api/v3/entity-templates/{entity-template-public-id}
   * @secure
   */
  updateEntityTemplate = (
    entityTemplatePublicId: string,
    UpdateEntityTemplate: UpdateEntityTemplate,
    params: RequestParams = {},
  ) =>
    this.request<EntityTemplate, void>({
      path: `/api/v3/entity-templates/${entityTemplatePublicId}`,
      method: "PUT",
      body: UpdateEntityTemplate,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name DeleteEntityTemplate
   * @summary Delete Entity Template
   * @request DELETE:/api/v3/entity-templates/{entity-template-public-id}
   * @secure
   */
  deleteEntityTemplate = (
    entityTemplatePublicId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/entity-templates/${entityTemplatePublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Returns the Epic Workflow for the Workspace.
   *
   * @name GetEpicWorkflow
   * @summary Get Epic Workflow
   * @request GET:/api/v3/epic-workflow
   * @secure
   */
  getEpicWorkflow = (params: RequestParams = {}) =>
    this.request<EpicWorkflow, void>({
      path: `/api/v3/epic-workflow`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List Epics returns a list of all Epics and their attributes.
   *
   * @name ListEpics
   * @summary List Epics
   * @request GET:/api/v3/epics
   * @secure
   */
  listEpics = (
    query?: {
      /** A true/false boolean indicating whether to return Epics with their descriptions. */
      includes_description?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicSlim[], void>({
      path: `/api/v3/epics`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create Epic allows you to create a new Epic in Shortcut.
   *
   * @name CreateEpic
   * @summary Create Epic
   * @request POST:/api/v3/epics
   * @secure
   */
  createEpic = (CreateEpic: CreateEpic, params: RequestParams = {}) =>
    this.request<Epic, void>({
      path: `/api/v3/epics`,
      method: "POST",
      body: CreateEpic,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description List Epics with pagination returns a paginated list of Epics and their attributes.
   *
   * @name ListEpicsPaginated
   * @summary List Epics Paginated
   * @request GET:/api/v3/epics/paginated
   * @secure
   */
  listEpicsPaginated = (
    query?: {
      /** A true/false boolean indicating whether to return Epics with their descriptions. */
      includes_description?: boolean;
      /**
       * The page number to return, starting with 1. Defaults to 1.
       * @format int64
       */
      page?: number;
      /**
       * The number of Epics to return per page. Minimum 1, maximum 250, default 10.
       * @format int64
       */
      page_size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicPaginatedResults, void>({
      path: `/api/v3/epics/paginated`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get Epic returns information about the selected Epic.
   *
   * @name GetEpic
   * @summary Get Epic
   * @request GET:/api/v3/epics/{epic-public-id}
   * @secure
   */
  getEpic = (epicPublicId: number, params: RequestParams = {}) =>
    this.request<Epic, void>({
      path: `/api/v3/epics/${epicPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
   *
   * @name UpdateEpic
   * @summary Update Epic
   * @request PUT:/api/v3/epics/{epic-public-id}
   * @secure
   */
  updateEpic = (
    epicPublicId: number,
    UpdateEpic: UpdateEpic,
    params: RequestParams = {},
  ) =>
    this.request<Epic, void>({
      path: `/api/v3/epics/${epicPublicId}`,
      method: "PUT",
      body: UpdateEpic,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
   *
   * @name DeleteEpic
   * @summary Delete Epic
   * @request DELETE:/api/v3/epics/{epic-public-id}
   * @secure
   */
  deleteEpic = (epicPublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/epics/${epicPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get a list of all Comments on an Epic.
   *
   * @name ListEpicComments
   * @summary List Epic Comments
   * @request GET:/api/v3/epics/{epic-public-id}/comments
   * @secure
   */
  listEpicComments = (epicPublicId: number, params: RequestParams = {}) =>
    this.request<ThreadedComment[], void>({
      path: `/api/v3/epics/${epicPublicId}/comments`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint allows you to create a threaded Comment on an Epic.
   *
   * @name CreateEpicComment
   * @summary Create Epic Comment
   * @request POST:/api/v3/epics/{epic-public-id}/comments
   * @secure
   */
  createEpicComment = (
    epicPublicId: number,
    CreateEpicComment: CreateEpicComment,
    params: RequestParams = {},
  ) =>
    this.request<ThreadedComment, void>({
      path: `/api/v3/epics/${epicPublicId}/comments`,
      method: "POST",
      body: CreateEpicComment,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
   *
   * @name CreateEpicCommentComment
   * @summary Create Epic Comment Comment
   * @request POST:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
   * @secure
   */
  createEpicCommentComment = (
    epicPublicId: number,
    commentPublicId: number,
    CreateCommentComment: CreateCommentComment,
    params: RequestParams = {},
  ) =>
    this.request<ThreadedComment, void>({
      path: `/api/v3/epics/${epicPublicId}/comments/${commentPublicId}`,
      method: "POST",
      body: CreateCommentComment,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint returns information about the selected Epic Comment.
   *
   * @name GetEpicComment
   * @summary Get Epic Comment
   * @request GET:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
   * @secure
   */
  getEpicComment = (
    epicPublicId: number,
    commentPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<ThreadedComment, void>({
      path: `/api/v3/epics/${epicPublicId}/comments/${commentPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint allows you to update a threaded Comment on an Epic.
   *
   * @name UpdateEpicComment
   * @summary Update Epic Comment
   * @request PUT:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
   * @secure
   */
  updateEpicComment = (
    epicPublicId: number,
    commentPublicId: number,
    UpdateComment: UpdateComment,
    params: RequestParams = {},
  ) =>
    this.request<ThreadedComment, void>({
      path: `/api/v3/epics/${epicPublicId}/comments/${commentPublicId}`,
      method: "PUT",
      body: UpdateComment,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint allows you to delete a Comment from an Epic.
   *
   * @name DeleteEpicComment
   * @summary Delete Epic Comment
   * @request DELETE:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
   * @secure
   */
  deleteEpicComment = (
    epicPublicId: number,
    commentPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/epics/${epicPublicId}/comments/${commentPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get the current health for the specified Epic.
   *
   * @name GetEpicHealth
   * @summary Get Epic Health
   * @request GET:/api/v3/epics/{epic-public-id}/health
   * @secure
   */
  getEpicHealth = (epicPublicId: number, params: RequestParams = {}) =>
    this.request<Health, void>({
      path: `/api/v3/epics/${epicPublicId}/health`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create a new health status for the specified Epic.
   *
   * @name CreateEpicHealth
   * @summary Create Epic Health
   * @request POST:/api/v3/epics/{epic-public-id}/health
   * @secure
   */
  createEpicHealth = (
    epicPublicId: number,
    CreateEpicHealth: CreateEpicHealth,
    params: RequestParams = {},
  ) =>
    this.request<Health, void>({
      path: `/api/v3/epics/${epicPublicId}/health`,
      method: "POST",
      body: CreateEpicHealth,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description List the history of health statuses for the specified Epic, most recent first.
   *
   * @name ListEpicHealths
   * @summary List Epic Healths
   * @request GET:/api/v3/epics/{epic-public-id}/health-history
   * @secure
   */
  listEpicHealths = (epicPublicId: number, params: RequestParams = {}) =>
    this.request<Health[], void>({
      path: `/api/v3/epics/${epicPublicId}/health-history`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of all Stories in an Epic.
   *
   * @name ListEpicStories
   * @summary List Epic Stories
   * @request GET:/api/v3/epics/{epic-public-id}/stories
   * @secure
   */
  listEpicStories = (
    epicPublicId: number,
    query?: {
      /** A true/false boolean indicating whether to return Stories with their descriptions. */
      includes_description?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/epics/${epicPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint allows you to unlink a productboard epic.
   *
   * @name UnlinkProductboardFromEpic
   * @summary Unlink Productboard from Epic
   * @request POST:/api/v3/epics/{epic-public-id}/unlink-productboard
   * @secure
   */
  unlinkProductboardFromEpic = (
    epicPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/epics/${epicPublicId}/unlink-productboard`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description Get Stories which have a given External Link associated with them.
   *
   * @name GetExternalLinkStories
   * @summary Get External Link Stories
   * @request GET:/api/v3/external-link/stories
   * @secure
   */
  getExternalLinkStories = (
    query: {
      /**
       * The external link associated with one or more stories.
       * @maxLength 2048
       * @pattern ^https?://.+$
       */
      external_link: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/external-link/stories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List Files returns a list of all UploadedFiles in the workspace.
   *
   * @name ListFiles
   * @summary List Files
   * @request GET:/api/v3/files
   * @secure
   */
  listFiles = (params: RequestParams = {}) =>
    this.request<UploadedFile[], void>({
      path: `/api/v3/files`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Upload Files uploads one or many files and optionally associates them with a story. Use the multipart/form-data content-type to upload. Each `file` key should contain a separate file. Each UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.
   *
   * @name UploadFiles
   * @summary Upload Files
   * @request POST:/api/v3/files
   * @secure
   */
  uploadFiles = (
    data: {
      /**
       * The story ID that these files will be associated with.
       * @format int64
       */
      story_id?: number;
      /**
       * A file upload. At least one is required.
       * @format binary
       */
      file0: File;
      /**
       * Optional additional files.
       * @format binary
       */
      file1?: File;
      /**
       * Optional additional files.
       * @format binary
       */
      file2?: File;
      /**
       * Optional additional files.
       * @format binary
       */
      file3?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<UploadedFile[], void>({
      path: `/api/v3/files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Get File returns information about the selected UploadedFile.
   *
   * @name GetFile
   * @summary Get File
   * @request GET:/api/v3/files/{file-public-id}
   * @secure
   */
  getFile = (filePublicId: number, params: RequestParams = {}) =>
    this.request<UploadedFile, void>({
      path: `/api/v3/files/${filePublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update File updates the properties of an UploadedFile (but not its content).
   *
   * @name UpdateFile
   * @summary Update File
   * @request PUT:/api/v3/files/{file-public-id}
   * @secure
   */
  updateFile = (
    filePublicId: number,
    UpdateFile: UpdateFile,
    params: RequestParams = {},
  ) =>
    this.request<UploadedFile, void>({
      path: `/api/v3/files/${filePublicId}`,
      method: "PUT",
      body: UpdateFile,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete File deletes a previously uploaded file.
   *
   * @name DeleteFile
   * @summary Delete File
   * @request DELETE:/api/v3/files/{file-public-id}
   * @secure
   */
  deleteFile = (filePublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/files/${filePublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.
   *
   * @name ListGroups
   * @summary List Groups
   * @request GET:/api/v3/groups
   * @secure
   */
  listGroups = (params: RequestParams = {}) =>
    this.request<Group[], void>({
      path: `/api/v3/groups`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name CreateGroup
   * @summary Create Group
   * @request POST:/api/v3/groups
   * @secure
   */
  createGroup = (CreateGroup: CreateGroup, params: RequestParams = {}) =>
    this.request<Group, void | UnusableEntitlementError>({
      path: `/api/v3/groups`,
      method: "POST",
      body: CreateGroup,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name GetGroup
   * @summary Get Group
   * @request GET:/api/v3/groups/{group-public-id}
   * @secure
   */
  getGroup = (groupPublicId: string, params: RequestParams = {}) =>
    this.request<Group, void>({
      path: `/api/v3/groups/${groupPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name UpdateGroup
   * @summary Update Group
   * @request PUT:/api/v3/groups/{group-public-id}
   * @secure
   */
  updateGroup = (
    groupPublicId: string,
    UpdateGroup: UpdateGroup,
    params: RequestParams = {},
  ) =>
    this.request<Group, void | UnusableEntitlementError>({
      path: `/api/v3/groups/${groupPublicId}`,
      method: "PUT",
      body: UpdateGroup,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description List the Stories assigned to the Group. (By default, limited to 1,000).
   *
   * @name ListGroupStories
   * @summary List Group Stories
   * @request GET:/api/v3/groups/{group-public-id}/stories
   * @secure
   */
  listGroupStories = (
    groupPublicId: string,
    query?: {
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
    },
    params: RequestParams = {},
  ) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/groups/${groupPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update an existing health status by its ID.
   *
   * @name UpdateHealth
   * @summary Update Health
   * @request PUT:/api/v3/health/{health-public-id}
   * @secure
   */
  updateHealth = (
    healthPublicId: string,
    UpdateHealth: UpdateHealth,
    params: RequestParams = {},
  ) =>
    this.request<Health, void>({
      path: `/api/v3/health/${healthPublicId}`,
      method: "PUT",
      body: UpdateHealth,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name CreateGenericIntegration
   * @summary Create Generic Integration
   * @request POST:/api/v3/integrations/webhook
   * @secure
   */
  createGenericIntegration = (
    CreateGenericIntegration: CreateGenericIntegration,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/integrations/webhook`,
      method: "POST",
      body: CreateGenericIntegration,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name GetGenericIntegration
   * @summary Get Generic Integration
   * @request GET:/api/v3/integrations/webhook/{integration-public-id}
   * @secure
   */
  getGenericIntegration = (
    integrationPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/integrations/webhook/${integrationPublicId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @name DeleteGenericIntegration
   * @summary Delete Generic Integration
   * @request DELETE:/api/v3/integrations/webhook/{integration-public-id}
   * @secure
   */
  deleteGenericIntegration = (
    integrationPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/integrations/webhook/${integrationPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @name ListIterations
   * @summary List Iterations
   * @request GET:/api/v3/iterations
   * @secure
   */
  listIterations = (params: RequestParams = {}) =>
    this.request<IterationSlim[], void>({
      path: `/api/v3/iterations`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name CreateIteration
   * @summary Create Iteration
   * @request POST:/api/v3/iterations
   * @secure
   */
  createIteration = (
    CreateIteration: CreateIteration,
    params: RequestParams = {},
  ) =>
    this.request<Iteration, void>({
      path: `/api/v3/iterations`,
      method: "POST",
      body: CreateIteration,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Disables Iterations for the current workspace
   *
   * @name DisableIterations
   * @summary Disable Iterations
   * @request PUT:/api/v3/iterations/disable
   * @secure
   */
  disableIterations = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/iterations/disable`,
      method: "PUT",
      secure: true,
      ...params,
    });
  /**
   * @description Enables Iterations for the current workspace
   *
   * @name EnableIterations
   * @summary Enable Iterations
   * @request PUT:/api/v3/iterations/enable
   * @secure
   */
  enableIterations = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/iterations/enable`,
      method: "PUT",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @name GetIteration
   * @summary Get Iteration
   * @request GET:/api/v3/iterations/{iteration-public-id}
   * @secure
   */
  getIteration = (iterationPublicId: number, params: RequestParams = {}) =>
    this.request<Iteration, void>({
      path: `/api/v3/iterations/${iterationPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name UpdateIteration
   * @summary Update Iteration
   * @request PUT:/api/v3/iterations/{iteration-public-id}
   * @secure
   */
  updateIteration = (
    iterationPublicId: number,
    UpdateIteration: UpdateIteration,
    params: RequestParams = {},
  ) =>
    this.request<Iteration, void>({
      path: `/api/v3/iterations/${iterationPublicId}`,
      method: "PUT",
      body: UpdateIteration,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name DeleteIteration
   * @summary Delete Iteration
   * @request DELETE:/api/v3/iterations/{iteration-public-id}
   * @secure
   */
  deleteIteration = (iterationPublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/iterations/${iterationPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get a list of all Stories in an Iteration.
   *
   * @name ListIterationStories
   * @summary List Iteration Stories
   * @request GET:/api/v3/iterations/{iteration-public-id}/stories
   * @secure
   */
  listIterationStories = (
    iterationPublicId: number,
    query?: {
      /** A true/false boolean indicating whether to return Stories with their descriptions. */
      includes_description?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/iterations/${iterationPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get Key Result returns information about a chosen Key Result.
   *
   * @name GetKeyResult
   * @summary Get Key Result
   * @request GET:/api/v3/key-results/{key-result-public-id}
   * @secure
   */
  getKeyResult = (keyResultPublicId: string, params: RequestParams = {}) =>
    this.request<KeyResult, void>({
      path: `/api/v3/key-results/${keyResultPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Key Result allows updating a Key Result's name or initial, observed, or target values.
   *
   * @name UpdateKeyResult
   * @summary Update Key Result
   * @request PUT:/api/v3/key-results/{key-result-public-id}
   * @secure
   */
  updateKeyResult = (
    keyResultPublicId: string,
    UpdateKeyResult: UpdateKeyResult,
    params: RequestParams = {},
  ) =>
    this.request<KeyResult, void>({
      path: `/api/v3/key-results/${keyResultPublicId}`,
      method: "PUT",
      body: UpdateKeyResult,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description List Labels returns a list of all Labels and their attributes.
   *
   * @name ListLabels
   * @summary List Labels
   * @request GET:/api/v3/labels
   * @secure
   */
  listLabels = (
    query?: {
      /** A true/false boolean indicating if the slim versions of the Label should be returned. */
      slim?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<Label[], void>({
      path: `/api/v3/labels`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create Label allows you to create a new Label in Shortcut.
   *
   * @name CreateLabel
   * @summary Create Label
   * @request POST:/api/v3/labels
   * @secure
   */
  createLabel = (
    CreateLabelParams: CreateLabelParams,
    params: RequestParams = {},
  ) =>
    this.request<Label, void>({
      path: `/api/v3/labels`,
      method: "POST",
      body: CreateLabelParams,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get Label returns information about the selected Label.
   *
   * @name GetLabel
   * @summary Get Label
   * @request GET:/api/v3/labels/{label-public-id}
   * @secure
   */
  getLabel = (labelPublicId: number, params: RequestParams = {}) =>
    this.request<Label, void>({
      path: `/api/v3/labels/${labelPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
   *
   * @name UpdateLabel
   * @summary Update Label
   * @request PUT:/api/v3/labels/{label-public-id}
   * @secure
   */
  updateLabel = (
    labelPublicId: number,
    UpdateLabel: UpdateLabel,
    params: RequestParams = {},
  ) =>
    this.request<Label, void>({
      path: `/api/v3/labels/${labelPublicId}`,
      method: "PUT",
      body: UpdateLabel,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Label can be used to delete any Label.
   *
   * @name DeleteLabel
   * @summary Delete Label
   * @request DELETE:/api/v3/labels/{label-public-id}
   * @secure
   */
  deleteLabel = (labelPublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/labels/${labelPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description List all of the Epics with the Label.
   *
   * @name ListLabelEpics
   * @summary List Label Epics
   * @request GET:/api/v3/labels/{label-public-id}/epics
   * @secure
   */
  listLabelEpics = (labelPublicId: number, params: RequestParams = {}) =>
    this.request<EpicSlim[], void>({
      path: `/api/v3/labels/${labelPublicId}/epics`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List all of the Stories with the Label.
   *
   * @name ListLabelStories
   * @summary List Label Stories
   * @request GET:/api/v3/labels/{label-public-id}/stories
   * @secure
   */
  listLabelStories = (
    labelPublicId: number,
    query?: {
      /** A true/false boolean indicating whether to return Stories with their descriptions. */
      includes_description?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/labels/${labelPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List Linked Files returns a list of all Linked-Files and their attributes.
   *
   * @name ListLinkedFiles
   * @summary List Linked Files
   * @request GET:/api/v3/linked-files
   * @secure
   */
  listLinkedFiles = (params: RequestParams = {}) =>
    this.request<LinkedFile[], void>({
      path: `/api/v3/linked-files`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create Linked File allows you to create a new Linked File in Shortcut.
   *
   * @name CreateLinkedFile
   * @summary Create Linked File
   * @request POST:/api/v3/linked-files
   * @secure
   */
  createLinkedFile = (
    CreateLinkedFile: CreateLinkedFile,
    params: RequestParams = {},
  ) =>
    this.request<LinkedFile, void>({
      path: `/api/v3/linked-files`,
      method: "POST",
      body: CreateLinkedFile,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get File returns information about the selected Linked File.
   *
   * @name GetLinkedFile
   * @summary Get Linked File
   * @request GET:/api/v3/linked-files/{linked-file-public-id}
   * @secure
   */
  getLinkedFile = (linkedFilePublicId: number, params: RequestParams = {}) =>
    this.request<LinkedFile, void>({
      path: `/api/v3/linked-files/${linkedFilePublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updated Linked File allows you to update properties of a previously attached Linked-File.
   *
   * @name UpdateLinkedFile
   * @summary Update Linked File
   * @request PUT:/api/v3/linked-files/{linked-file-public-id}
   * @secure
   */
  updateLinkedFile = (
    linkedFilePublicId: number,
    UpdateLinkedFile: UpdateLinkedFile,
    params: RequestParams = {},
  ) =>
    this.request<LinkedFile, void>({
      path: `/api/v3/linked-files/${linkedFilePublicId}`,
      method: "PUT",
      body: UpdateLinkedFile,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Linked File can be used to delete any previously attached Linked-File.
   *
   * @name DeleteLinkedFile
   * @summary Delete Linked File
   * @request DELETE:/api/v3/linked-files/{linked-file-public-id}
   * @secure
   */
  deleteLinkedFile = (linkedFilePublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/linked-files/${linkedFilePublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Returns information about the authenticated member.
   *
   * @name GetCurrentMemberInfo
   * @summary Get Current Member Info
   * @request GET:/api/v3/member
   * @secure
   */
  getCurrentMemberInfo = (params: RequestParams = {}) =>
    this.request<MemberInfo, void>({
      path: `/api/v3/member`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about members of the Workspace.
   *
   * @name ListMembers
   * @summary List Members
   * @request GET:/api/v3/members
   * @secure
   */
  listMembers = (
    query?: {
      /**
       * The unique ID of the Organization to limit the list to.
       * @format uuid
       */
      "org-public-id"?: string;
      /** Filter members by their disabled state. If true, return only disabled members. If false, return only enabled members. */
      disabled?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<Member[], void>({
      path: `/api/v3/members`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about a Member.
   *
   * @name GetMember
   * @summary Get Member
   * @request GET:/api/v3/members/{member-public-id}
   * @secure
   */
  getMember = (
    memberPublicId: string,
    query?: {
      /**
       * The unique ID of the Organization to limit the lookup to.
       * @format uuid
       */
      "org-public-id"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Member, void>({
      path: `/api/v3/members/${memberPublicId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description (Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.
   *
   * @name ListMilestones
   * @summary List Milestones
   * @request GET:/api/v3/milestones
   * @secure
   */
  listMilestones = (params: RequestParams = {}) =>
    this.request<Milestone[], void>({
      path: `/api/v3/milestones`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description (Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.
   *
   * @name CreateMilestone
   * @summary Create Milestone
   * @request POST:/api/v3/milestones
   * @secure
   */
  createMilestone = (
    CreateMilestone: CreateMilestone,
    params: RequestParams = {},
  ) =>
    this.request<Milestone, void | UnusableEntitlementError>({
      path: `/api/v3/milestones`,
      method: "POST",
      body: CreateMilestone,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description (Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.
   *
   * @name GetMilestone
   * @summary Get Milestone
   * @request GET:/api/v3/milestones/{milestone-public-id}
   * @secure
   */
  getMilestone = (milestonePublicId: number, params: RequestParams = {}) =>
    this.request<Milestone, void>({
      path: `/api/v3/milestones/${milestonePublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description (Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.
   *
   * @name UpdateMilestone
   * @summary Update Milestone
   * @request PUT:/api/v3/milestones/{milestone-public-id}
   * @secure
   */
  updateMilestone = (
    milestonePublicId: number,
    UpdateMilestone: UpdateMilestone,
    params: RequestParams = {},
  ) =>
    this.request<Milestone, void>({
      path: `/api/v3/milestones/${milestonePublicId}`,
      method: "PUT",
      body: UpdateMilestone,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description (Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.
   *
   * @name DeleteMilestone
   * @summary Delete Milestone
   * @request DELETE:/api/v3/milestones/{milestone-public-id}
   * @secure
   */
  deleteMilestone = (milestonePublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/milestones/${milestonePublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description (Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.
   *
   * @name ListMilestoneEpics
   * @summary List Milestone Epics
   * @request GET:/api/v3/milestones/{milestone-public-id}/epics
   * @secure
   */
  listMilestoneEpics = (
    milestonePublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<EpicSlim[], void>({
      path: `/api/v3/milestones/${milestonePublicId}/epics`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List Objectives returns a list of all Objectives and their attributes.
   *
   * @name ListObjectives
   * @summary List Objectives
   * @request GET:/api/v3/objectives
   * @secure
   */
  listObjectives = (params: RequestParams = {}) =>
    this.request<Objective[], void>({
      path: `/api/v3/objectives`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create Objective allows you to create a new Objective in Shortcut.
   *
   * @name CreateObjective
   * @summary Create Objective
   * @request POST:/api/v3/objectives
   * @secure
   */
  createObjective = (
    CreateObjective: CreateObjective,
    params: RequestParams = {},
  ) =>
    this.request<Objective, void | UnusableEntitlementError>({
      path: `/api/v3/objectives`,
      method: "POST",
      body: CreateObjective,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get Objective returns information about a chosen Objective.
   *
   * @name GetObjective
   * @summary Get Objective
   * @request GET:/api/v3/objectives/{objective-public-id}
   * @secure
   */
  getObjective = (objectivePublicId: number, params: RequestParams = {}) =>
    this.request<Objective, void>({
      path: `/api/v3/objectives/${objectivePublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Objective can be used to update Objective properties.
   *
   * @name UpdateObjective
   * @summary Update Objective
   * @request PUT:/api/v3/objectives/{objective-public-id}
   * @secure
   */
  updateObjective = (
    objectivePublicId: number,
    UpdateObjective: UpdateObjective,
    params: RequestParams = {},
  ) =>
    this.request<Objective, void>({
      path: `/api/v3/objectives/${objectivePublicId}`,
      method: "PUT",
      body: UpdateObjective,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Objective can be used to delete any Objective.
   *
   * @name DeleteObjective
   * @summary Delete Objective
   * @request DELETE:/api/v3/objectives/{objective-public-id}
   * @secure
   */
  deleteObjective = (objectivePublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/objectives/${objectivePublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description List all of the Epics within the Objective.
   *
   * @name ListObjectiveEpics
   * @summary List Objective Epics
   * @request GET:/api/v3/objectives/{objective-public-id}/epics
   * @secure
   */
  listObjectiveEpics = (
    objectivePublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<EpicSlim[], void>({
      path: `/api/v3/objectives/${objectivePublicId}/epics`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List Projects returns a list of all Projects and their attributes.
   *
   * @name ListProjects
   * @summary List Projects
   * @request GET:/api/v3/projects
   * @secure
   */
  listProjects = (params: RequestParams = {}) =>
    this.request<Project[], void>({
      path: `/api/v3/projects`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create Project is used to create a new Shortcut Project.
   *
   * @name CreateProject
   * @summary Create Project
   * @request POST:/api/v3/projects
   * @secure
   */
  createProject = (CreateProject: CreateProject, params: RequestParams = {}) =>
    this.request<Project, void>({
      path: `/api/v3/projects`,
      method: "POST",
      body: CreateProject,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get Project returns information about the selected Project.
   *
   * @name GetProject
   * @summary Get Project
   * @request GET:/api/v3/projects/{project-public-id}
   * @secure
   */
  getProject = (projectPublicId: number, params: RequestParams = {}) =>
    this.request<Project, void>({
      path: `/api/v3/projects/${projectPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Project can be used to change properties of a Project.
   *
   * @name UpdateProject
   * @summary Update Project
   * @request PUT:/api/v3/projects/{project-public-id}
   * @secure
   */
  updateProject = (
    projectPublicId: number,
    UpdateProject: UpdateProject,
    params: RequestParams = {},
  ) =>
    this.request<Project, void>({
      path: `/api/v3/projects/${projectPublicId}`,
      method: "PUT",
      body: UpdateProject,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.
   *
   * @name DeleteProject
   * @summary Delete Project
   * @request DELETE:/api/v3/projects/{project-public-id}
   * @secure
   */
  deleteProject = (projectPublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/projects/${projectPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description List Stories returns a list of all Stories in a selected Project and their attributes.
   *
   * @name ListStories
   * @summary List Stories
   * @request GET:/api/v3/projects/{project-public-id}/stories
   * @secure
   */
  listStories = (
    projectPublicId: number,
    query?: {
      /** A true/false boolean indicating whether to return Stories with their descriptions. */
      includes_description?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/projects/${projectPublicId}/stories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description List Repositories returns a list of all Repositories and their attributes.
   *
   * @name ListRepositories
   * @summary List Repositories
   * @request GET:/api/v3/repositories
   * @secure
   */
  listRepositories = (params: RequestParams = {}) =>
    this.request<Repository[], void>({
      path: `/api/v3/repositories`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get Repository returns information about the selected Repository.
   *
   * @name GetRepository
   * @summary Get Repository
   * @request GET:/api/v3/repositories/{repo-public-id}
   * @secure
   */
  getRepository = (repoPublicId: number, params: RequestParams = {}) =>
    this.request<Repository, void>({
      path: `/api/v3/repositories/${repoPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
   *
   * @name Search
   * @summary Search
   * @request GET:/api/v3/search
   * @secure
   */
  search = (
    query: {
      /**
       * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
       * @minLength 1
       */
      query: string;
      /**
       * The number of search results to include in a page. Minimum of 1 and maximum of 250.
       * @format int64
       */
      page_size?: number;
      /**
       * The amount of detail included in each result item.
       *    "full" will include all descriptions and comments and more fields on
       *    related items such as pull requests, branches and tasks.
       *    "slim" omits larger fulltext fields such as descriptions and comments
       *    and only references related items by id.
       *    The default is "full".
       */
      detail?: "full" | "slim";
      /** The next page token. */
      next?: string;
      /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
      entity_types?: (
        | "story"
        | "milestone"
        | "epic"
        | "iteration"
        | "objective"
      )[];
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchResults, MaxSearchResultsExceededError | void>({
      path: `/api/v3/search`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
   *
   * @name SearchEpics
   * @summary Search Epics
   * @request GET:/api/v3/search/epics
   * @secure
   */
  searchEpics = (
    query: {
      /**
       * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
       * @minLength 1
       */
      query: string;
      /**
       * The number of search results to include in a page. Minimum of 1 and maximum of 250.
       * @format int64
       */
      page_size?: number;
      /**
       * The amount of detail included in each result item.
       *    "full" will include all descriptions and comments and more fields on
       *    related items such as pull requests, branches and tasks.
       *    "slim" omits larger fulltext fields such as descriptions and comments
       *    and only references related items by id.
       *    The default is "full".
       */
      detail?: "full" | "slim";
      /** The next page token. */
      next?: string;
      /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
      entity_types?: (
        | "story"
        | "milestone"
        | "epic"
        | "iteration"
        | "objective"
      )[];
    },
    params: RequestParams = {},
  ) =>
    this.request<EpicSearchResults, MaxSearchResultsExceededError | void>({
      path: `/api/v3/search/epics`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
   *
   * @name SearchIterations
   * @summary Search Iterations
   * @request GET:/api/v3/search/iterations
   * @secure
   */
  searchIterations = (
    query: {
      /**
       * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
       * @minLength 1
       */
      query: string;
      /**
       * The number of search results to include in a page. Minimum of 1 and maximum of 250.
       * @format int64
       */
      page_size?: number;
      /**
       * The amount of detail included in each result item.
       *    "full" will include all descriptions and comments and more fields on
       *    related items such as pull requests, branches and tasks.
       *    "slim" omits larger fulltext fields such as descriptions and comments
       *    and only references related items by id.
       *    The default is "full".
       */
      detail?: "full" | "slim";
      /** The next page token. */
      next?: string;
      /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
      entity_types?: (
        | "story"
        | "milestone"
        | "epic"
        | "iteration"
        | "objective"
      )[];
    },
    params: RequestParams = {},
  ) =>
    this.request<IterationSearchResults, MaxSearchResultsExceededError | void>({
      path: `/api/v3/search/iterations`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
   *
   * @name SearchMilestones
   * @summary Search Milestones
   * @request GET:/api/v3/search/milestones
   * @secure
   */
  searchMilestones = (
    query: {
      /**
       * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
       * @minLength 1
       */
      query: string;
      /**
       * The number of search results to include in a page. Minimum of 1 and maximum of 250.
       * @format int64
       */
      page_size?: number;
      /**
       * The amount of detail included in each result item.
       *    "full" will include all descriptions and comments and more fields on
       *    related items such as pull requests, branches and tasks.
       *    "slim" omits larger fulltext fields such as descriptions and comments
       *    and only references related items by id.
       *    The default is "full".
       */
      detail?: "full" | "slim";
      /** The next page token. */
      next?: string;
      /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
      entity_types?: (
        | "story"
        | "milestone"
        | "epic"
        | "iteration"
        | "objective"
      )[];
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveSearchResults, MaxSearchResultsExceededError | void>({
      path: `/api/v3/search/milestones`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
   *
   * @name SearchObjectives
   * @summary Search Objectives
   * @request GET:/api/v3/search/objectives
   * @secure
   */
  searchObjectives = (
    query: {
      /**
       * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
       * @minLength 1
       */
      query: string;
      /**
       * The number of search results to include in a page. Minimum of 1 and maximum of 250.
       * @format int64
       */
      page_size?: number;
      /**
       * The amount of detail included in each result item.
       *    "full" will include all descriptions and comments and more fields on
       *    related items such as pull requests, branches and tasks.
       *    "slim" omits larger fulltext fields such as descriptions and comments
       *    and only references related items by id.
       *    The default is "full".
       */
      detail?: "full" | "slim";
      /** The next page token. */
      next?: string;
      /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
      entity_types?: (
        | "story"
        | "milestone"
        | "epic"
        | "iteration"
        | "objective"
      )[];
    },
    params: RequestParams = {},
  ) =>
    this.request<ObjectiveSearchResults, MaxSearchResultsExceededError | void>({
      path: `/api/v3/search/objectives`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
   *
   * @name SearchStories
   * @summary Search Stories
   * @request GET:/api/v3/search/stories
   * @secure
   */
  searchStories = (
    query: {
      /**
       * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
       * @minLength 1
       */
      query: string;
      /**
       * The number of search results to include in a page. Minimum of 1 and maximum of 250.
       * @format int64
       */
      page_size?: number;
      /**
       * The amount of detail included in each result item.
       *    "full" will include all descriptions and comments and more fields on
       *    related items such as pull requests, branches and tasks.
       *    "slim" omits larger fulltext fields such as descriptions and comments
       *    and only references related items by id.
       *    The default is "full".
       */
      detail?: "full" | "slim";
      /** The next page token. */
      next?: string;
      /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
      entity_types?: (
        | "story"
        | "milestone"
        | "epic"
        | "iteration"
        | "objective"
      )[];
    },
    params: RequestParams = {},
  ) =>
    this.request<StorySearchResults, MaxSearchResultsExceededError | void>({
      path: `/api/v3/search/stories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create Story is used to add a new story to your Shortcut Workspace. This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
   *
   * @name CreateStory
   * @summary Create Story
   * @request POST:/api/v3/stories
   * @secure
   */
  createStory = (
    CreateStoryParams: CreateStoryParams,
    params: RequestParams = {},
  ) =>
    this.request<Story, void>({
      path: `/api/v3/stories`,
      method: "POST",
      body: CreateStoryParams,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
   *
   * @name CreateMultipleStories
   * @summary Create Multiple Stories
   * @request POST:/api/v3/stories/bulk
   * @secure
   */
  createMultipleStories = (
    CreateStories: CreateStories,
    params: RequestParams = {},
  ) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/stories/bulk`,
      method: "POST",
      body: CreateStories,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update Multiple Stories allows you to make changes to numerous stories at once.
   *
   * @name UpdateMultipleStories
   * @summary Update Multiple Stories
   * @request PUT:/api/v3/stories/bulk
   * @secure
   */
  updateMultipleStories = (
    UpdateStories: UpdateStories,
    params: RequestParams = {},
  ) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/stories/bulk`,
      method: "PUT",
      body: UpdateStories,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Multiple Stories allows you to delete multiple archived stories at once.
   *
   * @name DeleteMultipleStories
   * @summary Delete Multiple Stories
   * @request DELETE:/api/v3/stories/bulk
   * @secure
   */
  deleteMultipleStories = (
    DeleteStories: DeleteStories,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/stories/bulk`,
      method: "DELETE",
      body: DeleteStories,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
   *
   * @name CreateStoryFromTemplate
   * @summary Create Story From Template
   * @request POST:/api/v3/stories/from-template
   * @secure
   */
  createStoryFromTemplate = (
    CreateStoryFromTemplateParams: CreateStoryFromTemplateParams,
    params: RequestParams = {},
  ) =>
    this.request<Story, void>({
      path: `/api/v3/stories/from-template`,
      method: "POST",
      body: CreateStoryFromTemplateParams,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Search Stories lets you search Stories based on desired parameters.
   *
   * @name QueryStories
   * @summary Query Stories
   * @request POST:/api/v3/stories/search
   * @secure
   */
  queryStories = (SearchStories: SearchStories, params: RequestParams = {}) =>
    this.request<StorySlim[], void>({
      path: `/api/v3/stories/search`,
      method: "POST",
      body: SearchStories,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get Story returns information about a chosen Story.
   *
   * @name GetStory
   * @summary Get Story
   * @request GET:/api/v3/stories/{story-public-id}
   * @secure
   */
  getStory = (storyPublicId: number, params: RequestParams = {}) =>
    this.request<Story, void>({
      path: `/api/v3/stories/${storyPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Story can be used to update Story properties.
   *
   * @name UpdateStory
   * @summary Update Story
   * @request PUT:/api/v3/stories/{story-public-id}
   * @secure
   */
  updateStory = (
    storyPublicId: number,
    UpdateStory: UpdateStory,
    params: RequestParams = {},
  ) =>
    this.request<Story, void>({
      path: `/api/v3/stories/${storyPublicId}`,
      method: "PUT",
      body: UpdateStory,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Story can be used to delete any Story.
   *
   * @name DeleteStory
   * @summary Delete Story
   * @request DELETE:/api/v3/stories/{story-public-id}
   * @secure
   */
  deleteStory = (storyPublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/stories/${storyPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Lists Comments associated with a Story
   *
   * @name ListStoryComment
   * @summary List Story Comment
   * @request GET:/api/v3/stories/{story-public-id}/comments
   * @secure
   */
  listStoryComment = (storyPublicId: number, params: RequestParams = {}) =>
    this.request<StoryComment[], void>({
      path: `/api/v3/stories/${storyPublicId}/comments`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create Comment allows you to create a Comment on any Story.
   *
   * @name CreateStoryComment
   * @summary Create Story Comment
   * @request POST:/api/v3/stories/{story-public-id}/comments
   * @secure
   */
  createStoryComment = (
    storyPublicId: number,
    CreateStoryComment: CreateStoryComment,
    params: RequestParams = {},
  ) =>
    this.request<StoryComment, void>({
      path: `/api/v3/stories/${storyPublicId}/comments`,
      method: "POST",
      body: CreateStoryComment,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get Comment is used to get Comment information.
   *
   * @name GetStoryComment
   * @summary Get Story Comment
   * @request GET:/api/v3/stories/{story-public-id}/comments/{comment-public-id}
   * @secure
   */
  getStoryComment = (
    storyPublicId: number,
    commentPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<StoryComment, void>({
      path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Comment replaces the text of the existing Comment.
   *
   * @name UpdateStoryComment
   * @summary Update Story Comment
   * @request PUT:/api/v3/stories/{story-public-id}/comments/{comment-public-id}
   * @secure
   */
  updateStoryComment = (
    storyPublicId: number,
    commentPublicId: number,
    UpdateStoryComment: UpdateStoryComment,
    params: RequestParams = {},
  ) =>
    this.request<StoryComment, void>({
      path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}`,
      method: "PUT",
      body: UpdateStoryComment,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a Comment from any story.
   *
   * @name DeleteStoryComment
   * @summary Delete Story Comment
   * @request DELETE:/api/v3/stories/{story-public-id}/comments/{comment-public-id}
   * @secure
   */
  deleteStoryComment = (
    storyPublicId: number,
    commentPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Create a reaction to a story comment.
   *
   * @name CreateStoryReaction
   * @summary Create Story Reaction
   * @request POST:/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions
   * @secure
   */
  createStoryReaction = (
    storyPublicId: number,
    commentPublicId: number,
    CreateOrDeleteStoryReaction: CreateOrDeleteStoryReaction,
    params: RequestParams = {},
  ) =>
    this.request<StoryReaction[], void>({
      path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}/reactions`,
      method: "POST",
      body: CreateOrDeleteStoryReaction,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a reaction from any story comment.
   *
   * @name DeleteStoryReaction
   * @summary Delete Story Reaction
   * @request DELETE:/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions
   * @secure
   */
  deleteStoryReaction = (
    storyPublicId: number,
    commentPublicId: number,
    CreateOrDeleteStoryReaction: CreateOrDeleteStoryReaction,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}/reactions`,
      method: "DELETE",
      body: CreateOrDeleteStoryReaction,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
   *
   * @name UnlinkCommentThreadFromSlack
   * @summary Unlink Comment thread from Slack
   * @request POST:/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack
   * @secure
   */
  unlinkCommentThreadFromSlack = (
    storyPublicId: number,
    commentPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<StoryComment, void>({
      path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}/unlink-from-slack`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name StoryHistory
   * @summary Story History
   * @request GET:/api/v3/stories/{story-public-id}/history
   * @secure
   */
  storyHistory = (storyPublicId: number, params: RequestParams = {}) =>
    this.request<History[], void>({
      path: `/api/v3/stories/${storyPublicId}/history`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Create Task is used to create a new task in a Story.
   *
   * @name CreateTask
   * @summary Create Task
   * @request POST:/api/v3/stories/{story-public-id}/tasks
   * @secure
   */
  createTask = (
    storyPublicId: number,
    CreateTask: CreateTask,
    params: RequestParams = {},
  ) =>
    this.request<Task, void>({
      path: `/api/v3/stories/${storyPublicId}/tasks`,
      method: "POST",
      body: CreateTask,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about a chosen Task.
   *
   * @name GetTask
   * @summary Get Task
   * @request GET:/api/v3/stories/{story-public-id}/tasks/{task-public-id}
   * @secure
   */
  getTask = (
    storyPublicId: number,
    taskPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<Task, void>({
      path: `/api/v3/stories/${storyPublicId}/tasks/${taskPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update Task can be used to update Task properties.
   *
   * @name UpdateTask
   * @summary Update Task
   * @request PUT:/api/v3/stories/{story-public-id}/tasks/{task-public-id}
   * @secure
   */
  updateTask = (
    storyPublicId: number,
    taskPublicId: number,
    UpdateTask: UpdateTask,
    params: RequestParams = {},
  ) =>
    this.request<Task, void>({
      path: `/api/v3/stories/${storyPublicId}/tasks/${taskPublicId}`,
      method: "PUT",
      body: UpdateTask,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete Task can be used to delete any previously created Task on a Story.
   *
   * @name DeleteTask
   * @summary Delete Task
   * @request DELETE:/api/v3/stories/{story-public-id}/tasks/{task-public-id}
   * @secure
   */
  deleteTask = (
    storyPublicId: number,
    taskPublicId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v3/stories/${storyPublicId}/tasks/${taskPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object. The subject story acts on the object Story; the object story is the direct object of the sentence. The subject story "blocks", "duplicates", or "relates to" the object story.  Examples: - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state. - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - "story 7 relates to story 3”
   *
   * @name CreateStoryLink
   * @summary Create Story Link
   * @request POST:/api/v3/story-links
   * @secure
   */
  createStoryLink = (
    CreateStoryLink: CreateStoryLink,
    params: RequestParams = {},
  ) =>
    this.request<StoryLink, void>({
      path: `/api/v3/story-links`,
      method: "POST",
      body: CreateStoryLink,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the stories and their relationship for the given Story Link.
   *
   * @name GetStoryLink
   * @summary Get Story Link
   * @request GET:/api/v3/story-links/{story-link-public-id}
   * @secure
   */
  getStoryLink = (storyLinkPublicId: number, params: RequestParams = {}) =>
    this.request<StoryLink, void>({
      path: `/api/v3/story-links/${storyLinkPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the stories and/or the relationship for the given Story Link.
   *
   * @name UpdateStoryLink
   * @summary Update Story Link
   * @request PUT:/api/v3/story-links/{story-link-public-id}
   * @secure
   */
  updateStoryLink = (
    storyLinkPublicId: number,
    UpdateStoryLink: UpdateStoryLink,
    params: RequestParams = {},
  ) =>
    this.request<StoryLink, void>({
      path: `/api/v3/story-links/${storyLinkPublicId}`,
      method: "PUT",
      body: UpdateStoryLink,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes the relationship between the stories for the given Story Link.
   *
   * @name DeleteStoryLink
   * @summary Delete Story Link
   * @request DELETE:/api/v3/story-links/{story-link-public-id}
   * @secure
   */
  deleteStoryLink = (storyLinkPublicId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v3/story-links/${storyLinkPublicId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Returns a list of all Workflows in the Workspace.
   *
   * @name ListWorkflows
   * @summary List Workflows
   * @request GET:/api/v3/workflows
   * @secure
   */
  listWorkflows = (params: RequestParams = {}) =>
    this.request<Workflow[], void>({
      path: `/api/v3/workflows`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get Workflow returns information about a chosen Workflow.
   *
   * @name GetWorkflow
   * @summary Get Workflow
   * @request GET:/api/v3/workflows/{workflow-public-id}
   * @secure
   */
  getWorkflow = (workflowPublicId: number, params: RequestParams = {}) =>
    this.request<Workflow, void>({
      path: `/api/v3/workflows/${workflowPublicId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
