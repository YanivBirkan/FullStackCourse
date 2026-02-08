// let age : number = 10;
// console.log("age=" + age);


type Player = {
  id: number;
  score: number;
  name: string;
}

let player: Player= {
    id:101,
    score:98,
    name:"aaa"
}
let cId :number = 101;
let name1 : string = "bbb";
console.log(createPlayer(name1));

let playersArr: Player[] =  createPlayers(3);
console.log("player2" , getPlayerById(102))


function createPlayer(name: string): Player {
  const newPlayer: Player = {
    id: cId++,
    score: Math.floor(Math.random() * 100),
    name,
  };
  return newPlayer;
}

function createPlayers(count: number): Player[]{
    const players :Player[] = [];
    for (let index = 0; index < count; index++) {
        const name = `player${index+1}`;
        players.push(createPlayer(name));
        
    }
    return players;
}

function getPlayerById(gid: number): Player | undefined{
    const fPlayer=  playersArr.find(({id}) => id === gid);
    return fPlayer;
}


// var player = {
//     id:101,
//     score:98,
//     name:'aaa'
// }
// var gNextId = player.id;

// var playersArr =  createPlayers(3);
// console.log("players:" , playersArr);
// console.log("best:" ,findBestPlayer(playersArr));

// function createPlayer(name){
//     var newPlayer={
//         id : gNextId++,
//         score : Math.floor(Math.random() * 100),
//         name : name,
//     }
//     return newPlayer;
// }

// function createPlayers(count){
//     var players =[];
//     for (let i = 0; i < count; i++) {
//         const name = `player${i+1}`;
//         players.push(createPlayer(name));
//     }
//     return players;
// }

// function getPlayerById(gid){
//     const found = playersArr.find(({id}) => id === gid);
//     return found;
// }

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
