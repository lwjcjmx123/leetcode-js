/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let setNum1 = new Set(nums1)
  let setNum2 = new Set(nums2)
  let result = []
  // 遍历小 集合。 提升速度
  let [smallSet, largeSet] = (setNum1.length < setNum2.length) ? [setNum1, setNum2] : [setNum2, setNum1];

  smallSet.forEach(num => {
    largeSet.has(num) && result.push(num);
  });
  return result

  // 函数式解法
  let setNum1 = new Set(nums1);

  return [...new Set(nums2.filter(num => setNum1.has(num)))];
};

