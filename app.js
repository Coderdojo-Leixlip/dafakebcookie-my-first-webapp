const http = require ('http');
  
const hostname = "127.0.0.1";
const port = 8080

const htmlhome = `
<html> 

<body> <p> hello person  </p>

</body>

</html>
 `
const page2 = `

<html>

<body> 

<p>hello page 2</p>  

</body>


</html>
`
const server = http.createServer((req, res)  => {
 res.statusCode = 200;   
 res.setHeader('content-type','text/html');     
if (req.url === '/'){
    res.end (htmlhome);
}
else if (req.url === '/page2/') { 
    res.end (page2); 
}

})

server.listen(port, hostname, function(){
    console.log (`server is running at http//${hostname}:${port}/`);         
             
});
    