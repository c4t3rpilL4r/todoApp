import { authService } from '@app/services';
import { jwtUtil } from '@app/utils';
import { RequestHandler } from 'express';

const login: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;
  const isAuthenticated = authService.login(username, password);

  if (!isAuthenticated) {
    next(404);
  }

  const token = jwtUtil.createToken();

  return res.json({ token });
};

export const authController = { login };
