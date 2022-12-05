import fs from "fs";
import { getPath } from "../utils.js";

const read = async () => {
    const filePath = getPath(import.meta.url, '/files/fileToRead.txt');
    const fileReadStream = fs.createReadStream(filePath);
    fileReadStream.pipe(process.stdout);
};

await read();
