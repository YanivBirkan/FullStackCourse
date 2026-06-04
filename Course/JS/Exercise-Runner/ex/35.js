//ex35
console.log(encrypt('ABC'));

function encrypt (str){
   
    var newStr='';
    for (let i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);    
        newStr+=String.fromCharCode(code+5);
    }    
    return newStr;
}