import { NextFunction, Request, Response } from 'express';
import { EntityMetadataNotFoundError, EntityNotFoundError } from 'typeorm';
import { ValidationError } from 'class-validator';

import { ResponseUtil } from '../../utils/Response';


export class ErrorHandler {
  static catchErrors(fn: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }

  static handleErrors(err: any, req: Request, res: Response, next: NextFunction): Response {
    if (err instanceof EntityNotFoundError) {
      return ResponseUtil.sendError(res, 'Item/page you are looking for does not exist', 404, null);
    }

    if (err instanceof EntityMetadataNotFoundError) {
      return ResponseUtil.sendError(res, 'Item/page you are looking for does not exist', 404, null);
    }

    if (err.length > 0 && err[0] instanceof ValidationError) {
      const errors = ErrorHandler.formatErrors(err);
      return ResponseUtil.sendError(res, 'Invalid input', 422, errors);
    }

    if (err.message === 'Invalid file type') {
      return ResponseUtil.sendError(res, 'Invalid file type', 422, null);
    }

    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      return ResponseUtil.sendError(res, 'Database connection was closed.', 500, null);
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      return ResponseUtil.sendError(res, 'Database has too many connections.', 500, null);
    }
    if (err.code === 'ECONNREFUSED') {
      return ResponseUtil.sendError(res, 'Database connection was refused.', 500, null);
    }

    console.log({ err });

    return res.status(500).send({
      success: false,
      message: 'Something went wrong',
    });
  }

  static formatErrors(err: any[]) {
    const errors: any = {};
    err.forEach((value: any) => {
      if (!errors[value.property]) {
        errors[value.property] = [];
      }
      errors[value.property].push(value.constraints[Object.keys(value.constraints)[0]]);
    });
    return errors;
  }
}
