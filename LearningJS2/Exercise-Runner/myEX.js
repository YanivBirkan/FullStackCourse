
var studentNames = ["aa" , "bb" , "cc"];
var studentGrades = [90 , 80 , 100];


printStudentGrades(studentNames , studentGrades);
// addStudent();
printBestStudentName();
function printStudentGrades(names , grades){
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const grade = grades[i];

        console.log(`name: ${name} , grade: ${grade}`);
    }

}

function addStudent(){
    const name = prompt("Enter student Name : ");
    studentNames.push(name);
    const grade = prompt("Enter student Grade : ");
    studentGrades.push(grade);
    console.log(studentNames);
    console.log(studentGrades);
}

function printBestStudentName(){
    var maxGrade = 0;
    var keepname= ""
    for (let i = 0; i < studentGrades.length; i++) {
        var grade = studentGrades[i];
        var name = studentNames[i];

        if(grade>maxGrade) {
            maxGrade=grade;
            keepname=name
        }        
    }
                console.log(keepname + " has the best grade : " + maxGrade);
}