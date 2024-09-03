# Process

The process object in Node.js is a global object that provides information about, and control over, the current Node.js process. It allows you to interact with the environment in which your Node.js application is running. The process object is an instance of the EventEmitter class and is always available without requiring any modules.

Here are some common uses and features of the process object in Node.js:

## 1. Accessing Command-Line Arguments

The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.

```js
// node app.js arg1 arg2
console.log(process.argv); 
// Output: [ 'node', '/path/to/app.js', 'arg1', 'arg2' ]
```

## 2. Environment Variables

The process.env property returns an object containing the user environment variables.

```js
console.log(process.env.NODE_ENV); // Access the NODE_ENV environment variable
```

## 3. Current Working Directory

process.cwd() returns the current working directory of the Node.js process.

```js
console.log(process.cwd()); // Outputs the directory where the Node.js process was started
```

## 4. Exiting the Process

process.exit() allows you to exit the current Node.js process. You can pass an exit code to indicate success (0) or failure (1).

```js
if (someCondition) {
    console.log("Exiting process");
    process.exit(1); // Exits with a failure code
}
```

## 5. Process Information

- process.pid: Returns the process ID of the current Node.js process.
- process.ppid: Returns the parent process ID.
- process.version: Returns the Node.js version as a string.
- process.platform: Returns a string identifying the operating system platform ('linux', 'darwin', 'win32', etc.).
- process.arch: Returns the processor architecture ('x64', 'arm', etc.).

## 6. Standard I/O Streams
- process.stdin: A readable stream for reading input from the terminal.
- process.stdout: A writable stream for writing output to the terminal.
- process.stderr: A writable stream for writing error messages to the terminal.

```js
process.stdout.write('Hello, World!\n');
process.stdin.on('data', (data) => {
    console.log(`You typed: ${data}`);
});
```

## 7. Handling Signals

The process object can listen for signals such as SIGINT (interrupt signal, typically from Ctrl+C) to gracefully shut down the application.

```js
process.on('SIGINT', () => {
    console.log('Received SIGINT. Exiting...');
    process.exit(0);
});
```

## 8. Next Tick

`process.nextTick()` defers the execution of a callback function until the next iteration of the event loop, after the current operation is complete.

```js
process.nextTick(() => {
    console.log('This runs after the current operation is complete');
});
console.log('This runs first');
```

## 9. High-Resolution Time

process.hrtime() returns the current high-resolution real time in a [seconds, nanoseconds] tuple, useful for performance measurements.

```js
const start = process.hrtime();
// Some code execution
const end = process.hrtime(start);
console.log(`Execution time: ${end[0]}s ${end[1] / 1000000}ms`);
```

## 10. Memory Usage

process.memoryUsage() provides an object containing information about the memory usage of the Node.js process.

```js
console.log(process.memoryUsage());
```

## 11. Process Uptime

process.uptime() returns the number of seconds the current Node.js process has been running.

```js
console.log(`Uptime: ${process.uptime()} seconds`);
```

## 12. Process Events

The process object can emit various events, such as exit, uncaughtException, and warning.

```js
process.on('exit', (code) => {
    console.log(`Process exited with code: ${code}`);
});

process.on('uncaughtException', (err) => {
    console.error('Unhandled exception:', err);
    process.exit(1);
});
```

The process object is a powerful tool in Node.js for managing the environment, handling system signals, interacting with standard input/output, and more. It provides essential functionality for building robust and responsive Node.js applications.

# The following are some system signals that NodeJS process can listen to

Node.js can handle and listen to various system signals using the process object. These signals are typically sent to a process by the operating system or other processes to notify it of specific events, such as interrupts, termination requests, or user-defined conditions.

Here’s a list of some common system signals that a Node.js process can handle:

## 1. SIGINT (Interrupt Signal)

Description: This signal is sent when you press Ctrl+C in the terminal. It is commonly used to interrupt or stop a running process.
Usage: You can capture this signal to perform cleanup before the process exits.

```js
process.on('SIGINT', () => {
    console.log('Received SIGINT. Press Control-D to exit.');
    process.exit(0); // Gracefully exit the process
});
```

## 2. SIGTERM (Termination Signal)

Description: This signal is sent to request termination of a process. It’s a way to ask a process to stop gracefully, allowing it to clean up resources before exiting.
Usage: Often used by system administrators or orchestration tools like Kubernetes to shut down processes.

```js
process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Shutting down gracefully...');
    // Perform cleanup
    process.exit(0);
});
```

## 3. SIGUSR1 and SIGUSR2 (User-Defined Signals)

Description: These are user-defined signals that can be used for any custom purpose, such as triggering a specific action in your application.
Usage: You can use these signals to implement custom behavior like reloading configuration files or toggling debugging modes.

```js
process.on('SIGUSR1', () => {
    console.log('Received SIGUSR1. Custom action triggered.');
    // Perform custom action
});

process.on('SIGUSR2', () => {
    console.log('Received SIGUSR2. Another custom action triggered.');
    // Perform another custom action
});
```

## 4. SIGPIPE (Broken Pipe Signal)

Description: This signal is sent when a process tries to write to a pipe that has been closed on the other end. In Node.js, SIGPIPE is ignored by default, but it can be handled explicitly if needed.
Usage: Generally used in applications dealing with low-level stream handling.

```js
process.on('SIGPIPE', () => {
    console.log('Received SIGPIPE. Pipe was broken.');
});
```

## 5. SIGHUP (Hangup Signal)

Description: Originally sent to indicate that the terminal controlling the process has been closed, this signal is often used to reload configuration files or restart services.
Usage: Commonly used in daemons to reload configuration files without restarting the process.

```js
process.on('SIGHUP', () => {
    console.log('Received SIGHUP. Reloading configuration...');
    // Reload configuration
});
```

## 6. SIGQUIT (Quit Signal)

Description: Similar to SIGINT, but with the intention to quit and produce a core dump (if core dumps are enabled).
Usage: Used for debugging purposes to quit a program and create a core dump.

```js
process.on('SIGQUIT', () => {
    console.log('Received SIGQUIT. Quitting and creating core dump...');
    process.exit(1); // Exit and generate core dump
});
```

## 7. SIGKILL (Kill Signal)

Description: This signal is used to forcefully kill a process and cannot be intercepted, blocked, or handled by the process. It terminates the process immediately.
Usage: This signal is not capturable in Node.js. It's typically sent using kill -9 from the terminal.
Example: Not handleable in Node.js; no code example.

## 8. SIGALRM (Alarm Clock Signal)

Description: This signal is sent when a timer set by the alarm system call expires. Although not commonly used in Node.js, it can be used in specific applications.
Usage: Used in timed operations or to perform periodic checks.

## 9. SIGCHLD (Child Process Termination Signal)

Description: This signal is sent to a parent process when a child process terminates.
Usage: Useful for managing and cleaning up child processes spawned by a Node.js application.

```js
process.on('SIGCHLD', () => {
    console.log('Received SIGCHLD. Child process terminated.');
});
```

## 10. SIGCONT (Continue Signal)
Description: This signal is sent to resume a process that has been paused (stopped) using the SIGSTOP signal.
Usage: Useful for applications that need to pause and resume processing.

```js
process.on('SIGCONT', () => {
    console.log('Received SIGCONT. Resuming process...');
});
```

## 11. SIGSTOP (Stop Signal)
Description: This signal pauses a process, but it cannot be intercepted or handled by the process itself. The process can later be resumed using SIGCONT.
Usage: Similar to SIGKILL, but the process is only paused, not terminated.
Example: Not handleable in Node.js; no code example.
## 12. SIGTSTP (Terminal Stop Signal)
Description: This signal is sent when you press Ctrl+Z in the terminal to suspend a process. It can be captured to perform actions before suspension.
Usage: Often used to pause a process and can be resumed with fg in the terminal.

```js
process.on('SIGTSTP', () => {
    console.log('Received SIGTSTP. Pausing process...');
});
```