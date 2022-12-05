import fs from "fs";
import { getPath } from "../utils.js";

const write = async () => {
    const filePath = getPath(import.meta.url, '/files/fileToWrite.txt');
    const fileWriteStream = fs.createWriteStream(filePath);
    process.stdin.pipe(fileWriteStream);
};

await write();
