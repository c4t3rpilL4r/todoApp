import express from 'express';
import { asyncHandler } from '@app/utils';
import { todoController } from '@app/controllers';

const router = express.Router();

router.post('/', asyncHandler(todoController.create));

router.get('/', asyncHandler(todoController.getPaginated));

router.put('/:todoId', asyncHandler(todoController.update));

router.delete('/:todoId', asyncHandler(todoController.deleteById));

export const todoRouter = router;
