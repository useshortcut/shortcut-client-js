/* @flow */

export default class ClientError extends Error {
  response: Response;
  body: Object;

  constructor(response: Response, body: Object) {
    super(response.statusText);
    this.response = response;
    this.body = body;
  }
}
