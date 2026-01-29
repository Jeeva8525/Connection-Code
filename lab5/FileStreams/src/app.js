import express from 'express';
import { log } from 'node:console';
import { writeToFile,readToFile } from './utils/fileService.js';
import path from 'path';
import EventEmitter from 'node:events';
import { startFileMonitor } from './utils/timerService.js';

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

app.post('/api/msg',(req,res) => {
    const body = req.body;
    
    const isErr = writeToFile(body);

    if(!isErr)
        emitter.emit('write');
    else
        emitter.emit('err')

    
    setTimeout(() => {
        log('Log process complete');
    },2000)
    
    res.end('sent success post')
})

app.get('/api/msg',(req,res) => {

    log(' read file initiated');
    const isErr = readToFile(res);

    if(!isErr)
        emitter.emit('read');
    else
        emitter.emit('err')

    
/*     setInterval(() => {
        log('Interval called())');
    },2000) */
    
})

app.listen(6001,() => {
    startFileMonitor();
    log('Navigate through http://localhost:6001');
})
