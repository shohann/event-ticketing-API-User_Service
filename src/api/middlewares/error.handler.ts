import { ErrorRequestHandler } from "express";
import httpStatus from "../../utils/constants/http.status";
import ApplicationException from "../../utils/exceptions/application.exception";
import NotFoundException from "../../utils/exceptions/not.found.exception";
import HttpClientException from "../../utils/exceptions/http.client.exception";

export const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
    if (err instanceof ApplicationException) {
        res.status(httpStatus.BAD_REQUEST).json({
            type: ApplicationException.name, // TODO: err.name???
            title: err.message,
            detail: err.stack,
            status: err.statusCode
          }
        );

        next();
    }

    if (err instanceof NotFoundException) {
        res.status(httpStatus.NOT_FOUND).json({
            type: NotFoundException.name,
            title: err.message,
            detail: err.stack,
            status: err.statusCode
          }
        );

        next();
    }

    if (err instanceof HttpClientException) {
        res.status(httpStatus.BAD_REQUEST).json({
            type: HttpClientException.name,
            title: err.message,
            detail: err.stack,
            status: err.statusCode
          }
        );
    
        next();
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          type: 'INTERNAL_SERVER_ERROR',
          title: err.message,
          detail: err.stack,
          status: err.statusCode || 500
        });
    
      next();
};



// https://github.com/meysamhadeli/booking-microservices-expressjs/blob/main/src/building-blocks/error-handler/error-handler.ts