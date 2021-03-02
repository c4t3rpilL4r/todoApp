import { User } from '@app/models';
import { passwordUtil } from '@app/utils';

const login = async (username: string, password: string) => {
  const salt = await passwordUtil.generateSalt();
  const user = await User.query().findOne({ username });
  const isTheSame = passwordUtil.verify(password, salt, user.password);

  return isTheSame;
};

export const authService = { login };
