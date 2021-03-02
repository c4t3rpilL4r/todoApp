import cors from 'cors';

export const corsMiddleware = () => {
  const whitelist = [/localhost:4200$/];

  const corsOptions = {
    origin: whitelist,
  };

  return cors(corsOptions);
};
