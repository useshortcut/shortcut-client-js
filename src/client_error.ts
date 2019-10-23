export class ClientError extends Error {
  public readonly response: Response;
  public readonly body: any;

  constructor(response: Response, body: any) {
    super(response.statusText);
    this.response = response;
    this.body = body;
  }
}
