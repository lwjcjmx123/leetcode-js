/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 *
 * https://leetcode-cn.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (43.49%)
 * Total Accepted:    3.3K
 * Total Submissions: 7.4K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。如果剩余少于 k
 * 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。
 * 
 * 示例:
 * 
 * 
 * 输入: s = "abcdefg", k = 2
 * 输出: "bacdfeg"
 * 
 * 
 * 要求:
 * 
 * 
 * 该字符串只包含小写的英文字母。
 * 给定字符串的长度和 k 在[1, 10000]范围内。
 * 
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    // 首先切分字符串,分为左右两边,再考虑边界情况
    // let len = s.length
    // // 取余获取右边剩下的长度
    // let rem = len % (2 * k)
    // let left = s.slice(0, -rem)
    // let right = s.slice(-rem)
    // let bus = (len - rem) / (2 * k)
    // for (let i = 0; i < bus, i++) {
    //     for (let j = 0, start = i * 2 * k; j < k/2; j++) {

    //     }
    // }
    if (k <= 1) {
        return s;
    }
    var Arr = [];
    for (var i = 0; i < s.length; i += 2 * k) {
        var subStr = s.slice(i, i + 2 * k);
        var arr = subStr.split('');
        if (arr.length <= k) {
            var str = arr.reverse().join('');
        } else {
            var subArr = arr.slice(0, k);
            subArr.reverse();
            var str = subArr.concat(arr.slice(k, 2 * k)).join('');
        }
        Arr[i] = str;
    }
    var result = Arr.join('');
    return result;
};

