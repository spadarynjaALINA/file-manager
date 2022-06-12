// rn D:\NODEJS\file-manager\file.txt file1.txt

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
          const file = newPath( fileName );
        const index = file.lastIndexOf( '\\' )

        const newFile = `${file.slice(0, index +1 )}${newFileName}`
         console.log(file, newFile)
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
