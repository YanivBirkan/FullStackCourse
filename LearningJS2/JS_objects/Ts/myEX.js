
// var studentNames = ["aa" , "bb" , "cc"];
// var studentGrades = [90 , 80 , 100];


// printStudentGrades(studentNames , studentGrades);
// // addStudent();
// printBestStudentName();
// function printStudentGrades(names , grades){
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i];
//         const grade = grades[i];

//         console.log(`name: ${name} , grade: ${grade}`);
//     }

// }

// function addStudent(){
//     const name = prompt("Enter student Name : ");
//     studentNames.push(name);
//     const grade = prompt("Enter student Grade : ");
//     studentGrades.push(grade);
//     console.log(studentNames);
//     console.log(studentGrades);
// }

// function printBestStudentName(){
//     var maxGrade = 0;
//     var keepname= ""
//     for (let i = 0; i < studentGrades.length; i++) {
//         var grade = studentGrades[i];
//         var name = studentNames[i];

//         if(grade>maxGrade) {
//             maxGrade=grade;
//         }        
//     }
//         keepname=studentNames[studentGrades.indexOf(maxGrade)];

//                 console.log(keepname + " has the best grade : " + maxGrade);
// }
//js-

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


//ts-