"use strict";
// // create player type :
// type Player = {
//   id: number;
//   score: number;
//   name: string;
// }
// // create first player :
// let player: Player= {
//     id:101,
//     score:98,
//     name:"aaa"
// }
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
    let keepMonster = {};
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
deleteMonsterById(5);
console.log(monsters);
updateMonterById(2, 100);
console.log(monsters);
//update monster:
function updateMonterById(id, newPower) {
    for (let i = 0; i < monsters.length; i++) {
        const monster = monsters[i];
        if (monster.id === id) {
            monster["power"] = newPower;
        }
    }
}
