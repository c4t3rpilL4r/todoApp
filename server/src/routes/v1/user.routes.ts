import { userController } from '@app/controllers';
import { asyncHandler } from '@app/utils';
import express from 'express';

const router = express.Router();

router.post('/users', asyncHandler(userController.register));

export const userRouter = router;
