/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // const map = {};
  // var left = 0;

  // return s.split('').reduce((max, v, i) => {5
  //   console.log(": lengthOfLongestSubstring -> max", max)
  //   console.log(": lengthOfLongestSubstring -> v", v)
  //   console.log(": lengthOfLongestSubstring -> i", i)
    
  //   left = map[v] >= left ? map[v] + 1 : left;
  //   map[v] = i;
  //   return Math.max(max, i - left + 1);
  // }, 0);

  let num = 0, j = 0, t = 0
  for (let i = 0; i < s.length; i++) {
    t = s.slice(j, i).indexOf(s[i]);
    if (t == -1) {
      num = Math.max(num, i - j + 1)
    } else {
      j = j + t + 1
    }
  }
  return num
 };

