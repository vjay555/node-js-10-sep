const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = '3000';

let server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');
    let url = request.url;
    console.log(url);
    fs.readFile(path.join(__dirname,'welcome.html'),'utf8' , (err , data) =>{
        if(err) throw err;
        response.end(data);
    });
});

server.listen(port,hostname,() => {
    console.log(`Server is started at : http://${hostname}:${port}`);
});