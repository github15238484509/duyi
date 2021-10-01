const util = require("./util.js")
const util1 = require("./util.js")
const index2 = require("./index2.js")
console.log("util", util.getCoun());
console.log("util", util1.getCoun());
console.log("util", util.getCoun());
console.log('这样还能输出正常的顺序，说明util导入了一次，后面使用的都是宦祠内');
console.log(
    "module.exports是个对象,再导入的时候，把他赋值给exports,最后导出的是module.exports"
);
console.log(util.name);