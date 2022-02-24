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
    return this
}
var myOject = {
    name: "你好帅哥"
}
// say.myCall()
// say.myCall(myOject, 132, 156, 546, )

//12. 手写 bind
Function.prototype.myBind = function (myThis = window, ...arg) {
    var originThis = this
    return function (...arg2) {
        var argumen = [].concat(arg, arg2)
        myThis.$fn = originThis
        var result = myThis.$fn(...argumen)
        delete myThis.$fn
        return result
    }
}
// var say = say.myBind(myOject, 1)
// console.log(say(4, 5, 3));
// console.log(myOject);

//13 手写柯里化
function curry(fn, ...arg1) {
    return function (...arg2) {
        var args = [].concat(arg1, arg2)
        var fnLenght = fn.length
        // if (args.length >= fnLenght) {
        //     return fn.call(this, ...args)
        // } else {
        //     return curry(fn, ...args)
        // }
        return args.length >= fnLenght ? fn.call(this, ...args) : curry(fn, ...args)
    }
}

function sayInfo(name, age, sex) {
    console.log(name, age, sex);
    console.log(this);
}
// sayInfo = curry(sayInfo.bind(myOject), "li")
// sayInfo("12")().bind(myOject)("nan")


// 14 手写深克隆

function deepClone(origin) {
    if (origin === null) return origin;
    var type = Object.prototype.toString.call(origin).slice(8, -1)
    var resutl;
    if (type === "Object") {
        resutl = {}
        for (const key in origin) {
            if (Object.hasOwnProperty.call(origin, key)) {
                resutl[key] = deepClone(origin[key]);
            }
        }
        return resutl
    } else if (type === "Array") {
        resutl = []
        origin.forEach((ele, index) => {
            resutl[index] = deepClone(ele)
        });
        return resutl
    } else if (type === "Set") {
        resutl = new Set()
        origin.forEach((ele) => {
            resutl.add(deepClone(ele))
        });
        return resutl
    } else if (type === "Map") {
        resutl = new Map()
        origin.forEach((ele, value) => {
            resutl.set(deepClone(value), deepClone(ele))
        });
        return resutl
    } else {
        return origin
    }
}

var Fater = {
    list: new Set([1, 2, 3, {
        name: 512
    }]),
    list2: new Map([
        [{}, {
            nam: 4155
        }],
        ["adf", [12, 5, [], 12]]
    ]),
    name: 'Fater',
    age: 12,
    info: {
        name: 'Fater',
        age: 12,
        info: {
            name: {},
            age: [],
            info: {
                age: [{
                    name: 'Fater',
                    age: 12,
                    info: {
                        name: {},
                        age: [],
                        info: {
                            age: [],
                        }
                    }
                }, 132, undefined, null, , ],
            }
        }
    }
}
// var fater = deepClone(Fater)
// console.log(fater);
// console.log(fater === Fater);

// 15 实现延迟输出
function delay(time = 300) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    })
}
// delay(1000).then(()=>{
//     console.log(55);
// })


// 16 实现数组的扁平化
function flat(arr) {
    var info = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            info.push(...flat(item))
        } else {
            info.push(item)
        }
    }
    return [...info]
}
var arr = [121, [112, [122], 1212], 1515]
// console.log(flat(arr));

// 17  将js对象转化为树形结构
// 转换前：
source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 2,
    name: 'div'
}, {
    id: 6,
    pid: 5,
    name: 'div'
}]
// 转换为: 
tree = [{
    id: 1,
    pid: 0,
    name: 'body',
    children: [{
        id: 2,
        pid: 1,
        name: 'title',
        children: [{
            id: 3,
            pid: 1,
            name: 'div'
        }]
    }]
}]

function getTree(source, pid, id) {
    var result = []
    var Map = {}
    source.forEach(item => {
        Map[item[id]] = item
    })
    source.forEach(item => {
        var parent = Map[item[pid]]
        if (!parent) {
            result.push(item)
        } else {
            if (!parent.children) {
                parent.children = []
            }
            parent.children.push(item)
        }
    })
    return result
}
// console.log(getTree(source, "pid", "id"));

