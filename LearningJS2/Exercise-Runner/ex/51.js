// countWordApperances("puki ben david and muki ben david")
// function countWordApperances(txt) {
//   let words  =txt.split(" ");
//   let wordscount  ={};
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     wordscount[word] = (wordscount[word] ?? 0) + 1;
//     debugger
//   }
//   console.log(wordscount);
// }

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