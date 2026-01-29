import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export function startFileMonitor() {
  const logPath = path.join(__dirname, "../DataStore/library.json");

  const monitoId = setInterval(() => {
    fs.stat(logPath, (err, stats) => {
      if (err) {
          console.error("Error checking file size:", err.message);
        return;
      }

      console.log(`Current file size: ${stats.size} bytes`);
    });
  }, 5000);
}