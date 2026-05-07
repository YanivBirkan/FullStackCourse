//ex29-1,2,3
var str= "123456";
var sum=0;
var mul =1;
for (let index = 0; index < str.length; index++) {
    var dig=parseInt(str.charAt(index))
    console.log(str.charAt(index));
    sum+= dig;
    mul *= dig
}
console.log(`sum of digits = ${sum}`);
console.log(`mul of digits = ${mul}`);
//29-4
var firstD=str.charAt(0);
var lastD=str.charAt(str.length-1);
var sumFNL = parseInt(firstD) + parseInt(lastD)
console.log(`first digit ${firstD} + last digit ${lastD} = ${sumFNL}`);

//29-5
var newStr = str.charAt(str.length-1);

var count = 1;
while(count<str.length-1){
    newStr+=str.charAt(count);
    count++;
}
newStr+=str.charAt(0);


console.log(newStr);

//ex30
var name1 = prompt("Enter first name:");
var name2 = prompt("Enter second name:");

if(name1.length>name2){
    alert(`${name1} is the longer name`);
}else{
    alert(`${name2} is the longer name`);
}


//ex31
var str = prompt("Enter string:");
var len = str.length;
var firstCh = str.charAt(0);
var lastCh = str.charAt(len-1);

console.log(` the string - ${str} length = ${len} , first character = ${firstCh} , last character = ${lastCh}  , \n
            the string in uppercase = ${str.toLocaleUpperCase()} , the string in lowercase = ${str.toLocaleLowerCase()}  `);



//ex32

var str = prompt("Enter string:");
var len = str.length;
var count =0;
var i = str.length-1;
var newStr = ' ';
while (count<len){
    newStr+=str.charAt(i);
    i--;
    count++;
}
console.log(newStr);

//ex33

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


//ex34 
function myIndexOf(str, searchStr) {
    debugger
    for (var i = 0; i < str.length - searchStr.length + 1; i++) {
        var cutStr = str.substring(i, searchStr.length + i)
        if (cutStr === searchStr) return i
    }
    return -1
}

console.log(myIndexOf("abcde" , "cd"));


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

//ex 36
var str = 'Igal,Moshe,Hai';
GetShortNLong(str);

function GetShortNLong(str){
    var short = str;
    var long ='';
    var name= '';
    str+=","
    for (let i = 0; i < str.length; i++) {
        var char=str.charAt(i);
        if(char!== ','){
            name+=char;
        }
        else{

            if(name.length>long.length) long=name;
            if(name.length<short.length) short=name;
            name=''
        }
    }
    console.log(`long name: ${long} , short name: ${short}`);
}


//ex37
function generatePass(passLength){
    var newPass='';
    var chars ='abcdefghijklmnopqrstvurwxyz1234567890';
    for (let i = 0; i < passLength; i++) {
        newPass+=chars.charAt(getRandomInt(chars.length));
    }
    return newPass
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(generatePass(5))