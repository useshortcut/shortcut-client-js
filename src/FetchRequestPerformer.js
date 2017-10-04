/* @flow */

import type { RequestPerformer } from './types';

require('fetch-everywhere');

class FetchRequestPerformer implements RequestPerformer<Request, Response> {
  performRequest = fetch;
}

export default FetchRequestPerformer;
