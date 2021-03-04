import { authController } from '@app/controllers';
import { jwtMiddleware } from '@app/middlewares';
import { asyncHandler } from '@app/utils';
import express from 'express';

const router = express.Router();

router.post('/login', asyncHandler(authController.login));

router.get(
  '/isAuthenticated',
  jwtMiddleware.authenticate(),
  asyncHandler(authController.isAuthenticated),
);

router.put(
  '/changePassword/:userId',
  jwtMiddleware.authenticate(),
  asyncHandler(authController.changePassword),
);

export const authRouter = router;
