import { authController } from '@app/controllers';
import { asyncHandler } from '@app/utils';
import express from 'express';

const router = express.Router();

router.post('/login', asyncHandler(authController.login));

router.put(
  '/changePassword/:userId',
  asyncHandler(authController.changePassword),
);

export const authRouter = router;
