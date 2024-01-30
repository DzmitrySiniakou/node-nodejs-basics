import fs from "fs";

const read = async () => {
  const readableStream = fs.createReadStream(
    "src/streams/files/fileToRead.txt",
    "utf8"
  );

  readableStream.pipe(process.stdout);
};

await read();
