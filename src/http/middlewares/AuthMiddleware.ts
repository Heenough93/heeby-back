import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { ResponseUtil } from '../../utils/Response';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/User';


export class AuthMiddleware {
  static async authenticate(req: Request, res: Response, next: NextFunction) {
    const { authorization: tokenHeader } = req.headers;
    if (!tokenHeader) {
      return ResponseUtil.sendError(res, 'Token not provided', 401, null);
    }

    const token= tokenHeader; // = tokenHeader.split(' ')[1];

    try {
      const decoded = await jwt.verify(token, process.env.ACCESS_KEY_SECRET || 'secret123') as jwt.JwtPayload;
      const { userId: id } = decoded;
      const repo = AppDataSource.getRepository(User);
      const user = await repo.findOneByOrFail({
        id: id,
      });
      console.log({ user });
      req.headers.user = JSON.stringify(user);
    } catch (error) {
      return ResponseUtil.sendError(res, 'Invalid token', 401, null);
    }
    next();
  }
}
