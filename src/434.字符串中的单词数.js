/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  // let len = s.match(/\s/g)
  // if (len) {
  //   return len.filter(Boolean).length
  //   return len.length +1
  // } else if (s.match(/\w/g)) {
  //   return 1
  // } else
  //   return 0

  return s.split(' ').filter(Boolean).length;
};

