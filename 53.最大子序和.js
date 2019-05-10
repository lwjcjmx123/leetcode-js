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
    var sum = 0;
    var max = -Number.MAX_VALUE;

    for (var i = 0; i < A.length; i++) {
        sum = Math.max(sum + A[i], A[i]);
        max = Math.max(max, sum);
    }
    return max;
};

