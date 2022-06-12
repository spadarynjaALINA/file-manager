// rn D:\NODEJS\file-manager\file.txt file1.txt
// if your file includes space, write it with " ' " : 'your file.txt'

import * as fs from 'fs';
import { newPath } from '../utils/path.js';
import process from 'node:process';
import { cwd } from 'node:process';
import { rename as renameFile } from 'node:fs/promises';
import { argsTransform } from '../utils/fileWithSpace.js';

export const rename = async (...args) =>
     {

const errorMsg = new Error( 'Operation failed\n' )
    try
    {
        const argsArr = args.some( item => item.includes( '\'' ) ) ? argsTransform( args ) : args;
        const [fileName, newFileName] = argsArr;
        const file = newPath( fileName.trim() );
        const index = file.lastIndexOf( '\\' );

        const newFile = `${file.slice( 0, index + 1 )}${newFileName}`;
        console.log( file, newFile );
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
         console.error( errorMsg.message)
          process.stdout.write( `You are currently in ${cwd()}\n` )
             }
    })
    } catch (error) {
        console.error( errorMsg.message)
         process.stdout.write( `You are currently in ${cwd()}\n` )
    }

};
