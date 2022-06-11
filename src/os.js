import os from 'os'
import { cwd } from 'process'
const errorMsg = new Error('Operation failed');
export const osFunc = async ( a ) =>
{
	try
	{

		const newArg = a.slice( 2 )

		const newCpus = () =>
		{
			console.log('overall amount of CPUS:',os.cpus().length)
			os.cpus().map( i =>
			{
			console.log(`Model${i.model.trim()}, clock rate: ${i.speed / 1000} GHz`)

		} )
		}

		switch ( newArg )
		{
			case 'homedir': process.stdout.write( os.homedir() );
				break;
			case 'EOL': process.stdout.write( JSON.stringify( os.EOL ) );
				break;
			case 'cpus':newCpus()
				break;
			case 'username': process.stdout.write( os.userInfo().username );
				break;
			case 'architecture': process.stdout.write( os.arch() );
				break;
			default: console.error( errorMsg.message )
		}
		process.stdout.write( `\n You are currently in ${cwd()}\n` )
	} catch ( e )
	{
	console.log( errorMsg.message,`\nYou are currently in ${cwd()}\n` )
	}
	}
// os --EOL
// os --cpus
// os --homedir
// os --username
// os --architecture