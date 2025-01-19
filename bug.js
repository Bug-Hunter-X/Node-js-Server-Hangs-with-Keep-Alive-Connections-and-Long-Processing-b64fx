const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection alive
  res.writeHead(200, { 'Connection': 'keep-alive' });

  // Simulate a long-running process
  for (let i = 0; i < 1000000000; i++) {
    // Do nothing
  }

  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});