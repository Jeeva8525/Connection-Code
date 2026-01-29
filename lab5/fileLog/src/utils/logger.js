import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function writeToFile(body) {
    if (!body || !body.userName || !body.msg) {
        console.error('body is not well defined');
        return;
    }

    const { userName, msg } = body;
    const logPath = path.join(__dirname, '../DataStore/app.log');
    const logEntry = `${new Date().toISOString()} - ${userName}: ${msg}\n`;

    
    fs.appendFile(logPath, logEntry, (err) => {
        if (err) {
            console.error('Failed to write to file:', err);
            return `err : ${err}`
        } else {
            console.log('Log entry saved successfully');
            return null
        }
    });
}
