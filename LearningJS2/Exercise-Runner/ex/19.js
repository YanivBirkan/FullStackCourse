//ex 19
/*
19. Read 10 numbers from the user. Check each number – if it is even, print it, otherwise print a
message saying that the number is odd. 
*/

var MSG = "enter number:";
var count = 0;
while(count<=10){
    var num = prompt(MSG);
    if(num%2 == 0){
        alert(num);
    }
    else{
        alert(`the number ${num} is odd`)
    }
    count++;
}