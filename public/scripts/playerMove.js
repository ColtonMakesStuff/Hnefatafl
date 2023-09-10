
import {gameBoard} from './board.js';
import { togglePlayerTurn } from './playerTurn.js';





  
  // Example usage of the movePiece function
 



const getCellElement = (row, col) => {
    const cellId = `${row}${col}`;
    const cellElement = document.querySelector(`#${cellId}`);
    
    return cellElement;
  };



  export {getCellElement};


