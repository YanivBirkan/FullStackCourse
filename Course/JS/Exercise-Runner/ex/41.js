var num = 753;
console.log(`The num ${num} in letters = ${sayNum(num)}`);
function sayNum(num){
    //option1: aray-
    // var numbers =["zero","one","two","three","four","five","six","seven","eight","nine"];
    // var newNum ="";
    // var numstr= num+'';
    // for (let i = 0; i < numstr.length; i++) {
    //     const dig=numstr[i];
    //     newNum += numbers[dig] + " ";
    // }    
    // return newNum;    

    //option2:switch case
    var newNum="";
    var numstr = num+"";
    for (let i = 0; i < numstr.length; i++) {
        const dig = numstr[i];
        console.log(dig)
        switch(parseInt(dig)){
            case 0:
                newNum += "zero ";
                break;
            case 1:
                newNum += "one ";
                break;
            case 2:
                newNum += "two ";
                break;
            case 3:
                newNum += "three ";
                break;
            case 4:
                newNum += "four ";
                break;
            case 5:
                newNum += "five ";
                break;
            case 6:
                newNum += "six ";
                break;
            case 7:
                newNum += "seven ";
                break;
            case 8:
                newNum += "eight ";
                break;
            case 9:
                newNum += "nine ";
                break;
        }
    }
    return newNum;
}