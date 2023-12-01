const http = require('http');
const data= require('./index');
const { json } = require('stream/consumers');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4200);

