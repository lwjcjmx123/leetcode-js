/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let prev = 1;
        let next = n;
        let mid = (1+n)/2 | 0
        while(prev < next) {
          if (!isBadVersion(mid)){
            prev = mid + 1
          } 
          else {
            next = mid
          }
          mid = (prev + next) / 2 | 0
        }
        return prev
    };
};

