import { chdir, cwd } from 'process';
import { newPath } from '../src/utils/path.js';
const errMsg = new Error( 'Operation failed' )

export const toUp = () =>
{
	try
	{
		if ( cwd().length > 3 ) { chdir( ".." ) }
		process.stdout.write( `\n You are currently in ${cwd()}\n` )
	}catch ( e )
	{
   console.log( errMsg.message,`\nYou are currently in ${cwd()}\n` )
	 }
}

export const toCd =(path) =>
{
	const newPath2 = newPath( path )
	try
	{
		chdir( newPath2 )
		process.stdout.write( `\n You are currently in ${cwd()}\n` )
	} catch ( e )
	{
    console.error( errMsg.message )
  }

}