/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 只用string的方法
  let isConstruct = true
  let len = ransomNote.length
  for (let item of ransomNote) {
    if (!magazine.includes(item)) {
      isConstruct = false
    } else {
      magazine = magazine.replace(item, '')
    }
  }
  return isConstruct

  // 官方解法，
  // if (ransomNote.length > magazine.length) return false;

  // let charFreq = {};

  // for (let char of magazine) {
  //   !charFreq[char] ? charFreq[char] = 1 : charFreq[char]++;
  // }

  // for (let char of ransomNote) {
  //   if (!charFreq[char]) return false;
  //   charFreq[char]--;
  // }

  // return true;
};
// console.log(": canConstruct -> canConstruct", canConstruct("aa", "ab"))

