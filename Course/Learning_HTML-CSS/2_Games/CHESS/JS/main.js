'use strict'

// Pieces Types
const PAWN_BLACK = '♟'
const ROOK_BLACK = '♜'
const KNIGHT_BLACK = '♞'
const BISHOP_BLACK = '♝'
const QUEEN_BLACK = '♛'
const KING_BLACK = '♚'
const PAWN_WHITE = '♙'
const ROOK_WHITE = '♖'
const KNIGHT_WHITE = '♘'
const BISHOP_WHITE = '♗'
const QUEEN_WHITE = '♕'
const KING_WHITE = '♔'

// The Chess Board
var gBoard
var gSelectedElCell = null

function onRestartGame() {
    gBoard = buildBoard()
    renderBoard(gBoard)
}

function buildBoard() {
    const board = []

    for (var i = 0; i < 8; i++) {
        board[i] = []

        for (var j = 0; j < 8; j++) {
            board[i][j] = ''
            if (i === 1) board[i][j] = PAWN_BLACK
            if (i === 6) board[i][j] = PAWN_WHITE
        }
    }

    board[0][0] = board[0][7] = ROOK_BLACK
    board[0][1] = board[0][6] = KNIGHT_BLACK
    board[0][2] = board[0][5] = BISHOP_BLACK
    board[0][3] = QUEEN_BLACK
    board[0][4] = KING_BLACK

    board[7][0] = board[7][7] = ROOK_WHITE
    board[7][1] = board[7][6] = KNIGHT_WHITE
    board[7][2] = board[7][5] = BISHOP_WHITE
    board[7][3] = QUEEN_WHITE
    board[7][4] = KING_WHITE

    console.table(board)
    return board

}

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        const row = board[i]
        strHTML += '<tr>'
        for (var j = 0; j < row.length; j++) {
            const cell = row[j]
            var className = ((i + j) % 2 === 0) ? 'white' : 'black'
            const tdId = `cell-${i}-${j}`

            strHTML += `<td id="${tdId}" 
                            onclick="onCellClicked(this)" 
                            class="${className}">
                            ${cell}
                        </td>`
        }
        strHTML += '</tr>'
    }
    const elMat = document.querySelector('.game-board')
    elMat.innerHTML = strHTML
}

function onCellClicked(elCell) {
    // console.log('elCell:', elCell)

    // TODO: if the target is marked - move the piece!
    if (elCell.classList.contains('mark')) {
        // console.log('move piece')
        movePiece(gSelectedElCell, elCell)
        cleanBoard()
        return
    }

    cleanBoard()

    elCell.classList.add('selected')

    // Saving in a global variable
    gSelectedElCell = elCell
    // console.log('elCell.id:', elCell.id)
    const cellCoord = getCellCoord(elCell.id)
    // console.log('cellCoord:', cellCoord)

    const piece = gBoard[cellCoord.i][cellCoord.j]
    // console.log('piece:', piece)

    // Another way
    // const piece = elCell.innerText

    var possibleCoords = []
    switch (piece) {
        case ROOK_BLACK:
        case ROOK_WHITE:
            possibleCoords = getAllPossibleCoordsRook(cellCoord, piece === ROOK_WHITE)
            break
        case BISHOP_BLACK:
        case BISHOP_WHITE:
            possibleCoords = getAllPossibleCoordsBishop(cellCoord)
            break
        case KNIGHT_BLACK:
        case KNIGHT_WHITE:
            possibleCoords = getAllPossibleCoordsKnight(cellCoord)
            break
        case PAWN_BLACK:
        case PAWN_WHITE:
            possibleCoords = getAllPossibleCoordsPawn(cellCoord, piece === PAWN_WHITE)
            break

    }
    markCells(possibleCoords)
}

function movePiece(elFromCell, elToCell) {
    // console.log('elFromCell:', elFromCell)
    // console.log('elToCell:', elToCell)

    const fromCoord = getCellCoord(elFromCell.id)
    // console.log('fromCoord:', fromCoord)
    const toCoord = getCellCoord(elToCell.id)
    // console.log('toCoord:', toCoord)

    // update the MODEl
    const piece = gBoard[fromCoord.i][fromCoord.j]
    gBoard[fromCoord.i][fromCoord.j] = ''
    gBoard[toCoord.i][toCoord.j] = piece

    // update the DOM
    elFromCell.innerText = ''
    elToCell.innerText = piece


}

function markCells(coords) {
    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i]
        var selector = getSelector(coord)
        var elCell = document.querySelector(selector)
        elCell.classList.add('mark')
    }
}

// Gets a string such as: 'cell-2-7' and returns {i:2, j:7}
function getCellCoord(strCellId) {
    const coord = {}
    const parts = strCellId.split('-') // ['cell','2','7']
    coord.i = +parts[1]
    coord.j = +parts[2]
    return coord
}

function cleanBoard() {
    const elTds = document.querySelectorAll('.mark, .selected')
    for (var i = 0; i < elTds.length; i++) {
        elTds[i].classList.remove('mark', 'selected')
    }
}

function getSelector(coord) {
    return `#cell-${coord.i}-${coord.j}`
}

function isEmptyCell(coord) {
    return gBoard[coord.i][coord.j] === ''
}

function getAllPossibleCoordsPawn(pieceCoord, isWhite) {
    // console.log('pieceCoord:', pieceCoord)
    // console.log('isWhite:', isWhite)

    var res = []
    var diff = (isWhite) ? -1 : 1
    var nextCoord = { i: pieceCoord.i + diff, j: pieceCoord.j }

    if (isEmptyCell(nextCoord)) res.push(nextCoord)
    else return res

    if (pieceCoord.i === 1 && !isWhite || pieceCoord.i === 6 && isWhite) {
        diff *= 2
        nextCoord = { i: pieceCoord.i + diff, j: pieceCoord.j }
        if (isEmptyCell(nextCoord)) res.push(nextCoord)
    }
    // console.log('res:', res)
    return res
}

function getAllPossibleCoordsRook(pieceCoord, isWhite) {
    var res = []
    var diff = (isWhite) ? -1 : 1

    while(diff){
        console.log("a")
    }


    return res
}

function getAllPossibleCoordsBishop(pieceCoord) {
    var res = []

    return res
}

function getAllPossibleCoordsKnight(pieceCoord) {
    var res = []

    return res
}
