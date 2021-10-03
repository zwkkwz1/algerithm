/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  function orderOneNum(arr, nums) {
    let r = arr.length - 1
    if (nums > arr[r]) {
      arr.push(nums)
      return r + 1
    }
    let l = 0
    while(l < r) {
      const mid = (l + r) >> 1
      if (nums < arr[mid]) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    arr.splice(l, 0, nums)
    return l
  }
  while(lists.length > 1) {
    // const mid = (0 + arr.length - 1) >> 1
    // lists[1].splice(mid, 1)
    function pushNum(arr1, arr2) {
      const mid = (arr2.length - 1) >> 1
      const p = orderOneNum(arr1, arr2.splice(mid, 1)[0])
      if (arr2.length === 0) {
        return
      } else if (mid > 0) {
        pushNum(arr1.slice(0, p), arr2.slice(0, mid - 1)) // 计算左侧
      } else {
        pushNum(arr1.slice(0, p), arr2.slice(mid - 1)) // 计算右侧
      }
    }
    pushNum(lists[0], lists[1])
    lists.splice(1, 1)
  }
  return lists[0]
};
mergeKLists([[1,4,5],[1,3,4],[2,6]])
// TODO：可优化。应该不用完全排序 