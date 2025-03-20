import { NextFunction, Request, Response } from 'express';

import { Roles } from '../../constants/Role';
import { User } from '../../entities/User';
import { ResponseUtil } from '../../utils/Response';


export class AdminMiddleware {
  static async check(req: Request, res: Response, next: NextFunction) {
    const { user: stringifiedUser } = req.headers;
    const user = JSON.parse(stringifiedUser as string) as User;
    if (user.role != Roles.ADMIN) {
      return ResponseUtil.sendError(res, 'Unauthorized', 403, null);
    }
    next();
  }
}
