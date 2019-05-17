/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 动态规划的思想 前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
    let max = 0, min = Number.MAX_VALUE;
    let i = 0, len = prices.length 
    for(let i =0;i<len; i++){
        min = Math.min(min , prices[i]) 
        max = Math.max(prices[i]-min, max)
    }
   return max
};

maxProfit([7, 1, 5, 3, 6, 4])