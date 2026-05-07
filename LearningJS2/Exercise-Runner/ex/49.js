function getNthLargest(nums, nthNum) {

    for (var i = 0; i < nthNum; i++) {
        var maxNum = getMax(nums)
        var maxNumIdx = nums.indexOf(maxNum)
        nums.splice(maxNumIdx, 1)
    }
    return maxNum
}

function getMax(nums) {
    var max = -Infinity
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
    }
    return max
}

console.log( getNthLargest([90, 80, 75, 99, 56, 87], 3))
