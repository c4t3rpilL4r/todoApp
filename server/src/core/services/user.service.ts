import { IUpsertUser } from '@app/interfaces';
import { User } from '@app/models';

const register = async (user: IUpsertUser) => {
  const registeredUser = await User.query().insert(user);

  return registeredUser;
};

const getPaginated = async (page: number, limit: number) => {
  const users = await User.query().page(page, limit);

  return users;
};

const getById = async (userId: number) => {
  const user = await User.query().findById(userId);

  return user;
};

const update = async (user: IUpsertUser) => {
  const updatedUser = await User.query().patchAndFetchById(user.id!, user);

  return updatedUser;
};

const deleteById = async (userId: number) => {
  const deletedUser = await User.query().deleteById(userId);

  return !!deletedUser;
};

const changePassword = async (user: IUpsertUser) => {
  const changedPassword = await User.query()
    .findOne({ username: user.username })
    .patchAndFetch({
      password: user.password,
    });

  return changedPassword;
};

export const userService = {
  register,
  getPaginated,
  getById,
  update,
  deleteById,
  changePassword,
};
