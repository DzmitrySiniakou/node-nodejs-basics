import { Transform, pipeline } from "stream";
import { promisify } from "util";

const pipelineAsync = promisify(pipeline);

const reverseTextTransform = new Transform({
  transform(chunk, _, cl) {
    const reversed = chunk.toString().split("").reverse().join("");
    cl(null, reversed);
  },
});

const transform = async () => {
  try {
    await pipelineAsync(process.stdin, reverseTextTransform, process.stdout);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

transform();
