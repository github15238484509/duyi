var num = 1;
var i = 6;
var factorial = 1;
for (; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
var n = "abcdef";
for (var key in n) {
    if (Object.prototype.hasOwnProperty.call(n, key)) {
        console.log(n[key]);
    }
}
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
someArray.forEach(function (ele) {
    console.log(ele);
});
someArray.every(function (val) {
    return true;
});
function sayName(name) {
    console.log(name);
    return name;
}
sayName("你好");
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
