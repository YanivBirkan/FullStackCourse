//EX6 -1
var a = +prompt("enter the - a coefficient:");
var b = +prompt("enter the - b coefficient:");
var c = +prompt("enter the - c coefficient:");

console.log("-b = " + -b);
console.log("2a = " + 2*a);
console.log("b² - 4ac = " + (b**2 -4*a*c));

//EX6 2-

var signB = ' '
    if(b>=0){
        signB = '+';
    }
var signC = ' '
    if(c>=0){
        signC = '+';
    }

var equation = a + 'x\u00B2' + signB + b +'X' + signC + c;
console.log("The quadratic equation = " + equation);

var discriminant = b**2 - 4*a*c;

if(discriminant == 0){
    var X = -b /2 * a
    console.log("X = " + X);
}
else if(discriminant<0){
    console.log("No solution");
}
else{
    var x1 = ( -b + Math.sqrt(discriminant) ) / (2*a);
    var x2 = ( -b - Math.sqrt(discriminant) ) / (2*a);

    console.log('x\u2081 =' +x1)
    console.log('x\u2082 =' +x2)


}

