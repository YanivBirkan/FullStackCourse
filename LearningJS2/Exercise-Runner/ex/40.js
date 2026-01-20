var numOfWords = 4;
console.log(`The new sentence is : ${getLoremIpsum(4)} `);
function getLoremIpsum(wordsCount){
    var chars="abcdefghijklmnopqrstvurwxyz";
    var newSentence ="";
    for (let i = 0; i < wordsCount; i++) {
        newSentence+= " " +(getWord(chars));        
    }
    
    return newSentence.charAt(1).toUpperCase() + newSentence.slice(2);
}
function getWord(AChars){
    var wordLenght=getRandomIntInclusive(3,5); 
    var newWord="";
    for (let i = 0; i < wordLenght; i++) {
        const ch = AChars.charAt(getRandomIntInclusive(0,AChars.length));
        newWord+=ch;        
    }
    return newWord
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}