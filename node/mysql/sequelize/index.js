
const exporess = require("express")
const path = require("path")
const app = exporess()
const public = path.resolve(__dirname, "public")
var cookieParser = require('cookie-parser')

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
app.use("/api/upload",require("./router/api/upload"))

app.listen(3000, () => {
  console.log("localhost:3000");
})
