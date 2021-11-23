import { Request, Response } from 'express';

const notFound = (req: Request, res: Response): void => {
  res.status(404).sendFile('FrontEnd/index.html', { root: __dirname });
};
const homePage = (req: Request, res: Response): void => {
  res.send('Welcome to Image Processing API');
};
export { notFound, homePage };
