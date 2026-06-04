//ex 18

function isAbove18(age, name) {
    if (age < 18) {
        alert(name + " you are too young");
        return false;
    }
    else {
        alert(name + " you are above 18");
        return true;
    }
}
console.log(isAbove18());