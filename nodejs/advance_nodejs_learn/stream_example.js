const Stream = require("stream");
const readableStream = new Stream.Readable();

readableStream.push("Hello");
readableStream.push(" ");
readableStream.push("World");
readableStream.push(" ");
readableStream.push("Nuke ");
readableStream.push(null);

async function getContentReadStream(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
    console.log(chunk.toString());
  }
}

getContentReadStream(readableStream);
