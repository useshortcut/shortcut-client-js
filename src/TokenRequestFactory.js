/* @flow */

import { stringify } from 'query-string';

import type { RequestFactory } from './types';

require('fetch-everywhere');

class TokenRequestFactory implements RequestFactory<Request> {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  createRequest(url: string, method?: string = 'GET', body?: Object): Request {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    };
    const params = {
      ...body,
      token: this.token,
    };

    if (method === 'GET') {
      const resolvedURL = `${url}?${stringify(params)}`;
      return new Request(resolvedURL, {
        headers,
        method,
      });
    }

    return new Request(url, {
      body: JSON.stringify(params),
      headers,
      method,
    });
  }
}

export default TokenRequestFactory;
