// decompress D:\NODEJS\file-manager\test.txt.br D:\NODEJS\file-manager\test.txt

import fs from 'fs';
import zlib  from 'zlib';
import { cwd } from 'process';
import { newPath } from '../utils/path.js';
import { access } from 'fs';
const errorMsg = new Error( 'Operation failed' );
export const decompress = async (zip, source ) =>
{
    try
    {
    const file = newPath(zip);
    const destination = newPath( source )
    console.log( file,',', destination )
    access( file, (err) => {
        if ( err )
        {
            console.error( errorMsg.message, `\nYou are currently in ${cwd()}\n`);

        } else
        {
        const input = fs.createReadStream(file );
        const output = fs.createWriteStream( destination );
        const brotli = zlib.createBrotliDecompress();
       input.pipe( brotli ).pipe( output ).on( 'finish', () =>
    {
        process.stdout.write( 'decompressed\n' )
        process.stdout.write( `You are currently in ${cwd()}\n` )
       } ).on( 'error', () =>
       {
           console.log( errorMsg.message,`\nYou are currently in ${cwd()}\n` )

       } )
        }
  } )

} catch (error) {
    console.log( error )
}

}
