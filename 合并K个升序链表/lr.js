function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var lo1 = new ListNode(1, lo2)
var lo2 = new ListNode(4, lo3)
var lo3 = new ListNode(5, null)

var lt1 = new ListNode(1, lt2)
var lt2 = new ListNode(3, lt3)
var lt3 = new ListNode(4, null)

var ls1 = new ListNode(2, ls2)
var ls2 = new ListNode(6, null)
const lists = [[lo1, lo2, lo3], [lt1, lt2, lt3], [ls1, ls2]]

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let index = 0
  while(lists.length > 1) {
    let i = 0
    let first = lists[0][0].val
    while(lists[1].length > 0) {
      if (lists[1][0] < first) {
        lists[0].splice(l, 0, nums)
        lists[1].splice(0, 1)
        i = 0
      }
      first = first.next.val
    }
    lists.splice(1, 1)
  }
  return lists[0]
};
mergeKLists(lists)
// TODO：可优化。应该不用完全排序 