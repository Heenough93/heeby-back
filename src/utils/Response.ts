import { Response } from 'express';

import { PaginationInfo } from './Paginator';


export class ResponseUtil {
  static sendResponse<T>(res: Response, message: string, data: T, paginationInfo: PaginationInfo | null = null, statusCode = 200): Response<T> {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      paginationInfo,
    });
  }

  static sendError<T>(res: Response, message: string, statusCode = 500, error: T): Response<T> {
    return res.status(statusCode).json({
      success: false,
      message,
      error,
    });
  }
}
