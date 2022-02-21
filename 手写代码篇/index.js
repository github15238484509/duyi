//1.手写Object.create()
var fater = {
    name: '我是帅锅'
}
var son = Object.create(fater, {
    age: {
        value: 12,
        writable: true,
        enumerable: true,
        configurable: true
    }
})
// console.log(son);
// console.log(son.name);
/**
 * 
 * @param {Object} object 原型
 * @param {Object} property 自己的属性
 */
function MyCrete(object = {}, property = {}) {
    function F() {}
    F.prototype = object
    var result = new F()
    for (const key in property) {
        if (Object.hasOwnProperty.call(property, key)) {
            result[key] = property[key]
        }
    }
    return result
}

var son2 = MyCrete(null, son)
// console.log(son2);
// console.log(son2.name);


//2.手写 instanceof

function Instance() {
    this.name = "13"
}
var instance = new Instance()
var instanceTwo = {}
// console.log(instanceTwo instanceof Instance);
// console.log(instance instanceof Instance);


/**
 * 
 * @param {Ojbect} left 
 * @param {Ojbect} right 
 * @returns 
 */
function MyInstanceof(left, right) {
    if (!left && !right) return false;
    var leftProperty = Object.getPrototypeOf(left)
    var rightProperty = right.prototype
    while (true) {
        if (!leftProperty) return false;
        if (leftProperty === rightProperty) return true;
        leftProperty = Object.getPrototypeOf(leftProperty)
    }
}
// console.log(MyInstanceof(instanceTwo,Instance));
// console.log(MyInstanceof(instance,Instance));

//3. 手写 in 方法
var inInfo = {
    name: "in"
}
// console.log("name" in inInfo);
// console.log("toString" in inInfo);
// console.log(55 in inInfo);

/**
 * 
 * @param {String} name 
 * @param {Object} object 
 */
function MyIn(name, object) {
    var nameList = Object.getOwnPropertyNames(object)
    for (const key of nameList) {
        if (name === key) return true
    }
    while (true) {
        object = Object.getPrototypeOf(object)
        if (!object) return false;
        nameList = Object.getOwnPropertyNames(object)
        for (const key of nameList) {
            if (name === key) return true
        }
    }
}
// console.log(MyIn("name", inInfo));
// console.log(MyIn("toString", inInfo));
// console.log(MyIn(55, inInfo));

//4 手写  new 运算符

function SystemNew() {
    this.name = "13"
}
// var system = new SystemNew()
// console.log(system);
MyNew.prototype.aa = 465

function MyNew() {
    var myThis = {}
    Object.setPrototypeOf(myThis, MyNew.prototype)
    myThis.name = "465"
    return myThis
}
// var system = new MyNew()
// console.log(system);

//5 手写防抖函数 debounce debounce debounce debounce debounce debounce debounce debounce
// debounce debounce debounce debounce debounce debounce
function debounce(fu, time = 300) {
    var timer = null
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fu.apply(this, arguments)
        }, time);
    }
}
var sayObject = {}

function say() {
    console.log(this, arguments);
    console.log(5555);
}
var say2 = debounce(say.bind(sayObject, 465), 1000)
// say2()
// say2()


//6 手写节流函数 throttle throttle throttle throttle throttle throttle thorttle
// throttle throttle throttle throttle throttle
function throttle(fun, time = 300) {
    var timer = 0
    return function (...agr) {
        var cur = Date.now()
        if ((cur - timer) >= time) {
            fun.apply(this, agr)
            timer = cur
        }
    }
}
var sayObject = {}

function say() {
    console.log(this, arguments);
}
var say2 = throttle(say.bind(sayObject, 465), 5000)
// setInterval(say2, 50)


//10 手写判断数据类型 typeof
function getType(target) {
    var type = Object.prototype.toString.call(target)
    type = type.slice(8, -1).toLocaleLowerCase()
    return type
}
// console.log(getType(1), typeof 1);
// console.log(getType(null), typeof null);
// console.log(getType({}), typeof {});
// console.log(getType([]), typeof []);
// console.log(getType(undefined), typeof undefined);
// console.log(getType("132"), typeof "132");


//11. 手写 call
Function.prototype.myCall = function (mythis = global || window, ...arg) {
    mythis.$fn = this
    var resutl = mythis.$fn(...arg)
    delete mythis.$fn
    return resutl
}

function say(...agr) {
    console.log(5555555, agr);
    console.log(this.name);
}
var myOject = {
    name: "你好帅哥"
}
// say.myCall()
// say.myCall(myOject, 132, 156, 546, )



