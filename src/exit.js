import process from 'process'
export const out = async (userName) =>
{
	process.stdout.write( `Thank you for using File Manager, ${userName}!` )
	process.exit(0)
		}