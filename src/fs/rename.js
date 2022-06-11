import * as fs from 'fs';
import path from 'path';

import { rename as renameFile } from 'node:fs/promises'



export const rename = async (file, newFile) =>
{
	const errorMsg = new Error('FS operation rename failed');
 fs.access( newFile , ( err ) =>
  {
     if ( err )
     {
         fs.access( file, ( err ) =>
         {
             if ( err ) { console.error( errorMsg.message ) } else
             {
renameFile(file, newFile, (err) => {
  if (err) console.error( errorMsg.message )
});
             }
         })
     } else
             {
                 console.error( errorMsg.message )
             }
    })
};
