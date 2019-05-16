/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 本题思路 就是 归并排序，多指针。分治法 nums1 和 2 分别有首指针
    let arr = [...nums1]
    let i=0,j=0,l=0;
    // 3指针遍历，
    while(i<m && j<n){
        if(arr[i] <= nums2[j]){
            nums1[l++] = arr[i++]
        }else {
            nums1[l++] = nums2[j++]
        }
    }
    // 将左边剩余的填充进数组
    while (i < m) {
        nums1[l++] = arr[i++]
    }
     // 将右边剩余的填充进数组
    while (j<n) {
        nums1[l++] = nums2[j++]
    }
    
};
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6],3)