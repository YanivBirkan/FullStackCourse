//ex 19

var MSG = "enter number:";
var count = 0;
while(count<=10){
    var num = prompt(MSG);
    if(num%2 == 0){
        alert("The number " + num + " is even");
    }
    else{
        alert("The number " + num + " is odd");
    }
    count++;
}