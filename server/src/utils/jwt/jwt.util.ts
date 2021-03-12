import { env } from 'src/config/environment';
import jwt from 'jsonwebtoken';

const sign = (payload: {}) => {
  const secretKey = `${env.JWT_OPTIONS.secretOrKey}`;

  const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

  return token;
};

export const jwtUtil = { sign };
