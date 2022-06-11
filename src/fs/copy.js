import * as fs from 'fs';
import path from 'path';
import { remove } from './delete.js';

export const copyFunc = async (filePath, newDir, move) =>
{
	const index = filePath.lastIndexOf('/')
	const fileName = filePath.slice( index )
 const errorMsg = new Error('FS operation create failed');
  fs.access( filePath, ( err ) =>
  {
			if ( err ) { console.error( errorMsg.message ) }
			else
    {
       fs.access(path.join(  newDir, fileName ), ( err ) =>
      {
								if ( err ) {

									fs.copyFile(  filePath, path.join(  newDir, fileName ), ( err ) =>
									{
										if ( err )
										{ console.error( errorMsg.message ) }
										if( move){remove(filePath)}
									})
									}else {console.error( errorMsg.message)	}
									})
								}
								})
}
