
let admin = require("../../services/adminServer")
const express = require("express")
const md5 = require("js-md5")
const meJwt = require("../jwt")
let router = express.Router()

function getToken(req) {
    let token = ""
    token = req.cookies.token
    if (!token) {
        token = req.headers.authorization
        if (!token) {
            return null
        }
    }
    return token
}

function authorization(handle) {
    return async (req, res, next) => {
        try {
            let token = getToken(req)
            if (token) {
                meJwt.verify(token)
                let result = await handle(req, res)
                res.send(result)
            } else {
                throw new Error("请先登录")
            }
        } catch (error) {
            next()
        }
    }
}
router.get("/", authorization(async function (req, res) {
    let result = await admin.getAllAdmin()
    return result
}))


router.post("/", async function (req, res) {
    let info = req.body
    let result = await admin.addAdmin(info)
    res.send("添加成功")
})

router.post("/login", async function (req, res) {
    let account = req.body.account
    let password = req.body.password
    let result = await admin.login(account, password)
    if (result.type) {
        meJwt.publish(res, 3600, result.allNameDes)
        res.send(result)
    } else {
        res.send('没有找到')
    }
})
router.all("*", (req, res) => {
    res.send(`出错了`)
})
module.exports = router