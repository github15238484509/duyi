const info = require("./a")
console.log(info);

console.log("当前文件目录", __dirname)
console.log('当前文件名称', __filename);
console.log("process.cwd,返回当前目录", process.cwd())
// console.log(process.pid);
// process.kill(process.pid)
console.log(55);
console.log(process.argv);
console.log(process.ppid);
console.log(process.ppid);
// console.log(process.exit());
//node 运行环境是包裹在一个函数里的，__dirname,__filename,就是这个函数的参数，里面还有module，module.exports,require,里面的this、
// 是 module.exports
console.log(this);
console.log(this == module.exports);