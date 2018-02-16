/* @flow */

import ClientError from './client_error';
import type { ResponseParser } from './types';

class FetchRequestParser implements ResponseParser<Response> {
  parseResponse = (response: Response): Promise<*> =>
    response.json().then((json: Object) => {
      if (response.ok) {
        return json;
      }

      return Promise.reject(new ClientError(response, json));
    }).catch(() => {
      return Promise.reject(new ClientError(response));
    });
}

export default FetchRequestParser;
