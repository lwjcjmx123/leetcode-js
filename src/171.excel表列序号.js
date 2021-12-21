/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let num = 0
    for (let i = s.length - 1; i >= 0; i--) {
        num += (s.charCodeAt(i) - 64) * Math.pow(26, (s.length - 1 - i))
    }
    return num
};
