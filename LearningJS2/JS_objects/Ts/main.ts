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

// // vars :
// let cId :number = 101;
// let name1 : string = "bbb";
// let playersArr: Player[] =  createPlayers(3);
// let bestP: Player| null = findBestPlayer(playersArr);

// console.log("All plyers:" , playersArr);
// console.log("The best player is:" + bestP?.name+ " his score :" +bestP?.score );

// // functions:
// function createPlayer(name: string): Player {
//   const newPlayer: Player = {
//     id: cId++,
//     score: Math.floor(Math.random() * 100),
//     name,
//   };
//   return newPlayer;
// }

// function createPlayers(count: number): Player[]{
//     const players :Player[] = [];
//     for (let index = 0; index < count; index++) {
//         const name = `player${index+1}`;
//         players.push(createPlayer(name));
        
//     }
//     return players;
// }

// function getPlayerById(gid: number): Player | undefined{
//     const fPlayer=  playersArr.find(({id}) => id === gid);
//     return fPlayer;
// }

// function findBestPlayer(playersArr: Player[]): Player |null {
//   let max: number = 0;
//   let best: Player | null= null;
//   for (let i = 0; i < playersArr.length; i++) {
//     const player :Player  = playersArr[i];
//     if(player.score>max){
//       best = player;
//       max = player.score;
//     } 
//   }
//   return best;
// }


//movie object:

// type Actor = {
//   name:string,
//   salary:number
// }

// type Movie ={
//   id:number,
//   name:string,
//   actors: Actor[]
// }


// let globalId=101;
// const HarryPotter_actorList: Actor[] =[
//  {name:"daniel redclif" , salary:9000}, {name:"emma wotsson" , salary:10000} , {name:"ron wissly" , salary:9000}
// ]
// // let movie1 ={
// //   id:101,
// //   name:"harry potter",
// //   actors:[{name:"daniel redclif" , slary:9000} , {name:"emma wotsson" , salary:10000}]
// // }
// const moviesList = createMovies(3);
// //console.log("new movies =:" , createMovies(3));
// const movieList2 = [createMovie("m1" , [createActor("actor 1",100) ,createActor("actor 2" , 100)]) , createMovie("m2" , [,createActor("actor 1 ",100) ,createActor("actor 3",100)])]
// //console.log(movieList2);
// const [actor, movie] = findActorWithBestSalary(moviesList);
// //console.log("moovies of actor 1 ", getMoviesOfActor("actor 1"));

// function createMovie(gName: string , gActors: any[]) : Movie {
//   let newMovie: Movie ={
//     id:globalId++,
//     name:gName,
//     actors:gActors
//   }
//   return newMovie;
// }

// function createMovies(count:number) : Movie[]{
//   const moviesList : Movie[] = [];
//   for (let i = 0; i < count; i++) {
//     let countName: number=0;
//     let newMovie=createMovie(`moovie ${i+1}` ,[createActor(`actor ${countName++}`,(Math.floor(Math.random()*10000))) ,createActor(`actor ${countName++}`,(Math.floor(Math.random()*10000))) ])
//     moviesList.push(newMovie)
//   }
//   return moviesList;
// }

// function createActor(gName: string , gSalary: number): Actor {

//   let NewActor: Actor= {
//     name:gName,
//     salary:gSalary
//   }
//   return NewActor;
// }


// function findActorWithBestSalary(moviesList: Movie[]): [Actor |null , Movie |null]{
//   let max:number=0;  
//   let MaxActorKeep:Actor | null =null;
//   let moovieKeep:Movie | null =null;
//   for (let i = 0; i < moviesList.length; i++) {
//       const movie: Movie = moviesList[i];  
//       let movieActorList: Actor[] = movie.actors;

//       for (let y = 0; y < movieActorList.length; y++) {
//         const currActor = movieActorList[y];
//         if(currActor.salary>max){
//           max=currActor.salary;

//           MaxActorKeep=currActor;
//           moovieKeep = moviesList[i];
//         }
//       }
//     }
//     return [MaxActorKeep , moovieKeep];

// } 

// function getMoviesOfActor(gname:string) :Movie[]{
//     let actorMovies :Movie[] =[];
//     for (let i = 0; i < movieList2.length; i++) {
//       const currMovie: Movie = movieList2[i];
//       console.log(currMovie)
//       for (let j = 0; j < currMovie.actors.length; j++) {
//         const currMovieActor :Actor= currMovie.actors[j];
//         if(currMovieActor?.name==gname){
//           actorMovies.push(currMovie);
//         }
//       }
//     }

//     return actorMovies

// }

//ex51:
// countWordApperances("puki ben david and muki ben david")
// function countWordApperances(txt:string) {
//   let words :string[] =txt.split(" ");
//   let wordscount : any ={};
//   for (let i = 0; i < words.length; i++) {
//     const word: string = words[i];
//     wordscount[word] = (wordscount[word] ?? 0) + 1;
//   }
//   console.log(wordscount);
// }

//ex 52 , Monster:
type Monster = {
  id?:number,
  name?:string,
  power?:number
}
let gNextId :number = 1;
let monsters :Monster[] = createMonsters();
monsters.push(createMonster("m5" , 80));
//create mosters:
function createMonsters(): Monster[]{
  let Monsters:Monster[] = [];
  for (let i = 0; i <4; i++) {
    let newMonster:Monster= {
      id:gNextId++,
      name:(`m${i+1}`),
      power:Math.floor(Math.random()*100)
    }    
    Monsters.push(newMonster);
  }
  return Monsters;
}
//create 1 monter:
function createMonster(name:string , power:number) :Monster{
  let newMonster :Monster={
    id:gNextId++,
    name:name,
    power:power
  }
  return newMonster;
}
//get monter by Id:
function getMonsterById(id :number) : Monster{
  let keepMonster :Monster = {}
  for (let i = 0; i < monsters.length; i++) {
    const monster :Monster = monsters[i];
    if(monster.id===id) keepMonster=monster;
  }
  return keepMonster;
}

//delete monter by Id:
function deleteMonsterById(id :number) {
  for (let i = 0; i < monsters.length; i++) {
    const monster :Monster= monsters[i];
    if(monster.id===id) monsters.splice(i,1);
    
  }
}
deleteMonsterById(5)
console.log(monsters);

updateMonterById(2,100)
console.log(monsters);
//update monster:
function updateMonterById(id:number , newPower:number){
  for (let i = 0; i < monsters.length; i++) {
    const monster :Monster = monsters[i];
    if(monster.id===id){
      monster["power"] = newPower;
    }
  }
}




