import fs from "fs";

const write = async () => {
  const writableStream = fs.createWriteStream(
    "src/streams/files/fileToWrite.txt",
    "utf8"
  );

  process.stdin.pipe(writableStream);

  process.stdin.on("end", () => {
    writableStream.end();
  });

  console.log(
    "Type something and press Enter to write to the file. Press Ctrl+D to end."
  );
};

await write();
