var nums1 = [1,2,3];
var nums2 = [3,4,5,6,7,8];
sumArrays(nums1,nums2);
function sumArrays(numArr1,numArr2){
    var shortArr=(numArr1.length>numArr2.length) ? numArr2 : numArr1; 
    var longArr=(numArr1.length>numArr2.length) ? numArr1 : numArr2;
    var sum=0;
    var newArr=[];
    for (let i = 0; i < shortArr.length; i++) {
        sum = shortArr[i] +longArr[i];
        newArr.push(sum);
        sum=0;
    }
    for (let i = shortArr.length; i < longArr.length; i++) {
        newArr.push(longArr[i]);        
    }
    console.log(newArr)
}