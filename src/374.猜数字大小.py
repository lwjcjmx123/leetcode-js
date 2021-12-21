#
# @lc app=leetcode.cn id=374 lang=python
#
# [374] 猜数字大小
#
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):
class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        low = 1
        high = n
        if n == 1:
            return n
        while low <= high:
            mid = (low + high) / 2  # 取到中间值
            flag = guess(mid)  # 将每次猜的值与中间值进行比较
            if flag == 1:
                low = mid + 1  # 如果猜小了，就进行相应的调整，即往大了调
            elif flag == -1:
                high = mid - 1
            else:
                return mid
