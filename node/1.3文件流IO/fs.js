const fs = require('fs');
const path = require('path');

//读
// let fileName = path.join(__dirname, 'test.txt')
// console.log(fileName);
// fs.readFile(fileName, (err, data) => {
//     console.log(data);
// })
// fs.readFile(fileName, "utf-8", (err, data) => {
//     console.log(data);
// })


// 写
// let fileName = path.join(__dirname, 'write.txt')
// fs.writeFile(fileName, '你好帅哥', (err, data) => {
//     console.log(data);
// })
// var buffer = Buffer('abcdefg')
// console.log(buffer);
// fs.writeFile(fileName, buffer, (err, data) => {
//     console.log(data);
// })

//获取一个文件的信息，可以是文件夹，或者是文件

// let fileName = path.join(__filename) //获取当前文件的路径
// let fileName = path.join(__dirname, 'test') //获取当前文件的路径
// fs.stat(fileName, (err, data) => {
//     console.log(data.isFile());
//     // console.dir(data);
// })


//获取目录中的文件一起子目录  目录也是文件只不过她比较特殊
let filePaht = path.join(__filename)
fs.readdir(filePaht,(err,data)=>{
    console.log(data);
})

//创建一个目录
// let filePath = path.join(__dirname,"test","create")
// fs.mkdir(filePath,(err,data)=>{
//     console.log(err); //文件已经存在的时候会失败
//     console.log(data);
//     console.log('创建成功');
// })

//删除文件
// let deletePath  = path.join(__dirname,'delete','delete.js')
// fs.unlink(deletePath,(err,data)=>{
//     console.log(err);//也会报错,删除没有的文件会报错,删除可能会没有权限
//     console.log(data);
//     console.log('删除成功');
// })

//删除目录
// let deletePath = path.join(__dirname, 'delete')
// fs.rmdir(deletePath, (err, data) => {
//     console.log(err); //文件不存在的时候会报错
//     console.log(data);
//     console.log('删除成功');
// })