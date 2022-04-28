const express = require("express")
const {
  getAllStudent,
  getOneStudent,
  deleteStudent,
  addStudent
} = require("../services/studentServer")
const router = express.Router()
//获取所有学生
router.get("/", async (req, res) => {
  let result = await getAllStudent(req.query)
  res.send(result)
})
//获取单个学生
router.get("/:id", async (req, res) => {
  let result = await getOneStudent(req.params.id)
  res.send(result)
})
//删除一个学生
router.delete("/:id",async (req, res) => {
  let result = await deleteStudent(req.params.id)
  res.send(result)
})
//添加一个学生
router.post("/",async (req, res) => {
  let result = await addStudent(req.body)
  res.send(result)
})
module.exports = router