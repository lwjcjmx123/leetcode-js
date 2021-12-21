/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
// 建一个map 缓存计算结果，避免重复运算，降低复杂度。
// let m = new Map()
// // 斐波那契数列解法
// var climbStairs = function(n) {
//     if(n === 1) {
//         return 1
//     }
//     if(n === 2) {
//         return 2
//     }
    
//     if(m.get(n)){
//         return m.get(n)
//     }
//     else {
//         let value = climbStairs(n - 1) + climbStairs(n - 2)
//         m.set(n, value)
//         return value
//     }
// };

// 动态规划
var climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }

    let a = 1, b = 2, temp = 0;
    for(let i = 3; i<=n; i++) {
        temp = a + b
        a = b
        b = temp
    }
    return temp
};