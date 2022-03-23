const book = require("./Book")
const db = require("./db")
require("./test")
require("./Admin")
require("./Class")
require('./Student')
async function de() {
    await db.sync({
        alert: true
    }) //同步表
    // await book.drop()//删除一个表
    // console.log('删除成功');
    console.log('同步成功');
}
de()