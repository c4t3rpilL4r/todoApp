import { User } from '@app/models';
import { passwordUtil } from '@app/utils';

const login = async (username: string, password: string) => {
  const salt = await passwordUtil.generateSalt();
  const user = await User.query().findOne({ username });
  const isTheSame = passwordUtil.verify(password, salt, user.password);

  return isTheSame;
};

const changePassword = async (userId: number, newPassword: string) => {
  const changedPassword = await User.query()
    .findOne({ id: userId })
    .patchAndFetch({
      password: newPassword,
    });

  return changedPassword;
};

export const authService = { login, changePassword };
