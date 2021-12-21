/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let num = nums[0]
    // 原理是 按位异或 运算满足交换律和结合律
    for (let i = 1, len = nums.length; i < len; i++) {
        num = num ^ nums[i]
    }
    return num
};
