import { spawn } from "child_process";
import { getPath } from "../utils.js";

const childPath = getPath(import.meta.url, '/files/script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [childPath, ...(args || [])]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
// spawnChildProcess([someArgument1, someArgument2, ...]);
await spawnChildProcess();
