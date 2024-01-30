import { promises as fs } from "fs";
import path from "path";

const removeFile = async () => {
  const folder = "src/fs/files/";
  const fileToRemove = path.join(folder, "fileToRemove.txt");

  try {
    await fs.access(fileToRemove);

    await fs.unlink(fileToRemove);
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await removeFile();
