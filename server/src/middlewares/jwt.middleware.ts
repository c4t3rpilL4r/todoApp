import jwt from 'express-jwt';
import { env } from 'src/config/environment';

const authenticate = () => {
  return jwt({
    secret: `${env.JWT_OPTIONS.secretOrKey}`,
    algorithms: ['HS256'],
  });
};

export const jwtMiddleware = { authenticate };
