/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0
    let j = height.length - 1
    function getRes(n, m) {
        return (m - n) * Math.min(height[m], height[n])
    }
    let res = 0
    while (i < j) {
        res = Math.max(res, getRes(i, j))
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return res
};
maxArea([1,8,6,2,5,4,8,3,7])
// TODO：可优化。应该不用完全排序 