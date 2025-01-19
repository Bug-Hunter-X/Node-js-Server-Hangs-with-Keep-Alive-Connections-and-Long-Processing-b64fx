# Node.js Server Hang with Keep-Alive Connections

This repository demonstrates a bug in a Node.js server where it hangs when handling numerous requests that maintain a persistent connection and involve lengthy processing. This situation can lead to high CPU usage, system instability, and unresponsive servers.

## Bug Description

The server utilizes the `Connection: keep-alive` header, maintaining persistent connections. The server also simulates long-running processes within the request handling. This combination causes the server to become unresponsive and eventually crash under significant load. This is due to Node.js's event loop getting blocked and inability to handle new incoming requests while the long-running process is in execution. This can lead to an increased CPU usage, potential crashes, and server unresponsiveness.

## Reproduction Steps

1. Clone this repository.
2. Run `node bug.js`.
3. Send numerous requests to `http://localhost:3000` using a tool like `ab` (Apache Bench) or a browser extension.
4. Observe the server's behavior and the CPU usage. You might need to keep sending requests and monitor the CPU usage till it's sufficiently high to observe the issue.

## Solution

The solution involves utilizing techniques that help the server handle long-running processes more efficiently without blocking the event loop.  This commonly includes using techniques such as workers, streams, or asynchronous operations that prevent blocking and make the most of multi-core processors.

The solution code is found in `bugSolution.js`.