import jwt from 'express-jwt';
import { env } from 'src/config/environment';

const createToken = async () => {
  return jwt({
    secret: `${env.JWT_OPTIONS.secretOrKey}`,
    algorithms: ['HS256'],
  }).unless({ path: ['/users/register'] });
};

export const jwtUtil = { createToken };
