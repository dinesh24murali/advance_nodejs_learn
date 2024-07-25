const fs = require("fs");

// Create a readable stream
const readableStream = fs.createReadStream("source.txt");

// Create a writable stream
const writableStream = fs.createWriteStream("destination.txt");

// Pipe the readable stream into the writable stream
readableStream.pipe(writableStream);

// Handle the 'finish' event to know when piping is complete
writableStream.on("finish", () => {
  console.log("Piping finished.");
});
