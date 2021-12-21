/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    // 类似反转链表，只要遍历next就好
    let result = head
    while(head!==null && head.next!==null){
        if (head.val === head.next.val) {
            head.next = head.next.next
        }  
        else head = head.next
    }
    return result
};

