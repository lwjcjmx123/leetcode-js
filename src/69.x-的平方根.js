/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x <= 1) return x
    let last = 0
    let res = 1
    while (res !=last) {
        last = res;
        // 牛顿迭代法
        res = (res + x / res) / 2;
    }
    return parseInt(res)
};

