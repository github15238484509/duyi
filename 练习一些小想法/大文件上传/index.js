var fs = require('fs');
var express = require('express');
var multer = require('multer');
var path = require('path');
const app = express()
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use(express.static('public', options))


var upload = multer({
    dest: 'upload_tmp/'
});
app.get('/', function (req, res) {
    res.send('hello world')
})
app.post('/upload', upload.any(), function (req, res) {
    if (!fs.existsSync("./upload/" + req.body.filename)) {
        fs.mkdirSync("./upload/" + req.body.filename);
    }
    var des_file = "./upload/" + "" + req.body.filename + "/" + req.body.hash;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
                fs.unlink(req.files[0].path, function () {})
                res.end(JSON.stringify(response));
            }
        });
    });
});


const SIZE = 10 * 1024 * 1024 
app.post('/ok', function (req, res) {
    const chunkDir = path.resolve("./upload/", req.headers.filename);
    const filePath = path.resolve("./target/", req.headers.filename);
    fs.readdir(chunkDir, async function (err, files) {
        var fils = files
        fils.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
        const pipeStream = (path, writeStream) =>
            new Promise(resolve => {
                const readStream = fs.createReadStream(path);
                readStream.on("end", () => {
                    fs.unlinkSync(path);
                    resolve();
                });
                readStream.pipe(writeStream);
            });

       await  Promise.all(
            fils.map((chunkPath, index) =>
                pipeStream(
                    path.resolve(chunkDir, chunkPath),
                    // 指定位置创建可写流
                    fs.createWriteStream(filePath, {
                        start: index * SIZE,
                        end: (index + 1) * SIZE
                    })
                )
            )
        );
        fs.rmdir(chunkDir,function(){
            console.log(55555);
        })
    });
    res.end(JSON.stringify({
        status: "ok",
        filename: req.headers.filename,
        chunkDir
    }));
})


app.listen(3000)