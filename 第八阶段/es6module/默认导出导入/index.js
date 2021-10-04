// import * as data from "./a.js"
// console.log(data);
// console.log('data中有个default的属性，里面都是默认导出的内容');
import "./init.js" //只想执行他而不想引用导出的东西
import data, { a } from "./a.js"
console.log(data);
console.log(a);
console.log('默认导出可以使用任意的名字，他和基本导出可以一起导出');