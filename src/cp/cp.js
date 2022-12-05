import { fork } from "child_process";
import { getPath } from "../utils.js";

const childPath = getPath(import.meta.url, '/files/script.js');

const spawnChildProcess = async (args) => {
    fork(childPath, args ? args.split(' ') : []);
};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
await spawnChildProcess();
