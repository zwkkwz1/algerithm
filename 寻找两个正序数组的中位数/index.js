/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let l = nums.length
    let i = l - 1
    let j = i - 1
    while(i > 0) {
        if (nums[i] > nums[j]) {
            nums.splice(j, 0, nums.splice(i, 1)[0])
            break
        } else {
            j--
            if (j === -1) {
                i--
                j = i - 1
            }
        }
    }
    if (i=== 0 && j===-1) {
        let left = 0
        let r = l - 2
        while (r > -1) {
            nums.push(nums.splice(r, 1)[0])
            r--
        }
    }
};

// nextPermutation([3,2,1])
