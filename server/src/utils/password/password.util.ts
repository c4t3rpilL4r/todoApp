import bcrypt from 'bcrypt';

const ROUNDS = 10;

const verify = async (
  password: string,
  salt: string,
  registeredPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password + salt, registeredPassword);
};

const generateSalt = async (): Promise<string> => {
  return await bcrypt.genSalt(ROUNDS);
};

const generateHash = async (
  password: string,
  salt: string,
): Promise<string> => {
  return await bcrypt.hash(password + salt, ROUNDS);
};

export const passwordUtil = { verify, generateSalt, generateHash };
