/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length + 1; i++) {
    arr.push(i)
  }
  let set = new Set(arr)
  let sum = 0
  for (let i = 0; i < nums.length; i++){
    sum = sum- nums[i] + i
    set.delete(nums[i])
  }
  return sum + nums.length
  return [...set.values()][0]
};

