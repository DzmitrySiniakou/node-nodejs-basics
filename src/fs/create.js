import { promises as fs } from "fs";
import path from "path";

const create = async () => {
  const folder = "src/fs/files";
  const pathToFolder = path.join(folder, "fresh.txt");
  const text = "I am fresh and young";

  let folderExists = true;
  try {
    await fs.access(folder, fs.constants.R_OK);
  } catch {
    folderExists = false;
  }

  if (!folderExists) {
    await fs.mkdir(folder);
  }

  let fileExists = true;
  try {
    await fs.access(pathToFolder);
  } catch {
    fileExists = false;
  }

  if (!fileExists) {
    await fs.writeFile(pathToFolder, text, "utf-8");
    console.log("File created successfully.");
  } else {
    console.error("FS operation failed: File already exists");
  }
};

await create();
