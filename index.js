import path from 'path';
import os, { homedir } from 'os';
import { chdir } from 'process';
import { cwd } from 'process';
import { out } from './src/exit.js';
import { comObj } from './src/commands.js';
import { access } from 'fs';
export const index = async () =>
{
	const home = os.homedir()
	chdir( home )
	const username = process.argv[2].split( '' ).slice( 11 ).join( '' )
	const Username =username[0].toUpperCase() +username.substring(1)

	process.stdout.write( `Welcome to the File Manager, ${Username}!\n` )
	process.stdout.write( `You are currently in ${cwd()}\n` )
	process.stdin.on( 'data', async ( chunk ) =>
	{
		const [command, ...args] = chunk.toString().trim().split( ' ' );
if (!!comObj[command] )
{
await	comObj[command]( ...args)
		} else
		{
			process.stdout.write( 'Invalid input\n' )
		}
	} )
		 process.on( 'exit', () =>out(Username) )
	 process.on('SIGINT', () => process.exit());
}
index()