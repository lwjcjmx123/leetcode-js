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
    console.log(s.split(' '));
    let arr = s.split(' ')
    let len = arr.length
    if (len < 1 || !(/\w+/.test(s))) return 0
    let pos = arr.lastIndexOf('')
    while (pos === arr.length-1) {
        arr.pop()
        pos = arr.lastIndexOf('')
    }
    return arr[arr.length-1].length
};

console.log(lengthOfLastWord("b   a    "));

