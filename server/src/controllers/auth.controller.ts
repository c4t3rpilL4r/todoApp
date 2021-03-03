import { authService } from '@app/services';
import { jwtUtil, passwordUtil } from '@app/utils';
import { RequestHandler } from 'express';

const login: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;
  const isAuthenticated = authService.login(username, password);

  if (!isAuthenticated) {
    next(404);
  }

  const token = jwtUtil.createToken();
  console.log(token);

  res.status(200).json({ token });
};

const changePassword: RequestHandler = async (req, res) => {
  const { userId } = req.query as any;
  const { newPassword } = req.body;
  const salt = await passwordUtil.generateSalt();
  const hashedPassword = await passwordUtil.generateHash(newPassword, salt);

  const changedPassword = await authService.changePassword(
    userId,
    hashedPassword,
  );

  res.status(200).send(changedPassword);
};

export const authController = { login, changePassword };
