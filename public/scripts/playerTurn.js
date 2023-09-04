import {board, gameBoard} from './board.js';

 
let currentPlayer = 'Attacker';

function togglePlayerTurn() {
  currentPlayer = currentPlayer === 'Attacker' ? 'Defender' : 'Attacker';
}

console.log('Current player:', currentPlayer); // Player One

 // player properties

let attackerWin = false;
let jarlsGuardWin = false;
let jarlPiece = false;
let playerPieces;

const parseID = (input) => {
  // Split the string into two parts: the letter and the number
  let letter = input.match(/[a-zA-Z]+/)[0];
  const number = input.match(/\d+/)[0];
  let numberAsInt = parseInt(number, 10); 

  console.log('Letter:', letter);
  console.log('Number:', numberAsInt);

  return { letter, numberAsInt };
};


const handleInitialClick = (pieceType) => {
  
  const divs = document.querySelectorAll(`.${pieceType}`);
  console.log(`whosTurnIsItAnyway function ran for ${pieceType}`);
  divs.forEach(div => {
    div.addEventListener('click', function(event) {
      // Remove the 'highlight' class from all divs
      divs.forEach(div => {
        div.classList.remove('highlight');
      });

      // Add the 'highlight' class to the clicked div
      div.classList.add('highlight');

      console.log(`${pieceType} started turn`);
      console.log('Div clicked', event);
      // Add your logic here
    // Get the ID of the parent element
    const parentId = div.parentNode.id;

   const parsedID = parseID(parentId);
const letter = parsedID.letter;
const numberAsInt = parsedID.numberAsInt;
console.log('Parent ID:', letter, numberAsInt);


      logRowsWithSameArrayPosition(gameBoard, `${letter}`, numberAsInt)
    });
  });
} 

//if player is attacker than give event listener to the divs with the beserker class

const whosTurnIsItAnyway = (currentPlayer) => {
  console.log("whosTurnIsItAnyway function ran");
  console.log(currentPlayer)
  if (currentPlayer === 'Attacker') {
    let pieceType = 'beserker';
    handleInitialClick(pieceType) 
  } else if (currentPlayer === 'Defender') {
    let pieceType = 'guard, .jarl';
    handleInitialClick(pieceType) 
  } 
};

function getAvailablePieces() {
  const availablePieces = [];
  
  for (const row in gameBoard) {
    for (const value of gameBoard[row]) {
      if (value !== null && value < 24) {
        availablePieces.push(value);
      }
    }
  }
  console.log("Available pieces to be moved:", availablePieces);
  return availablePieces;
}

getAvailablePieces();



// function isSquareOccupied(square) {
//   const row = square[0];
//   const column = parseInt(square.substring(1));
//   const value = gameBoard[row][column];
  
//   if (value !== null) {
//     if (value < 24) {
//       console.log("Square is occupied by a game piece less than 24.");
//     } else if (value >= 24 && value <= 36) {
//       console.log("Square is occupied by a game piece between 24 and 36.");
//     } else {
//       console.log("Square is occupied by a game piece, but not within the specified range.");
//     }
//   } else {
//     console.log("Square is not occupied by a game piece.");
//   }
// }

// Example usage
// isSquareOccupied("a3"); // Square is not occupied by a game piece.
// isSquareOccupied("a4"); // Square is occupied by a game piece less than 24.
// isSquareOccupied("f6"); // Square is occupied by a game piece between 24 and 36.
const isNullSpaceVisible = (currID) => {
  // Function logic goes here
};

function convertArray(array) {
  const indicesOfNull = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) {
      indicesOfNull.push(i);
    }
  }

  const index = array.indexOf("myNumb");
  const beforeNullArray = indicesOfNull.filter((index) => index < array.indexOf("myNumb"));
  const afterNullArray = indicesOfNull.filter((index) => index > array.indexOf("myNumb"));

  const reversedBeforeNullArray = beforeNullArray.reverse();

  console.log(reversedBeforeNullArray);
  console.log(afterNullArray);

  const validNumbers = [];

  afterNullArray.forEach((index, pos) => {
    if ((index + 1) === afterNullArray[pos+1]) {
      validNumbers.push(array[index + 1]);
    }
  });

  console.log("Valid numbers:", validNumbers);

  return index;
}

const originalArray = [null, 45, 7, null, null, "myNumb", null, null, null, null, null];
const convertedArray = convertArray(originalArray);

console.log(convertedArray);




function logRowsWithSameArrayPosition(board, row, column) {
  let currentRow = board[row];
  let currentColumn = column; 

  let columnString = ""; // Empty string variable

  // Iterate over the keys and concatenate column 3 values to the string
  const columnArray = []; // Declare an empty array

for (const key in gameBoard) {
  const value = gameBoard[key][column];
  columnArray.push(value); // Push the value to the array
}
const tds = document.querySelectorAll('td');
tds.forEach(td => {
  td.classList.remove('highlight');
});


  console.log(columnArray);
  console.log(currentRow)


  currentRow.forEach((item, index) => {
    if (item === null) {
      const currID = row + (index);
      // console.log(currID);
      const avail = document.querySelector(`#${currID}`);
      // console.log(avail);
      const isVisible = isNullSpaceVisible(currID); // Check if the null space is visible

      if (isVisible) {
        avail.classList.add('highlight');
      }
    }
  });

  columnArray.forEach((item, index) => {
    if (item === null) {
      const letter = String.fromCharCode(index + 97); // 97 is the ASCII value of 'a'
      const currID = letter + column;
      const avail = document.querySelector(`#${currID}`);
      const isVisible = isNullSpaceVisible(currID); // Check if the null space is visible
  
      if (isVisible) {
        avail.classList.add('highlight');
      }
    }
  });


  console.log(`This is the horizontal and vertical for the chosen piece:\n- Current Row:\n   ${currentRow}\n- Current Column:\n   ${columnArray}`);
}





  export { logRowsWithSameArrayPosition, togglePlayerTurn, currentPlayer, whosTurnIsItAnyway, parseID};

 