const { pipeline } = require('node:stream/promises');
const fs = require('node:fs');
const zlib = require('node:zlib');

async function run() {
  await pipeline(
    fs.createReadStream('source.txt'),
    zlib.createGzip(),
    fs.createWriteStream('source.txt.gz'),
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);