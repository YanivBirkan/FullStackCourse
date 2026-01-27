var nums = [1,2,4,5];
var mul = 2
console.log(multBy(nums,mul , true));
function multBy(nums, multiplier,isImmutable){
    if(isImmutable){
        var numscopy = nums.slice();
        return numscopy
    }
    // var newArr =[];
    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i];
    //     newArr.push(num*multiplier);    
    // }
    // return newArr
}