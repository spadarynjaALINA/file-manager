export const argsTransform = (argsArr) =>
{
	const newArgs = argsArr.join().split( '\'' ).filter( i => i.length > 0 && i !== ',' ).map( i => i.replaceAll( ',', ' ' ) )
	return newArgs
}