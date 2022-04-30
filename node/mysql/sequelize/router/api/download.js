const express = require("express")
const path = require("path")
const router = express.Router()

router.get("/:fileName", (req, res) => {
    let fileName = req.params.fileName
    let filePaht = path.resolve(__dirname, "../../resource", fileName)
    res.download(filePaht, fileName, function (e) {
        if (e) {
            res.send(`没有发现此文件${fileName}`)
        }
    })
})
router.use("*", (error, req, res, next) => {
    if (error) {
        next(error.message)
        return
    }
    next()
})


module.exports = router