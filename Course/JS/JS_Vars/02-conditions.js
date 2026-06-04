

// Read 2 numbers and print the bigger one

// var num1 = +prompt('Num?')
// var num2 = +prompt('Num?')

// console.log('num1:', num1)
// console.log('num2:', num2)

// if (num1 > num2) {
//     console.log('Bigger:', num1)
// } else {
//     console.log('Bigger:', num2)
// }


////////////////////////////////////////////////////////////////

// Ask the user for the meal price,
// and print the total price with a 10% tip
// Use confirm() to ask the user if he was super happy,
// if so, add 5% more


// var mealPrice = +prompt('Enter meal price?') // 100
// console.log('mealPrice:', mealPrice)

// var totalPrice = mealPrice * 1.1 // 110

// var isSuperHappy = confirm('Feeling super happy?') // true / false
// console.log('isSuperHappy:', isSuperHappy)

// if (isSuperHappy) {
//     totalPrice = mealPrice * 1.15
// }

// console.log('totalPrice:', totalPrice)

////////////////////////////////////////////////////////////////

// Read 2 numbers and check if either of them is a divider of the other

// var num1 = +prompt('Num 1?')
// var num2 = +prompt('Num 2?')

// console.log('num1:', num1)
// console.log('num2:', num2)

// if (num1 === num2) {
//     console.log('Same numbers...')
// } else if (num1 % num2 === 0) {
//     console.log(num2 + ' divides ' + num1)
// } else if (num2 % num1 === 0) {
//     console.log(num1 + ' divides ' + num2)
// } else {
//     console.log('Not dividers')
// }

/////////////////////////////////////////////////////////////////

// Read 3 numbers and check if they could be valid triangle sides,
// and which triangle are they
// triangle / isosceles / equilateral / right-angled
// ישר זווית / שווה צלעות / שווה שוקיים / משולש

// var side1 = +prompt('Side1?')
// var side2 = +prompt('Side2?')
// var side3 = +prompt('Side3?')

// if (side1 + side2 > side3 &&
//     side1 + side3 > side2 &&
//     side2 + side3 > side1) {
//     console.log('Valid triangle')

//     if (side1 === side2 && side2 === side3) {
//         console.log('equilateral')
//     } else if (side1 === side2 ||
//         side2 === side3 ||
//         side1 === side3) {
//         console.log('isosceles')
//     }

//     if (side1 ** 2 + side2 ** 2 === side3 ** 2 ||
//         side1 ** 2 + side3 ** 2 === side2 ** 2 ||
//         side2 ** 2 + side3 ** 2 === side1 ** 2) {
//         console.log('Pitagoras')
//     }

// } else {
//     console.log('Not a triangle')
// }


// Read 3 grades, check that they are in range 0-100,
// if so, print their average.

// var grade1 = +prompt('Grade1?')
// var grade2 = +prompt('Grade2?')
// var grade3 = +prompt('Grade3?')

// if (grade1 >= 0 && grade1 <= 100 &&
//     grade2 >= 0 && grade2 <= 100 &&
//     grade3 >= 0 && grade3 <= 100) {
//     console.log('Valid grades')

//     var avg = (grade1 + grade2 + grade3) / 3
//     console.log('avg:', avg)
// }






// Read 2 numbers and print the bigger one

// let num1 = +prompt("enter first number");
// let num2 = +prompt("enter second number");

// console.log(`The biggest number is ${Math.max(num1,num2)}`);

////////////////////////////////////////////////////////////////

// Ask the user for the meal price,
// and print the total price with a 10% tip
// Use confirm() to ask the user if he was super happy,
// if so, add 5% more

var MealPrice= +prompt("Enter meal price");
var NewPrice = MealPrice *1.1

if(isHappy=confirm("feeling super happy?")){
    NewPrice = MealPrice*1.15
}

console.log("New Price = "+ NewPrice)

////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////

// Read 3 numbers and check if they could be valid triangle sides,
// and which triangle are they
// triangle / isosceles / equilateral / right-angled
// ישר זווית / שווה צלעות / שווה שוקיים / משולש

/////////////////////////////////////////////////////////////////


