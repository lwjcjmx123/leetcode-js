/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null
    let cur = head.next, prev = head
    while(cur) {
        if (cur.val ===val) {
            cur = cur.next;
            prev.next = cur;
        }
        else{
            prev = cur;
            cur = cur.next
        }
    }
    if(head.val === val) return head.next
    return head
};

