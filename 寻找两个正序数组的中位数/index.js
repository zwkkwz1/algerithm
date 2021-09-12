var findMedianSortedArrays = function(nums1, nums2) {
    let short = []
    let long = []
    if (nums1.length > nums2.length) {
        short = nums2
        long = nums1
    } else {
        short = nums1
        long = nums2
    }
    let left = 0
    let right = long.length - 1
    while (right >= 0) {
		let mid1 = (left + right) >> 1
		let left2 = 0
		let right2 = short.length - 1
		let smid = (short.length - 1) >> 1
		let bmid = short.length >> 1
		if (long[mid1] > short[smid] && long[mid1] < short[bmid] && !(right & 1)) {
		    return long[mid1]
		} else if (long[mid1] > short[right2]) {
			short.push(long[mid1])
		} else {
			while (left2 < right2) {
				let mid = (left2 + right2) >> 1
				if (long[mid1] < short[mid]) {
					right2 = mid
				} else {
					left2 = mid + 1
				}
			}
			short.splice(left2, 0, long[mid1])			
		}
		right -= 1
		long.splice(mid1, 1)
    }
    return (short[(short.length - 1) >> 1] + short[short.length >> 1]) / 2
};
findMedianSortedArrays([1, 3], [2, 7])