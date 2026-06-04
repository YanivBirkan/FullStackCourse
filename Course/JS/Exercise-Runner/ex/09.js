//ex 9

var num1 = +prompt("enter num1: ");
var num2 = +prompt("enter num2: ");
if(Number.isFinite(num1) && Number.isFinite(num2)){
   
    var diff = Math.abs(num1-num2); 

    if(diff<num1 && diff <num2){
        console.log("num1 = " + num1 + ", num2 = "+ num2 + ", diff = " + diff + " (numbers are relatively close!)");
    }
    else{
        console.log("num1 = " + num1 + ", num2 = "+ num2 + ", diff = " + diff);
    }
}