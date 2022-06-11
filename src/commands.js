import { list } from "./fs/list.js"
import { calculateHash } from "./hash.js"
import { compress } from './zip/compress.js';
import { decompress } from './zip/decompress.js';
import { copyFunc } from './fs/copy.js';
import { move } from './fs/move.js';
import { create } from './fs/create.js'
import { rename } from './fs/rename.js';
import { osFunc } from './os.js';
import process from 'process'
import { toCd, toUp } from "./up.js";
import { read } from "./fs/read.js";
export const comObj = {
	hash: calculateHash,
os: osFunc,
	ls: list,
	'.exit': true,
	'exit': true,
	up: toUp,
	cd: toCd,
	compress: compress,
	decompress: decompress,
cat:read
}

// os --EOL
// os--cpus
// os--homedir
// os--username
// os --architecture
// compress D:\NODEJS\file-manager\test.txt D:\NODEJS\file-manager\src\zip\test.txt.br
// decompress D:\NODEJS\file-manager\src\zip\test.txt.br D:\NODEJS\file-manager\test.txt
// hash D:\NODEJS\file-manager\file.txt
// cat D:\NODEJS\file-manager\file.txt