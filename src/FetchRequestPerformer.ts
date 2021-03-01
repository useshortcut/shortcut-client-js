import fetch from 'cross-fetch';

import { RequestPerformer } from './types';

class FetchRequestPerformer implements RequestPerformer<Request, Response> {
  public readonly performRequest = fetch;
}

export default FetchRequestPerformer;
