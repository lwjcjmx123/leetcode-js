/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let set = new Set()
    for (let i = 0, len = nums.length; i < len; i++) {
        if(set.has(nums[i])) return true
        else set.add(nums[i])
    }
    return false
};