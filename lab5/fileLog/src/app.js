import express from 'express';
import { log } from 'node:console';
import { writeToFile } from './utils/logger.js';
import path from 'path';
const app = express();
const __dirname = '/home/fstq/Documents/fst/Connection-Code/lab5/fileLog/'
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.get('/api/test',(req,res) => {
    log('Test completed successfully');
    res.end('test successfull')
})

app.post('/api/userData',(req,res) => {
    log('req received');
    const body = req.body;
    
    log(body);
    writeToFile(body);
    log('written successfully');

    res.send('sent success post')

})

app.listen(5000,() => {
    log('Navigate through http://localhost:5000');
})