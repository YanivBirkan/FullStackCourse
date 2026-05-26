//ex 58

const gMat = [
    [2, 7, 6],
    [9, 5, 3],
    [4, 3, 2],
];
isMagicSquare(gMat);

function isMagicSquare(mat) {
    if (mat.length != mat[0].length) return false;
    const sum = countInRow(0);
    for (let i = 0; i < mat.length; i++) {
        if(sum !==countInCol(i) || sum !== countInRow(i)) return false;
    }
    if (sum !==countInPrimaryDiagnol() || sum !== countInSeconderyDiagnol()) return false;
    return true;
}
function countInCol(col) {
    let sum = 0;
    let j = col;
    for (let i = 0; i < gMat.length; i++) {
        const cell = gMat[i][j];
        sum += cell;
    }
    return sum;
}
function countInRow(row) {
    let sum = 0;
    let i = row;
    for (let j = 0; j < gMat[i].length; j++) {
        const cell = gMat[i][j];
        sum += cell;
    }
    return sum;
}
function countInPrimaryDiagnol() {
    let sum = 0;
    for (let i = 0; i < gMat.length; i++) {
        sum += gMat[i][i];
    }
    return sum;
}
function countInSeconderyDiagnol() {
    let sum = 0;
    for (let i = 0; i < gMat.length; i++) {
        sum += gMat[i][gMat.length - i - 1];
    }
    return sum;
}


//ex59
let gNums =[];
let gGameInterval ;
const gSize = 5;
let gPlayers =[]
init();

function init(){
    gPlayers = [
        {name: 'Muki', hitCount: 0, board: createBingoBoard()},
        {name: 'Puki', hitCount: 0, board: createBingoBoard()}
    ];
    resetNums();
    gGameInterval = setInterval(playBingo , 1000)
}


function playBingo(){
    const calledNUm = drawNum();
    for (let i = 0; i < gPlayers.length; i++) {
        let player = gPlayers[i];
        let hitPos = markBoard(player, calledNUm);
        if(hitPos) printStats(player ,  hitPos);
        let isVictory = checkBingo(player);
        if(isVictory){
            clearInterval(gGameInterval);
            console.log(player.name , " Has won !");
            return;
        }
        
    }
}


function printStats(player , hitPos){
    checkRow(player,hitPos.i)
    checkRow(player,hitPos.j)
    if (hitPos.i == hitPos.j) checkPrimaryDiag(player)
    if (hitPos.i + hitPos.j === player.board.length-1) checkSecDiag(player)
}
function markBoard(player,calledNUm){
    let hitPos=null;
    for (let i = 0; i < player.board.length; i++) {
        for (let j = 0; j <  player.board.length; j++) {
            if(player.board[i][j].value === calledNUm){
                player.board[i][j].isHit = true;
                player.hitCount++;
                hitPos = { i:i , j:j };
                break;
            }
        }
    }
    console.log(player.name , ":");
    printBingoBoard(player.board)
}
function createBingoBoard(){
    resetNums();
    const board=[];
    let index =1;
    for (let i = 0; i < gSize; i++) {
        board[i]=[];
        for (let j = 0; j <gSize; j++) {
            board[i][j]={value:drawNum() , isHit : false};
            index++;
        }
    }    
    return board;
}
// // printBingoBoard(gPlayers[0].board);

function drawNum(){
    const randIdx = getRandomInt(0,gNums.length);
    let num = gNums[ getRandomInt ];
    gNums.splice(randIdx,1);
    return num;
}

function resetNums(){
    for (let i = 0; i <25; i++) {
        gNums[i] = i+1;    
    }
    return gNums
}
function printBingoBoard(gboard){
    const board=[];
    for (let i = 0; i < gSize; i++) {
        board[i]=[];
        for (let j = 0; j <gSize; j++) {
            debugger
            board[i][j]=gboard[i][j].value;
            if(board[i][j].isHit) gboard[i][j] += " V";
        }
    }    
    console.table(board);
}

function checkBingo(player){
    if(player.hitCount === gSize **2 ) return true;
}

function checkRow(player,row){
    for (let j = 0; j < player.board[row].length; j++) {
        if(!player.board[row][j].isHit) return true;
    }
    console.log(player.name , " completed a row");
}
function checkRow(player,col){
    for (let i = 0; i < player.board.length; i++) {
        if(!player.board[i][col].isHit) return true;
    }
    console.log(player.name , " completed a col");
}


function checkPrimaryDiag(player){
    for (let i = 0; i < player.board.length; i++) {
        if(!player.board[i][i].isHit) return true;
    }
    console.log(player.name , " completed a primary diag");
}
function checkSecDiag(player){
    let count = 0;
    for (let i = 0; i < player.board.length; i++) {
        if(player.board[i][player.board.length-1-i].isHit)count++;
    }
    if(count === player.board.length)  console.log(player.name , " completed a secondary diag");
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}