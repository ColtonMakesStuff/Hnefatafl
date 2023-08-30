import {gameBoard} from './board.js';
const movePiece = (fromRow, fromCol, toRow, toCol) => {
    // Check if the move is valid
    // Perform any additional checks or game logic as needed
    
    // Update the game board with the new position
    gameBoard[toRow][toCol] = gameBoard[fromRow][fromCol];
    gameBoard[fromRow][fromCol] = null;
  };
  
  // Example usage of the movePiece function
 

  export default movePiece;


