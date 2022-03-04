async function init() {
    await Promise.resolve(13).then(() => {
        setTimeout(() => {
            console.log(222);
        }, 10 * 5)
    })
    console.log(11);
}
// init()


//1.合并对象
function mergeObject(...arg) {
    console.log(arg);
    var result = {}
    for (let i = 0; i < arg.length; i++) {
        const element = arg[i]
        for (const key in element) {
            if (Object.hasOwnProperty.call(element, key)) {
                if (Array.isArray(element[key])) {
                    result[key] = element[key]
                } else if (typeof result[key] === "object" && typeof element[key] == "object") {
                    result[key] = mergeObject(result[key], element[key])
                } else {
                    result[key] = element[key];
                }
            }
        }
    }
    return result
}
var one = {
    name: 132,
    info: 55,
    list: [1, 2, 4]
}
var two = {
    age: 132,
    list: [1, 2, 3, 5],
    info: {
        name: 13,
        age: 15,
        abc: "p"
    },
}
var therr = {
    info: {
        sex: "男"
    },
}
// console.log(mergeObject(one, two, therr));
//1.合并对象
function mergeObject(...arg) {
    var result = {}
    for (let i = 0; i < arg.length; i++) {
        var obj = arg[i]
        var names = Object.getOwnPropertyNames(obj)
        for (let index = 0; index < names.length; index++) {
            var currentData = obj[names[i]]
            var type = Object.prototype.toString.call(currentData).slice(8, -1)
            if (type === "Array") {
                if (result[names[index]]) {
                    result[names[index]] = deepClone(currentData);
                } else {
                    result[names[index]] = new Array(currentData.length)
                    for (let i = 0; i < currentData.length; i++) {
                        result[names[index]][i] = deepClone(currentData[i]);
                    }
                }
            } else if (type === "Object") {
                if (result[names[index]]) {
                    result[names[index]] = mergeObject(result[names[index]], currentData)
                } else {
                    result[names[index]] = deepClone(currentData);
                }
            } else {
                result[names[index]] = obj[names[index]]
            }
        }
    }
    return result
}

function deepClone(obj) {
    var type = Object.prototype.toString.call(obj).slice(8, -1)
    var result
    if (type === "Array") {
        result = new Array(obj.length)
        for (let i = 0; i < obj.length; i++) {
            result[i] = deepClone(obj[i]);
        }
    } else if (type === "Object") {
        result = {}
        var names = Object.getOwnPropertyNames(obj)
        for (let i = 0; i < names.length; i++) {
            result[names[i]] = deepClone(obj[names[i]]);
        }
    } else {
        return obj
    }
    return result
}

// console.log(mergeObject(one, two, therr));

//实现一个一直递归的函数
function say() {
    return new Promise((resolve) => {
        var num = Math.random() * 100
        setTimeout(() => {
            console.log(55);
            console.log(num > 95);
            resolve(num > 90)
        }, Math.random() * 3000)
    })
}
async function online(fn) {
    var result = await fn()
    if (result) {
        return result
    } else {
        online(fn)
    }
}
// online(say)


//实现一个管道输出
function increment(value) {
    return value + 1
}

function decrement(value) {
    return value - 1
}

function nultiply(value) {
    return value * 2
}
/**
 * 
 * @param  {Function} arg 函数裂变
 */
function pipe(...arg) {
    return (value) => {
        var i = 0
        while (i < arg.length) {
            value = arg[i](value)
            i++
        }
        return value
    }
}
var result = pipe(increment, nultiply, decrement)
// console.log(result(2)); //5