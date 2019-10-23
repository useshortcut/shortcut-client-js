/* @flow */

import Client from '../index';

import type { RequestFactory, RequestPerformer, ResponseParser } from '../types';

type TestRequest = {
  uri: string,
  method?: string,
  body?: Object,
};

// As per ECMA-404 spec: http://www.json.org/
// and RFC-7159 spec: https://tools.ietf.org/html/rfc7159
type JSON = { [keys: string]: JSON } | Array<JSON> | string | number | boolean | null;

type TestResponse = {
  status: number,
  body?: JSON,
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

type PromiseResolver<Input, Output> = Input => Promise<Output>;

export class TestRequestPerformer implements RequestPerformer<TestRequest, TestResponse> {
  static resolve = (request: TestRequest, response: TestResponse) =>
    new TestRequestPerformer(() => Promise.resolve(response));

  static reject = (request: TestRequest, response: TestResponse) =>
    new TestRequestPerformer(() => Promise.reject(response));

  constructor(resolver: PromiseResolver<TestRequest, TestResponse>) {
    this.resolver = resolver;
  }

  resolver: PromiseResolver<TestRequest, TestResponse>;

  performRequest = (request: TestRequest): Promise<TestResponse> => this.resolver(request);
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

  parseResponse = (response: TestResponse): Promise<*> => this.resolver(response);
}

export const createTestClient = (
  requestPerformer: (request: TestRequest) => Promise<TestResponse>,
  responseParser: (response: TestResponse) => Promise<*> = response => Promise.resolve(response),
) =>
  new Client(
    new TestRequestFactory(),
    new TestRequestPerformer(requestPerformer),
    new TestResponseParser(responseParser),
  );

export default createTestClient;
