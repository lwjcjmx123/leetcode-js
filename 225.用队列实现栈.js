/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.queue = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    // 用队列模拟栈，之前是用数组直接模拟。就没有提现出队列的思想，FIFO
    let tem = [];
    while (this.queue.length > 1) {
        tem.push(this.queue.shift());
    }
    let last = this.queue.shift();
    this.queue = tem;
    return last;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    let tem = [];
    while (this.queue.length > 1) {
        tem.push(this.queue.shift());
    }
    let last = this.queue.shift()
    tem.push(last);
    this.queue = tem;
    return last;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length === 0;
};

