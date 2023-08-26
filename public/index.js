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

const board = [
  null, null, null,    0,    1,    2,    3,    4, null, null, null,

  null, null, null, null, null,    5, null, null, null, null, null,

  null, null, null, null, null, null, null, null, null, null, null,

   6,   null, null, null, null,   24, null, null, null, null,   7,

   8,   null, null, null,   25,   26,   27, null, null, null,   9,

  10,     11, null,   28,   29,   36,   30,   31, null,   12,   13,

  14,   null, null, null,   32,   33,   34, null, null, null,   15,

  16,   null, null, null, null,   35, null, null, null, null,   17,

  null, null, null, null, null, null, null, null, null, null, null,

  null, null, null, null, null,   18, null, null, null, null, null,

  null, null, null,   19,   20,   21,   22,   23, null, null, null,
]

console.log(board)


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