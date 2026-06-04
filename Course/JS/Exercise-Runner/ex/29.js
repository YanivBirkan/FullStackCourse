//ex29-1,2,3
var str= "123456";
var sum=0;
var mul =1;
for (let index = 0; index < str.length; index++) {
    var dig=parseInt(str.charAt(index))
    console.log(str.charAt(index));
    sum+= dig;
    mul *= dig
}
console.log(`sum of digits = ${sum}`);
console.log(`mul of digits = ${mul}`);
//29-4
var firstD=str.charAt(0);
var lastD=str.charAt(str.length-1);
var sumFNL = parseInt(firstD) + parseInt(lastD)
console.log(`first digit ${firstD} + last digit ${lastD} = ${sumFNL}`);

//29-5
var newStr = str.charAt(str.length-1);

var count = 1;
while(count<str.length-1){
    newStr+=str.charAt(count);
    count++;
}
newStr+=str.charAt(0);


console.log(newStr);
