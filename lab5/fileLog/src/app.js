import express from 'express';
import { log } from 'node:console';
import { writeToFile } from './utils/logger.js';
import path from 'path';
import EventEmitter from 'node:events';

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

app.get('/api/test',(req,res) => {
    log('Test completed successfully');
    res.end('test successfull')
})

app.post('/api/userData',(req,res) => {
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

app.listen(5000,() => {
    log('Navigate through http://localhost:5000');
})