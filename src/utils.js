import path from "path";
import { fileURLToPath } from "url";

export function getPath(url, pathInDirectory) {
    const __filename = fileURLToPath(url);
    const __dirname = path.dirname(__filename);

    return `${__dirname}${pathInDirectory}`;
}
