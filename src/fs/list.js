import { readdir } from "fs/promises";
import {getPath} from "../utils.js";

const folderPath = getPath(import.meta.url, '/files');

const list = async () => {
    try {
        const files = await readdir(folderPath);
        for (const file of files) {
            await console.log(file);
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();
