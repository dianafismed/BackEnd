// Criando um servidor local

// Sobe o servidor
const { createServer } = require('node:http');

// Onde o servidor estará disponibilizado
const hostname = '127.0.0.1';
const port = 3000;

// Configura o servidor
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Mostra o que foi configurado no servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});