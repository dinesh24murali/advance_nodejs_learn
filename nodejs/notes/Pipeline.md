# Pipe & Pipeline

In Node.js, not all streams support the pipe method. The pipe method is a convenience function used to connect readable streams to writable streams, and it is only available on readable streams.

## The pipe Method

The `pipe` method is available on readable streams and is used to connect them to writable or transform streams. Here’s a basic syntax:

```js
readableStream.pipe(writableStream);
```

## Pipeline

In the above example, we use `.pipe()` to get the data source from one end to the other. However, notice there are no proper error handlers attached. If a chunk of data were to fail to be properly received, the Readable source will not be destroyed. pump is a utility tool that would properly destroy all the streams in a pipeline if one of them fails or closes.

```js
const { pipeline } = require('node:stream');
const fs = require('node:fs');
const zlib = require('node:zlib');

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.
// A pipeline to gzip a potentially huge video file efficiently:

pipeline(
  fs.createReadStream('The.Matrix.1080p.mkv'),
  zlib.createGzip(),
  fs.createWriteStream('The.Matrix.1080p.mkv.gz'),
  err => {
    if (err) {
      console.error('Pipeline failed', err);
    } else {
      console.log('Pipeline succeeded');
    }
  }
);
```
