
console.log("new = " +biggerThan100([120,130,90,50,180,110,75]));
function biggerThan100(nums){
    var biggernums = [];
    for (let i = 0; i < nums.length; i++) {
        const num= nums[i];
        if(num>100){
            biggernums.push(num);

        }
    }
    return biggernums;
}
