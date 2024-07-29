# What is High Water Mark

When data is being transferred between two node or between client and server, NodeJS uses streams. Streams use fixed length packets called buffers. In most cases reading is quicker than writing. Some times the amount of data that has been read will start accumulated at the sender side as the received needs time to write the data. The excess data that the sender reads, the data that gets accumulated, is stored in RAM. The sender will reach a point where the accumulated data becomes too big that the NodeJS interpreter will pause reading and wait for the buffer to become empty before starting to read again. The upper limit of memory size that the NodeJS interpreter uses as the fixed value is called the `high water mark`. It is possible to change the high water mark value. You can see the implementation in `waterMark.js` file present in this directory.

These link explains what HighWaterMark and Backpressure

https://nodejs.org/en/learn/modules/backpressuring-in-streams#lifecycle-of-pipe

https://stackoverflow.com/questions/35801568/stream-highwatermark-misunderstanding

https://www.geeksforgeeks.org/node-js-stream-writable-writablehighwatermark-property/
