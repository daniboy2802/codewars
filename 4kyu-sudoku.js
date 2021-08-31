const testBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
]

/* 
  This will work in every sudoku game 
*/

const validateSolution = (board) => {
  // check if there is an empty space or 0
  board.forEach(row => {
    if(row.includes(0)) {
      return false
     }
  })

  const convertColumnsIntoArrays = (originalBoard) => {
    let newBoard = []
    for(i = 0; i < 9; i++) {
      let column = []
      for(n = 0; n < 9; n ++) {
        column.push(originalBoard[n][i])
      }
      newBoard.push(column)
    }
    return newBoard
  }

  const checkRepitedValues = (grid) => {
    for(n = 0; n < grid.length; n++) {
      if(new Set(grid[n]).size !== grid[n].length) {
        return false
      }
    }
    return true
  }
  
  const fillSubGrid = (grid, newGrid) => {
    const checkEmpty = (grid) => {
      if(grid.length > 0) {
        if(grid[grid.length - 1].length == 0) {
          grid.pop()
          checkEmpty(grid)
        } 
      }
    } 
    checkEmpty(grid)
    let row = []
    if(grid.length > 0) {
      for(n = grid.length - 1; n >= (grid.length - 3); n--) {
        for(i = 0; i < 3; i++) {
          row.push(grid[n].pop())
        }
      }
      newGrid.push(row)
      fillSubGrid(grid, newGrid)
    }
    return newGrid
  }

  const columns = convertColumnsIntoArrays(board)
  const rows = JSON.parse(JSON.stringify(board))
  const subGridThrebyThre = fillSubGrid(board, [])

  if(checkRepitedValues(columns) && checkRepitedValues(rows) && checkRepitedValues(subGridThrebyThre)) {
    return true
  } else {
    return false
  }
}

console.log(validateSolution(testBoard))