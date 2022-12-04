import { rm } from "fs/promises";
import { getPath } from "../utils.js";

const filePath = getPath(import.meta.url, '/files/fileToRemove.txt');

const remove = async () => {
    try {
        await rm(filePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();
