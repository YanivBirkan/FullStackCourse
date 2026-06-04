var numsL = [3,2,0,2,2,0,3];
console.log(printNumsCount(numsL))
function printNumsCount(nums){
    var count=[0,0,0,0];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        count[num]++;
    }
    return count;
}