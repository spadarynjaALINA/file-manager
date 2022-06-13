// rm D:\NODEJS\file-manager\file.txt
// if your file includes space, write it with " ' " : 'your file.txt'

import { unlink } from 'node:fs';
import * as fs from 'fs';
import { newPath } from '../utils/path.js';
import process from 'node:process';
import { cwd } from 'node:process';
import { argsTransform } from '../utils/fileWithSpace.js';

export const remove = async ( ...args) =>
{
    try
    {
        const argsArr = args.some( item => item.includes( '\'' ) ) ? argsTransform( args ) : args
        const [filePath ] =  argsArr
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
  }catch (e) {
    console.error( errorMsg.message, e )
}
};
