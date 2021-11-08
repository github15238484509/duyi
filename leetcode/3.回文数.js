// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

// 示例 1：

// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3：

// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。
// 示例 4：

// 输入：x = -101
// 输出：false
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    x = String(x)
    var length = x.length
    var xlength = Math.floor(length / 2)
    var i = 0
    var flage = true
    while (i < xlength) {
        if (x[i] !== x[length - 1 - i]) {
            return false
        }
        i++
    }
    return flage
};

isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    var str = String(x)
    var left = 0
    var riht = str.length - 1
    while (left<=riht) {
        if(str[++left] !== str[--riht]){
            return false
        }
    }
    return true
};

console.log(isPalindrome(1001));