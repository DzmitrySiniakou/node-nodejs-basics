import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const results = [];
  const promises = [];

  for (let i = 0; i < numCores; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker("./src/wt/worker.js");
      const valueToSend = 10 + i;

      worker.postMessage(valueToSend);

      worker.on("message", (result) => {
        results.push({ status: "resolved", data: result });
        resolve();
        worker.terminate();
      });

      worker.on("error", (error) => {
        console.error(`Worker error: ${error}`);
        results.push({ status: "error", data: null });
        reject(error);
        worker.terminate();
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          console.error(`Worker stopped with exit code: ${code}`);
        }
      });
    });

    promises.push(promise);
  }

  await Promise.all(promises);
  console.log(results);
};

await performCalculations();
