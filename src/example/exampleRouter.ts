import { Router } from 'express';
import { exampleHello } from '@/example/exampleController';
import { Express } from 'express-serve-static-core';

const router = Router();

const exampleRouter = (app: Express) => {
  router.get('/hello', exampleHello);
  app.use('/example', router);
};

export default exampleRouter;
