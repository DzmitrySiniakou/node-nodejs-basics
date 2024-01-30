import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["./src/cp/files/script.js", ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

const args = process.argv.slice(2);
// Put your arguments in function call to test this functionality
spawnChildProcess(args);
