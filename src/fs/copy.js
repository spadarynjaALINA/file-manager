// cp 'D:\NODEJS\file-manager\for Copy.txt' 'D:\NODEJS\file-manager\src'
// if your file includes space, write it with " ' " : 'your file.txt'

import fs from 'fs';
import { cwd } from 'process';
import { newPath } from '../utils/path.js';
import { access } from 'fs';
import path from 'path';
import { argsTransform } from '../utils/fileWithSpace.js';
const errorMsg = new Error( 'Operation failed\n' );

export const copyFunc = async (...args ) =>
{
    try
    {
    const argsArr = args.some(item=> item.includes('\'')) ? argsTransform(args) : args
    const [source,d] =  argsArr
	const file = newPath( source.trim() );
	const index = file.lastIndexOf('\\')
	const fileName = file.slice( index )
	const des = newPath( d.trim() )
	const destination = path.join(des,fileName)
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
           console.log( errorMsg.message);
           process.stdout.write( `You are currently in ${cwd()}\n` )
       } )
        }
  } )} catch (error) {
		 console.log( errorMsg.message, error);
           process.stdout.write( `You are currently in ${cwd()}\n` )
	}
}
