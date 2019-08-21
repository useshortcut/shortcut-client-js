/* @flow */

import TokenRequestFactory from './TokenRequestFactory';
import FetchRequestPerformer from './FetchRequestPerformer';
import FetchRequestParser from './FetchRequestParser';

import type {
  Epic,
  EpicChange,
  File,
  FileChange,
  ID,
  LinkedFile,
  LinkedFileChange,
  Member,
  Project,
  ProjectChange,
  RequestFactory,
  RequestPerformer,
  ResponseParser,
  Story,
  StoryChange,
  StoryComment,
  StoryLink,
  StoryLinkChange,
  StorySearchResult,
  Task,
  TaskChange,
  Team,
  Workflow,
  Iteration,
  IterationChange,
} from './types';

const API_BASE_URL: string = 'https://api.clubhouse.io';
const API_VERSION: string = 'beta';

/** */
type ClientConfig = {
  baseURL: string,
  version: string,
};

const defaultConfig = {
  baseURL: API_BASE_URL,
  version: API_VERSION,
};

/**
 * @class Client
 */
class Client<RequestType, ResponseType> {
  requestFactory: RequestFactory<RequestType>;
  requestPerformer: RequestPerformer<RequestType, ResponseType>;
  responseParser: ResponseParser<ResponseType>;

  constructor(
    requestFactory: RequestFactory<RequestType>,
    requestPerformer: RequestPerformer<RequestType, ResponseType>,
    responseParser: ResponseParser<ResponseType>,
  ) {
    this.requestFactory = requestFactory;
    this.requestPerformer = requestPerformer;
    this.responseParser = responseParser;
  }
  /** */
  static create(
    token: string,
    config?: ClientConfig = defaultConfig,
  ): Client<Request, Response> {
    const { baseURL, version } = config;
    return new Client(
      new TokenRequestFactory(token, baseURL, version),
      new FetchRequestPerformer(),
      new FetchRequestParser(),
    );
  }

  listResource<T>(uri: string): Promise<Array<T>> {
    const request = this.requestFactory.createRequest(uri);
    return this.requestPerformer
      .performRequest(request)
      .then(this.responseParser.parseResponse);
  }

  getResource<T>(uri: string, params: ?Object): Promise<T> {
    const request = params
      ? this.requestFactory.createRequest(uri, 'GET', params)
      : this.requestFactory.createRequest(uri);
    return this.requestPerformer
      .performRequest(request)
      .then(this.responseParser.parseResponse);
  }

  createResource<T>(uri: string, params: Object): Promise<T> {
    const request = this.requestFactory.createRequest(uri, 'POST', params);
    return this.requestPerformer
      .performRequest(request)
      .then(this.responseParser.parseResponse);
  }

  updateResource<T>(uri: string, params: Object): Promise<T> {
    const request = this.requestFactory.createRequest(uri, 'PUT', params);
    return this.requestPerformer
      .performRequest(request)
      .then(this.responseParser.parseResponse);
  }

  deleteResource<T>(uri: string, params?: Object): Promise<T> {
    const request = this.requestFactory.createRequest(uri, 'DELETE', params);
    return this.requestPerformer
      .performRequest(request)
      .then(this.responseParser.parseResponse);
  }

  /** */
  listMembers(): Promise<Array<Member>> {
    return this.listResource('members');
  }

  /** */
  getMember(userID: ID): Promise<Member> {
    return this.getResource(`members/${userID}`);
  }

  /** */
  getCurrentUser(): Promise<Member> {
    return this.getResource('user');
  }

  /** */
  listProjects(): Promise<Array<Project>> {
    return this.listResource('projects');
  }

  /** */
  getProject(id: ID): Promise<Project> {
    return this.getResource(`projects/${id}`);
  }

  /** */
  createProject(params: ProjectChange): Promise<Project> {
    return this.createResource('projects', params);
  }

  /** */
  updateProject(id: ID, params: ProjectChange): Promise<Project> {
    return this.updateResource(`projects/${id}`, params);
  }

  /** */
  deleteProject(id: ID): Promise<{}> {
    return this.deleteResource(`projects/${id}`);
  }

  /** */
  listEpics(): Promise<Array<Epic>> {
    return this.listResource('epics');
  }

  /** */
  getEpic(epicID: ID): Promise<Epic> {
    return this.getResource(`epics/${epicID}`);
  }

  /** */
  createEpic(params: EpicChange): Promise<Epic> {
    return this.createResource('epics', params);
  }

  /** */
  updateEpic(epicID: ID, params: EpicChange): Promise<Epic> {
    return this.updateResource(`epics/${epicID}`, params);
  }

  /** */
  deleteEpic(epicID: ID): Promise<{}> {
    return this.deleteResource(`epics/${epicID}`);
  }

  /** */
  listStories(projectID: ID): Promise<Array<Story>> {
    return this.listResource(`projects/${projectID}/stories`);
  }

  /** */
  searchStories(query: String, pageSize?: number): Promise<StorySearchResult> {
    const processResult = result => {
      if (result.next) {
        return {
          ...result,
          fetchNext: () => this.getResource(result.next).then(processResult),
        };
      }
      return result;
    };
    return this.getResource(`search/stories`, {
      query,
      page_size: pageSize || 25,
    }).then(processResult);
  }

  /** */
  createStory(params: StoryChange): Promise<Story> {
    return this.createResource('stories', params);
  }

  /** */
  getStory(storyID: ID): Promise<Story> {
    return this.getResource(`stories/${storyID}`);
  }

  /** */
  updateStory(storyID: ID, params: StoryChange): Promise<Story> {
    return this.updateResource(`stories/${storyID}`, params);
  }

  /** */
  deleteStory(storyID: ID): Promise<{}> {
    return this.deleteResource(`stories/${storyID}`);
  }

  /** */
  createStoryComment(storyID: ID, text: string): Promise<StoryComment> {
    return this.createResource(`stories/${storyID}/comments`, { text });
  }

  /** */
  deleteStoryComment(storyID: ID, commentID: ID): Promise<{}> {
    return this.deleteResource(`stories/${storyID}/comments/${commentID}`);
  }

  /** */
  updateStoryComment(
    storyID: ID,
    commentID: ID,
    text: string,
  ): Promise<StoryComment> {
    return this.updateResource(`stories/${storyID}/comments/${commentID}`, { text });
  }

  /** */
  listTasks(storyID: ID): Promise<Array<Task>> {
    return this.listResource(`stories/${storyID}/tasks`);
  }

  /** */
  createTask(storyID: ID, params: TaskChange): Promise<Task> {
    return this.createResource(`stories/${storyID}/tasks`, params);
  }

  /** */
  getTask(storyID: ID, taskID: ID): Promise<Task> {
    return this.getResource(`stories/${storyID}/tasks/${taskID}`);
  }

  /** */
  updateTask(storyID: ID, taskID: ID, params: TaskChange): Promise<Task> {
    return this.updateResource(`stories/${storyID}/tasks/${taskID}`, params);
  }

  /** */
  deleteTask(storyID: ID, taskID: ID): Promise<{}> {
    return this.deleteResource(`stories/${storyID}/tasks/${taskID}`);
  }

  /** */
  listWorkflows(): Promise<Array<Workflow>> {
    return this.listResource('workflows');
  }

  /** */
  createStoryLink(params: StoryLinkChange): Promise<StoryLink> {
    return this.createResource('story-links', params);
  }

  /** */
  getStoryLink(storyLinkID: ID): Promise<StoryLink> {
    return this.getResource(`story-links/${storyLinkID}`);
  }

  /** */
  deleteStoryLink(storyLinkID: ID): Promise<{}> {
    return this.deleteResource(`story-links/${storyLinkID}`);
  }

  /** */
  listFiles(): Promise<Array<File>> {
    return this.listResource('files');
  }

  /** */
  updateFile(fileID: ID, params: FileChange): Promise<File> {
    return this.updateResource(`files/${fileID}`, params);
  }

  /** */
  deleteFile(fileID: ID): Promise<{}> {
    return this.deleteResource(`files/${fileID}`);
  }

  /** */
  listLinkedFiles(): Promise<Array<LinkedFile>> {
    return this.listResource('linked-files');
  }

  /** */
  createLinkedFile(params: LinkedFileChange): Promise<LinkedFile> {
    return this.createResource('linked-files', params);
  }

  /** */
  updateLinkedFile(
    linkedFileID: ID,
    params: LinkedFileChange,
  ): Promise<LinkedFile> {
    return this.updateResource(`linked-files/${linkedFileID}`, params);
  }

  /** */
  deleteLinkedFile(linkedFileID: ID): Promise<{}> {
    return this.deleteResource(`linked-files/${linkedFileID}`);
  }

  /** */
  listTeams(): Promise<Array<Team>> {
    return this.listResource('teams');
  }

  /** */
  getTeam(teamID: ID): Promise<Team> {
    return this.getResource(`teams/${teamID}`);
  }

  /** */
  listIterations(): Promise<Array<Iteration>> {
    return this.listResource(`iterations`);
  }

  /** */
  createIteration(params: IterationChange): Promise<Iteration> {
    return this.createResource(`iterations`, params);
  }

  /** */
  getIteration(iterationID: ID): Promise<Iteration> {
    return this.getResource(`iterations/${iterationID}`);
  }

  /** */
  updateIteration(
    iterationID: ID,
    params: IterationChange,
  ): Promise<Iteration> {
    return this.updateResource(`iterations/${iterationID}`, params);
  }

  /** */
  deleteIteration(iterationID: ID): Promise<{}> {
    return this.deleteResource(`iterations/${iterationID}`);
  }
}

module.exports = Client;
