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