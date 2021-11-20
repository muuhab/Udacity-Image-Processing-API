import { Request,Response } from "express"
import sharp from 'sharp'
import {promises as fs} from 'fs';
import path from 'path';

const image=async (req:Request, res:Response):Promise<void>=>{
const{filename,width,height} =req.query;
    try {
       
        await sharp(`./images/${filename}.jpg`)
        .resize(parseInt(width as string),parseInt(height as string)).toBuffer()
        .then((data)=> fs.writeFile(`output/${filename}.jpg`,data))
        .then(()=> res.sendFile(`${filename}.jpg`, { root: path.join(__dirname, '../output') }))
    } catch (error) {
        console.log(error)
    }
}

export default image;