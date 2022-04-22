"use strict";
let str = "lmg";
console.log("5566132 2");
function add(a, b = 10) {
    return a + b;
}
var num = add(1);
console.log(num);
// let name: null = null;
let name = "132";
let obj;
obj = {
    name: 'kl',
    age: 12,
};
let gender;
gender = "男";
let user;
user = {
    name: "132",
    age: 12,
    gender: '男'
};
function getUser(g) {
    return [];
}
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('参数的类型必须一样');
}
const com = combine("2", "3");
// 可选参数
function choosable(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
let choosablenum = choosable(1, 2, 5);
// 枚举
// 枚举会在编译结果中出现
var Enumerable;
(function (Enumerable) {
    Enumerable[Enumerable["level1"] = 0] = "level1";
    Enumerable[Enumerable["level2"] = 1] = "level2";
    Enumerable[Enumerable["level3"] = 2] = "level3";
})(Enumerable || (Enumerable = {}));
console.log(Enumerable.level1);
var Enumerable2;
(function (Enumerable2) {
    Enumerable2["level1"] = "\u7B49\u7EA7\u4E00";
    Enumerable2["level2"] = "\u7B49\u7EA7\u4E8C";
    Enumerable2["level3"] = "\u7B49\u7EA7\u4E09";
})(Enumerable2 || (Enumerable2 = {}));
console.log(Enumerable2.level1);
console.log('=========');
class OneUser {
    constructor() {
        this.name = '465';
    }
    sayHello() {
        console.log(`===${this.name}`);
    }
}
class tow extends OneUser {
    constructor() {
        super(...arguments);
        this.age = 132;
    }
    say() {
        super.sayHello();
    }
}
new tow().say();
