/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let len = nums.length
    if (len === new Set(nums).size) return false
    let arr = []
    for (let i = 0; i < len; i++) {
        if (arr.includes(nums[i])) {
            if (i - arr.lastIndexOf(nums[i]) <= k) {
                return true
            }
        }
        arr.push(nums[i])
    }
    return false
};
