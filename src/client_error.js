export default class ClientError extends Error {
  response: any;
  body: any;

  constructor(response: Response, body: Object) {
    super(response.statusText);
    this.response = response;
    this.body = body;
  }
}
