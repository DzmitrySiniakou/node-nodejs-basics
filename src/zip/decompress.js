import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  const readableStream = fs.createReadStream("src/zip/files/archive.gz");
  const writableStream = fs.createWriteStream(
    "src/zip/files/fileToCompress.txt"
  );
  const gunzip = zlib.createGunzip();
  readableStream.pipe(gunzip).pipe(writableStream);
};

await decompress();
