/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let l = nums.length;
    if (l == 0) {
        return 0
    } else if (l == 1) {
        return nums[0]
    } else if (l == 2) {
        return Math.max(nums[0], nums[1])
    }
    // 注意一下，第二个点的值也需要做一个Math,max的判断
    let dp = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < l; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
    }
    return dp[l - 1]
};

rob([4, 1, 1, 3])

