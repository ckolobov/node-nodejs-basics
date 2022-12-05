import { Transform, pipeline } from "stream";

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const str = chunk.toString().trim();
            const reversedStr = str.split('').reverse().join('');
            this.push(`${reversedStr}\n`);
            callback();
        }
    })

    pipeline(
        process.stdin,
        transformStream,
        process.stdout,
        err => console.error(err)
    )
};

await transform();
