# [Understanding process.nextTick()](https://nodejs.org/en/learn/asynchronous-work/understanding-processnexttick#understanding-processnexttick)

Every time the event loop takes a full trip, we call it a tick. When we pass a function to process.nextTick(), we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:

```js
process.nextTick(() => {
  // do something
});
```

The event loop is busy processing the current function code. When this operation ends, the JS engine runs all the functions passed to nextTick calls during that operation.

It's the way we can tell the JS engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.

Calling setTimeout(() => {}, 0) will execute the function at the end of next tick, much later than when using nextTick() which prioritizes the call and executes it just before the beginning of the next tick.

Use nextTick() when you want to make sure that in the next event loop iteration that code is already executed.

## An Example of the order of events:

```js
console.log('Hello => number 1');

setImmediate(() => {
  console.log('Running before the timeout => number 3');
});

setTimeout(() => {
  console.log('The timeout running last => number 4');
}, 0);

process.nextTick(() => {
  console.log('Running at next tick => number 2');
});
```

Example output:

```bash
Hello => number 1
Running at next tick => number 2
Running before the timeout => number 3
The timeout running last => number 4
```
The exact output may differ from run to run.

# Things to watchout for with using `nextTick()` function

Using `nextTick()` function too much or in the wrong way has its own side effects. Since `nextTick()` function gets called immidiately after the current function, this will block any code that needs to execute next. This can be any code like I/O operation, esponse to a HTTP request or, say, user interaction with the GUI.

Use `nextTick()` function when you know that the operation you are going to do in the function call will not run for long time.

## Some useful links:

https://stackoverflow.com/questions/16659037/should-i-use-process-nexttick-or-setimmediate-for-asynchronous-iteration

https://github.com/dtao/lazy.js/issues/6