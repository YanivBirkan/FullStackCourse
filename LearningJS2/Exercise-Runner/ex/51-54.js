//ex51:
/*
countWordApperances("puki ben david and muki ben david")
function countWordApperances(txt) {
  let words  =txt.split(" ");
  let wordscount  ={};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordscount[word] = (wordscount[word] ?? 0) + 1;
  }
  console.log(wordscount);
}
*/

// ex 52 , Monster:
let gNextId = 1;
let monsters = createMonsters();
monsters.push(createMonster("m5", 80));
//create mosters:
function createMonsters() {
    let Monsters = [];
    for (let i = 0; i < 4; i++) {
        let newMonster = {
            id: gNextId++,
            name: (`m${i + 1}`),
            power: Math.floor(Math.random() * 100)
        };
        Monsters.push(newMonster);
    }
    return Monsters;
}
//create 1 monter:
function createMonster(name, power) {
    let newMonster = {
        id: gNextId++,
        name: name,
        power: power
    };
    return newMonster;
}
//get monter by Id:
function getMonsterById(id) {
    let keepMonster = monsters[0];
    for (let i = 0; i < monsters.length; i++) {
        const monster = monsters[i];
        if (monster.id === id)
            keepMonster = monster;
    }
    return keepMonster;
}
//delete monter by Id:
function deleteMonsterById(id) {
    for (let i = 0; i < monsters.length; i++) {
        const monster = monsters[i];
        if (monster.id === id)
            monsters.splice(i, 1);
    }
}
console.log(monsters);
deleteMonsterById(5);
// debugger;
updateMonterById(2, 100);
console.log(monsters);
console.log("check");
//update monster:
function updateMonterById(id, newPower) {
    for (let i = 0; i < monsters.length; i++) {
        const monster = monsters[i];
        if (monster.id === id) {
            monster["power"] = newPower;
        }
    }
}
function findMostPowerful(monsters) {
    if (monsters.length === 0)
        return null;
    let keepPower = monsters[0].power;
    let keepMonster = monsters[0];
    for (let i = 1; i < monsters.length; i++) {
        const monster = monsters[i];
        if (monster.power > keepPower) {
            keepPower = monster.power;
            keepMonster = monster;
        }
    }
    return keepMonster;
}
breadMonsters(1, 2);
function breadMonsters(monster1Id, monster2Id) {
    const monster1 = getMonsterById(monster1Id);
    const monster2 = getMonsterById(monster2Id);
    let newMonsterPower = (monster1.power + monster2.power) / 2;
    let newMonsterName = monster1.name.substring(0, monster1.name.length / 2) + monster2.name.substring(monster2.name.length / 2, monster2.name.length);
    let newMonster = {
        id: gNextId++,
        name: newMonsterName,
        power: newMonsterPower
    };
    return newMonster;
}