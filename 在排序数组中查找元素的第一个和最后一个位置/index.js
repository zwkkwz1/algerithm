/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分查找法
var searchRange = function(nums, target) {
  let res = [-1, -1]
  // 查找最左
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = (left + right) >> 1
    if (nums[mid] >= target) {
      right = mid
    } else {
      left = mid + 1
    }
    // else {
    //   // 向左右查询
    //   findTargetInLeft(mid)
    //   findTargetInRight(mid)
    //   break
    // }
  }
  if (nums[left] === target) {
    res[0] = left
  }
  if (res[0] === -1) {
    return res
  }
  left = 0
  right = nums.length - 1
  // 查找最右
  if (nums[right] === target) {
    res[1] = right
    return res
  } else {
    while (left < right) {
      const mid = (left + right) >> 1
      if (nums[mid] <= target) {
        left = mid + 1
        if (nums[mid] === target) {
          res[1] = mid
        }
      } else {
        right = mid - 1
      }
    }
    if (nums[left] === target) {
      res[1] = left
    }
  }
  return res
};
searchRange([1,2,3,4,5], 2)
// TODO：可优化。应该不用完全排序
