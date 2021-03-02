import 'tsconfig-paths/register';
import express, { Request, Response, NextFunction } from 'express';
import knex from './src/db_pg/knex-config';
import { ICustomError } from '@app/interfaces';
import { initRoutes } from './src/routes/index';
import { corsMiddleware } from '@app/middlewares';

const app = express();
const port = 3000;

const startApp = async () => {
  await Promise.all([
    (async () => {
      try {
        await knex.raw('SELECT 1+1 as result');
        // tslint:disable-next-line: no-console
        console.info('[OK] PG DB');
      } catch (err) {
        // tslint:disable-next-line: no-console
        console.error('[FAIL] PG DB');
        // tslint:disable-next-line: no-console
        console.error(err);
        return Promise.reject(err);
      }
    })(),
  ]);

  app.use(express.json());
  app.use(corsMiddleware());

  initRoutes(app);

  app.use(
    (err: ICustomError, req: Request, res: Response, next: NextFunction) => {
      res.status(err.statusCode).send({ message: err.message });
    },
  );

  app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.info(`Server is up at port ${port}.`);
  });
};

startApp();
