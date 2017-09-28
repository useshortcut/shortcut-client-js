/* @flow */

import ClientError from './client_error';
import type { ResponseParser } from './types';

class FetchRequestParser implements ResponseParser<Response> {
  // eslint-disable-next-line class-methods-use-this
  parseResponse = (response: Response): Promise<*> =>
    response.json().then((json: Object) => {
      if (response.ok) {
        return json;
      }

      return Promise.reject(new ClientError(response, json));
    });
}

export default FetchRequestParser;
