import {board} from './board.js';

 
 // player properties
let turn = true;
let attackerWin = false;
let jarlsGuardWin = false;
let playerPieces;

 let selectedPiece = { 
  pieceId: -1, 
  index0fBoardPiece: -1, 
 }


 function logRowsWithSameArrayPosition(board, rowIndex, arrayIndex) {
  const boardArray = Object.values(board); // Convert board object to an array
  const currentRow = boardArray[rowIndex]; // Get the current row based on the given rowIndex

  const currentColumn = boardArray.map(row => row[arrayIndex]); // Get an array of values at the given arrayIndex from all rows

  console.log(`this is the horizontal and vertical for the chosen peice \n --Current Row: \n    ${currentRow} \n Current Column: \n    ${currentColumn}`);
  // logAvailableSpaces(board, rowIndex, arrayIndex)
  // Additional code to be executed can be placed here
}


  export default logRowsWithSameArrayPosition;

 