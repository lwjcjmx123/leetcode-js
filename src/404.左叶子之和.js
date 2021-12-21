/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumOfLeftLeaves = function (root, isLeft) {
  if (root === null) return 0
  let res = 0
  if (root === null) return 0
  if (root.left && root.left.left == null && root.left.right == null) {
    res += root.left.val
  }

  res += sumOfLeftLeaves(root.left)
  res += sumOfLeftLeaves(root.right)
  return res
  // if (!x) return 0
  // if (!x.left && !x.right && isLeft) return x.val

  // return sumOfLeftLeaves(x.left, true) + sumOfLeftLeaves(x.right, false)

};

