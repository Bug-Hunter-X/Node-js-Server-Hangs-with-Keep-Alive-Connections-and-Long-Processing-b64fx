const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Connection': 'keep-alive' });
    // Simulate a long-running process
    // Work is done asynchronously now
    setTimeout(() => {
      res.end('Hello, World!');
    }, 5000);
  });

  server.listen(3000);
  console.log(`Worker ${process.pid} started`);
}