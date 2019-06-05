/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // let count = 0
  // while (nums.includes(0)) {
  //   count++
  //   nums.splice(nums.indexOf(0), 1)
  // }
  // for (let i = 0; i < count; i++) {
  //   nums.push(0)
  // }

  var zeroCount = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount++;
    } else if (zeroCount > 0) {
      nums[i - zeroCount] = nums[i];
      nums[i] = 0;
    }
  }
};

