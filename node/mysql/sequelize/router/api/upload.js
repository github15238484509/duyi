const express = require("express")
let multer = require("multer")
let path = require("path")
let Jimp = require("jimp")



let waterPath = path.resolve(__dirname, "../../public/upload/water.png")



let router = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let mePath = path.resolve(__dirname, "../../public/upload/origin")
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
const cpUpload = upload.single('file')
router.post("/", cpUpload, async function (req, res) {
    let imgMap = 'upload/origin/' + req.file.filename
    res.send(imgMap)
})


router.post("/water", cpUpload, async function (req, res) {
    let imgMap = 'upload/water/' + req.file.filename
    let originPath = req.file.path
    console.log(req.file);
    let newPath = path.resolve(__dirname, "../../public/upload/water", req.file.filename)
    await JimpMask(originPath, waterPath, newPath, {
        originOpactiy: 1,
        waterOpactiy: 1,
        scale: 5,
        left: 100,
        top: 100
    })
    res.send(imgMap)
})




async function JimpMask(originPath, waterPath, newPath, option) {
    const [water, origin] = await Promise.all([
        Jimp.read(waterPath),
        Jimp.read(originPath),
    ]);
    let originWidht = origin.bitmap.width
    let waterWidht = water.bitmap.width
    let dis = (originWidht / waterWidht) / (option.scale || 1)
    water.scale(dis)
    let left = option.left || 1
    let top = option.top || 1
    let width = originWidht - water.bitmap.width
    let height = origin.bitmap.height - water.bitmap.height
    left = left / 100 * (width)
    top = top / 100 * (height)
    origin.composite(water, left, top, {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacitySource: option.waterOpactiy || 1,
        opacityDest: option.originOpactiy || 1
    });
    origin.write(newPath)
}













router.all("*", (err, req, res, next) => {
    if (err) {
        next(err.message)
    }
    res.send(err.message)
})

module.exports = router