const express = require("express")
let multer = require("multer")
let path = require("path")
let router = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let mePath = path.resolve(__dirname, "../../public/upload")
        cb(null, mePath)
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        let time = Date.now()
        let randomStr = Math.random().toString(36).substr(-6)
        let fileName = time + "_" + randomStr + ext
        cb(null, fileName)
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 200 * 1024
    },
    fileFilter: function fileFilter(req, file, cb) {
        let ext = path.extname(file.originalname)
        let white = [".jpg", '.png', '.jif']
        if (white.includes(ext)) {
            cb(null, true)
        } else {
            cb(new Error(`不支持这样的${ext}后缀名`))
        }
    }
})
const cpUpload = upload.fields([{ name: 'file', maxCount: 1 }])
router.post("/", cpUpload, function (req, res) {
    let imgMap = req.files.file.map(it => 'upload/' + it.filename)
    res.send(imgMap)
})

router.all("*", (err, req, res, next) => {
    if (err) {
        next(err.message)
    }
    res.send(err.message)
})

module.exports = router