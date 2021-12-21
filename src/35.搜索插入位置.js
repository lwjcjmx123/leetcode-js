/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target)
    }
    let len = nums.length
    if(target < nums[0]) return 0
    if (target > nums[len-1]) return len
    for(let i=0;i<len-1;i++){
        if(target>nums[i]&& target<nums[i+1]){
            return i+1
        }
    }
};

