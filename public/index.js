import { board, gameBoard, generateBoard } from './scripts/board.js';
import {logRowsWithSameArrayPosition, togglePlayerTurn, currentPlayer, whosTurnIsItAnyway} from './scripts/playerTurn.js';
import {} from './scripts/playerMove.js';

const playerSelection = { row: 'd', col: 5 };
const moveSelection = { row: 'd', col: 7 };

const container = document.getElementById('table');
container.innerHTML = generateBoard();

// console.log(`this is the board \n${JSON.stringify(board)}`)


// Example usage: get the HTML element for row 'a' and column 3

// logRowsWithSameArrayPosition(gameBoard, 'f', 5);

// const cellElement = getCellElement(playerSelection.row, playerSelection.col);

// cellElement.classList.add('highlight');

// const cellElementMove = getCellElement(moveSelection.row, moveSelection.col);

// cellElementMove.classList.add('highlightMove');

// movePiece(playerSelection.row, playerSelection.col, moveSelection.row, moveSelection.col)

// console.log(`this is the board after the move\n${JSON.stringify(gameBoard)}`)  
  // End example usage
  
// console.log('Current player:', currentPlayer); // Player One
 
// togglePlayerTurn();
// console.log('Current player:', currentPlayer); // Player One

whosTurnIsItAnyway(currentPlayer);



