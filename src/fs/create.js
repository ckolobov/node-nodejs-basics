import fs from 'fs';
import { getPath } from '../utils.js'

const filePath = getPath(import.meta.url, '/files/fresh.txt');

const create = async () => {
    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }
    fs.appendFile(filePath, 'I am fresh and young', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
};

await create();
