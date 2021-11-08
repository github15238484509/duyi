// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。
//  

// 示例 1：

// 输入：x = 123
// 输出：321
// 示例 2：

// 输入：x = -123
// 输出：-321
// 示例 3：

// 输入：x = 120
// 输出：21
// 示例 4：

// 输入：x = 0
// 输出：0
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    //判断是否为负
    var flage = x<0;
    x = Math.abs(x)
    x = String(x).split("") //装换成数组
    var xlent = x.length
    var xlen = Math.floor(x.length/2)
    var i = 0
    while (i<xlen) {
        var current = x[xlent-i-1]
        x[xlent-i-1] =  x[i]
        x[i] = current
        i++
    }
    var num = Number(flage?-x.join(""):x.join(""))
   return  (num >Math.pow(2,31)-1)||(num <Math.pow(-2,31)) ?0 :num
}

reverse = function(x){
    var flage = x<0;
    x = String(Math.abs(x)).split("").reverse().join("")
    var num = Number(flage?-x:x)
    return  (num >Math.pow(2,31)-1)||(num <Math.pow(-2,31)) ?0 :num
}
console.log(reverse(123));