import { authService } from '@app/services';
import { passwordUtil } from '@app/utils';
import { RequestHandler } from 'express';

const login: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;
  authService.login(username, password).then((token) => {
    if (!token) {
      next(404);
    }

    res.send({ token });
  });
};

const isAuthenticated: RequestHandler = async (req, res) => {
  req.user
    ? res.send({ isAuthenticated: true })
    : res.status(401).send({ isAuthenticated: false });
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

export const authController = { login, isAuthenticated, changePassword };
