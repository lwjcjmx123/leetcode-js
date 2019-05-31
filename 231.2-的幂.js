/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // 数学公式
    return Number.isInteger(Math.log(n) / Math.log(2));

    if(n ===1) return true
    while(n >=2) {
        n /= 2
    }
    if(n !== 1) return false 
    else return true
};
