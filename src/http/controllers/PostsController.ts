import { Request, Response } from 'express';
import { validateOrReject } from 'class-validator';

import { AppDataSource } from '../../data-source';
import { Post } from '../../entities/Post';
import { ResponseUtil } from '../../utils/Response';
import { Paginator } from '../../utils/Paginator';
import { CreatePostDTO, UpdatePostDTO } from '../dtos/PostDTO';


export class PostsController {
  async getPostsWithUsers(req: Request, res: Response): Promise<Response> {
    const posts = await AppDataSource.getRepository(Post).find({
      relations: {
        user: true,
      },
    });
    const postData = posts.map((post: Post) => {
      return post.toResponse();
    });

    return ResponseUtil.sendResponse(res, 'Fetched posts successfully', postData);
  }

  async getPosts(req: Request, res: Response): Promise<Response> {
    const builder = await AppDataSource.getRepository(Post).createQueryBuilder().orderBy('id', 'DESC');
    const { records: posts, paginationInfo } = await Paginator.paginate(builder, req);
    const postsData = posts.map((post: Post) => {
      return post.toResponse();
    });
    return ResponseUtil.sendResponse(res, 'Fetched posts successfully', postsData, paginationInfo);
  }

  async getPost(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const post = await AppDataSource.getRepository(Post).findOneByOrFail({
      id: Number(id),
    });

    return ResponseUtil.sendResponse<Post>(res, 'Fetch post successfully', post.toResponse());
  }

  async create(req: Request, res: Response): Promise<Response> {
    const postData = req.body;

    const dto = new CreatePostDTO();
    Object.assign(dto, postData);

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(Post);
    const post = repo.create(postData);
    await repo.save(post);

    return ResponseUtil.sendResponse(res, 'Successfully created new post', post, null, 200);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const postData = req.body;

    const dto = new UpdatePostDTO();
    Object.assign(dto, postData);
    dto.id = parseInt(id);

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(Post);

    const post = await repo.findOneByOrFail({
      id: Number(id),
    });

    repo.merge(post, postData);
    await repo.save(post);
    return ResponseUtil.sendResponse(res, 'Successfully updated the post', post.toResponse());
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(Post);
    const post = await repo.findOneByOrFail({
      id: Number(id),
    });
    await repo.remove(post);
    return ResponseUtil.sendResponse(res, 'Successfully deleted the post', null);
  }
}
