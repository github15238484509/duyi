// 函数的前置函数和后置函数
Function.prototype.before = function (fn, ...arg) {
    let beforeResult = fn.apply(this, arg)
    let result = this.apply(this, arg)
    return [beforeResult, result]
}

function a(e) {
    console.log(e);
    return e * 2
}

function b(num) {
    console.log(num);
    return num * 3
}
console.log(a.before(b, 1, 5, 6, 7));

Function.prototype.before = function (fn) {
    return (...arg) => {
        let beforeResult = fn.apply(this, arg)
        let result = this.apply(this, arg)
        return [beforeResult, result]
    }
}
console.log(a.before(b)(456));