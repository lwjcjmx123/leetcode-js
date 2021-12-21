/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // let [smallNums, largeNums] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1]
  // let smallMap = new Map()
  // let largeMap = new Map()
  // let result = []
  // smallNums.forEach(item => {
  //   if (smallMap.has(item)) {
  //     smallMap.set(item, smallMap.get(item) +1) 
  //   } else {
  //     smallMap.set(item, 1)
  //   }
  // })
  // largeNums.forEach(item => {
  //   if (largeMap.has(item)) {
  //     largeMap.set(item, largeMap.get(item) + 1) 
  //   } else {
  //     largeMap.set(item, 1)
  //   }
  // })
  // smallMap.forEach((value,key)=>{
  //   if(largeMap.get(key)){
  //     let i = 0
  //     let smallValue = largeMap.get(key) > value ? value : largeMap.get(key)
  //     while (i < smallValue){
  //       result.push(key)
  //       i++
  //     }
  //   }
  // })
  const map = new Map();
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  const result = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      result.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return result;
};

