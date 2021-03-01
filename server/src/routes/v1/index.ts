import { authRouter } from './auth.routes';
import { todoRouter } from './todo.routes';
import { userRouter } from './user.routes';

export const routes = [authRouter, todoRouter, userRouter];
