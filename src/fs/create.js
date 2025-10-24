import fs from "fs/promises";
import { getPath } from "../utils.js";

const filePath = getPath(import.meta.url, '/files/fresh.txt');

const create = async () => {
    try {
        await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();
