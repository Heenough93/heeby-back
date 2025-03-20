import express from 'express';

import { UsersController } from '../http/controllers/UsersController';
import { ErrorHandler } from '../http/middlewares/ErrorHandler';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';


const usersController = new UsersController();

const router = express.Router();
router.get(
    '/with-posts',
    ErrorHandler.catchErrors(AuthMiddleware.authenticate),
    ErrorHandler.catchErrors(AdminMiddleware.check),
    ErrorHandler.catchErrors(usersController.getUsersWithPosts),
);
router.get(
  '/',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(usersController.getUsers),
);
router.get(
  '/:id',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(usersController.getUser),
);
router.post(
  '/',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(usersController.create),
);
router.put(
  '/:id',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(usersController.update),
);
router.delete(
  '/:id',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(usersController.delete),
);

export default router;
