
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