/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  let res = ''
  function vr(left, right) {
    if (right === left + 1) {
      return
    }
    const mid = (left + right) >> 1
    let s = strs[0].substr(0, mid)
    let v = strs.some(item => {
      return item.indexOf(s) !== 0
    })
    if (v) {
      vr(left, mid)
    } else {
      res = s
      vr(mid, right)
    }
  }
  let v = strs.some(item => {
    return item.indexOf(strs[0]) !== 0
  })
  if (!v) {
    return strs[0]
  }
  vr(0, strs[0].length)
  return res
};
longestCommonPrefix(["flower","flow","flight"])