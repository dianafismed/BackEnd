import {createServer} from 'http';
import {parse} from "url";
import {readFile} from "fs";

createServer(function (req, res){
  const q = parse(req.url, true);
  const filename = '.' + q.pathname;

  readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(400, {'Content-Type': 'text/html'});
      return  res.end("404 not found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(8080);

/* Se eu colocar o node url.js pra rodar vai dar 404 not found
  No browser eu coloco localhost:8080/ verao(ou inverno).html e vai aparecer as paginas de verao e inverno
*/