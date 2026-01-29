import express from 'express';
import { log } from 'node:console';
import { writeToFile,readToFile,issueBook } from './utils/libraryService.js';
import path from 'path';
import EventEmitter from 'node:events';

const emitter = new EventEmitter();

emitter.on('written',() => {
    log('saved successfully through emitter msg')
})

emitter.on('read',() => {
    log('read -- successfully through emitter msg')
})

emitter.on('error',() => {
    log('error occured through emitter msg')
})
const app = express();
const __dirname = '/home/fstq/Documents/fst/Connection-Code/lab5/FileStreams/'

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.post('/api/addBook',(req,res) => {
    const body = req.body;
    

    const isErr = writeToFile(body);

    if(!isErr)
        emitter.emit('write');
    else
        emitter.emit('err')
    
    res.end('sent book to library')
})

app.post('/api/issue/:id',(req,res) => {

    const params = req.params
    const isErr = issueBook(params.id);

    if(!isErr)
        emitter.emit('write');
    else
        emitter.emit('err')

    res.end('issue book from library')
})

app.get('/api/getAllBooks',(req,res) => {

    log(' read file initiated');
    const isErr = readToFile(res);

    if(!isErr)
        emitter.emit('read');
    else
        emitter.emit('err')

})

app.listen(7000,() => {
    log('Navigate through http://localhost:7000');
})