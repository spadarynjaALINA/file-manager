// cat D:\NODEJS\file-manager\file.txt
// if your file includes space, write it with " ' " : 'your file.txt'

import * as fs from 'fs';
import * as path from 'path';
import { cwd } from 'process';
import { newPath } from '../utils/path.js';
import { argsTransform } from '../utils/fileWithSpace.js';
const errMsg = new Error( 'Operation failed\n' )

export const read = async (...args) => {
	try
	{
			 const argsArr = args.some(item=> item.includes('\'')) ? argsTransform(args) : args
    const [fileName] =  argsArr
			const file = newPath( fileName )
			let data = '';
			fs.createReadStream( file, 'utf8' )
				.on( 'data', ( chunk ) => ( data += chunk ) )
				.on( 'end', () =>
				{
					process.stdout.write( data );
					 process.stdout.write( `\nYou are currently in ${cwd()}\n` )
				} )
				.on( 'error', () => process.stdout.write( errMsg.message ) );

  }
  catch (err) {
    console.error(errMsg.message)
  }
};
