// compress D:\NODEJS\file-manager\test.txt D:\NODEJS\file-manager\test.txt.br
// if your file includes space, write it with " ' " : 'your file.txt'

import fs from 'fs';
import zlib  from 'zlib';
import { cwd } from 'process';
import { newPath } from '../utils/path.js';
import { access } from 'fs';
import { argsTransform } from '../utils/fileWithSpace.js';
const errorMsg = new Error( 'Operation failed' );

export const compress = async (...args ) =>
{
     const argsArr = args.some(item=> item.includes('\'')) ? argsTransform(args) : args
    const [source, zip] =  argsArr
    const file = newPath( source.trim() );
    const destination = newPath( zip.trim() );

    access( file, (err) => {
        if ( err )
        {
            console.error( errorMsg.message,`You are currently in ${cwd()}\n`);
        } else
        {
             const input = fs.createReadStream( file, 'utf-8' );
        const output = fs.createWriteStream( destination );
        const brotli = zlib.createBrotliCompress().on('error',()=>{console.log(errorMsg.message)});
       input.pipe( brotli ).pipe( output ).on( 'finish', () =>
    {
        process.stdout.write( 'compressed\n' )
        process.stdout.write( `You are currently in ${cwd()}\n` )
       } ).on( 'error', (e) =>
       {
           console.log( errorMsg.message, e );
           process.stdout.write( `You are currently in ${cwd()}\n` )
       } )
        }
  } )
}
