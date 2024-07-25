const zlib = require('zlib');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('input.txt.gz');

input.pipe(zlib.createGzip()).pipe(output);
