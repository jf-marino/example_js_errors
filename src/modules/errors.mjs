export class BaseError extends Error {
  constructor(message, inner) {
    super(message);
    this.name = 'BaseError';

    if (inner instanceof Error) {
      this.stack = this.stack + '\nCaused by:\n' + inner.stack;
    }
  }
}
