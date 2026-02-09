// create player type :
type Player = {
  id: number;
  score: number;
  name: string;
}
// create first player :
let player: Player= {
    id:101,
    score:98,
    name:"aaa"
}

// vars :
let cId :number = 101;
let name1 : string = "bbb";
let playersArr: Player[] =  createPlayers(3);
let bestP: Player| null = findBestPlayer(playersArr);

console.log("All plyers:" , playersArr);
console.log("The best player is:" + bestP?.name+ " his score :" +bestP?.score );

// functions:
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

function findBestPlayer(playersArr: Player[]): Player |null {
  let max: number = 0;
  let best: Player | null= null;
  for (let i = 0; i < playersArr.length; i++) {
    const player :Player  = playersArr[i];
    if(player.score>max){
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
