import { IUpsertUser } from '@app/interfaces';
import { userService } from '@app/services';
import { passwordUtil } from '@app/utils';
import { RequestHandler } from 'express';

const register: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  const salt = await passwordUtil.generateSalt();
  const hashedPassword = await passwordUtil.generateHash(password, salt);

  const userDetails: IUpsertUser = {
    username,
    password: hashedPassword,
  };
  const newUser = await userService.register(userDetails);

  return !!newUser;
};

const getPaginated: RequestHandler = async (req, res) => {
  const { page, limit } = req.query as any;
  const users = await userService.getPaginated(page, limit);

  res.status(200).send(users);
};

const getById: RequestHandler = async (req, res) => {
  const userId = +req.params.userId;
  const user = await userService.getById(userId);

  res.status(200).send(user);
};

export const userController = {
  register,
  getPaginated,
  getById,
};
