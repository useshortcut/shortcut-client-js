/* @flow */

import type { RequestPerformer } from './types';

class FetchRequestPerformer implements RequestPerformer<Request, Response> {
  // eslint-disable-next-line class-methods-use-this
  performRequest(request: Request): Promise<Response> {
    return fetch(request);
  }
}

export default FetchRequestPerformer;
