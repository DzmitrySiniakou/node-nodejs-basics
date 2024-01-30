import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");

  try {
    const hashDigest = hash.digest("hex");

    await fs.promises.writeFile(
      "src/hash/files/fileToCalculateHashFor.txt",
      hashDigest,
      "utf-8"
    );

    console.log(`Hash calculated successfully: ${hashDigest}`);
  } catch (error) {
    console.error("Error calculating hash:", error);
  }
};

await calculateHash();
