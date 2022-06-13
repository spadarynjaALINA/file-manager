// add file22.txt
// if your file includes space, write it with " ' " : 'your file.txt'

import * as fs from 'fs';
import { cwd } from 'process';
import path from 'path';
import { access, constants } from 'node:fs';
import { newPath } from '../utils/path.js';
import { argsTransform } from '../utils/fileWithSpace.js';
const errorMsg = new Error( 'Operation failed\n' );
export const create = async (...args) =>
{
  try
  {

    const argsArr = args.some( item => item.includes( '\'' ) ) ? argsTransform( args ) : args
    const [fileName] =  argsArr
    const file = path.join( cwd(), fileName )
   access(file, constants.F_OK, (err) => {
    err? fs.writeFile(file, '', (error) => {
      if ( error )
      {
        return console.error( errorMsg.message );
      }
      console.log( 'created!\n' )
      process.stdout.write( `You are currently in ${cwd()}\n` )
  }): console.error(errorMsg.message)
});
} catch (error) {
  console.error(errorMsg.message, error)
}
};