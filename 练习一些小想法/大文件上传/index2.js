const http = require("http");
const path = require("path");
const fs = require("fs-extra");
const multiparty = require("multiparty");

const server = http.createServer();
const UPLOAD_DIR = path.resolve(__dirname, "..", "target"); // 大文件存储目录

server.on("request", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.status = 200;
        res.end();
        return;
    }

    const multipart = new multiparty.Form();

    multipart.parse(req, async (err, fields, files) => {
        if (err) {
            return;
        }
        const [chunk] = files.chunk;
        const [hash] = fields.hash;
        const [filename] = fields.filename;
        const chunkDir = path.resolve(UPLOAD_DIR, filename);

        // 切片目录不存在，创建切片目录
        if (!fs.existsSync(chunkDir)) {
            await fs.mkdirs(chunkDir);
        }

        // fs-extra 专用方法，类似 fs.rename 并且跨平台
        // fs-extra 的 rename 方法 windows 平台会有权限问题
        // https://github.com/meteor/meteor/issues/7852#issuecomment-255767835
        await fs.move(chunk.path, `${chunkDir}/${hash}`);
        res.end("received file chunk");
    });
});

server.listen(3000, () => console.log("正在监听 3000 端口"));

const UPLOAD_DIR = path.resolve(__dirname, "..", "target"); // 大文件存储目录

const resolvePost = req =>
    new Promise(resolve => {
        let chunk = "";
        req.on("data", data => {
            chunk += data;
        });
        req.on("end", () => {
            resolve(JSON.parse(chunk));
        });
    });

const pipeStream = (path, writeStream) =>
    new Promise(resolve => {
        const readStream = fs.createReadStream(path);
        readStream.on("end", () => {
            fs.unlinkSync(path);
            resolve();
        });
        readStream.pipe(writeStream);
    });

const mergeFileChunk = async (filePath, filename, size) => {
    const chunkDir = path.resolve(UPLOAD_DIR, filename);
    const chunkPaths = await fs.readdir(chunkDir);
    // 根据切片下标进行排序
    // 否则直接读取目录的获得的顺序可能会错乱
    chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
    await Promise.all(
        chunkPaths.map((chunkPath, index) =>
            pipeStream(
                path.resolve(chunkDir, chunkPath),
                // 指定位置创建可写流
                fs.createWriteStream(filePath, {
                    start: index * size,
                    end: (index + 1) * size
                })
            )
        )
    );
    fs.rmdirSync(chunkDir); // 合并后删除保存切片的目录
};