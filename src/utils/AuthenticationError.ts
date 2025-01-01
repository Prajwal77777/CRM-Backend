import { BaseError } from "./BaseError";

export class AuthenticationError extends BaseError {
    constructor(message: string) {
        super(message, 401);
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
}