var str= "123";
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

var firstD=str.charAt(0);
var lastD=str.charAt(str.length-1);
var sumFNL = parseInt(firstD) + parseInt(lastD)
console.log(`first digit ${firstD} + last digit ${lastD} = ${sumFNL}`);

var newNum = str
