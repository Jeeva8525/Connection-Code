import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../DataStore/library.json");

export async function writeToFile(newData) {
  try {
    let data = [];

    try {
      const content = await fs.readFile(filePath, "utf8");
      data = JSON.parse(content); 
    } catch (err) {
      if (err.code !== 'ENOENT') throw err; 
    }

    data.push(newData);

    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    
    console.log("Data successfully added to JSON array.");
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}


export async function readToFile(res) {
  try {
    const content = await fs.readFile(filePath, "utf8");
    res.setHeader('Content-Type', 'application/json');
    res.send(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return res.status(404).send("File not found");
    }
    res.status(500).send("Error reading file");
  }
}

export async function issueBook(id){
  let content = await fs.readFile(filePath, "utf8");

  for ( let y of content ){
    if (Number(y.id) === Number(id)){
      y.status = 'issued'
    }
    break;
  }

  

  try {
    let data;
    try {
      data = JSON.parse(content); 
    } catch (err) {
      if (err.code !== 'ENOENT') throw err; 
    }

    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    
  } catch (err) {
    console.error("Error writing to file:", err);
  }

  


  console.log('loop exited')


}