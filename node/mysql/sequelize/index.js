const exporess = require("express")
const path = require("path")
const app = exporess()
const public = path.resolve(__dirname,"public")
//静态资源服务器
app.use(exporess.static(public))
//解析请求的数据json
app.use(exporess.json())
//解析请求的为 form表单请求
app.use(exporess.urlencoded({extended:true}))

app.use("/api/students",require("./router/students"))

app.listen(3000,()=>{
  console.log("localhost:3000");
})