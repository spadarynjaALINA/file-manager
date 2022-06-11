import { list } from "./fs/list.js"
import { calculateHash } from "./hash.js"
import { compress } from './zip/compress.js';
import { decompress } from './zip/decompress.js';
import { copyFunc } from './fs/copy.js';
import { move } from './fs/move.js';
import { create } from './fs/create.js'
import { rename } from './fs/rename.js';
import { remove } from "./fs/delete.js";
import { osFunc } from './os.js';
import { toCd, toUp } from "./up.js";
import { read } from "./fs/read.js";
export const comObj = {
	up: toUp,
	cd: toCd,
	ls: list,
	cat: read,
	add: create,
	rn: rename,
 cp:copyFunc,
 mv:move,
 rm:remove,
 os: osFunc,
	hash: calculateHash,
	compress: compress,
	decompress: decompress,
	'.exit': true,
	'exit': true,
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
// rm D:\NODEJS\file-manager\file.txt