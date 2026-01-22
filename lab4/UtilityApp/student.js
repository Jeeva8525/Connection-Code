import { log } from 'console';
import http from 'http';
import fs from 'fs';
import dayjs from 'dayjs'
log('Student Utility App started');

let data;

const server = http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type' : 'text/html'
    })

    let resHtml = "";
    resHtml = `
        <h1>Student Details</h1>
        <table>
            <tbody>
            `

    for ( let d of data){
        resHtml += `
            <tr>
                <td>${d[0]}</td><td>${d[1]}</td>
            </tr>
        `
    }

    resHtml += `
            </tbody>
        </table>
    `

    res.end(resHtml);
})



try{
    data = fs.readFileSync("./student.txt",'utf-8')
    log('File has started reading');
    data = data.split('\n');
    for ( let x=0;x<data.length;x++){
        data[x] = data[x].split(' ');
    }
    log(data);
}catch(err){
    log('error reading file');
}


server.listen(5000,() => {
    log(`server has started on ${dayjs().format('DD-MMM-YYYY HH:mm:ss')}`);
    log('http://localhost:5000/');
}) 

setTimeout(()=>{
    log('File served successfully after 2000 ms');
},2000);