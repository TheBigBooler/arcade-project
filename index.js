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



/*2 player button*/
let playerOneName
let playerTwoName
const twoPlayers = document.getElementById('twoPlayer')
const currentPlayer = document.getElementById('currentPlayer')
twoPlayers.addEventListener('click', function(event){
  resetBoard()
  playerOneName = prompt('Player 1 name:', 'Player 1');
  playerTwoName = prompt('Player 2 name:', 'Player 2');
  currentPlayer.innerText = playerOneName
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



/*Alert that AI button doesn't work yet*/
const onePlayer = document.getElementById('onePlayer')
onePlayer.addEventListener('click', function(event){
  alert('Single player currently unavailable')
})


/*Check for win condition*/
function checkWinCondition(){
  function playerOneWin(){
    alert('Player 1 wins!')
  }
  function playerTwoWin(){
    alert('Player 2 Wins!')
  }
  function gameOver(){
    let replay = confirm("Would you like to play again with the same players?")
    if (replay) {
      resetBoard()
      currentPlayer.innerText = playerOneName 
    } else {
      resetBoard()
    }
  }
  /*winning combinations*/
  if (cell1.innerText == 'X' && cell2.innerText == 'X' && cell3.innerText == 'X' ){
    playerOneWin()
    gameOver()
  }
}


