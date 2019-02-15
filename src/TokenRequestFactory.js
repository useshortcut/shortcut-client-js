/* @flow */

import { URL } from 'universal-url';
import type { RequestFactory } from './types';

require('fetch-everywhere');

class TokenRequestFactory implements RequestFactory<Request> {
  token: string;
  baseURL: string;
  version: string;

  constructor(token: string, baseURL: string, version: string) {
    this.token = token;
    this.baseURL = baseURL;
    this.version = version;
  }

  prefixURI(uri: string): string {
    const prefix = `/api/${this.version}/`;
    if (uri.startsWith(prefix)) {
      return uri;
    }
    return `${prefix}${uri}`;
  }

  createRequest(uri: string, method?: string = 'GET', body?: Object): Request {
    const url = new URL(this.prefixURI(uri), this.baseURL);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    };

    url.searchParams.append('token', this.token);

    if (method === 'GET') {
      if (body) {
        Object.entries(body).forEach(entry =>
          url.searchParams.append(entry[0], String(entry[1])),
        );
      }
      return new Request(url.toString(), {
        headers,
        method,
      });
    }

    return new Request(url.toString(), {
      body: JSON.stringify(body),
      headers,
      method,
    });
  }
}

export default TokenRequestFactory;
