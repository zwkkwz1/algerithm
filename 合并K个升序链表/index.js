
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  function orderOneNum(arr, iarro, nums) {
    let r = iarro[1]
    if (nums > arr[iarro[1]]) {
      arr.splice(iarro[1] + 1, 0, nums)
      // arr.push(nums)
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
    function pushNum(arro, iarro, arrt, iarrt) {
      const mid = (iarrt[0] + iarrt[1]) >> 1
      const p = orderOneNum(arro, iarro, arrt.splice(mid, 1)[0])
      if (arrt.length === 0) {
        return
      } else if (mid > 0) {
        // const a1 = arro.slice(0, p)
        // const ml = mid >> 1
        // const a2 = arrt.slice(0, mid)
        pushNum(arro, [0, p], arrt, [0, mid]) // 计算左侧
      }
      if (mid >= arrt.length || (p + 1) >= arro.length) {
        return
      }
      // const a1 = arro.slice(p + 1)
      // const a2 = arrt.slice(mid)
      pushNum(arro , [p + 1, arro.length - 1], arrt, [mid, arrt.length - 1]) // 计算右侧
    }
    pushNum(lists[0], [0, lists[0].length - 1], lists[1], [0, lists[1].length - 1])
    lists.splice(1, 1)
  }
  return lists[0]
};
mergeKLists([[1,4,5],[1,3,4],[2,6]])
// TODO：可优化。应该不用完全排序 