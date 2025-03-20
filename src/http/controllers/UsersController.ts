import { Request, Response } from 'express';
import { validateOrReject } from 'class-validator';

import { AppDataSource } from '../../data-source';
import { User } from '../../entities/User';
import { ResponseUtil } from '../../utils/Response';
import { Paginator } from '../../utils/Paginator';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/UserDTO';


export class UsersController {
  async getUsersWithPosts(req: Request, res: Response): Promise<Response> {
    const users = await AppDataSource.getRepository(User).find({
      relations: {
        posts: true,
      },
    });
    const usersData = users.map((user: User) => {
      return user.toResponse();
    });

    return ResponseUtil.sendResponse(res, 'Fetched users successfully', usersData);
  }

  async getUsers(req: Request, res: Response): Promise<Response> {
    const builder = await AppDataSource.getRepository(User).createQueryBuilder().orderBy('id', 'DESC');
    const { records: users, paginationInfo } = await Paginator.paginate(builder, req);
    const usersData = users.map((user: User) => {
      return user.toResponse();
    });
    return ResponseUtil.sendResponse(res, 'Fetched users successfully', usersData, paginationInfo);
  }

  async getUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = await AppDataSource.getRepository(User).findOneByOrFail({
      id: id,
    });

    return ResponseUtil.sendResponse<User>(res, 'Fetch user successfully', user.toResponse());
  }

  async create(req: Request, res: Response): Promise<Response> {
    const userData = req.body;

    const dto = new CreateUserDTO();
    Object.assign(dto, userData);

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(User);
    const user = repo.create(userData);
    await repo.save(user);

    return ResponseUtil.sendResponse(res, 'Successfully created new user', user, null, 200);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userData = req.body;

    const dto = new UpdateUserDTO();
    Object.assign(dto, userData);
    dto.id = id;

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(User);

    const user = await repo.findOneByOrFail({
      id: id,
    });

    repo.merge(user, userData);
    await repo.save(user);
    return ResponseUtil.sendResponse(res, 'Successfully updated the user', user.toResponse());
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(User);
    const user = await repo.findOneByOrFail({
      id: id,
    });
    await repo.remove(user);
    return ResponseUtil.sendResponse(res, 'Successfully deleted the user', null);
  }
}
