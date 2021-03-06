# 最长递增子序列

给你一个整数数组 nums ，找到其中最长严格递增子序列。<br/>
子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

例如：

```
输入：nums = [10,9,2,5,3,7,101,18]
输出：[2,4,5,7]
解释：最长递增子序列是：[2,3,7,101] 或者 [2,3,7,18] 或者 [2,5,7,101] 或者 [2,5,7,18]。其中：[2,3,7,18]下标对应的数组是[2,4,5,7]
```

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/longest-increasing-subsequence)<br/>
**注意**：与力扣原题不同。原题要输出的只是最长子序列的长度。

## 题解
使用的是vue3中使用的方法。稍微改了一下以至于更容易理解。<br/>
vue3使用的是贪心算法加二分查找。并且用一个对象（vue3中使用的是一个数组）记录每一个加入子序列的下标之前正确的下标。用于最后倒叙查找、获取正确的结果。<br/>
和vue3一样。返回的是nums的下标数组。<br/>
即
```
输入：nums = [10,9,2,5,3,7,101,18]
输出：[2,4,5,7]
```
