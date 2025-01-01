// middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { BaseError } from '../utils/BaseError';
import { ValidationError } from "../utils/ValidationError";
import { NotFoundError } from "../utils/NotFoundError";
import { AuthenticationError } from "../utils/AuthenticationError";

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    if (err instanceof BaseError) {
        const { message, status } = err;
        const response: any = {
            status: 'error',
            message,
        };

        if (err instanceof ValidationError) {
            response.errorData = err.errorData;
        }

        if (err instanceof NotFoundError) {
            response.message = "Resource not found"
        }

        if (err instanceof AuthenticationError) {
            response.message = "Authentication Error"
        }

        console.error(`[${new Date().toISOString()}] ${message}`);
        res.status(status).json(response);
    } else {
        console.error(`[${new Date().toISOString()}]`, err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
}
