/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (arr) {
  // let len = nums.length
  // let i = 0, j = len - 1
  // let leftNum = nums[i], rightNum = nums[j];
  // for(,i<len;i++,j--){
  //   leftNum += arr[i]
  //   rightNum + = arr[j]
  //   arr[i] = leftNum
  //   arr[j] = rightNum
  // }
  // while(leftNum != rightNum){
  //   if (leftNum < rightNum){
  //     i++
  //     leftNum += nums[i]
  //     console.log(": pivotIndex -> leftNum", leftNum)
  //   }
  //   if(leftNum > rightNum){
  //     j--
  //     rightNum += nums[j]
  //     console.log(": pivotIndex -> rightNum", rightNum)
  //   }
  //   if(i>j){
  //     break
  //   }
  // }
  // if (i+1 == j-1 && leftNum === rightNum) {
  //   return i+1
  // } else {
  //   return -1
  // }
  const sum = arr.reduce((r, n) => r + n, 0);
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    const right = sum - left - arr[i];
    if (left === right) {
      return i;
    }
    left += arr[i];
  }
  return -1;
};

console.log(": pivotIndex -> pivotIndex", pivotIndex([-1, -1, -1, -1, -1, 0]))
