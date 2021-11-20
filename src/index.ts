import express from 'express';
import image from './image'
const app=express();
const port=3000;

app.get('/',(req, res) => {res.send('Welcome to Image Processing API')})
app.get('/api/images',image)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

export default app