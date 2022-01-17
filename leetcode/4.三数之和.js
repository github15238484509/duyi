/**
 * 
 * @param {numsay} nums 目标数组
 * @param {Number} index 其实位置
 */
function start(nums) {
    if (nums.length < 2) return [];
    var current = 0;
    var left = current + 1;
    var right = left + 1
    var total = []
    while (current <= nums.length - 3) {
        if (nums[current] + nums[left] + nums[right] === 0) {
            var arr11 = [nums[current], nums[left], nums[right]].sort((a, b) => a - b)
            var flage = true;
            for (const item of total) {
                item.sort((a, b) => a - b)
                if (item[0] === arr11[0] && item[1] === arr11[1] && item[2] === arr11[2]) {
                    flage = false
                    break;
                }
            }
            if (flage) {
                total.push(arr11)
            }
        }
        right++
        if (right > nums.length - 1) {
            left++;
            right = left + 1
        }
        if (left > nums.length - 2) {
            current++;
            left = current + 1;
            right = left + 1
        }
    }
    return total
}
var nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
var nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]
// var nums = [0,0,2,10,0]
console.log(start(nums));