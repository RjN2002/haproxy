const http = require('http');

const PORT = process.env.PORT || 8082;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Vous vous trouvé dans  Backend 2 port ${PORT}\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});