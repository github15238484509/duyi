var num1 = 2;
var num2 = 7;
console.log("算数运算符");
var res;
res = num1 + num2;
console.log("+", res);
res = num1 - num2;
console.log("-", res);
res = num2 / num1;
console.log("/", res);
res = num1 * num2;
console.log("*", res);
res = num2 % num1;
console.log("%", res);
res = num1++;
console.log("num1++", res, num1);
res = ++num1;
console.log("++num1", res, num1);
console.log("关系运算符");
var realtion1 = 1;
var realtion2 = 2;
var realtion11 = "1";
var realtion22 = "2";
var result;
result = realtion1 > realtion2;
console.log(">", result);
result = realtion11 < realtion22;
console.log(">s", result);
result = realtion1 != realtion2;
console.log("!=", result);
// result = realtion2 != realtion22
console.log("逻辑运算符");
var logic1 = 5;
var logic2 = 10;
result = logic1 && logic2;
console.log("&&", result);
result = logic2 && logic1;
console.log('&&', result);
result = logic1 || logic2;
console.log('||', result);
result = logic2 || logic1;
console.log('||', result);
result = !logic1;
console.log('!', result);
result = !!logic2;
console.log('!!', result);
