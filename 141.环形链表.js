/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let a = []
    while (head !== null && head.next !== null) {
        if (a.includes(head.next)) {
            return true
        }
        else {
            a.push(head)
        }
        head = head.next
    }
    return false
};
