// Exercise 34 - myIndexOf()
// Implement a function named myIndexOf(str, searchStr) which receives two strings.

// The function returns the index of the second string within the first, or -1 if it wasn’t found (do not use the built-in indexOf()function… ).

console.log(encrypt('ABC'));

function encrypt (str){
   
    var newStr='';
    for (let i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);    
        newStr+=String.fromCharCode(code+5);
    }    
    return newStr;
}