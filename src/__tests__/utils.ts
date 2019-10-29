/* @flow */

import Client from '../index';

import { RequestFactory, RequestPerformer, ResponseParser } from '../types';

type TestRequest = {
  uri: string;
  method?: string;
  body?: Object;
};

type TestResponse = {
  status: number;
  body?: Object;
};

export class TestRequestFactory implements RequestFactory<TestRequest> {
  baseURL: string = 'http://localhost:4001';
  version: string = 'v3';

  prefixURI(uri: string) {
    return `${this.baseURL}/api/${this.version}/${uri}`;
  }

  createRequest = (uri: string, method?: string, body?: Object) => ({
    uri: this.prefixURI(uri),
    method,
    body,
  });
}

type PromiseResolver<Input, Output> = (input: Input) => Promise<Output>;

export class TestRequestPerformer
  implements RequestPerformer<TestRequest, TestResponse> {
  static resolve = (_request: TestRequest, response: TestResponse) =>
    new TestRequestPerformer(() => Promise.resolve(response));

  static reject = (_request: TestRequest, response: TestResponse) =>
    new TestRequestPerformer(() => Promise.reject(response));

  constructor(resolver: PromiseResolver<TestRequest, TestResponse>) {
    this.resolver = resolver;
  }

  resolver: PromiseResolver<TestRequest, TestResponse>;

  performRequest = (request: TestRequest): Promise<TestResponse> =>
    this.resolver(request);
}

export class TestResponseParser implements ResponseParser<TestResponse> {
  static resolve = (_response: TestResponse, result: TestResponse) =>
    new TestRequestPerformer(() => Promise.resolve(result));

  static reject = (_response: TestResponse, result: unknown) =>
    new TestRequestPerformer(() => Promise.reject(result));

  constructor(resolver: PromiseResolver<TestResponse, unknown>) {
    this.resolver = resolver;
  }

  resolver: PromiseResolver<TestResponse, unknown>;

  parseResponse = (response: TestResponse): Promise<unknown> =>
    this.resolver(response);
}

export const createTestClient = (
  requestPerformer: (request: TestRequest) => Promise<TestResponse>,
  responseParser: (response: TestResponse) => Promise<unknown> = response =>
    Promise.resolve(response),
) =>
  new Client(
    new TestRequestFactory(),
    new TestRequestPerformer(requestPerformer),
    new TestResponseParser(responseParser),
  );

export default createTestClient;
