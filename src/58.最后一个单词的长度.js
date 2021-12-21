/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let arr = s.split(' ')
    // let len = arr.length
    // if (len < 1 || !(/\w+/.test(s))) return 0
    // let pos = arr.lastIndexOf('')
    // while (pos === len-1) {
    //     arr.pop()
    //     len--
    //     pos = arr.lastIndexOf('')
    // }
    // return arr[len-1].length

    s = s.trim()
    return s.length - s.lastIndexOf(' ') - 1
};

