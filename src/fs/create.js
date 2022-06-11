import * as fs from 'fs';
import path from 'path';
import { access, constants } from 'node:fs';
import { newPath } from '../utils/path';


export const create = async (newFileName) =>
{
  const errorMsg = new Error( 'FS operation failed' );
  const file = newPath(newFileName)
  access( file, constants.F_OK, ( err ) =>
  {

    err? fs.writeFile(path.join('./', newFileName), 'I am fresh and young', (error) => {
    if (error) return console.error(errorMsg.message);
  }): console.error(errorMsg.message)
});

};