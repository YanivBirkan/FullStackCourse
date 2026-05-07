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
// interface Airplane {
//   model: number | string;
//   seatCount: number;
// };
// interface Flight {
//   date: number;
//   departure:string,
//   destination:string,
//   plane: Airplane,
//   passengers:Passenger[];
// };
// interface Passenger {
//   id: number;
//   fullName: string;
//   flights: Flight[];
// };
// const gPlanes:Airplane[]= createPlanes();
// const gPassengers:Passenger[] = createPassengers(5);
// const gFlights:Flight[]=createFlights();
// console.log("Passengers List:",gPassengers);
// console.log("Planes List:",gPlanes);
// console.log("Flights List:",gFlights);
// function createPlane(model:number|string , seatcount:number):Airplane{
//   const newPlane:Airplane = {
//     model:model,
//     seatCount:seatcount
//   };
//   return newPlane;
// }
// function createPlanes():Airplane[]{
//   let airplane1:Airplane=createPlane(1234,100);
//   let airplane2:Airplane=createPlane("A320-1",140);
//   return [airplane1,airplane2];
// }
// function generate7DigitNumber(): number {
//   // Generates a random integer between 0 and 9999999
//   const randomNum = Math.floor(Math.random() * 10000000);
//   return randomNum;
// }
// function createPassenger(name:string , flights:Flight[]):Passenger{
//   const newPassenger:Passenger={
//     id:generate7DigitNumber(),
//     fullName:name,
//     flights:flights
//   };
//   return newPassenger;
// }
// function createPassengers(count:number):Passenger[]{
//   const passengerArr:Passenger[]=[];
//   for (let i = 0; i < count; i++) {
//     passengerArr.push(createPassenger(`P${i+1}` ,[]));
//   }
//   return passengerArr;
// }
// function createFlight(departure:string , destination:string , plane:Airplane):Flight{
//   const newFlight:Flight={
//       date:0,
//       departure:departure,
//       destination:destination,
//       plane: plane,
//       passengers:[]
//   }
//   return newFlight
// }
// function createFlights():Flight[]{
//   // const flighDatatArr:[string, string, Airplane][] = [["tel aviv" , "rome" , gPlanes[0]] , ["tel aviv" , "paris" , gPlanes[1]] ,["tel aviv" , "eilat" , gPlanes[0]] ,["tel aviv" , "london" , gPlanes[1]] ,["tel aviv" , "moscow" , gPlanes[0]] ]
//   let Flight1:Flight=createFlight("tel aviv" , "rome" , gPlanes[0]);
//   let Flight2:Flight=createFlight("tel aviv" , "eilat" , gPlanes[1]);
//   return [Flight1,Flight2];
// }
// function isFullyBooked(flight:Flight):boolean{
//   return flight.passengers.length >=flight.plane.seatCount;
// }
// function bookFlight(passenger:Passenger , flight:Flight){
//   if(!isFullyBooked){
//     flight.passengers.push(passenger);
//     passenger.flights.push(flight);
//     console.log("Flight orderd succesfully")
//   }else{
//     console.log("The plane is already full");
//   }
// }
// function getFrequentFlyers(){
//   let maxflights:number =0;
//   let frequentFlyers:Passenger[]=[]
//   for (let i = 0; i < gPassengers.length; i++) {
//     const passenger = gPassengers[i];
//     if(passenger.flights.length>maxflights){
//       maxflights=passenger.flights.length;
//       frequentFlyers=[passenger]
//     }else if(passenger.flights.length===maxflights){
//       frequentFlyers.push(passenger);
//     }
//   }
// }
//functions exs:
//ex 17
function isAbove18(age, name) {
    if (age < 18) {
        alert(name + " you are too young");
        return false;
    }
    else {
        alert(name + " you are above 18");
        return true;
    }
}
