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
let students = createStudents();
//create mosters:
function createStudents() {
    let Students = [];
    let studentName = prompt("Enter student name:");
    while (studentName !== null && studentName !== 'q') {
        let sGrades = [];
        for (let i = 0; i < 3; i++) {
            let rGrade = Math.floor(Math.random() * 100);
            // let grade:string|null = prompt(`enter the grade of test${i+1}`); 
            sGrades.push(Number(rGrade));
        }
        let newStudent = {
            id: gNextId++,
            name: studentName,
            grades: sGrades
        };
        Students.push(newStudent);
        studentName = prompt("Enter student name:");
    }
    return Students;
}
function createStudent(name, grades) {
    const newStudent = {
        id: gNextId++,
        name: name,
        grades: grades
    };
    return newStudent;
}
console.log("students list:", students);
// console.log("student1 avg grade:" + calcAvargeGrade(students[0]));
// console.log("students list:" , students);
function calcAvargeGrade(student) {
    const s = student;
    let sum = 0;
    for (let i = 0; i < s.grades.length; i++) {
        const grade = s.grades[i];
        sum += grade;
    }
    s.avg = Math.floor(sum / 3);
    return Math.floor(sum / 3);
}
console.log("worst student : ", findWorstStudent(students));
function findWorstStudent(students) {
    let worstStudent = null;
    let worstGrade = 100;
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        let avg = calcAvargeGrade(student);
        if (avg < worstGrade) {
            worstGrade = avg;
            worstStudent = student;
        }
    }
    return worstStudent;
}
//create 1 monter:
// function createMonster(name:string , power:number) :Student{
//   let newMonster :Student={
//     id:gNextId++,
//     name:name,
//     power:power
//   }
//   return newMonster;
// }
