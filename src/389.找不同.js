/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  // 取巧方法， 改变了原数据
  for(let item of s){
    t = t.replace(item, '')
  }
  return t
};
console.log(": findTheDifference -> findTheDifference", findTheDifference("abcd", "abcde"))

