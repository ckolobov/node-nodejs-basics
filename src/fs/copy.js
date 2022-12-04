import { mkdir, readdir, copyFile } from 'fs/promises';
import { getPath } from "../utils.js";

const oldFolderPath = getPath(import.meta.url, '/files');
const newFolderPath = getPath(import.meta.url, '/files_copy');

const copy = async () => {
    try {
        const files = await readdir(oldFolderPath);
        await mkdir(newFolderPath);
        for (const file of files) {
            await copyFile(`${oldFolderPath}/${file}`, `${newFolderPath}/${file}`)
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
