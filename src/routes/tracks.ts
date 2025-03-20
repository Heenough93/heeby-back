import express from 'express';

import { TracksController } from '../http/controllers/TracksController';
import { ErrorHandler } from '../http/middlewares/ErrorHandler';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';


const tracksController = new TracksController();

const router = express.Router();
router.get(
  '/',
  ErrorHandler.catchErrors(tracksController.getTracks),
);
router.get(
  '/:id',
  ErrorHandler.catchErrors(tracksController.getTrack),
);
router.post(
  '/',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(tracksController.create),
);
router.put(
  '/:id',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(tracksController.update),
);
router.delete(
  '/:id',
  ErrorHandler.catchErrors(AuthMiddleware.authenticate),
  ErrorHandler.catchErrors(AdminMiddleware.check),
  ErrorHandler.catchErrors(tracksController.delete),
);

export default router;
