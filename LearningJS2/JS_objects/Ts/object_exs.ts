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
// type Monster = {
//   id:number,
//   name:string,
//   power:number
// }
// let gNextId :number = 1;
// let monsters :Monster[] = createMonsters();
// monsters.push(createMonster("m5" , 80));
// //create mosters:
// function createMonsters(): Monster[]{
//   let Monsters:Monster[] = [];
//   for (let i = 0; i <4; i++) {
//     let newMonster:Monster= {
//       id:gNextId++,
//       name:(`m${i+1}`),
//       power:Math.floor(Math.random()*100)
//     }    
//     Monsters.push(newMonster);
//   }
//   return Monsters;
// }
// //create 1 monter:
// function createMonster(name:string , power:number) :Monster{
//   let newMonster :Monster={
//     id:gNextId++,
//     name:name,
//     power:power
//   }
//   return newMonster;
// }
// //get monter by Id:
// function getMonsterById(id :number) : Monster{
//   let keepMonster :Monster = monsters[0]
//   for (let i = 0; i < monsters.length; i++) {
//     const monster :Monster = monsters[i];
//     if(monster.id===id) keepMonster=monster;
//   }
//   return keepMonster;
// }

// //delete monter by Id:
// function deleteMonsterById(id :number) {
//   for (let i = 0; i < monsters.length; i++) {
//     const monster :Monster= monsters[i];
//     if(monster.id===id) monsters.splice(i,1);
    
//   }
// }
// console.log(monsters);
// deleteMonsterById(5)

// // debugger;
// updateMonterById(2,100);
// console.log(monsters);
// console.log("check");
// //update monster:
// function updateMonterById(id:number , newPower:number){
//   for (let i = 0; i < monsters.length; i++) {
//     const monster :Monster = monsters[i];
//     if(monster.id===id){
//       monster["power"] = newPower;
//     }
//   }
// }
// function findMostPowerful(monsters: Monster[]): Monster | null {
//   if (monsters.length === 0) return null;

//   let keepPower: number = monsters[0].power;
//   let keepMonster: Monster = monsters[0];

//   for (let i = 1; i < monsters.length; i++) {
//     const monster: Monster = monsters[i];

//     if (monster.power > keepPower) {
//       keepPower = monster.power;
//       keepMonster = monster;
//     }
//   }

//   return keepMonster;
// }


// breadMonsters(1,2)
// function breadMonsters(monster1Id:number , monster2Id:number ) :Monster{
//   const monster1:Monster = getMonsterById(monster1Id);
//   const monster2:Monster = getMonsterById(monster2Id);
//   let newMonsterPower =(monster1.power + monster2.power) /2;
//   let newMonsterName = monster1.name.substring(0,monster1.name.length/2) + monster2.name.substring(monster2.name.length/2 ,monster2.name.length);
//   let newMonster :Monster={
//     id:gNextId++,
//     name:newMonsterName,
//     power:newMonsterPower
//   }
//   return newMonster
// }

//ex 53 students:
// type Student = {
//   id:number,
//   name:string|null,
//   grades:number[],
//   avg?:number;
// }
// let gNextId :number = 1;
// let students :Student[] = createStudents();
// //create mosters:
// function createStudents(): Student[]{
//     let Students:Student[] = [];
//     let studentName:string |null =prompt("Enter student name:");
//     while(studentName !== null && studentName !=='q'){
//         let sGrades:number[] =[];
//         for (let i = 0; i < 3; i++) {
//             let rGrade:number= Math.floor(Math.random()*100);
//             // let grade:string|null = prompt(`enter the grade of test${i+1}`); 
//             sGrades.push(Number(rGrade));
//         }
//         let newStudent ={
//             id:gNextId++,
//             name:studentName,
//             grades:sGrades
//         }
//         Students.push(newStudent);
//         studentName = prompt("Enter student name:")

//     }
//     return Students;
//   }

// function createStudent(name:string , grades:number[]):Student{
//     const newStudent= {
//         id:gNextId++,
//         name:name,
//         grades:grades
//     }
//     return newStudent;
// }

// console.log("students list:" , students);
// // console.log("student1 avg grade:" + calcAvargeGrade(students[0]));
// // console.log("students list:" , students);

// function calcAvargeGrade(student:Student) : number{
//     const s = student;
//     let sum:number = 0;
//     for (let i= 0; i< s.grades.length; i++) {
//         const grade = s.grades[i];
//         sum+=grade;
//     }
//     s.avg = Math.floor(sum/3);
//     return Math.floor(sum/3) ;

// }
// console.log("worst student : ", findWorstStudent(students));
// function findWorstStudent(students:Student[]) :Student|null{
//     let worstStudent:Student|null=null;
//     let worstGrade:number = 100;
//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         let avg:number = calcAvargeGrade(student);
//         if(avg<worstGrade){
//             worstGrade=avg;
//             worstStudent=student;
//         }
//     }
//     return worstStudent;
// }

//ex 54 plane:
interface Airplane {
  model: number | string;
  seatCount: number;
};

interface Flight {
  date: number;
  departure:string,
  destination:string,
  plane: Airplane,
  passengers:Passenger[];

};

interface Passenger {
  id: number;
  fullName: string;
  flights: Flight[];
};


const gPlanes:Airplane[]= createPlanes();
const gPassengers:Passenger[] = createPassengers(5);
const gFlights:Flight[]=createFlights();
console.log("Passengers List:",gPassengers);
console.log("Planes List:",gPlanes);
console.log("Flights List:",gFlights);

function createPlane(model:number|string , seatcount:number):Airplane{
  const newPlane:Airplane = {
    model:model,
    seatCount:seatcount
  };
  return newPlane;
}
function createPlanes():Airplane[]{
  let airplane1:Airplane=createPlane(1234,100);
  let airplane2:Airplane=createPlane("A320-1",140);
  return [airplane1,airplane2];
}

function generate7DigitNumber(): number {
  // Generates a random integer between 0 and 9999999
  const randomNum = Math.floor(Math.random() * 10000000);
  return randomNum;
}
function createPassenger(name:string , flights:Flight[]):Passenger{
  const newPassenger:Passenger={
    id:generate7DigitNumber(),
    fullName:name,
    flights:flights
  };
  return newPassenger;
}
function createPassengers(count:number):Passenger[]{
  const passengerArr:Passenger[]=[];
  for (let i = 0; i < count; i++) {
    passengerArr.push(createPassenger(`P${i+1}` ,[]));
  }
  return passengerArr;
  
}

function createFlight(departure:string , destination:string , plane:Airplane):Flight{
  const newFlight:Flight={
      date:0,
      departure:departure,
      destination:destination,
      plane: plane,
      passengers:[]
  }
  return newFlight

}

function createFlights():Flight[]{
  // const flighDatatArr:[string, string, Airplane][] = [["tel aviv" , "rome" , gPlanes[0]] , ["tel aviv" , "paris" , gPlanes[1]] ,["tel aviv" , "eilat" , gPlanes[0]] ,["tel aviv" , "london" , gPlanes[1]] ,["tel aviv" , "moscow" , gPlanes[0]] ]

  let Flight1:Flight=createFlight("tel aviv" , "rome" , gPlanes[0]);
  let Flight2:Flight=createFlight("tel aviv" , "eilat" , gPlanes[1]);
  return [Flight1,Flight2];
}
function isFullyBooked(flight:Flight):boolean{
  return flight.passengers.length >=flight.plane.seatCount;
}
function bookFlight(passenger:Passenger , flight:Flight){

  if(!isFullyBooked){
    flight.passengers.push(passenger);
    passenger.flights.push(flight);
    console.log("Flight orderd succesfully")
  }else{
    console.log("The plane is already full");
  }
}
function getFrequentFlyers(){
  let maxflights:number =0;
  let frequentFlyers:Passenger[]=[]
  for (let i = 0; i < gPassengers.length; i++) {
    const passenger = gPassengers[i];
    if(passenger.flights.length>maxflights){
      maxflights=passenger.flights.length;
      frequentFlyers=[passenger]
    }else if(passenger.flights.length===maxflights){
      frequentFlyers.push(passenger);
    }
  }
}