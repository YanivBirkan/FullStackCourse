
let gnums=[]
let gNum=0;
let gLevel =3;
let gNextNUm =0;
let gStartTime= 0.000;
let timeSPan =  document.querySelector(".timeSpan");
function onInit(){
    gNextNUm=1;
    restartNums();
    renderBoard();
    restartNums();
}
// checkVictory()
function renderBoard(){
    let strHtml='';
    for (let i = 0; i < gLevel; i++) {
        strHtml+=`<tr>`;
        for (let i = 0; i < gLevel; i++) {
            const num = drawNum();
            strHtml+=`<td class="td-box" onclick="onCellClicked(this,${num})">${num}</td>`
        }
        strHtml+=`</tr>`;
    }
    let elboard = document.querySelector(".board-table");
    elboard.innerHTML=strHtml;
}
function onCellClicked(elTd,num){
    if(num===gNextNUm){
        if(gNextNUm==gnums[gnums.length-1]){
            alert();
        }
        else{
            console.log(elTd)
            gNextNUm++;
            let elNextNum=document.querySelector(".nextNumber").innerText = gNextNUm;
            elTd.prop("disabled", true)
        }
    }
}
function drawNum(){
    let numPlace = getRandomInt(0, gnums.length - 1); 
    let numKeep = gnums[numPlace];
    gnums.splice(numPlace, 1);
    return numKeep;
}
function checkVictory(){

}
function restartNums(){
    gnums=[];
    for (let i = 1; i <=gLevel**2; i++) {
       gnums.push(i);        
    }
    
}
function onCHangeDificulty(num){
    gLevel=num
    restartNums();
    renderBoard()
    restartNums();
}


let timerId = null;
let startTime = 0;
let elapsedTime = 0;

function startTimer() {
  // Set start time relative to previous elapsed time
  startTime = Date.now() - elapsedTime;
  
  // Update the display roughly 60 times a second (every 16ms)
  timerId = setInterval(updateDisplay, 16);

}


function updateDisplay() {
  // Calculate total milliseconds passed
  const currentElapsed = Date.now() - startTime;

  // Convert time to hours, minutes, seconds, and centiseconds
  let hours = Math.floor(currentElapsed / 3600000);
  let minutes = Math.floor((currentElapsed % 3600000) / 60000);
  let seconds = Math.floor((currentElapsed % 60000) / 1000);
  let centiseconds = Math.floor((currentElapsed % 1000) / 10);

  // Pad numbers with leading zeros (e.g., 5 becomes "05")
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  centiseconds = String(centiseconds).padStart(2, "0");

  // Output to screen
  timeSPan.innerText = `${minutes}:${seconds}.${centiseconds}`;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// function hidelement(el){
//     document.querySelector(`"${el}"`).st
// }
 