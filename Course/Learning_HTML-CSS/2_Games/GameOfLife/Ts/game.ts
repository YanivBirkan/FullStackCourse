const FOOD = "🍒";
const EMPTY = "";
const HERO = "🤖";

let gBoard: string[][] = createBoard();
console.table(gBoard);

let count: number = countFoodAround(gBoard, 1, 1);
console.log(`Found ${count} food around Hero position`);
let bestPos :Record<string,number> |null= findBestPos(gBoard);
console.log(`Best pos:`)

function createBoard(): string[][] {
  let board: string[][] = [];
  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      board[i][j] = Math.random() > 0.7 ? FOOD : EMPTY;
    }
  }
  board[1][1] = HERO;
  return board;
}

function countFoodAround(board: string[][], rowIdx: number, colIdx: number) {
  let foodCount = 0;
  for (let i = rowIdx - 1; i <= rowIdx + 1; i++) {
    if(i<0 ||i>=board.length) continue
    for (let j = colIdx - 1; j <= colIdx + 1; j++) {
        if(i===rowIdx && j===colIdx) continue
        if(j<0 ||j>=board[i].length) continue
      let currCell: string = board[i][j];
      if (currCell === FOOD) foodCount++;
    }
  }
  return foodCount;
}

function findBestPos(gBoard:string[][]){
    let max:number =0;
    let bestPos :Record<string,number> |null= null;
    for (let i = 0; i < gBoard.length; i++) {
        for (let j = 0; j < gBoard[i].length; j++) {
            let count :number = countFoodAround(gBoard,i,j);
            if(count>max){
                max=count;
                bestPos={"i":i ,"j":j};
            }
        }        
    }
    return bestPos;
}