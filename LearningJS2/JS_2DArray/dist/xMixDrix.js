"use strict";
let gBoard = createBoard();
let gIsUserMove = true;
let gPos = {};
//check an
gPos = playersMove();
console.log(gPos);
console.table(gBoard);
gPos = playersMove();
console.log(gPos);
console.table(gBoard);
gPos = playersMove();
console.log(gPos);
console.table(gBoard);
let symbol = gIsUserMove ? 'X' : "O";
let isVictory = checkVictory(gPos, symbol);
if (isVictory)
    console.log("V");
//check 3 in a row \col \ diagnol:
function checkVictory(currPos, symbol) {
    let countCol = countInCol(currPos.j, symbol);
    console.log(countCol);
    if (countCol === 3) {
        return true;
    }
    return false;
}
//count if there 3 symbols in the current col
function countInCol(col, symbol) {
    let count = 0;
    let j = col - 1;
    for (let i = 0; i < gBoard.length; i++) {
        const cell = gBoard[i][j];
        if (cell === symbol)
            count++;
    }
    return count;
}
//check if its player \ computer turn
function playersMove() {
    let pos = {};
    if (gIsUserMove) {
        pos = playUserMove();
    }
    else {
        pos = computerMove();
    }
    return pos;
}
//get player move and updated on board
function playUserMove() {
    var _a;
    let foundPos = false;
    while (!foundPos) {
        const move = (_a = prompt("Play your move:  (i,j)")) !== null && _a !== void 0 ? _a : "";
        let playerPos = getPos(move);
        //validation
        if ((playerPos.i - 1 < 0 || playerPos.i - 1 > 2) || (playerPos.j - 1 < 0 || playerPos.j - 1 > 2)) {
            alert("imposible position!");
            continue;
        }
        else if (gBoard[playerPos.i - 1][playerPos.j - 1] !== "") {
            alert("position is not empty");
            continue;
        }
        //updated player position
        gBoard[playerPos.i - 1][playerPos.j - 1] = "X";
        foundPos = true;
        gPos = playerPos;
    }
    let pos = gPos;
    return pos;
}
//create object of pos from the pos list
function getPos(strPos) {
    const playerPos = strPos.split(",").map(Number);
    let playerPosList = {};
    playerPosList["i"] = playerPos[0];
    playerPosList["j"] = playerPos[1];
    console.log(playerPosList);
    return playerPosList;
}
// computer move and update on board
function computerMove() {
    let computerPos = findEmptyPos();
    gBoard[computerPos.i][computerPos.j] = "O";
    return computerPos;
}
//create list of empty cells
function findEmptyPos() {
    let emptyPoses = [];
    for (let i = 0; i < gBoard.length; i++) {
        for (let j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j];
            if (!cell) {
                let compPos = { i: i, j: j };
                emptyPoses.push(compPos);
            }
        }
    }
    let emptyPos = emptyPoses[getRandomInt(0, emptyPoses.length)];
    return emptyPos;
}
function createBoard() {
    const board = [];
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = "";
        }
    }
    return board;
}
function init() {
    for (let i = 0; i < 3; i++) {
        gBoard[i] = [];
        for (let j = 0; j < 3; j++) {
            gBoard[i][j] = "";
        }
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
