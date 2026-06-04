

// Read two numbers, and print to the console the result of
// the operators:     +, *, % 

var number1 = +prompt('Enter first number:')
var number2 = +prompt('Enter second number:')

console.log('Number1:', number1)
console.log('Number2:', number2)

var sum = number1 + number2
console.log('Sum:', sum)

var mult = number1 * number2
console.log('Mult:', mult)

var modulus = number1 % number2
console.log('Modulus:', modulus)