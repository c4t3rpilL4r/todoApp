import express from 'express';
import { asyncHandler } from '@app/utils';
import { todoController } from '@app/controllers';

const router = express.Router();

router.post('/todo', asyncHandler(todoController.create));

export const todoRouter = router;
