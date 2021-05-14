# A better Error class in Javascript

This repo is just to showcase an example of a simple yet powerful way to extend the Error class in JS.

```javascript
export class BaseError extends Error {
  constructor(message, inner) {
    super(message);
    this.name = 'BaseError';

    if (inner instanceof Error) {
      this.stack = this.stack + '\nCaused by:\n' + inner.stack;
    }
  }
}
```

This ☝️ is the main attraction.
