import { userController } from '@app/controllers';
import { asyncHandler } from '@app/utils';
import express from 'express';

const router = express.Router();

router.post('/register', asyncHandler(userController.register));

export const userRouter = router;
