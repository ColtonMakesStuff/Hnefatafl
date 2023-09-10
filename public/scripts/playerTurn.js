import {board, gameBoard} from './board.js';


 // Set the initial player to 'Attacker'
let currentPlayer = 'Attacker';
// document global reference to current peices

// Function to toggle the player turn between 'Attacker' and 'Defender'
function togglePlayerTurn() {
  currentPlayer = currentPlayer === 'Attacker' ? 'Defender' : 'Attacker';
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Function to determine whose turn it is
const whosTurnIsItAnyway = (currentPlayer) => {
    // If the current player is 'Attacker', handle initial click for 'beserker' pieces
  console.log(currentPlayer)
  if (currentPlayer === 'Attacker') {
    let pieceType = 'beserker';
    handleInitialClick(pieceType) 
      // If the current player is 'Defender', handle initial click for 'guard' and 'jarl' pieces
  } else if (currentPlayer === 'Defender') {
    let pieceType = 'guard, .jarl';
    handleInitialClick(pieceType) 
  } 
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//function for splitting the parent id into its parts
const splitID = (id) => {
  const letterOfId = id.charAt(0); // Get the first character (letter)
  const numberString = id.slice(1); // Get the remaining characters as a string
  const realNumberOfId = parseInt(numberString)
  return { letterOfId, realNumberOfId };
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function for the click on the selected piece
const handleInitialClick = (pieceType) => {
    // Select all the divsOfPiece with the specified piece type
const divsOfPiece = document.querySelectorAll(`.${pieceType}`);

      console.log(`whosTurnIsItAnyway function ran for ${pieceType}`);
      console.log("handling add listeners to peices")   
divsOfPiece.forEach(div => {
  
      // Add a click event listener to each div
      div.addEventListener('click', function() {
      // Remove the 'highlight' class from all divsOfPiece
        divsOfPiece.forEach(div => {
        div.classList.remove('highlight');
      });
      // Add the 'highlight' class to the clicked div
      div.classList.add('highlight');

      const pieceId = parseFloat(div.id);
      const parentId = div.parentNode.id;

console.log("I AM PIECE pieceId:" + pieceId)
console.log("I AM PARENT parentId:" + parentId)
      // Parse the parent ID to extract the letter and number
      const theSplitID = splitID(parentId);
      const theLetterOfId = theSplitID.letterOfId;
      const theNumberOfId = theSplitID.realNumberOfId;
      // console.log('Parent ID:', letter, numberAsInt);
console.log("I AM THE LETTER OF THE PARENT ID theLetterOfId: " +theLetterOfId)
console.log("I AM THE NUMBER OF THE PARENT ID theNumberOfId: " +theNumberOfId)
      // Call the logRowsWithSameArrayPosition function
      logRowsWithSameArrayPosition(gameBoard, theLetterOfId, theNumberOfId, pieceId, parentId)
    });
  });
} 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Function to log the rows with the same array position as the selected piece
function logRowsWithSameArrayPosition(board, row, column, pieceId, parentId) {
  console.log("adding classes to available spaces")

    // Get the current row from the game board
  let currentRow = board[row];
  const columnArray = []; // Declare an empty array
    // Iterate over the keys of the game board and get the column values
  for (const key in gameBoard) {
      const value = gameBoard[key][column];
      columnArray.push(value); // Push the value to the array
  }
  //clear highlights
  const tds = document.querySelectorAll('td');
    tds.forEach(td => {
    td.classList.remove('highlight');
  });


  console.log( "this is the column array "+ columnArray);
  console.log("this is the row array "+ currentRow)

    // Convert the column array and row array to valid column and row arrays
  const convertedColumnArray = convertArray(columnArray, pieceId);
  const convertedRowArray = convertArray(currentRow, pieceId);

  console.log("valid column " + convertedColumnArray)
  console.log("valid row " + convertedRowArray)

console.log("im the parent id "+ parentId)

 let i = 0;
   // Add the 'highlight' class to the available spaces in the column
convertedColumnArray.forEach(() => {
  console.log("test " + convertedColumnArray);
  let letter = '';
 
  if (convertedColumnArray[i] === 0) {
    letter = 'a';
  } else if (convertedColumnArray[i] === 1) {
    letter = 'b';
  } else if (convertedColumnArray[i] === 2) {
    letter = 'c';
  } else if (convertedColumnArray[i] === 3) {
    letter = 'd';
  } else if (convertedColumnArray[i] === 4) {
    letter = 'e';
  } else if (convertedColumnArray[i] === 5) {
    letter = 'f';
  } else if (convertedColumnArray[i] === 6) {
    letter = 'g';
  } else if (convertedColumnArray[i] === 7) {
    letter = 'h';
  } else if (convertedColumnArray[i] === 8) {
    letter = 'i';
  } else if (convertedColumnArray[i] === 9) {
    letter = 'j';
  } else if (convertedColumnArray[i] === 10) {
    letter = 'k';
  };
i++;

  const columnArrayId = letter + column;
  const avail = document.querySelector(`#${columnArrayId}`);
  avail.classList.add('highlight');
  avail.addEventListener("click", handleClick);  
});


i=0
  convertedRowArray.forEach(() => {
      const columnArrayId = row + convertedRowArray[i];
      i++
      // console.log("currID is " + currID)
  const avail = document.querySelector(`#${columnArrayId}`);
  avail.classList.add('highlight');
  avail.addEventListener("click", handleClick);
   
  });
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//converts arrays to valid spaces only
function convertArray(array, chosenID) {
  console.log(array +" is being tested"); // Log the array being tested
  console.log(chosenID +" is my piece"); // Log the chosenID
  const indicesOfNull = []; // Create an array to store the indices of null values
  // Loop through the array to find indices of null values
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) {
      indicesOfNull.push(i); // Push the index of null value to indicesOfNull array
    }
  }
  console.log("i of null " + indicesOfNull); // Log the indices of null values
  let indexOfMyNumb = array.indexOf(chosenID); // Get the index of chosenID in the array
  console.log("my piece is at "+ indexOfMyNumb); // Log the index of chosenID
  // Filter the indicesOfNull array to get the indices before and after indexOfMyNumb
  const beforeNullArray = indicesOfNull.filter((index) => index < array.indexOf(chosenID));
  const afterNullArray = indicesOfNull.filter((index) => index > array.indexOf(chosenID));
  const reversedBeforeNullArray = beforeNullArray.reverse(); // Reverse the beforeNullArray
  let validNumbers = []; // Create an array to store valid numbers
  let indexOfMyNumbForTest = indexOfMyNumb;// Iterate over the afterNullArray

  afterNullArray.forEach((afterNullArray) => {
    if ((indexOfMyNumbForTest + 1) === afterNullArray) {
      // console.log(afterNullArray + " IS valid"); // Log if the number is valid
      validNumbers.push(afterNullArray); // Push the valid number to validNumbers array
      indexOfMyNumbForTest++;
    } else {
      // console.log(afterNullArray + " is NOT valid"); // Log if the number is not valid
    }
  });

 indexOfMyNumbForTest = indexOfMyNumb;
  // Iterate over the reversedBeforeNullArray
  reversedBeforeNullArray.forEach((reversedBeforeNullArray) => {
    if ((indexOfMyNumbForTest - 1) === reversedBeforeNullArray) {
      // console.log(reversedBeforeNullArray + " IS valid"); // Log if the number is valid
      validNumbers.push(reversedBeforeNullArray); // Push the valid number to validNumbers array
      indexOfMyNumbForTest--;
    } else {
      // console.log(reversedBeforeNullArray + " is NOT valid"); // Log if the number is not valid
    }
  });

  console.log("Valid numbers:", validNumbers); // Log the valid numbers
  return validNumbers; // Return the valid numbers
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//adds functionallity to move click event listener
const handleClick = (parentId, columnArrayId) => {
  // Access variables within this function's scope
  console.log("Event triggered!");
  console.log("Parent ID: " + parentId);
  console.log("Current ID: " + columnArrayId);
  movePiece(parentId, columnArrayId);
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const movePiece = (parentId, currID) => {
  const oldTdElement = document.getElementById(pOne + pTwo);
  const newTdElement = document.getElementById(cOne + cTwo);
  const oldDefault = newTdElement.innerHTML
  console.log(newTdElement.innerHTML)
  
  newTdElement.innerHTML = oldTdElement.innerHTML;
  oldTdElement.innerHTML = oldDefault;
  
  console.log ("selected = " + pOne +" "+ pTwo + "\n to Move to = " + cOne + " " +cTwo) 
  
  
  
      // Additional checks or game logic as needed
      
      // Update the game board with the new position
       gameBoard[cOne][cTwo] = gameBoard[pOne][pTwo];
       gameBoard[pOne][pTwo] = null;
        console.log(gameBoard[cOne][cTwo])
        console.log(gameBoard[pOne][pTwo])
        togglePlayerTurn()
        return
  };



  export { logRowsWithSameArrayPosition, togglePlayerTurn, currentPlayer, whosTurnIsItAnyway};

 