
// hash ..\..\Users\bbk\Desktop\task.txt
// hash C:\Users\bbk\Desktop\task.txt
// hash D:\file.txt
// hash D:\NODEJS\file-manager\file.txt
// GEt-FileHash D:\file.txt
import fs from 'fs'
import { newPath } from './utils/path.js'
import { cwd } from 'process'
const errMsg = new Error( 'Operation failed\n' )

export const calculateHash = async (file) =>
{const filename = newPath( file )
  try
  {

    const { createHash } = await import('crypto');
    const hash = createHash('sha256');
    const input = fs.createReadStream( filename );

    input.on('readable', () => {
      const data = input.read();
      if (data)
      hash.update(data);
      else
      {
       console.log(`${hash.digest('hex')}\n You are currently in ${cwd()}`);
      }
    } );
    input.on('error',()=>{console.log( errMsg.message,`\nYou are currently in ${cwd()}\n` )})
  } catch (e)
  {
    console.error( errMsg.message)
  }
};
