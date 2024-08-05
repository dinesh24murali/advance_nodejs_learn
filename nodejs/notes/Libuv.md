# Libuv:

Most of this is taken from [this](https://www.geeksforgeeks.org/libuv-in-node-js/) geeks for geeks artical.

Node.js relies on various dependencies under the hood for providing various features.

- V8
- libuv
- llhttp
- c-ares
- OpenSSL

Libuv is one of them, let’s discuss libuv in detail.

libuv is a C library originally written for Node.js to abstract non-blocking I/O operations.

- Event-driven asynchronous I/O model is integrated.
- It allows the CPU and other resources to be used simultaneously while still performing I/O operations, thereby resulting in efficient use of resources and network.
- It facilitates an event-driven approach wherein I/O and other activities are performed using callback-based notifications.

`Example:` If a program is querying the database, the CPU sits idle until the query is processed and the program stays at a halt, thereby causing wastage of system resources. To prevent this, libuv is used in Node.js which facilitates a non-blocking I/O.

It also has mechanisms to handle services like File System, DNS, network, child processes, pipes, signal handling, polling, and streaming.
To perform blocking operations that can’t be done asynchronously at OS level, libuv also includes a thread pool to distribute CPU loads.

## What is a thread pool?

Libuv assigns tasks to a pool of worker threads. However, all callbacks that occur on task completion are executed on the main thread.
`Note:` After Node 10.5 worker threads can also be used to execute JavaScript in parallel. Libuv uses 4 threads by default, but can be changed using the UV_THREADPOOL_SIZE

```js
process.env.UV_THREADPOOL_SIZE = 5;
```

## Features of libuv:

- Full-featured event loop backed by epoll (Linux), kqueue (OSX), IOCP (Windows), event ports (SunOS).
- Asynchronous TCP (net module) and UDP (dgram module)
- Asynchronous DNS resolution (used partly for the dns module)
- Asynchronous file, file system operations & events (fs module)
- ANSI escape code controlled TTY
- Thread pool and Signal handling
- Child processes
- High-resolution clock
- Threading and synchronization primitives.
- Inter-Process Communication using sockets and Unix domain sockets (Windows)
