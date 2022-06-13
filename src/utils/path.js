import path from 'path'
import {cwd} from 'process'
export const newPath = ( file) =>
{ return path.isAbsolute(file)?path.resolve(cwd(),file):path.join(cwd(),file)}