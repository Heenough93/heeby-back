import express from 'express';

import { PostsController } from '../http/controllers/PostsController';
import { ErrorHandler } from '../http/middlewares/ErrorHandler';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';


const postsController = new PostsController();

const router = express.Router();
router.get(
  '/with-users',
  ErrorHandler.catchErrors(postsController.getPostsWithUsers),
);
router.get(
  '/',
  ErrorHandler.catchErrors(postsController.getPosts),
);
router.get(
  '/:id',
  ErrorHandler.catchErrors(postsController.getPost),
);
router.post(
  '/',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(postsController.create),
);
router.put(
  '/:id',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(postsController.update),
);
router.delete(
  '/:id',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(postsController.delete),
);

export default router;
