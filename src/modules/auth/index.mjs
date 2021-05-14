import { BaseError } from "../errors.mjs";
import { someFunctionThatThrows } from "../other/index.mjs";

export class UserDoesNotExistError extends Error {
  constructor(username = 'unknown') {
    super(`User with username '${username}' does not exist`);
    this.name = 'UserDoesNotExistError';
  }
}

export class UserForbidden extends BaseError {
  constructor(username = 'unknown', inner) {
    super(`User '${username}' is not allowed to move forward`, inner);
    this.name = 'UserForbidden';
  }
}

export class IntegrationError extends BaseError {
  constructor(inner) {
    super(`Failed to call on third party system`, inner);
    this.name = 'IntegrationError';
  }
}

export const authenticateUser = () => {
  try {
    return someFunctionThatThrows();
  } catch (_) {
    throw new UserDoesNotExistError();
  }
};

export const authorizeUser = () => {
  try {
    return someFunctionThatThrows();
  } catch (e) {
    throw new UserForbidden('unknown', e);
  }
}

export const higherLevelAuthFunction = () => {
  try {
    return authorizeUser();
  } catch (e) {
    throw new IntegrationError(e);
  }
};
