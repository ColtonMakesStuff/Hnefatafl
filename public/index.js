const generateGamePiece = () => {
  const gameBoard = document.querySelector('.game-board');

  const centerRowIndex = Math.ceil(13 / 2) -1; 
  const centerColumnIndex = Math.ceil(13 / 2) -1;
  const centerSquareIndex = centerRowIndex * 13 + centerColumnIndex;
  const centerSquare = gameBoard.children[84];


  const gamePiece = document.createElement('div');
  gamePiece.classList.add('piece');
  centerSquare.appendChild(gamePiece);
  const isOccupiedByClasses = isOccupied(centerSquare, ['corner', 'jarlSquare', 'attackerSquare']);
  if (isOccupiedByClasses) {
    console.log('Center square is occupied by one of the specified classes!');
  } else {
    console.log('Center square is not occupied by any of the specified classes!');
  }
};

const isOccupied = (square, classes) => {
  for (const className of classes) {
    if (square.classList.contains(className)) {
      return true;
    }
  }
  return false;
};


 
         const generateGameBoard =() => {
         // Generate the game board squares dynamically
          const gameBoard = document.querySelector('.game-board');
          for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 13; j++) {
              const square = document.createElement('div');
              square.classList.add('game-square');
      
              // Check if the current square is a corner
              if ((i === 0) && (j === 0)) {
                const corner = document.createElement('div');
                square.classList.add('corner');
              } else if ((i === 0) && (j === 12)) {
                const corner = document.createElement('div');
                square.classList.add('corner');
                
              } else if ((i === 12) && (j === 0)) {
                const corner = document.createElement('div');
                square.classList.add('corner');
              } else if ((i === 12) && (j === 12)) {
                const corner = document.createElement('div');
                square.classList.add('corner');
              } else if (
                 (i === 0 && (j >= 4 && j <= 8)) || // Top row
                 (i === 12 && (j >= 4 && j <= 8)) || // Bottom row
                (j === 0 && (i >= 4 && i <= 8)) || // Outside columns 
                (j === 12 && (i >= 4 && i <= 8)) ||// Outside columns
                //inner attacker square
                ((i === 1) && (j === 6)) || // Top row
                ((i === 11) && (j === 6)) || // Bottom row
               ((j === 1) && (i === 6)) || // Outside columns 
               ((j === 11) && (i === 6)) // Outside columns
              ) {
                     
                      square.classList.add('attackerSquare');
                     
                } else if (
                  ((i === 6) && (j === 6))
                )
                {
                  square.classList.add('jarlSquare');
                    
                }

              gameBoard.appendChild(square);
            }
          }
         
 generateGamePiece();
}
generateGameBoard()



  