import { createGzip } from "zlib";
import { pipeline } from "stream";
import {
    createReadStream,
    createWriteStream,
} from "fs";
import { getPath } from "../utils.js";

const compress = async () => {
    const fileToCompress = getPath(import.meta.url, '/files/fileToCompress.txt');
    const archiveLocation = getPath(import.meta.url, '/files/archive.gz');
    const gzip = createGzip();
    const source = createReadStream(fileToCompress);
    const destination = createWriteStream(archiveLocation);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();
