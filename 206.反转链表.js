/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return null
    let cur = head.next,
    prev = head;
    prev.next = null
    while(cur !==null){
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    return prev
};

