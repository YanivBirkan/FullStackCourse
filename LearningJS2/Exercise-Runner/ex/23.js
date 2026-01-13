// Write the function getFactorial which receives a number and returns n! 
// (Google ‘factorial’ if you are not sure what the mathematical definition of it is).

function getFactorial(num){
    if (num<0) return NaN;
    var factNum = 1;
    while(num>1){
        factNum*=num;
        num--;
    }
    return factNum
}
console.log(getFactorial(4))
  

