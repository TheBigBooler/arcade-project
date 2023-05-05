/*reference to each cell */
const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");
const cell7 = document.getElementById("cell7");
const cell8 = document.getElementById("cell8");
const cell9 = document.getElementById("cell9");

/*function that chooses randomly between the 2 players*/
function choosePlayer(){
  let coinFlip = Math.random()
  if (coinFlip > 0.5) {
      currentPlayer.innerText = playerOneName
    } else {
      currentPlayer.innerText = playerTwoName
    }
}


/*2 player button*/
let playerOneName
let playerTwoName
const twoPlayers = document.getElementById('twoPlayer')
const currentPlayer = document.getElementById('currentPlayer')
twoPlayers.addEventListener('click', function(event){
  if (playerOneName && playerTwoName !== undefined){
    replay()
  } else {
    resetBoard()
    playerOneName = prompt('Player 1 name:', 'Player 1');
    playerTwoName = prompt('Player 2 name:', 'Player 2');
    choosePlayer()
  }
})


/*player clicks on board to place their marker*/
const board = document.querySelector("main");
board.addEventListener("click", function (event) {
  let clicked = event.target;
  if (clicked.tagName === "SPAN" && clicked.innerText === '') {
    if (currentPlayer.innerText == playerOneName) {
      clicked.innerText = 'X';
      currentPlayer.innerText = playerTwoName
    } else  if (currentPlayer.innerText == playerTwoName)
    { clicked.innerText = 'O';
    currentPlayer.innerText = playerOneName;
    }
  }
  checkWinCondition()
});

/*restart button*/
function resetBoard(){
  cell1.innerText = "";
  cell2.innerText = "";
  cell3.innerText = "";
  cell4.innerText = "";
  cell5.innerText = "";
  cell6.innerText = "";
  cell7.innerText = "";
  cell8.innerText = "";
  cell9.innerText = "";
  currentPlayer.innerText = 'Waiting for players'
}
const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", resetBoard);



/*Check for win condition*/
function checkWinCondition(){
  function playerOneWin(){
    currentPlayer.innerText = 'Player 1 wins!'
  }
  function playerTwoWin(){
    currentPlayer.innerText = 'Player 2 Wins!'
  }
  
  /* player 1 winning combinations*/
  if (cell1.innerText == 'X' && cell2.innerText == 'X' && cell3.innerText == 'X' ){
    playerOneWin()
  }
  if (cell1.innerText == 'X' && cell4.innerText == 'X' && cell7.innerText == 'X' ){
    playerOneWin()
  }
  if (cell1.innerText == 'X' && cell5.innerText == 'X' && cell9.innerText == 'X' ){
    playerOneWin()
  }
  if (cell2.innerText == 'X' && cell5.innerText == 'X' && cell8.innerText == 'X' ){
    playerOneWin()
  }
  if (cell3.innerText == 'X' && cell6.innerText == 'X' && cell9.innerText == 'X' ){
    playerOneWin()
  }
  if (cell3.innerText == 'X' && cell5.innerText == 'X' && cell7.innerText == 'X' ){
    playerOneWin()
  }
  if (cell4.innerText == 'X' && cell5.innerText == 'X' && cell6.innerText == 'X' ){
    playerOneWin()
  }
  if (cell7.innerText == 'X' && cell8.innerText == 'X' && cell9.innerText == 'X' ){
    playerOneWin()
  }
  /*player 2 winning combinations */
  if (cell1.innerText == 'O' && cell2.innerText == 'O' && cell3.innerText == 'O' ){
    playerTwoWin()
  }
  if (cell1.innerText == 'O' && cell4.innerText == 'O' && cell7.innerText == 'O' ){
    playerTwoWin()
  }
  if (cell1.innerText == 'O' && cell5.innerText == 'O' && cell9.innerText == 'O' ){
    playerTwoWin()
  }
  if (cell2.innerText == 'O' && cell5.innerText == 'O' && cell8.innerText == 'O' ){
    playerTwoWin()
  }
  if (cell3.innerText == 'O' && cell6.innerText == 'O' && cell9.innerText == 'O' ){
    playerTwoWin()
  }
  if (cell3.innerText == 'O' && cell5.innerText == 'O' && cell7.innerText == 'O' ){
    playerTwoWin()
  }
  if (cell4.innerText == 'O' && cell5.innerText == 'O' && cell6.innerText == 'O' ){
    playerTwoWin()
  }
  if (cell7.innerText == 'O' && cell8.innerText == 'O' && cell9.innerText == 'O' ){
    playerTwoWin()
  }
  /*all spaces are occupied and no winning combos are in play, results in a tie*/
  if (cell1.innerText !== '' && cell2.innerText !== '' && cell3.innerText !== '' && 
    cell4.innerText !== '' && cell5.innerText !== '' && cell6.innerText !== '' && 
    cell7.innerText !== '' && cell8.innerText !== '' && cell9.innerText !== '') {
      currentPlayer.innerText = "It's a tie!"
    }
}

/*Option to play again with same player names */
function replay(){
    let replay = confirm("Would you like to play again with the same players?")
    if (replay) {
      resetBoard()
      choosePlayer()
    } else {
    playerOneName = prompt('Player 1 name:', 'Player 1');
    playerTwoName = prompt('Player 2 name:', 'Player 2');
    choosePlayer()
    }
  }

  /*Alert that AI button doesn't work yet*/
const onePlayer = document.getElementById('onePlayer')
onePlayer.addEventListener('click', function(event){
  alert('Single player currently unavailable')
})



