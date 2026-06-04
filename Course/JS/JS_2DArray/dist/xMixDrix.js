"use strict";
// let gBoard:string[][]=createBoard();
// let gIsUserMove:boolean = true;
// let gPos:Record<string, number>={};
// init the game
// init();
// //init the board
// function init(){
//     for (let i = 0; i < 3; i++) {
//        gBoard[i]=[];
//        for (let j = 0; j <3; j++) {
//             gBoard[i][j]="";
//        }   
//     }
//     console.table(gBoard);
//     gIsUserMove =true;
//     playGame();
// }
// function playGame(){
//     let isGameOn:boolean = true;
//     let movesCount:number = 0;
//     let cellsCount:number = gBoard.length **2;
//     while(isGameOn){
//         //move
//         gPos = playersMove();
//         console.log(gPos);
//         console.table(gBoard);
//         movesCount++;
//         //checks afte move
//         let symbol:string = gIsUserMove ? 'X' : "O";
//         let isVictory:boolean = checkVictory(gPos,symbol);
//         if(isVictory) {
//             console.log(`Victory ,  ${gIsUserMove ? "user won" : " computer won"} `);
//             isGameOn = false;
//         }else if(movesCount === cellsCount){
//             console.log("draw");
//             isGameOn = false;
//         }
//         //next player move
//         gIsUserMove = !gIsUserMove;
//     }
//     console.log("Game over!");
// }
// //check 3 in a row \col \ diagnols:
// function checkVictory(currPos:Record<string, number> , symbol:string):boolean{
//     let count:number = countInCol(currPos.j , symbol);
//     if(count===gBoard.length)return true;
//     count = countInRow(currPos.i , symbol);
//     if(count===gBoard.length)return true;
//     if(currPos.i===currPos.j){
//         count=countInPrimaryDiagnol(symbol);
//         if(count===gBoard.length)return true;
//     }
//     if(currPos.i+currPos.j === gBoard.length-1){
//         count=countInSeconderyDiagnol(symbol);
//         if(count===gBoard.length)return true;
//     }
//     return false;
// }
// //count if there 3 symbols in the current col
// function countInCol(col:number,symbol:string):number{
//     let count:number =0;
//     let j:number = col-1;
//     for (let i = 0; i < gBoard.length; i++) {
//         const cell:string = gBoard[i][j];
//         if(cell===symbol) count++;
//     }
//     return count;
// }
// //count if there 3 symbols in the current row
// function countInRow(row:number,symbol:string):number{
//     let count:number =0;
//     let i:number = row-1;
//     for (let j = 0; j < gBoard[i].length; j++) {
//         const cell:string = gBoard[i][j];
//         if(cell===symbol) count++;
//     }
//     return count;
// }
// //count if there 3 symbols in the current Primary Diagnol
// function countInPrimaryDiagnol(symbol:string){
//     let count:number =0;
//     for (let i = 0; i < gBoard.length; i++) {
//         const cell:string = gBoard[i][i];
//         if(cell===symbol) count++;
//     }
//     return count;
// }
// //count if there 3 symbols in the current secondery Diagnol
// function countInSeconderyDiagnol(symbol:string){
//     let count:number =0;
//     for (let i = 0; i < gBoard.length; i++) {
//         const cell:string = gBoard[i][gBoard.length-1-i];
//         if(cell===symbol) count++;
//     }
//     return count;
// }
// //check if its player \ computer turn
// function playersMove():Record<string, number>{
//     let pos:Record<string, number> = {};
//     if(gIsUserMove){
//         pos = playUserMove();
//     }
//     else{
//         pos = computerMove();
//     }
//     return pos;
// }
// //get player move and updated on board
// function playUserMove(){
//     let foundPos:boolean = false;
//     while(!foundPos){
//         const move:string=prompt("Play your move:  (i,j)" ) ?? "";
//         let playerPos:Record<string, number> = getPos(move);
//         //validation
//         if((playerPos.i-1<0 || playerPos.i-1>2 ) || (playerPos.j-1<0 || playerPos.j-1>2 ) ){
//             alert("imposible position!"); 
//             continue;
//         }
//         else if( gBoard[playerPos.i-1][playerPos.j-1] !==""){
//             alert("position is not empty");
//             continue;
//         } 
//         //updated player position
//         gBoard[playerPos.i-1][playerPos.j-1] ="X";
//         foundPos = true;
//         gPos = playerPos;
//     }
//     let pos = gPos;
//     return pos;
// }
// //create object of pos from the pos list
// function getPos(strPos:string):Record<string, number>{
//     const playerPos:number[] |null= strPos.split(",").map(Number);
//     let playerPosList:Record<string, number> = {};
//     playerPosList["i"]=playerPos[0];
//     playerPosList["j"]=playerPos[1];
//     console.log(playerPosList);
//     return playerPosList;
// }
// // computer move and update on board
// function computerMove(){
//     let computerPos:Record<string, number> = findEmptyPos();
//     gBoard[computerPos.i][computerPos.j] ="O";
//     return computerPos;
// }
// //create list of empty cells to computer turn
// function findEmptyPos():Record<string, number>{
//     let emptyPoses:Record<string, number>[] = [];
//     for (let i = 0; i < gBoard.length; i++) {
//         for (let j = 0; j < gBoard[0].length; j++) {
//             const cell:string=gBoard[i][j];
//             if(!cell){
//                 let compPos:Record<string, number> = {i:i,j:j};
//                 emptyPoses.push(compPos);
//             }
//         }
//     }
//     //random pos due to the empty posses list
//     let emptyPos:Record<string, number>= emptyPoses[getRandomInt(0,emptyPoses.length)]
//     return emptyPos;
// }
// //create empty board for the begining
// function createBoard():string[][]{
//     const board : string[][] = [];
//     for (let i = 0; i < 3; i++) {
//        board[i]=[];
//        for (let j = 0; j <3; j++) {
//             board[i][j]="";
//        }   
//     }
//     return board;
// }
// //random int
// function getRandomInt(min:number, max:number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//ex 58
// const gMat:number[][] = [
//     [2,7,6],
//     [9,5,3],
//     [4,3,2],
// ]
// isMagicSquare(gMat)
// function isMagicSquare(mat:number[][] ):boolean{
//     if(mat.length!=mat[0].length) return false
//     for (let i = 0; i < mat.length; i++) {
//         console.log("col " + i + " " + countInCol(i) + " , " + "row " + i + " " + countInRow(i));
//         // for (let j = 0; j < mat[i].length; j++) {
//         //     const cell:number = mat[i][j];
//         //  console.log("col " + j + " " + countInCol(j))
//         // }
//     }
//     console.log("sum of prim diagnol = " + countInPrimaryDiagnol());
//     console.log("sum of second diagnol = " + countInSeconderyDiagnol());
//     return true;
// }
//  function countInCol(col:number):number{
//     let sum:number =0;
//     let j:number = col;
//     for (let i = 0; i < gMat.length; i++) {
//         const cell:number = gMat[i][j];
//         sum+=cell;
//     }
//     return sum;
// }
//  function countInRow(row:number):number{
//     let sum:number =0;
//     let i:number = row;
//     for (let j = 0; j < gMat[i].length; j++) {
//         const cell:number = gMat[i][j];
//         sum+=cell;
//     }
//     return sum;
// }
// function countInPrimaryDiagnol():number{
//     let sum:number =0;
//     for (let i = 0; i < gMat.length; i++) {
//         sum+=gMat[i][i];
//     }
//     return sum;
// }
// function countInSeconderyDiagnol():number{
//     let sum:number =0;
//     for (let i = 0; i < gMat.length; i++) {
//         sum+=gMat[i][gMat.length-i-1];
//     }
//     return sum;
// }
