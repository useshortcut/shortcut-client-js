/* @flow */

import type { RequestFactory } from './types';

class TokenRequestFactory implements RequestFactory<Request> {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  createRequest(url: string, method?: string = 'GET', body?: Object): Request {
    const urlWithToken = `${url}?token=${this.token}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    };

    return new Request(urlWithToken, {
      body: JSON.stringify(body),
      headers,
      method,
    });
  }
}

export default TokenRequestFactory;
