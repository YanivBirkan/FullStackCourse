var nums =[5,4,5,2,1,2,4]
console.log(removeDuplicates(nums))
function removeDuplicates(nums) {
    var newArr=[];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(!newArr.includes(num)) newArr.push(num);
    }
    return newArr;
}