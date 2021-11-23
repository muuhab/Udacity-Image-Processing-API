import path from 'path';
import fs from 'fs';

const getExtention = (filename: string): string => {
  const files = fs.readdirSync(path.join(__dirname, '../../images'));

  const ext = files.find(function (file) {
    return file.split('.').slice(0, -1).join('.') === filename;
  });
  if (ext)
    return path
      .extname(ext as string)
      .split('.')
      .join('');
  else return '';
  // return path.extname(ext as string)
};

export default getExtention;
