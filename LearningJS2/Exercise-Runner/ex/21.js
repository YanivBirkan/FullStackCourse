// Exercise 21 - Divisible by 3
// Read numbers from the user, until the number 999 is entered. For each number:

// Print if it is divisible by 3.
// If it is bigger by more than 10 from the previous number, print a suitable message.
////////////////////////

var eNum=+prompt("Enter number");
var Prevnum= eNum;
while(eNum!=999){
    if(eNum%3==0) console.log("the num is divisible by 3");
    if(eNum-Prevnum >=10) console.log("the enterd num is bigger by more than 10 from the pre num")
    Prevnum = eNum;

    eNum=+prompt("Enter number");
}