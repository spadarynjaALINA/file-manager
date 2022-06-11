import * as fs from 'fs';
import { cwd } from 'process';
import { access, constants } from 'node:fs';
import { newPath } from '../utils/path.js';
const errorMsg = new Error( 'Operation failed\n' );
export const create = async (fileName) =>
{
  try
  {
   const file = newPath( fileName )
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
  console.error(errorMsg.message)
}


};