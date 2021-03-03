import express from 'express';
import { asyncHandler } from '@app/utils';
import { todoController } from '@app/controllers';

const router = express.Router();

router.post('/todos', asyncHandler(todoController.create));

router.get('/todos', asyncHandler(todoController.getPaginated));

router.put('/todos/:todoId', asyncHandler(todoController.update));

router.delete('/todos/:todoId', asyncHandler(todoController.deleteById));

export const todoRouter = router;
