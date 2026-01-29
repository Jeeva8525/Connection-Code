import express from 'express';
import { log } from 'node:console';
import { writeToFile } from './utils/logger.js';
import path from 'path';
import EventEmitter from 'node:events';
import { ReadStream } from 'node:fs';

const emitter = new EventEmitter();

emitter.on('save',() => {
    log('saved successfully through emitter msg')
})

emitter.on('err',() => {
    log('error occured through emitter msg')
})

const app = express();
const __dirname = '/home/fstq/Documents/fst/Connection-Code/lab5/fileLog/'
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.post('/api/msg',(req,res) => {
    const body = req.body;
    
    const isErr = writeToFile(body);

    if(!isErr)
        emitter.emit('save');
    else
        emitter.emit('err')

    
    setTimeout(() => {
        log('Log process complete');
    },2000)
    
    res.end('sent success post')
})

app.get('/api/msg',(req,res) => {
    const body = req.body;
    
    const isErr = ReadStream(body);

    if(!isErr)
        emitter.emit('save');
    else
        emitter.emit('err')

    
    setTimeout(() => {
        log('Log process complete');
    },2000)
    
    res.end('sent success post')
})

app.listen(6000,() => {
    log('Navigate through http://localhost:6000');
})