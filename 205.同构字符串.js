/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var obj = {};
    // 互相耦合，形成键，再互相对比
    for (var i = 0; i < s.length; i++) {
        if (!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
        if (!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
        if (t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false;
        
    }
    return true;
};
