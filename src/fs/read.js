import { promises as fs } from "fs";
import path from "path";

const readFile = async () => {
  const folder = "src/fs/files";
  const fileToRead = path.join(folder, "fileToRead.txt");

  try {
    await fs.access(fileToRead);

    const content = await fs.readFile(fileToRead, "utf8");
    console.log(content);
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await readFile();
