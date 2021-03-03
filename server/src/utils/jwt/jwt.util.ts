import jwt from 'express-jwt';
import { env } from 'src/config/environment';

const createToken = () => {
  const token = jwt({
    secret: `${env.JWT_OPTIONS.secretOrKey}`,
    algorithms: ['HS256'],
  }).unless({ path: ['/users/register'] });

  return token;
};

export const jwtUtil = { createToken };
