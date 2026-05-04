//ex13

var currentFloor = 0;
var eFloor = +prompt("which floor would ypu like to go :");
if(eFloor>=-2 && eFloor<=4){
    currentFloor=eFloor;
    console.log("current floor = " + currentFloor);
    if(currentFloor==0) alert("Bye Bye");
    else if(currentFloor<0) alert("Drive safely");
}
else{
    console.log("Invalid floor number");
}