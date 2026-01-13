//Write the following functions:

// printVowelsCount(str)- which receives a string and prints how many times each vowel appears.
// flipCase- which gets a string and changes the vowels to lowercase letters, and the rest to uppercase letters (i.e. Upset uPSeT).
// doubleVowels- which gets a string and doubles all the vowels in it.
// Test the functions using these inputs: 'aeiouAEIOU' & 'TelAvivBeach'


console.log(flipCase("TelAviV"));


function printVowelsCount(str){
    var Acount =0;
    var Ocount =0;
    var Ucount =0;
    var Icount =0;
    var Ecount =0;

    for (let index = 0; index < str.length; index++) {
        var dig=str.charAt(index);
        switch(dig){
            case 'a': Acount++;
                break;
            case 'o': Ocount++;
                break;
            case 'u': Ucount++;
                break;
            case 'i': Icount++;
                break;
            case 'e': Ecount++;
                break;
        }
    }
}

function flipCase(str){
    var newStr='';
    for (let index = 0; index < str.length; index++) {
        var dig=str.charAt(index);
        if(isVow(dig)){
            newStr += dig.toLowerCase();
        }
        else{
            newStr += dig.toUpperCase();
        }
    }
    console.log(newStr);
}



function isVow(dig){
    if(dig.toLowerCase()==='a'|| dig.toLowerCase()==='o' || dig.toLowerCase()==='u' || dig.toLowerCase()==='i' || dig==='e'){
        console.log("vow")
        return true;
    }
    else return false;
}