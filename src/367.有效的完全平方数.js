/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if(num ===1)
  return true
  r = num
  while (r * r > num){
    r = (r + num / r) / 2 | 0
  }
  
  if (r * r == num) 
  return true
  else
  return false
};

