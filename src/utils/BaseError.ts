export class BaseError extends Error {
    status: number
    isOperational: boolean
    constructor(message: string, status: number, isOpetational = true) {
        super(message)
        this.status = status
        this.isOperational = isOpetational
        Object.setPrototypeOf(this, BaseError.prototype)
    }
}