import express, { Request, Response } from 'express';
import image from './image';
const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Image Processing API');
});
app.get('/api/images', image);
app.use((req: Request, res: Response) => {
  res.status(404).sendFile('FrontEnd/index.html', { root: __dirname });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
