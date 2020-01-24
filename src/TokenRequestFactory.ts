import { URL } from 'universal-url';
import { RequestFactory } from './types';

require('fetch-everywhere');

class TokenRequestFactory implements RequestFactory<Request> {
  public readonly token: string;

  public readonly baseURL: string;

  public readonly version: string;

  constructor(token: string, baseURL: string, version: string) {
    this.token = token;
    this.baseURL = baseURL;
    this.version = version;
  }

  public prefixURI(uri: string): string {
    const prefix = `/api/${this.version}/`;
    const sanitizedURI = uri.replace(/^\/api\/beta\/|^\/api\/v\d+\//, '')
    return `${prefix}${sanitizedURI}`;
  }

  public createRequest(
    uri: string,
    method = 'GET',
    body?: Record<string, any>,
  ): Request {
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
