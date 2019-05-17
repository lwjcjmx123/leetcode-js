/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(A) {
    // 动态规划， 
    var sum = 0;
    var max = -Number.MAX_VALUE;
    // 当前连续子序列和+当前数如果小于当前数的话，当前连续子序列之和就不是最大和子序列
    for (var i = 0; i < A.length; i++) {
        sum = Math.max(sum + A[i], A[i]);
        max = Math.max(max, sum);
    }
    return max;
};

