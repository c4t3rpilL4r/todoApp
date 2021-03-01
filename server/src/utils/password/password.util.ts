import bcrypt from 'bcrypt';

const ROUNDS = 10;

const verify = async (
  enteredPassword: string,
  registeredhashedPassword: string,
  salt: string,
): Promise<boolean> => {
  return await bcrypt.compare(enteredPassword + salt, registeredhashedPassword);
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
