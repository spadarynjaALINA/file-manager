import * as fs from 'fs';
import * as path from 'path';
import { cwd } from 'process';

export const cat = async (fileName) => {
  try {
    let newPath;
    if (path.isAbsolute(fileName)) {
      newPath = path.resolve(cwd(), fileName);
    } else {
      newPath = path.join(cwd(), fileName);
    }
    const readableStream = fs.createReadStream(newPath, 'utf8');
    readableStream.on('error', function (error) {
    console.log(`error: ${error.message}`);
  })
    readableStream.on('data', data => process.stdout.write(data));
    console.log(`${cwd()}\\`);
  }
  catch (err) {
    console.log('Operation failed');
  }
};
cat('file.txt')