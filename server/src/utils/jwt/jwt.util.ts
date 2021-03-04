import { env } from 'src/config/environment';
import jwt from 'jsonwebtoken';

const sign = (payload: {}) => {
  const secretKey = `${env.JWT_OPTIONS.secretOrKey}`;

  const token = jwt.sign(payload, secretKey);

  return token;
};

export const jwtUtil = { sign };
