import path from 'path';
import fs from 'fs'

const getExtention=(filename:string):string=> {
const files = fs.readdirSync(path.join(__dirname, '../../images'));

  let ext=files.find(function (file) {
    // console.log(`File name: ${file} | Extension type: ${path.extname(file)}`);
    return file.split('.').slice(0, -1).join('.')===filename
  });
  return path.extname(ext as string)
}

export default getExtention