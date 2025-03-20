import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { validateOrReject } from 'class-validator';
import { sign } from 'jsonwebtoken';

import { AppDataSource } from '../../data-source';
import { User } from '../../entities/User';
import { ResponseUtil } from '../../utils/Response';
import { LoginDTO, RegisterDTO } from '../dtos/AuthDTO';


export class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const { email, name, password } = req.body;
    const dto = new RegisterDTO();
    dto.email = email;
    dto.name = name;
    dto.password = password;

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(User);
    const user = repo.create( { email, name, password });
    await repo.save(user);

    return ResponseUtil.sendResponse(res, 'Successfully registered', user, null);
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const dto = new LoginDTO();
    dto.email = email;
    dto.password = password;

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(User);
    const user = await repo.findOneBy({ email });
    if (!user) {
      return ResponseUtil.sendError(res, 'Invalid credentials', 401, null);
    }
    const passwordMatches = await compare(password, user.password);
    if (!passwordMatches) {
      return ResponseUtil.sendError(res, 'Invalid credentials', 401, null);
    }
    const accessToken = sign({ userId: user.id }, process.env.ACCESS_KEY_SECRET || 'secret123', {
      expiresIn: '30m',
    });

    const returnUser = user.toResponse();

    return ResponseUtil.sendResponse(res, 'User login success', { user: returnUser, accessToken });
  }
}
