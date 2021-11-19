import express from 'express';
import {promises as fs} from 'fs';

const app=express();
const port=3000;

const sharp = require('sharp');




app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})