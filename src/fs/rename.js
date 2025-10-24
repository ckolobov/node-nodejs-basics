import { rename as fsRename } from "fs/promises";
import {getPath} from "../utils.js";
import fs from "fs";

const wrongFile = getPath(import.meta.url, '/files/wrongFilename.txt');
const newFile = getPath(import.meta.url, '/files/properFilename.md');

const rename = async () => {
    try {
        if (fs.existsSync(newFile)) {
            throw new Error('FS operation failed');
        }
        await fsRename(wrongFile, newFile)
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();
