import os from "os";
import { getPath } from "../utils.js";
import { Worker } from "worker_threads";

const workerLocation = getPath(import.meta.url, '/worker.js');

const createWorker = (num) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerLocation, {
            workerData: num
        });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}

const performCalculations = async () => {
    const systemCpuCoresAmount = os.cpus().length;
    const workers = [];
    for (let i = 10; i < (10 + systemCpuCoresAmount); i++) {
        workers.push(createWorker(i));
    }
    const workersResults = await Promise.allSettled(workers);
    const results = workersResults.map((workerResult) => {
        const status = workerResult.status === 'fulfilled' ? 'resolved' : 'error';
        const data = workerResult.status === 'fulfilled' ? workerResult.value : null;
        return {status, data};
    })
    console.log(results);
};

await performCalculations();
