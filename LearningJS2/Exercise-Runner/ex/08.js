//ex 8

var num1 = +prompt("enter num1: ");
var num2 = +prompt("enter num2: ");
var num3 = +prompt("enter num3: ");

if(num1<num2 && num1<num3){
    console.log("The smallest number is :" + num1);
}
else if(num2<num1 && num2<num3){
    console.log("The smallest number is :" + num2);
}
if(num3<num1 && num3<num2){
    console.log("The smallest number is :" + num3);
}
