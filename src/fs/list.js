// ls

import * as fs from 'fs';
import path from 'path';
import { cwd } from 'process';

const errorMsg = new Error('Operation failed');
const arrNames =[]
export const list = async () =>
{
 fs.readdir('./', { withFileTypes: true }, function (err, items) {
   if ( err )
   {
     console.error( errorMsg.message );
   } else
   {
     items.forEach( function ( item )
     {
    let name = path.parse(item.name).name;
arrNames.push(name)

  } );
     console.log( arrNames )
     console.log( `You are currently in ${cwd()}` )
   }
});
};
