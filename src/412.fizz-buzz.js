/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = []
  for (let item = 1; item <= n; item++) {
    if (item % 3 === 0 && item % 5 !== 0) {
      arr.push('Fizz')
    } else if (item % 3 !== 0 && item % 5 === 0) {
      arr.push('Buzz')
    } else if (item % 15 === 0) {
      arr.push('FizzBuzz')
    } else arr.push(item.toString())
  }
  return arr
};
