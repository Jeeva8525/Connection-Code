// import os from 'os';
const os = require('os');
console.log('cout<<"Hello World"<<endl;');
console.log('Loading system informations');
console.log(os.type());
console.log(os.totalmem());

const http = require('http');
const { log } = require('console');

const server = http.createServer((req,res) => {
    res.writeHead(200,{
        "Content-Type" : "text/html"
    });
    res.end('<h1>Request is received</h1>');
})


const fs = require('fs')

fs.writeFileSync('./system.txt',`System Type : ${os.type()} \nSystem memory : ${os.totalmem()}`);

const _ = require('lodash');
const arr = [1,2,3,4];
log(_.reverse(arr));

setTimeout(()=>{log('Task completed in 2000 ms');},2000);    

server.listen(5000,()=>{
    log('Server is running on 5000');
});