import { IJwtPayload } from '@app/interfaces';
import { User } from '@app/models';
import { jwtUtil, passwordUtil } from '@app/utils';

const login = async (username: string, password: string) => {
  const salt = await passwordUtil.generateSalt();
  const user = await User.query().findOne({ username });
  const isAuthenticated = passwordUtil.verify(password, salt, user.password);

  if (!isAuthenticated) {
    return;
  }

  const payload: IJwtPayload = {
    userId: user.id,
  };

  const token = jwtUtil.sign(payload);

  return token;
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
