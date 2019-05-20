/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let sum = 0
    let len = prices.length
    for (let i = 1; i < len; i++) {
        if(prices[i] > prices[i-1]){
            sum += prices[i] - prices[i-1]
        }
    }
    return sum
};

