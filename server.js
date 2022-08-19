const  http = require('http');     
const  hostname = '127.0.0.1';
const  port = 3000;

const  server = http.createServer((_,res) => {
    res.end('Hello Node');
});

server.listen(3000, '127.0.0.1');