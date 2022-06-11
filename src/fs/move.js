import { copyFunc } from "./copy.js";
import { remove } from "./delete.js";

export const move = async ( filePath, newDir ) =>
{
	copyFunc( filePath, newDir ).then( () =>
	{
		console.log('move')
		remove( filePath )
	} )

}