import { unlink } from 'node:fs';
import * as fs from 'fs';



export const remove = async (filePath) =>
{

const errorMsg = new Error('FS operation failed delete');
    fs.access( filePath, ( err ) =>
    {
        if ( err ) { console.error( errorMsg.message ) }
        else
        {
            fs.unlink( filePath, ( err ) =>
            {
            if ( err ) { console.error( errorMsg.message ) }
        })}
  })
};
