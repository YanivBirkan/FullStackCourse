//ex38
console.log("new = " +biggerThan100([120,130,90,50,180,110,75]));
function biggerThan100(nums){
    var biggernums = [];
    for (let i = 0; i < nums.length; i++) {
        const num= nums[i];
        if(num>100){
            biggernums.push(num);

        }
    }
    return biggernums;
}

//ex39
var name1 ='aa';
var enteredVotes =["aa","bb","cc","cc","aa","Aa","aa","dd","e"];

console.log(`${name1} got - ${countVotes(enteredVotes ,name1 )}`);
function countVotes(votes,candidateName){
    var countName=0;
    for (let i = 0; i < votes.length; i++) {
        const cName = votes[i];
        if(cName===candidateName) countName++;
    }
    return countName;
}

//ex40
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

//ex41
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

//ex42

var letter = "s"
var names = ["Avi","Beni","Gadi","Sami","Susu","Dani","Sarit"];
starsWithLetter(names,letter);
function starsWithLetter(names,letter){
    var newNames =[];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if(name.charAt(0).toLowerCase()===letter.toLowerCase()) newNames.push(name);
    }
    console.log(newNames);
}

//ex 43 
var nums1 = [1,2,3];
var nums2 = [3,4,5,6,7,8];
sumArrays(nums1,nums2);
function sumArrays(numArr1,numArr2){
    var shortArr=(numArr1.length>numArr2.length) ? numArr2 : numArr1; 
    var longArr=(numArr1.length>numArr2.length) ? numArr1 : numArr2;
    var sum=0;
    var newArr=[];
    for (let i = 0; i < shortArr.length; i++) {
        sum = shortArr[i] +longArr[i];
        newArr.push(sum);
        sum=0;
    }
    for (let i = shortArr.length; i < longArr.length; i++) {
        newArr.push(longArr[i]);        
    }
    console.log(newArr);
}

//ex44 
var numsL = [3,2,0,2,2,0,3];
console.log(printNumsCount(numsL))
function printNumsCount(nums){
    var count=[0,0,0,0];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        count[num]++;
    }
    return count;
}

//ex45
var nums =[5,4,5,2,1,2,4]
console.log(removeDuplicates(nums))
function removeDuplicates(nums) {
    var newArr=[];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(!newArr.includes(num)) newArr.push(num);
    }
    return newArr;
}

//ex 46

var nums = [1,2,4,5];
var mul = 2
console.log(multBy(nums,mul , true));
function multBy(nums, multiplier,isImmutable){
    if(isImmutable){
        var numscopy = nums.slice();
        return numscopy
    }
    var newArr =[];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        newArr.push(num*multiplier);    
    }
    return newArr
}

//ex 47

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

//ex 48

var nums = [234, 43, 55, 63, 5, 6, 235, 547]
function sortNums(nums) {

    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < (nums.length - i - 1); j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
}

console.log(sortNums(nums))


//ex 49
function getNthLargest(nums, nthNum) {

    for (var i = 0; i < nthNum; i++) {
        var maxNum = getMax(nums)
        var maxNumIdx = nums.indexOf(maxNum)
        nums.splice(maxNumIdx, 1)
    }
    return maxNum
}

function getMax(nums) {
    var max = -Infinity
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
    }
    return max
}

console.log( getNthLargest([90, 80, 75, 99, 56, 87], 3))

//ex 50

var atoms=["H","B","C","N","O","F"];
var countWrongs=0
while(getMolecula(atoms)!="HOH"){
    countWrongs++;
}

console.log("tryes= " + countWrongs);
function getMolecula(atoms){
    var newMo ="";
    for (let i = 0; i <3; i++) {
        const ch = atoms[getRandomInt(0,atoms.length)];
        newMo+=ch
    }
    return newMo;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}