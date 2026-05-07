//ex 27-1

function getChar(length , char){
    var count = 0;
    var str = '';
    while(count<length){
        str+="*";
        count++;
    }
    return str;
}

function getAsterisks(length){
    var count = 0;
    var str = '';
    while(count<length){
        str+="*";
        count++;
    }
    return str;
}


//27-2
function getTriangle(height){
    var count = 0;
    var str = '';
    var char="*";
    while(count<height){
        str+=getChar(count,char) + "\n";
        count++;
    }
    var count = height;
    while(count>0){
        str+=getChar(count,char) + "\n";
        count--;
    }
    return str;
}

//27-3
function getMusicEqualizer(rowCount){
    var count = 0;
    var str = '';
    var char="*";
    while(count<rowCount){
        str+=getChar(getRandomInt(1,10),char) + "\n";
        count++;
    }
    return str;
}

//27-4
function getBlock(rows,cols){
    var count = 0;
    var str = '';
    var char="*";
    while(count<rows){
        str+=getChar(cols,char) + "\n";
        count++;
    }
    return str;

}

//27-5
function getBlockOutline(rows,cols){
    var count = 1;
    var char="*";
    var str =getChar(cols,char) + "\n";
    while(count<rows-2){
      str+= createEmptyLine(cols,char)+ "\n";
      count++;
    }
    str +=getChar(cols,char) + "\n";

    return str;
}

function createEmptyLine(length , char){
    var count = 1;
    var str = char;
    while(count<=length-2){
        str+=' ';
        count++;
    }
    str+=char;
    return str;
}
console.log(getBlockOutline(5,5));


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}