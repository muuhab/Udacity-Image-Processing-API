import { Request, Response } from 'express';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const image = async (req: Request, res: Response): Promise<void> => {
  const width = req.query.width
    ? parseInt(req.query.width as string)
    : undefined;
  const height = req.query.height
    ? parseInt(req.query.height as string)
    : undefined;
  const filename = req.query.filename;

  try {
    await sharp(`./images/${filename}.jpg`)
      .resize({ width: width, height: height })
      .toBuffer()
      .then((data) => fs.writeFile(`output/${filename}.jpg`, data))
      .then(() =>
        res.sendFile(`${filename}.jpg`, {
          root: path.join(__dirname, '../output'),
        })
      );
  } catch (error) {
    res.status(404).sendFile('FrontEnd/index.html', { root: __dirname });
  }
};

export default image;
