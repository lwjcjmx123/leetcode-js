/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 由题意可知， 众数总是存在，且必定只有一个（因为次数大于 n/2，剩下的都小于n/2）
    // 将数组排序取中位数肯定能获得答案，但没有意义（因为次数大于 n/2，就算是首尾开始，也会占据中位）
    // 1 摩尔投票法
    // let count = 0, now;
    // for (let i = 0, len = nums.length; i < len; i++) {
    //     if(count === 0) {
    //         now = nums[i]
    //         count = 1;
    //     } else if (nums[i] == now) {
    //         count ++
    //     } else {
    //         count --
    //     }
    // }
    // return now
    // 2 利用map存储元素
    let map = new Map(), major;
    nums.forEach(item => {
        if(map.get(item)){
            map.set(item, map.get(item) +1)
        } else map.set(item, 1)
    })
    map.forEach((value, key) => {
        if (value > nums.length/2) {
            major = key
        }
    })
    return major
};
