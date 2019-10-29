export default class ClientError extends Error {
  public readonly response: Response;

  public readonly body: any;

  constructor(response: Response, body: Record<string, any>) {
    super(response.statusText);
    this.response = response;
    this.body = body;
  }
}
