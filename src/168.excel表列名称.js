/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let s = ''
    while(n > 0) {
        s = String.fromCharCode(65 + --n % 26) + s
        n = Math.floor(n/26)
    }
    return s
};
