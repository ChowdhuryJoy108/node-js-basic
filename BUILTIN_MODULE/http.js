const http = require('node:http');

// create server 

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello programmers!'); n//response
        res.end();
    }else if(req.url === '/about'){
        res.write('This is about us page!');
        res.end();
    }else{
        res.write('Not found!');
        res.end();
    }
    
}).listen(3000);

// server.listen(3000); //listen server on 3000 port
console.log('listening on port 3000');

