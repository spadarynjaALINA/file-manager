// rn D:\NODEJS\file-manager\file.txt D:\NODEJS\file-manager\file1.txt

import * as fs from 'fs';
import path from 'path';
import { newPath } from '../utils/path.js';
import process from 'node:process';
import { cwd } from 'node:process';
import { rename as renameFile } from 'node:fs/promises'
const errorMsg = new Error( 'Operation failed\n' )


export const rename = async (fileName, newFileName) =>
{ console.log(fileName, newFileName)

    try
    {
        console.log(fileName, newFileName)
   fileName=  fileName.includes( '\'' ) ? fileName.slice( 1, fileName.length - 1 ) : fileName;
      newFileName=   newFileName.includes( '\'' ) ? newFileName.slice( 1, newFileName.length - 1 ) : newFileName;
         console.log(fileName, newFileName)
        const file = newPath( fileName );
        const newFile = newPath( newFileName )
        fs.access( newFile , ( err ) =>
  {
     if ( err )
     {
         fs.access( file, ( err ) =>
         {
             if ( err ) { console.error( errorMsg.message ) } else
             {
renameFile(file, newFile, (err) => {
    if ( err )
    {
        console.error( errorMsg.message )
         process.stdout.write( `You are currently in ${cwd()}\n` )
    }

}).then(()=>{ process.stdout.write( `renamed! \n You are currently in ${cwd()}\n`  )})
             }
         })
     } else
             {
         console.error( errorMsg.message )
          process.stdout.write( `You are currently in ${cwd()}\n` )
             }
    })
    } catch (error) {
        console.error( error )
         process.stdout.write( `You are currently in ${cwd()}\n` )
    }

};
