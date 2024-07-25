const zlib = require('zlib');
const fs = require('fs');

const input = fs.createReadStream('input.txt.gz');
const output = fs.createWriteStream('input2.txt');

input.pipe(zlib.createGunzip()).pipe(output);
