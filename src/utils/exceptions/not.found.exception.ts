import httpStatus from "../constants/http.status";

class NotFoundException extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(
    message: string | undefined,
    statusCode: number = httpStatus.NOT_FOUND,
    isOperational = true,
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default NotFoundException;