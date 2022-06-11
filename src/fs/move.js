import { copyFunc } from "./copy.js";
import { remove } from "./delete.js";
import fs from 'fs';
import { cwd } from 'process';
import { newPath } from '../utils/path.js';
import { access } from 'fs';
import path from 'path';

const errorMsg = new Error( 'Operation failed\n' );
export const move = async (com, source, d ) =>
{
	// try {
	// copyFunc( filePath, newDir ).then( () =>
	// {
	// 	console.log('move')
	// 	remove( filePath )
	// } )
	// } catch (error) {
	// 	console.error( errorMsg.message, 'from move')
	// }
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
            console.error( errorMsg.message,`You are currently in ${cwd()}\n`,err);
        } else
        {
             const input = fs.createReadStream( file, 'utf-8' );
        const output = fs.createWriteStream( destination );

       input.pipe( output ).on( 'finish', () =>
    {

fs.unlink( file, ( err ) =>
            {
                if ( err ) { console.error( errorMsg.message ) } else
                {
                    process.stdout.write( 'moved\n' );
                    process.stdout.write( `You are currently in ${cwd()}\n` )
                }
            } )
       } ).on( 'error', () =>
       {
           console.log( errorMsg.message);
           process.stdout.write( `You are currently in ${cwd()}\n` )
       } )
        }
  } )} catch (error) {
		 console.log( errorMsg.message );
           process.stdout.write( `You are currently in ${cwd()}\n` )
	}

}