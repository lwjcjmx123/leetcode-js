/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s === '') return true
    let reg = /[^A-Za-z0-9]/g
    // 处理字符串，清除干扰
    s = s.replace(reg, '').toLowerCase()
    let len = s.length
    let isPalind = true
    // 头尾双指针循环
    for(let i=0,j=len-1;i<j;i++,j--){
        if(s.charAt(i) !== s.charAt(j)){
            isPalind = false
        }
    }
    return isPalind
};
