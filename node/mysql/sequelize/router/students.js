const express = require("express")
const {
  getAllStudent
} = require("../services/studentServer")
const router = express.Router()
//获取所有学生
router.get("/", async (req, res) => {
  let result = await getAllStudent(req.query)
  res.send(result)
})
//获取单个学生
router.get("/:id", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send("获取单个学生")
})
//删除一个学生
router.delete("/:id", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send("删除一个学生")
})
//添加一个学生
router.post("/:id", (req, res) => {
  res.send("添加一个学生")
})
module.exports = router