import { board, gameBoard, generateBoard } from './scripts/board.js';
import logRowsWithSameArrayPosition from './scripts/playerTurn.js';
import {movePiece, getCellElement} from './scripts/playerMove.js';

const playerSelection = { row: 'd', col: 5 };
const moveSelection = { row: 'd', col: 9 };

const container = document.getElementById('table');
container.innerHTML = generateBoard();

console.log(`this is the board \n${JSON.stringify(board)}`)
logRowsWithSameArrayPosition(gameBoard, 5, 7)

// Example usage: get the HTML element for row 'a' and column 3
const cellElement = getCellElement(playerSelection.row, playerSelection.col);

cellElement.classList.add('highlight');

const cellElementMove = getCellElement(moveSelection.row, moveSelection.col);

cellElementMove.classList.add('highlightMove');
// End example usage

movePiece(playerSelection.row, playerSelection.col, moveSelection.row, moveSelection.col);
console.log(`this is the board after the move\n${JSON.stringify(gameBoard)}`)  
  
  




