import { getPath } from "../utils.js";
import crypto from 'crypto';
import { createReadStream } from 'fs';

const calculateHash = async () => {
    const filePath = getPath(import.meta.url, '/files/fileToCalculateHashFor.txt');
    const hashSum = crypto.createHash('sha256');
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => {
        hashSum.update(chunk);
    });

    readStream.on('end', () => {
        const hex = hashSum.digest('hex');
        console.log(hex);
    });

    readStream.on('error', (error) => {
        console.error('Error reading file:', error);
    });
};

await calculateHash();
