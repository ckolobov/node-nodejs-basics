import { getPath } from "../utils.js";
import crypto from 'crypto';
import { readFile } from "fs/promises";

const calculateHash = async () => {
    const filePath = getPath(import.meta.url, '/files/fileToCalculateHashFor.txt');
    const fileBuffer = await readFile(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    console.log(hex);
};

await calculateHash();
