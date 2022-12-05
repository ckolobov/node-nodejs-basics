import { createUnzip } from "zlib";
import { pipeline } from "stream";
import {
    createReadStream,
    createWriteStream,
} from "fs";
import { getPath } from "../utils.js";

const decompress = async () => {
    const decompressedFileLocation = getPath(import.meta.url, '/files/fileToCompress.txt');
    const fileToDecompress = getPath(import.meta.url, '/files/archive.gz');
    const unzip = createUnzip();
    const source = createReadStream(fileToDecompress);
    const destination = createWriteStream(decompressedFileLocation);

    pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();
