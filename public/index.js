// const generateGamePiece = () => {
//   const gameBoard = document.querySelector('.game-board');

//   const centerRowIndex = Math.ceil(13 / 2) -1; 
//   const centerColumnIndex = Math.ceil(13 / 2) -1;
//   const centerSquareIndex = centerRowIndex * 13 + centerColumnIndex;
//   const centerSquare = gameBoard.children[84];


//   const gamePiece = document.createElement('div');
//   gamePiece.classList.add('piece');
//   centerSquare.appendChild(gamePiece);
//   const isOccupiedByClasses = isOccupied(centerSquare, ['corner', 'jarlSquare', 'attackerSquare']);
//   if (isOccupiedByClasses) {
//     console.log('Center square is occupied by one of the specified classes!');
//   } else {
//     console.log('Center square is not occupied by any of the specified classes!');
//   }
// };

// const isOccupied = (square, classes) => {
//   for (const className of classes) {
//     if (square.classList.contains(className)) {
//       return true;
//     }
//   }
//   return false;
// };


 
//          const generateGameBoard =() => {
//          // Generate the game board squares dynamically
//           const gameBoard = document.querySelector('.game-board');
//           for (let i = 0; i < 13; i++) {
//             for (let j = 0; j < 13; j++) {
//               const square = document.createElement('div');
//               square.classList.add('game-square');
      
//               // Check if the current square is a corner
//               if ((i === 0) && (j === 0)) {
//                 const corner = document.createElement('div');
//                 square.classList.add('corner');
//               } else if ((i === 0) && (j === 12)) {
//                 const corner = document.createElement('div');
//                 square.classList.add('corner');
                
//               } else if ((i === 12) && (j === 0)) {
//                 const corner = document.createElement('div');
//                 square.classList.add('corner');
//               } else if ((i === 12) && (j === 12)) {
//                 const corner = document.createElement('div');
//                 square.classList.add('corner');
//               } else if (
//                  (i === 0 && (j >= 4 && j <= 8)) || // Top row
//                  (i === 12 && (j >= 4 && j <= 8)) || // Bottom row
//                 (j === 0 && (i >= 4 && i <= 8)) || // Outside columns 
//                 (j === 12 && (i >= 4 && i <= 8)) ||// Outside columns
//                 //inner attacker square
//                 ((i === 1) && (j === 6)) || // Top row
//                 ((i === 11) && (j === 6)) || // Bottom row
//                ((j === 1) && (i === 6)) || // Outside columns 
//                ((j === 11) && (i === 6)) // Outside columns
//               ) {
                     
//                       square.classList.add('attackerSquare');
                     
//                 } else if (
//                   ((i === 6) && (j === 6))
//                 )
//                 {
//                   square.classList.add('jarlSquare');
                    
//                 }

//               gameBoard.appendChild(square);
//             }
//           }
         
//  generateGamePiece();
// }
// generateGameBoard()

const board = {
  a: [null, null, null,    0,    1,    2,    3,    4, null, null, null],
  
  b: [null, null, null, null, null,    5, null, null, null, null, null],
  
  c: [null, null, null, null, null, null, null, null, null, null, null],
  
  d: [   6, null, null, null, null,   24, null, null, null, null,    7],
  
  e: [   8, null, null, null,   25,   26,   27, null, null, null,    9],
  
  f: [  10,   11, null,   28,   29,   36,   30,   31, null,   12,   13],
  
  g: [  14, null, null, null,   32,   33,   34, null, null, null,   15],
  
  h: [  16, null, null, null, null,   35, null, null, null, null,   17],
  
  i: [null, null, null, null, null, null, null, null, null, null, null],
  
  j: [null, null, null, null, null,   18, null, null, null, null, null],
  
  k: [null, null, null,   19,   20,   21,   22,   23, null, null, null]
};

console.log(board)

function logRowsWithSameArrayPosition(board, rowIndex, arrayIndex) {
  const boardArray = Object.values(board);
  const currentRow = boardArray[rowIndex];
  
  boardArray.forEach((row, index) => {
    const value = row[arrayIndex];
    const currentColumn = boardArray.map(row => row[arrayIndex]);
    console.log(`Row ${index}: ${value} | Current Row: ${currentRow} | Current Column: ${currentColumn}`);
  });
  // logAvailableSpaces(board, rowIndex, arrayIndex)
}

// function logAvailableSpaces(board, rowIndex, arrayIndex) {
//   const boardArray = Object.values(board);
//   const currentRow = boardArray[rowIndex];
//   const currentColumn = boardArray.map(row => row[arrayIndex]);

//   let availableSpacesBeforeRow = [];
//   let availableSpacesAfterRow = [];
//   let availableSpacesBeforeColumn = [];
//   let availableSpacesAfterColumn = [];

//   for (let i = 0; i < boardArray.length; i++) {
//     const row = boardArray[i];

//     // Row Check
//     const valueRow = row[arrayIndex];

//     if (i < rowIndex && valueRow !== null) {
//       availableSpacesBeforeRow = []; // Reset available spaces if a non-null value is found before the current row
//     } else if (i > rowIndex && valueRow !== null) {
//       break; // Stop checking if a non-null value is found after the current row
//     } else if (i < rowIndex && valueRow === null) {
//       availableSpacesBeforeRow.push(i); // Add index to available spaces before the current row
//     } else if (i > rowIndex && valueRow === null) {
//       availableSpacesAfterRow.push(i); // Add index to available spaces after the current row
//     }

//     // Column Check
//     const valueColumn = boardArray[i][arrayIndex];

//     if (i < arrayIndex && valueColumn !== null) {
//       availableSpacesBeforeColumn = []; // Reset available spaces if a non-null value is found before the current column
//     } else if (i > arrayIndex && valueColumn !== null) {
//       break; // Stop checking if a non-null value is found after the current column
//     } else if (i < arrayIndex && valueColumn === null) {
//       availableSpacesBeforeColumn.push(i); // Add index to available spaces before the current column
//     } else if (i > arrayIndex && valueColumn === null) {
//       availableSpacesAfterColumn.push(i); // Add index to available spaces after the current column
//     }
//   }

//   console.log(`Row ${rowIndex}: ${currentRow}`);
//   console.log(`Column ${arrayIndex}: ${currentColumn}`);
//   console.log(`Available Spaces Before (Row): ${availableSpacesBeforeRow}`);
//   console.log(`Available Spaces After (Row): ${availableSpacesAfterRow}`);
//   console.log(`Available Spaces Before (Column): ${availableSpacesBeforeColumn}`);
//   console.log(`Available Spaces After (Column): ${availableSpacesAfterColumn}`);
// }



//if the found item is less than, than anything less thatn is discarded and same thing with greater than

logRowsWithSameArrayPosition(board, 7, 5)

//load to dom
const boardWidth = 11; // Width of the game board
const boardHeight = 11; // Height of the game board
const cells = document.querySelectorAll("td")
let beserker = document.querySelectorAll(".beserker")
console.log(beserker)
let guard = document.querySelectorAll(".guard")
console.log(guard)
let jarl = document.querySelector(".jarl")
console.log(jarl)
let attackersTurn = document.querySelector(".attackersTurn")
let guardsTurn = document.querySelector(".guardsTurn")
let divider = document.querySelector("#divider")

// player properties
let turn = true;
let attackerWin = false;
let jarlsGuardWin = false;
let playerPieces;

 let selectedPiece = { 
  pieceId: -1, 
  index0fBoardPiece: -1, 
  canMoveHorizontally: true, 
  canMoveVertically: true
 }

 // initialize event listeners on pieces
const getPlayerPieces = (() => {
    console.log("clicked");
    if (turn) {
      playerPieces = guard || jarl;
    } else {
      playerPieces = beserker;
    }
    
    removeCellonclick();
    resetBorders();
  });

  function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
    cells[i].removeAttribute("onclick");
    }
    console.log("removeCell")
  }

  // resets borders to default
function resetBorders() {
  for (let i = 0; i < playerPieces.length; i++) {
    console.log("resetBorders")
  playerPieces[i].style.border = "4px solid black"; 
  }
  resetSelectedPieceProperties() ;
  getSelectedPiece() ;
}

const resetSelectedPieceProperties = (() => {
   selectedPiece.pieceId = -1, 
   selectedPiece.index0fBoardPiece = -1, 
   selectedPiece.canMoveHorizontally = true, 
   selectedPiece.canMoveVertically = true
   console.log("reset piece properties") 
})

const getSelectedPiece = (()=> {
  selectedPiece.pieceId = parseInt(event.target.id);

  const clickedElement = event.target;
  const classList = clickedElement.classList;

  // Get the class of the clicked element
  const clickedClass = classList[0];

  console.log(clickedClass);

  console.log("piece ID is "+ selectedPiece.pieceId)
  selectedPiece.index0fBoardPiece = findPiece(selectedPiece.pieceId);
})
let findPiece = function (pieceId) {
  let parsed = parseInt(pieceId); console.log("position on board is " + board.indexOf(parsed))
  return board.indexOf(parsed);
 
  getAvailableSpaces();
}
 
  function givePiecesEventListeners() {
    if (turn) {
      for (let i = 0; i < guard.length; i++) {
        guard[i].addEventListener("click", getPlayerPieces);
      }
      jarl.addEventListener("click", getPlayerPieces);
    } else {
      for (let j = 0; j < beserker.length; j++) {
        beserker[j].addEventListener("click", getPlayerPieces);
      }
    }
  }
  
  givePiecesEventListeners();