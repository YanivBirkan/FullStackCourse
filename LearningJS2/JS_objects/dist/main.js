"use strict";
// create first player :
let player = {
    id: 101,
    score: 98,
    name: "aaa"
};
// vars :
let cId = 101;
let name1 = "bbb";
let playersArr = createPlayers(3);
let bestP = findBestPlayer(playersArr);
console.log("All plyers:", playersArr);
console.log("The best player is:" + (bestP === null || bestP === void 0 ? void 0 : bestP.name) + " his score :" + (bestP === null || bestP === void 0 ? void 0 : bestP.score));
// functions:
function createPlayer(name) {
    const newPlayer = {
        id: cId++,
        score: Math.floor(Math.random() * 100),
        name,
    };
    return newPlayer;
}
function createPlayers(count) {
    const players = [];
    for (let index = 0; index < count; index++) {
        const name = `player${index + 1}`;
        players.push(createPlayer(name));
    }
    return players;
}
function getPlayerById(gid) {
    const fPlayer = playersArr.find(({ id }) => id === gid);
    return fPlayer;
}
function findBestPlayer(playersArr) {
    let max = 0;
    let best = null;
    for (let i = 0; i < playersArr.length; i++) {
        const player = playersArr[i];
        if (player.score > max) {
            best = player;
            max = player.score;
        }
    }
    return best;
}
// var gNextId = player.id;
// function findBestPlayer(playersArr){
//     var scores = [];
//     var max = 0;
//     for (let i = 0; i < playersArr.length; i++) {
//         const player = playersArr[i];
//         scores.push(player.score);
//     }
//     for (let i = 0; i <scores.length; i++) {
//         if(scores[i]>max) max=scores[i];
//     }
//     const best = playersArr.find(({score}) => score === max);
//     return best;
// }
