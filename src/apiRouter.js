import { Router } from 'express';
import bodyParser from 'body-parser';
import cars from './controllers/cars';

export default function () {
  const apiRouter = Router();

  apiRouter.use(bodyParser.json());
  apiRouter.use(bodyParser.urlencoded({ extended: false }));

  cars(apiRouter);

  return apiRouter;
}
