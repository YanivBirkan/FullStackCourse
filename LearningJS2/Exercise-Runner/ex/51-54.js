//ex51:
/*
countWordApperances("puki ben david and muki ben david")
function countWordApperances(txt) {
  let words  =txt.split(" ");
  let wordscount  ={};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordscount[word] = (wordscount[word] ?? 0) + 1;
  }
  console.log(wordscount);
}
*/

// ex 52 , Monster:
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
let gNextId = 1;
let students = createStudents();

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
console.log("student1 avg grade:" + calcAvargeGrade(students[0]));
console.log("students list:" , students);
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
console.log(`${students[0].name} grades before factor = ${students[0].grades} `);
factorGrades(students[0]);
console.log(`${students[0].name}  grades after factor= ${students[0].grades} `);


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

function factorGrades(student){
    for (let i = 0; i < student.grades.length; i++) {
        student.grades[i] *= 1.05  ;
    }
}

function forEach(students, func) {
    for (var i = 0; i < students.length; i++) {
        func(students[i])
    }
}

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
