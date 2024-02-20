import express, { Request, Response } from 'express';
import exampleRouter from '@/example/exampleRouter';

const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

exampleRouter(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
