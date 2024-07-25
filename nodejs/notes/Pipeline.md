# Pipe & Pipeline

In Node.js, not all streams support the pipe method. The pipe method is a convenience function used to connect readable streams to writable streams, and it is only available on readable streams.

## The pipe Method

The `pipe` method is available on readable streams and is used to connect them to writable or transform streams. Here’s a basic syntax:

```js
readableStream.pipe(writableStream);
```