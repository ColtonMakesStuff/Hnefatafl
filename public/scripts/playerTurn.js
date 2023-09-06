import {board, gameBoard} from './board.js';

 
let currentPlayer = 'Attacker';

function togglePlayerTurn() {
  currentPlayer = currentPlayer === 'Attacker' ? 'Defender' : 'Attacker';
}
//if player is attacker than give event listener to the divs with the beserker class

const whosTurnIsItAnyway = (currentPlayer) => {
  // console.log("whosTurnIsItAnyway function ran");
  console.log(currentPlayer)
  if (currentPlayer === 'Attacker') {
    let pieceType = 'beserker';
    handleInitialClick(pieceType) 
  } else if (currentPlayer === 'Defender') {
    let pieceType = 'guard, .jarl';
    handleInitialClick(pieceType) 
  } 
};

const handleInitialClick = (pieceType) => {
  
  const divs = document.querySelectorAll(`.${pieceType}`);
  console.log(`whosTurnIsItAnyway function ran for ${pieceType}`);
  console.log("handleing add listeners")
  divs.forEach(div => {
    div.addEventListener('click', function(event) {
      console.log("handling initial click")
      // Remove the 'highlight' class from all divs
      divs.forEach(div => {
        div.classList.remove('highlight');
      });

      // Add the 'highlight' class to the clicked div
      div.classList.add('highlight');

      console.log(`${pieceType} started turn`);
       console.log("div id is hopefully " + div.id);
      // Add your logic here
      const pieceID = parseFloat(div.id);
    // Get the ID of the parent element
    const parentId = div.parentNode.id;
console.log("the selected piece id is " +parentId)
   const parsedID = parseID(parentId);
const letter = parsedID.letter;
const numberAsInt = parsedID.numberAsInt;
console.log('Parent ID:', letter, numberAsInt);
logRowsWithSameArrayPosition(gameBoard, `${letter}`, numberAsInt, pieceID)
    });
  });
} 

function logRowsWithSameArrayPosition(board, row, column, pieceID) {
  console.log("adding classes to available spaces")
  let currentRow = board[row];
  // let currentColumn = column; 


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


  console.log( "this is the column array "+ columnArray);
  console.log("this is the row array "+ currentRow)
  const convertedColumnArray = convertArray(columnArray, pieceID);
  const convertedRowArray = convertArray(currentRow, pieceID);

  console.log("valid column " + convertedColumnArray)
  console.log("valid row " + convertedRowArray)


  currentRow.forEach((item, index) => {
    if (item === null) {
      const currID = row + (index);
      // console.log(currID);
      const avail = document.querySelector(`#${currID}`);
      // console.log(avail);

      if (isVisible) {
        avail.classList.add('highlight');
      }
    }
  });

  columnArray.forEach((item, index) => {
    if (item === null) {
      const letter = String.fromCharCode(index + 97); // 97 is the ASCII value of 'a'
      const currID = letter + column;
      // console.log("currID is " + currID)
      const avail = document.querySelector(`#${currID}`);
  
      if (isVisible) {
        avail.classList.add('highlight');
      }
    }
  });


  console.log(`This is the horizontal and vertical for the chosen piece:\n- Current Row:\n   ${currentRow}\n- Current Column:\n   ${columnArray}`);
}
// console.log('Current player:', currentPlayer); // Player One

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


function convertArray(array, chosenID) {
  console.log(array +" is being tested")
  console.log(chosenID +" is my piece")
  
  const indicesOfNull = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) {
      indicesOfNull.push(i);
    }
  }
 console.log("i of null " + indicesOfNull)
  let indexOfMyNumb = array.indexOf(chosenID);
  console.log("my piece is at "+ indexOfMyNumb)

  const beforeNullArray = indicesOfNull.filter((index) => index < array.indexOf(chosenID));
  const afterNullArray = indicesOfNull.filter((index) => index > array.indexOf(chosenID));

  const reversedBeforeNullArray = beforeNullArray.reverse();

  console.log(reversedBeforeNullArray);
  console.log(afterNullArray);

  let validNumbers = [];

let indexOfMyNumbForAfter = indexOfMyNumb
  afterNullArray.forEach((afterNullArray) => {
    if ((indexOfMyNumbForAfter +1) === afterNullArray) {
      console.log(afterNullArray + " IS valid");
      validNumbers.push(afterNullArray)

      indexOfMyNumbForAfter ++
    } else {
      console.log(afterNullArray+ " is NOT valid")
    }
  });

  console.log("time to test before array " + reversedBeforeNullArray)

let indexOfMyNumbForBefore = indexOfMyNumb
reversedBeforeNullArray.forEach((reversedBeforeNullArray) => {
    if ((indexOfMyNumbForBefore - 1) === reversedBeforeNullArray) {
      console.log(reversedBeforeNullArray + " IS valid");
      validNumbers.push(reversedBeforeNullArray)

      indexOfMyNumbForBefore --
    } else {
      console.log(reversedBeforeNullArray + " is NOT valid")
    }
  });

  console.log("Valid numbers:", validNumbers);

  return validNumbers;
}

const originalArray = [null, 45, 7, null, 12, null, null, null, null, 2, null];
const convertedArray = convertArray(originalArray, 12);

console.log("this is the converted test array valid spaces " + convertedArray);










  export { logRowsWithSameArrayPosition, togglePlayerTurn, currentPlayer, whosTurnIsItAnyway, parseID};

 