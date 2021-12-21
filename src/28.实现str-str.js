/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (37.40%)
 * Total Accepted:    47K
 * Total Submissions: 123.5K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle)
// };

// var strStr = function (haystack, needle) {

//     return haystack.includes(needle) ? haystack.indexOf(needle) : -1;

// };

var strStr = function (sourceStr, searchStr) {
    var i = 0,
        j = 0,
        sourceLen = sourceStr.length,
        searchLen = searchStr.length;
    if (sourceLen === 0 && searchLen === 0 || searchLen === 0) {
        return 0
    }
    if (searchLen > sourceLen) {
        return -1
    }
    while (i < sourceLen) {
        // 两字母相等则继续
        if (sourceStr.charAt(i) === searchStr.charAt(j)) {
            i++;
            j++;
        } else { // 两字母不等则角标后退重新开始匹配
            i = i - j + 1; // i 回退到上次匹配首位的下一位
            j = 0; // j回退到子串的首位
        }
        //是字符串的长度
        if (j === searchLen) {
            //匹配起始位置
            return i - j;
        }
    }
    return -1;
};
