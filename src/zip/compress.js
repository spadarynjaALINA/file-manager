// compress D:\NODEJS\file-manager\test.txt D:\NODEJS\file-manager\test.txt.br

import fs from 'fs';
import zlib  from 'zlib';
import { cwd } from 'process';
import { newPath } from '../utils/path.js';
import { access } from 'fs';
const errorMsg = new Error( 'Operation failed' );

export const compress = async (source, zip ) =>
{
    const file = newPath( source );
    const destination = newPath( zip )
    console.log( file,',', destination )

    access( file, (err) => {
        if ( err )
        {
            console.error( errorMsg.message,`You are currently in ${cwd()}\n`);
        } else
        {
             const input = fs.createReadStream( file, 'utf-8' );
        const output = fs.createWriteStream( destination );
        const brotli = zlib.createBrotliCompress();
       input.pipe( brotli ).pipe( output ).on( 'finish', () =>
    {
        process.stdout.write( 'compressed\n' )
        process.stdout.write( `You are currently in ${cwd()}\n` )
       } ).on( 'error', () =>
       {
           console.log( errorMsg.message );
           process.stdout.write( `You are currently in ${cwd()}\n` )
       } )
        }
  } )
}
