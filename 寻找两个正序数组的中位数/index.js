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
		} else if (long[mid1] >= short[right2]) {
			// const l = right2 + 1
			short.push(long[mid1])
			updata(mid1, short.length - 1, short.length - 1, right + 1) // short.length - 1 因为 short已经加了一个数
			right = long.length - 1
			// long.splice(mid1, 1)
		} else {
			while (left2 < right2) {
				let mid = (left2 + right2) >> 1
				if (long[mid1] < short[mid]) {
					right2 = mid
				} else {
					left2 = mid + 1
				}
			}
			// 左侧 left2个。 右侧 right2 - left2
			short.splice(left2, 0, long[mid1])
			updata(mid1, left2, short.length - 1, right + 1) // short.length - 1 因为 short已经加了一个数
			right = long.length - 1
		}
		// right -= 1
		// long.splice(mid1, 1)
    }
	function updata(mid1, left2, shortLen, longLen) {
		if (longLen === 1) {
			long.splice(mid1, 1) // 剪切mid1
			return
		}
		if (longLen & 1) { // mid1左右数量相同
			const x2 = Math.max(shortLen - 2 * left2 + 3 >> 1, 1) // 对于右侧的来说。
			short = [...short, ...long.slice(mid1 + x2)] // 剪切右侧的放入short右侧
			const x = Math.max(2 * left2 - shortLen + 3 >> 1, 1) // 对于左侧的来说。
			if (mid1 - x + 1 > 0) {
				short = [...long.slice(0, mid1 - x + 1), ...short] // 剪切左侧的放入short左侧
				long = long.slice(mid1 - x + 1, mid1 + x2) // 更新long
				long.splice(x - 1, 1) // 剪切mid1
			} else {
				long = long.slice(0, mid1 + x2)
				long.splice(mid1, 1) // 剪切mid1
			}
		} else { // mid1左边比右边少一个
			const x2 = Math.max(shortLen - 2 * left2 + 4 >> 1, 1) // 对于右侧的来说。
			short = [...short, ...long.slice(mid1 + x2)] // 剪切右侧的放入short右侧
			const x = Math.max(2 * left2 - shortLen + 2 >> 1, 1) // 对于左侧的来说。
			if (mid1 - x + 1 > 0) {
				short = [...long.slice(0, mid1 - x + 1), ...short] // 剪切左侧的放入short左侧
				long = long.slice(mid1 - x + 1, mid1 + x2) // 更新long
				long.splice(x - 1, 1) // 剪切mid1
			} else {
				long = long.slice(0, mid1 + x2)
				long.splice(mid1, 1) // 剪切mid1
			}
		}
	}
    return (short[(short.length - 1) >> 1] + short[short.length >> 1]) / 2
};
// findMedianSortedArrays([1], [2,3,4])

var findMedianSortedArrays2 = function(nums1, nums2) {
    let short = []
    let long = []
    // let r
    if (nums1.length > nums2.length) {
        short = nums2
        long = nums1
    } else {
        short = nums1
        long = nums2
    }
    let left = 0
    let right = long.length - 1
    // let mid1 = long.length >> 1
    // let smid = short[(short.length - 1) >> 1]
    // let bmid = short[short.length >> 1]
    while (right >= 0) {
		let mid1 = (left + right) >> 1
		let left2 = 0
		let right2 = short.length - 1
		let smid = (short.length - 1) >> 1
		let bmid = short.length >> 1
		if (long[mid1] > short[smid] && long[mid1] < short[bmid] && !(right & 1)) {
		    // r = long[mid1]
		    return long[mid1]
		} else if (long[mid1] > short[right2]) {
			short.push(long[mid1])
		} else {
			// 查找 long[mid1]再short中的位置
			while (left2 < right2) {
				let mid = (left2 + right2) >> 1
				if (long[mid1] < short[mid]) {
					right2 = mid
					// short = [...long.slice(0, mid1 + 1), ...short]
				} else {
					left2 = mid + 1
					// short = [...short, ...long.slice(mid1)]
				}
			}
			short.splice(left2, 0, long[mid1])			
		}
		right -= 1
		long.splice(mid1, 1)
		// if (left2 < smid) {
		// 	mid1 
		// } else if (left2 > bmid) {
		// 	short = [...short, ...long.slice(mid1)]
		// }
        // while (mid2 < smid || mid2 > bmid)
    }
    return (short[(short.length - 1) >> 1] + short[short.length >> 1]) / 2
};


const creatArr = () => {
	let a = new Set()
	for (let i = 0; i < 1000000; i++) {
		a.add(Math.round(Math.random() * 100000000))
	}
	return [...a].sort((a, b) => a - b)
}
function test() {
	let r = true
	for (let i = 1; i < 10; i++) {
		const arr1 = creatArr()
		const arr2 = creatArr()
		const a1 = JSON.parse(JSON.stringify(arr1))
		const a2 = JSON.parse(JSON.stringify(arr2))
		const t1 = getT()
		const res = findMedianSortedArrays(a1, a2)
		const t2 = getT()
		// const a3 = JSON.parse(JSON.stringify(arr1))
		// const a4 = JSON.parse(JSON.stringify(arr2))
		// const t3 = getT()
		// const res2 = findMedianSortedArrays2(a3, a4)
		const t4 = getT()
		const orderArr = [...arr1, ...arr2].sort((a, b) => a - b)
		const res3 = (orderArr[(orderArr.length - 1) >> 1] + orderArr[orderArr.length >> 1]) / 2
		const t5 = getT()
		if (res !== res3) {
			debugger
			console.log()
			r = false
			break
		} else {
			console.log('时间1', t2 - t1, '时间3', t5 - t4)
		}
	}
	if (r) {
		return '通过'
	} else {
		return '不通过'
	}
}

function getT() {
	return new Date().getTime()
}