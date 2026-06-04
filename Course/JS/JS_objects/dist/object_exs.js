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
;
;
;
const gPlanes = createPlanes();
const gPassengers = createPassengers(5);
const gFlights = createFlights();
console.log("Passengers List:", gPassengers);
console.log("Planes List:", gPlanes);
console.log("Flights List:", gFlights);
function createPlane(model, seatcount) {
    const newPlane = {
        model: model,
        seatCount: seatcount
    };
    return newPlane;
}
function createPlanes() {
    let airplane1 = createPlane(1234, 100);
    let airplane2 = createPlane("A320-1", 140);
    return [airplane1, airplane2];
}
function generate7DigitNumber() {
    const randomNum = Math.floor(Math.random() * 10000000);
    return randomNum;
}
function createPassenger(name, flights) {
    const newPassenger = {
        id: generate7DigitNumber(),
        fullName: name,
        flights: flights
    };
    return newPassenger;
}
function createPassengers(count) {
    const passengerArr = [];
    for (let i = 0; i < count; i++) {
        passengerArr.push(createPassenger(`P${i + 1}`, []));
    }
    return passengerArr;
}
function createFlight(departure, destination, plane) {
    const newFlight = {
        date: 0,
        departure: departure,
        destination: destination,
        plane: plane,
        passengers: []
    };
    return newFlight;
}
function createFlights() {
    let Flight1 = createFlight("tel aviv", "rome", gPlanes[0]);
    let Flight2 = createFlight("tel aviv", "eilat", gPlanes[1]);
    return [Flight1, Flight2];
}
function isFullyBooked(flight) {
    return flight.passengers.length >= flight.plane.seatCount;
}
function bookFlight(passenger, flight) {
    if (!isFullyBooked) {
        flight.passengers.push(passenger);
        passenger.flights.push(flight);
        console.log("Flight orderd succesfully");
    }
    else {
        console.log("The plane is already full");
    }
}
function getFrequentFlyers() {
    let maxflights = 0;
    let frequentFlyers = [];
    for (let i = 0; i < gPassengers.length; i++) {
        const passenger = gPassengers[i];
        if (passenger.flights.length > maxflights) {
            maxflights = passenger.flights.length;
            frequentFlyers = [passenger];
        }
        else if (passenger.flights.length === maxflights) {
            frequentFlyers.push(passenger);
        }
    }
}
