
const exporess = require("express")
const path = require("path")
const app = exporess()
const public = path.resolve(__dirname, "public")
var cookieParser = require('cookie-parser')
let url = require("url")
//  图片防盗链
app.use((req, res, next) => {
    let host = req.headers.host;
    let referer = req.headers.referer;
    if (referer && new URL(req.headers.referer).host !== host) {
        req.url = "upload/water/1651292342870_0jr8w9.png.png"
    }
    next()
})

//静态资源服务器
app.use(exporess.static(public))

//解析请求的为 form表单请求
app.use(exporess.urlencoded({ extended: true }))

//解析请求的数据json
app.use(exporess.json({ extended: true }))

//解析cookie
app.use(cookieParser())

//学生的管理接口
app.use("/api/students", require("./router/students"))
//管理员的接口
app.use("/api/admin", require("./router/api/admin"))
//上传文件
app.use("/api/upload", require("./router/api/upload"))
//下载文件
app.use("/api/download", require("./router/api/download"))
app.listen(3000, () => {
    console.log("localhost:3000");
})
