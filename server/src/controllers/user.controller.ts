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
  console.log(newUser);

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

const changePassword: RequestHandler = async (req, res) => {
  const { username, newPassword } = req.body;
  const salt = await passwordUtil.generateSalt();
  const hashedPassword = await passwordUtil.generateHash(newPassword, salt);

  const changePasswordDetails: IUpsertUser = {
    username,
    password: hashedPassword,
  };
  const changedPassword = await userService.changePassword(
    changePasswordDetails,
  );

  res.status(200).send(changePassword);
};

export const userController = {
  register,
  getPaginated,
  getById,
  changePassword,
};
