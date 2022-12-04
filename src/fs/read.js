import { readFile } from "fs/promises";
import { getPath } from "../utils.js";

const filePath = getPath(import.meta.url, '/files/fileToRead.txt');

const read = async () => {
    try {
        const data = await readFile(filePath, { encoding: 'utf8' });
        console.log(data);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();
