import { Request, Response } from 'express';

export const exampleHello = (req: Request, res: Response) => {
  res.send('Hello!');
};
