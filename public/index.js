import { board, gameBoard, generateBoard } from './scripts/board.js';
import logRowsWithSameArrayPosition from './scripts/playerTurn.js';
import movePiece from './scripts/playerMove.js';


const container = document.getElementById('table');
container.innerHTML = generateBoard();

console.log(`this is the board \n${JSON.stringify(board)}`)
logRowsWithSameArrayPosition(gameBoard, 5, 7)



const getCellElement = (row, col) => {
    const cellId = `${row}${col}`;
    const cellElement = document.querySelector(`#${cellId}`);
    cellElement.classList.add('highlight');
    return cellElement;
  };
  
  // Example usage: get the HTML element for row 'a' and column 3
  const cellElement = getCellElement('h', 4 );



movePiece('a', 3, 'b', 3);
console.log(`this is the board after the move\n${JSON.stringify(gameBoard)}`)

