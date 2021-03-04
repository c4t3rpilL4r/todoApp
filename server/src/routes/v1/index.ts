import { jwtMiddleware } from '@app/middlewares';
import { todoRouter } from './todo.routes';
import { authRouter } from './auth.routes';
import { userRouter } from './user.routes';
import { Express } from 'express';

export const initRoutes = (app: Express) => {
  app.use('/v1/auth', authRouter);

  app.use('/v1/users', userRouter);

  app.use('/v1/todos', jwtMiddleware.authenticate(), todoRouter);
};
