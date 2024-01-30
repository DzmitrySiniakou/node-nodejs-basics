import { promises as fs } from "fs";
import path from "path";

const copy = async () => {
  const folder = "src/fs/";
  const sourceDir = path.join(folder, "files");
  const targetDir = path.join(folder, "files_copy");

  try {
    await fs.access(sourceDir);

    try {
      await fs.access(targetDir);
      throw new Error("FS operation failed: Target directory already exists");
    } catch {}

    await fs.mkdir(targetDir);

    const files = await fs.readdir(sourceDir);
    for (const file of files) {
      const srcFile = path.join(sourceDir, file);
      const destFile = path.join(targetDir, file);
      await fs.copyFile(srcFile, destFile);
    }
  } catch (error) {
    throw new Error(`FS operation failed: ${error}`);
  }
};

await copy();
