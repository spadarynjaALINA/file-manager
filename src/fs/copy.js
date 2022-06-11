import fs from 'fs';
import { cwd } from 'process';
import { newPath } from '../utils/path.js';
import { access } from 'fs';
import path from 'path';
const errorMsg = new Error( 'Operation failed\n' );

export const copyFunc = async (source, d ) =>
{
	try {
	const file = newPath( source );
	const index = file.lastIndexOf('\\')
	const fileName = file.slice( index )
	const des = newPath( d )
	const destination = path.join(des,fileName)
console.log(destination, fileName, 'source',source)
    access( file, (err) => {
        if ( err )
        {
            console.error( errorMsg.message,`You are currently in ${cwd()}\n`);
        } else
        {
             const input = fs.createReadStream( file, 'utf-8' );
        const output = fs.createWriteStream( destination );

       input.pipe( output ).on( 'finish', () =>
    {
        process.stdout.write( 'copied\n' )
        process.stdout.write( `You are currently in ${cwd()}\n` )
       } ).on( 'error', (err) =>
       {
           console.log( errorMsg.message, 'from copy2', err );
           process.stdout.write( `You are currently in ${cwd()}\n` )
       } )
        }
  } )} catch (error) {
		 console.log( errorMsg.message, 'from copy3' );
           process.stdout.write( `You are currently in ${cwd()}\n` )
	}
}
