"use strict";
const FOOD = "🍒";
const EMPTY = "";
const HERO = "🤖";
let gBoard = createBoard();
console.table(gBoard);
let count = countFoodAround(gBoard, 1, 1);
console.log(`Found ${count} food around Hero position`);
let bestPos = findBestPos(gBoard);
console.log(`Best pos:`);
function createBoard() {
    let board = [];
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = Math.random() > 0.7 ? FOOD : EMPTY;
        }
    }
    board[1][1] = HERO;
    return board;
}
function countFoodAround(board, rowIdx, colIdx) {
    let foodCount = 0;
    for (let i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length)
            continue;
        for (let j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx)
                continue;
            if (j < 0 || j >= board[i].length)
                continue;
            let currCell = board[i][j];
            if (currCell === FOOD)
                foodCount++;
        }
    }
    return foodCount;
}
function findBestPos(gBoard) {
    let max = 0;
    let bestPos = null;
    for (let i = 0; i < gBoard.length; i++) {
        for (let j = 0; j < gBoard[i].length; j++) {
            let count = countFoodAround(gBoard, i, j);
            if (count > max) {
                max = count;
                bestPos = { "i": i, "j": j };
            }
        }
    }
    return bestPos;
}
