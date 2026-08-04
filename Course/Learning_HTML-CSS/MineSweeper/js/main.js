let gBoard ;
let gElSelectedCell = null;

let gLevel = {
 SIZE: 4,
 MINES: 2
}


function onInit(){
    gBoard = buildBoard(gLevel.SIZE,gLevel.SIZE);
    renderBoard(gBoard);
}

function buildBoard(rows , cols) {

    var board = []

    for (var i = 0; i < gLevel.SIZE; i++) {

        board[i] = []

        for (var j = 0; j < gLevel.SIZE; j++) {

            board[i][j] = {
                minesAroundCount: 0,
                isRevealed: false,
                isMine: false,
                isMarked: false
            }
             
        }
    }
    for (var i = 0; i < gLevel.SIZE; i++) {

        board[i] = []

        for (var j = 0; j < gLevel.SIZE; j++) {

            board[i][j] = {
                minesAroundCount: 0,
                isRevealed: false,
                isMine: false,
                isMarked: false
            }
             
        }
    }

    // Temporary static mines
    board[1][1].isMine = true
    board[3][2].isMine = true

   

    return board
}

function setMinesNegsCount(board,rowIdx,colIdx){
var count = 0
    
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue
            var currCell = board[i][j];
            debugger
            if (currCell.isMine) {
                count++
            }
        }
    }


    return count
}
function renderBoard(board) {

    var strHTML = ''

    for (var i = 0; i < board.length; i++) {

        strHTML += '<tr>'

        for (var j = 0; j < board[0].length; j++) {

            strHTML += `
            <td class = "cell" onclick="onCellClicked(this,${i},${j})"
                oncontextmenu="onCellMarked(event,this,${i},${j})">
            </td>
            `
        }

        strHTML += '</tr>'
    }
    console.log(strHTML)
    let elTable = document.querySelector('.board-cells')
    elTable.innerHTML = strHTML;
}
