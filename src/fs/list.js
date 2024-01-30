import { promises as fs } from "fs";
import path from "path";

const listFiles = async () => {
  const folder = "src/fs/";

  const filesFolder = path.join(folder, "files");

  try {
    await fs.access(filesFolder);

    const filenames = await fs.readdir(filesFolder);
    console.log(filenames);
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await listFiles();
