import { RequestPerformer } from './types';

require('fetch-everywhere');

class FetchRequestPerformer implements RequestPerformer<Request, Response> {
  public readonly performRequest = fetch;
}

export default FetchRequestPerformer;
