const http = require ('http');
  
const hostname = "127.0.0.1";
const port = 8080

const server = http.createServer((req, res)  => {
 res.statusCode = 200;   
 res.setHeader('content-type','text/plain');  
 res.end('hello world!\n');  
})

server.listen(port, hostname, function(){
    console.log (`server is running at http//${hostname}:${port}/`);         
             
});
    