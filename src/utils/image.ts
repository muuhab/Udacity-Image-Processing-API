import { Request, Response } from 'express';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import path from 'path';
import getExtention from './helper';
import NodeCache from 'node-cache';

const myCache = new NodeCache();

const image = async (req: Request, res: Response): Promise<number> => {
  let statusCode = 200;
  const width = req.query.width
    ? parseInt(req.query.width as string)
    : undefined;
  const height = req.query.height
    ? parseInt(req.query.height as string)
    : undefined;
  const filename = req.query.filename;
  const ext = getExtention(filename as string);
  const cachedImage = myCache.get(`${filename}-${width}x${height}.${ext}`);

  try {
    if (cachedImage !== undefined) {
      res.end(cachedImage);
    } else {
      await sharp(`./images/${filename}.${ext}`)
        .resize({ width: width, height: height })
        .toBuffer()
        .then(async (data) => {
          await fsPromises.writeFile(
            `output/${filename}-${width}x${height}.${ext}`,
            data
          );
          myCache.set(`${filename}-${width}x${height}.${ext}`, data);
        })
        .then(() =>
          res.sendFile(
            path.resolve(`output/${filename}-${width}x${height}.${ext}`)
          )
        );
    }
  } catch (error) {
    statusCode = 404;
    res.status(404).sendFile(path.resolve('src/FrontEnd/index.html'));
  }
  return statusCode;
};

export default image;
