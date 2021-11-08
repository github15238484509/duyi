// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

//  

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]

/**
 * 
 * @param {Array} nums 
 * @param {Number} target 
 */
var twoSum = function (nums, target) {
    var numlen = nums.length;
    var left = 0
    var right = left + 1
    while (left !== numlen) {
        if (target === nums[left] + nums[right]) {
            return [left, right]
        }
        right = right + 1
        if (right === numlen) {
            left = left + 1
            right = left + 1
        }
    }
};
nums = [3,3];target = 6
twoSum(nums, target)

