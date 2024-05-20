export default class HttpError extends Error {
  public errors;

  constructor(
    public message: string,
    code: string,
  ) {
    super(message);
    this.errors = {
      message,
      code,
    };
  }
}
