
var nums = [234, 43, 55, 63, 5, 6, 235, 547]
console.log(sortNums(nums))
function sortNums(nums) {

    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < (nums.length - i - 1); j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
}