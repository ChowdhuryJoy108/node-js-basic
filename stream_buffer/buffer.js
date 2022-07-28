const http = require('node:http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write(`<html>
        <head><title>Form</title></head>`);
        res.write(`<body>
        <form method='post' action='/process'><input name='message'/>
        </form> </body>`);
        res.end();

    }else if(req.url === '/process' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        })

        req.on('end', ()=>{
            res.write('Streaming Ended!');
            const bodyParse = Buffer.concat(body).toString();
            res.write('Thanks for Submitting!');
            res.end();
        })

    }else{
        res.write('Not Found!');
        res.end();
    }
}).listen(3000);

console.log('server is running on port 3000.');