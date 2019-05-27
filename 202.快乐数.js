/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set()
    // 核心是判断出不快乐的数 直接返回，只要set 里有值，说明开始循环了。肯定不是快乐数
    while (n !== 1) {
        num = 0
        while (n > 0) {
            tmp = n % 10
            num += tmp ** 2
            n = (n / 10 | 0) // 位运算 取整
        }
        if(set.has(num)){
            return false
        }else {
            set.add(num)
        }
        n = num
    }
    return true

};
