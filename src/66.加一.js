/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length
    digits[len - 1] ++
    while(digits[len-1] === 10){
        digits[len-1] = 0
        // 又一次忘了考虑边界情况。数组长度为0，为1，都要考虑
        if(!digits[len-2]){
            digits = [1, ...digits]
            break;
        }
        digits[len - 2] ++
        len--
    }    
    return digits

};
