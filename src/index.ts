import express from 'express';
import image from './image';
import {notFound,homePage} from './app'
const app = express();
const port = 3000;

app.get('/',homePage);
app.get('/api/images', image);
app.use(notFound);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
