import { Request, Response } from 'express';
import sharp from 'sharp';
import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import getExtention from './utils/helper'
const image = async (req: Request, res: Response): Promise<void> => {
  const width = req.query.width
    ? parseInt(req.query.width as string)
    : undefined;
  const height = req.query.height
    ? parseInt(req.query.height as string)
    : undefined;
  const filename = req.query.filename;
  const ext=getExtention(filename as string)
  try {
    if (fs.existsSync(`output/${filename}-${width}x${height}${ext}`)) {
      res.sendFile(`${filename}-${width}x${height}${ext}`, {
        root: path.join(__dirname, '../output'),
      });
    } else {
      await sharp(`./images/${filename}${ext}`)
        .resize({ width: width, height: height })
        .toBuffer()
        .then((data) =>
          fsPromises.writeFile(
            `output/${filename}-${width}x${height}${ext}`,
            data
          )
        )
        .then(() =>
          res.sendFile(`${filename}-${width}x${height}${ext}`, {
            root: path.join(__dirname, '../output'),
          })
        );
    }
  } catch (error) {
    res.status(404).sendFile('FrontEnd/index.html', { root: __dirname });
  }
};

export default image;
