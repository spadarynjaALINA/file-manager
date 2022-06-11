// rm D:\NODEJS\file-manager\file.txt

import { unlink } from 'node:fs';
import * as fs from 'fs';
import { newPath } from '../utils/path.js';
import process from 'node:process';
import { cwd } from 'node:process';

export const remove = async ( filePath ) =>
{
    try
    {
        const file = newPath( filePath )
        const errorMsg = new Error( 'Operation failed\n' )
        fs.access( file, ( err ) =>
    {
        if ( err ) { console.error( errorMsg.message ) }
        else
        {
            fs.unlink( file, ( err ) =>
            {
                if ( err ) { console.error( errorMsg.message ) } else
                {
                    process.stdout.write( 'removed\n' );
                    process.stdout.write( `You are currently in ${cwd()}\n` )
                }
            } )
        }
    } )
    //
}catch  {
    console.error( errorMsg.message )
}

};
