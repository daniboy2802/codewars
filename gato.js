let board = [
  [1, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1]
]

const checkHorizontal = (horizontalMatriz) => {
  if(horizontalMatriz.includes(0) && !horizontalMatriz.includes(1)) { console.log('0 won') } 
  else if(horizontalMatriz.includes(1) && !horizontalMatriz.includes(0)) { console.log('1 won') } 
}

const checkVertical = (board) => {
  for(i = 0; i < board.length; i ++) {
    let newBoard = []
    board.forEach(subBoard => {
      newBoard.push(subBoard[i])
    })
    checkHorizontal(newBoard)
  }
}

const checkDiagonal = (board) => {
  let newBoard = []
  board.forEach((subBoard, e) => {
    newBoard.push(subBoard[e])
  })
  checkHorizontal(newBoard)
  newBoard = []
  for(i = board.length - 1; i >= 0; i--) {
    board.forEach(subBoard => newBoard.push(subBoard[i]))
  }
  checkHorizontal(newBoard)
}

const checkWinner = (board) => {
  board.forEach(subBoard => checkHorizontal(subBoard))
  checkDiagonal(board)
  checkVertical(board)
}

checkWinner(board)


