// ex 20

var count = 0;
var max = 0;
var min = Infinity;
var sum= 0;
while(count<10){
    var eNum = +prompt("enter number:");
    if(eNum>max) max=eNum;
    if(eNum<min) min=eNum;
    sum+=eNum;
    count++;
}
var avg = sum/10;
console.log(`Max num = ${max}`);
console.log(`Min num = ${min}`);
console.log(`Avg = ${avg}`);