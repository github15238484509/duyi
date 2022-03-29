const exporess = require("express")
const app = exporess()
app.get("/:info", (req, res, next) => {
  // 相应信息
  // console.log(req.headers);
  // console.log(req.query);
  // console.log(req.params);
  // console.log(req.headers.cookie);
  // res.cookie("fas", "asdf")
  // res.send("132")
  next()
})
app.get("/new", (req, res) => {
  res.send({
    info: 132
  })
})
app.get("*", (req, res) => {
  // res.send("456")
  res.redirect("/new")
})
app.listen(3000, () => {
  console.log('服务在host：localhost:3000');
})  