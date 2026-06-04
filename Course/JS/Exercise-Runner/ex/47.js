
console.log(mySplit("aaa,bbb,ccc" , ","));
function mySplit(str, sep){
    str+=sep;
    console.log(str)

    var newWord="";
    var newArr =[];
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        while(ch!=sep){
            newWord+=ch;
            console.log(newWord)
        }
        newArr.push(newWord);
        newWord=""
     
    }
    return newArr;
}