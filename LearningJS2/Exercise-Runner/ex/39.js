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