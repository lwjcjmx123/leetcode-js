/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.50%)
 * Total Accepted:    57.1K
 * Total Submissions: 177K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */

 // 遍历字符串, 然后push 到set 里 哪个set长度为2 即终止
var longestCommonPrefix = function(strs) {
    if(!strs[0]){
        return ""
    }
    if(strs.length === 1){
        return strs[0]
    }
    let len = strs[0].length
    let sets = []
    let x = ''
    for(var i=0; i<len; i++){
        sets[i] = new Set()
        strs.forEach(item => {
            if(!item){
                // 数组中有空元素
                x= 'f'
                return 
            }
            if (!item[i]) {
                // 后面元素没有第一个元素长
                x = i
                return
            }
            sets[i].add(item[i])
        })
        if(x === 'f'){
            // 有空元素直接返回
            return ""
        }
        if(x) {
            return strs[0].slice(0, i)
        }
        // console.log(sets[i])
        if (sets[i].size > 1) {
            return strs[0].slice(0, i)
        }
    }
    console.log(x)

    return strs[0]
};


