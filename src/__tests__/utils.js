/* @flow */

import Client from '../index';

import type {
  RequestFactory,
  RequestPerformer,
  ResponseParser,
} from '../types';

type TestRequest = {
  uri: string,
  method?: string,
  body?: Object,
};

type JSON = Object | Array<JSON> | number | string;

type TestResponse = {
  status: number,
  body?: JSON,
};

export class TestRequestFactory implements RequestFactory<TestRequest> {
  createRequest = (uri: string, method?: string, body?: Object) => ({
    uri,
    method,
    body,
  });
}

type PromiseResolver<Input, Output> = Input => Promise<Output>;

export class TestRequestPerformer
  implements RequestPerformer<TestRequest, TestResponse> {
  static resolve = (request: TestRequest, response: TestResponse) =>
    new TestRequestPerformer(() => Promise.resolve(response));

  static reject = (request: TestRequest, response: TestResponse) =>
    new TestRequestPerformer(() => Promise.reject(response));

  constructor(resolver: PromiseResolver<TestRequest, TestResponse>) {
    this.resolver = resolver;
  }

  resolver: PromiseResolver<TestRequest, TestResponse>;

  performRequest = (request: TestRequest): Promise<TestResponse> =>
    this.resolver(request);
}

export class TestResponseParser implements ResponseParser<TestResponse> {
  static resolve = (response: TestResponse, result: *) =>
    new TestRequestPerformer(() => Promise.resolve(result));

  static reject = (response: TestResponse, result: *) =>
    new TestRequestPerformer(() => Promise.reject(result));

  constructor(resolver: PromiseResolver<TestResponse, *>) {
    this.resolver = resolver;
  }

  resolver: PromiseResolver<TestResponse, *>;

  parseResponse = (response: TestResponse): Promise<*> =>
    this.resolver(response);
}

export const createTestClient = (
  requestPerformer: (request: TestRequest) => Promise<TestResponse>,
  responseParser: (response: TestResponse) => Promise<*> = response =>
    Promise.resolve(response),
) =>
  new Client(
    {
      baseURL: 'http://localhost:4001',
      version: 'beta',
    },
    new TestRequestFactory(),
    new TestRequestPerformer(requestPerformer),
    new TestResponseParser(responseParser),
  );

export default createTestClient;
