var  currBalance = 1000;
const pin = '0796';
var enteredPin = prompt("enter a secret pin code:")
if(enteredPin==pin){
   var withdrawNum= +prompt("enter amount of moneyyou would like to withdraw")
   if(currBalance-withdrawNum <= 0){
    alert("you cant withdraw more than you have in your account")
   }
   else{
    currBalance -= withdrawNum;
    alert(`current Balance =${currBalance}`) ;
   }

}
else{
    alert("inncorrect PIN code");
}