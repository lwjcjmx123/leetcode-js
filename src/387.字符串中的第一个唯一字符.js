/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for(let item of s) {
    if(s.indexOf(item) === s.lastIndexOf(item)){
      return s.indexOf(item)
    }
  }
  return -1
};
console.log(": firstUniqChar -> firstUniqChar", firstUniqChar('loveleetcode'))

