import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { log } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



export function writeToFile(body) {
  if (!body || !body.msg) {
    console.error("body is not well defined");
    return;
  }

  const { msg } = body;
  const logPath = path.join(__dirname, "../DataStore/streamData.txt");
  const logEntry = msg;

  const writer = fs.createWriteStream(logPath);
  const buffer = Buffer.from(logEntry);

  writer.write(buffer);
  writer.end();

  writer.on("finish", () => {
    log("finish statement called");
  });

  writer.on("error", (err) => {
    if (err) {
      console.error("Failed to write to file:", err);
      return `err : ${err}`;
    } else {
      console.log("Log entry saved successfully");
      return null;
    }
  });
}

export function readToFile(res) {
  const logPath = path.join(__dirname, "../DataStore/streamData.txt");

  const reader = fs.createReadStream(logPath);

  reader.on("data", (data) => {
    console.log(`Received ${data.length} bytes of data.`);

    const canContinue = res.write(data);

    if (!canContinue) {
      reader.pause();
      res.once("drain", () => reader.resume());
    }
  });

  reader.on("end", () => {
    log("end statement called from reader");
    res.end();
  });

  reader.on("error", (err) => {
    if (err) {
      console.error("Failed to read the file:", err);
      return `err : ${err}`;
    } else {
      console.log("Log entry retrieved");
      return null;
    }
  });
}
