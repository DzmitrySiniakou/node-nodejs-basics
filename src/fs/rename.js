import { promises as fs } from "fs";
import path from "path";

const renameFile = async () => {
  const folder = "src/fs/files/";
  const sourceFile = path.join(folder, "wrongFilename.txt");
  const targetFile = path.join(folder, "properFilename.md");

  try {
    await fs.access(sourceFile);

    try {
      await fs.access(targetFile);
      throw new Error("FS operation failed: properFilename.md already exists");
    } catch {}

    await fs.rename(sourceFile, targetFile);
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await renameFile();
