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
function choosePlayer() {
  let coinFlip = Math.random();
  if (coinFlip > 0.5) {
    currentPlayer.innerText = playerOneName;
    alert(playerOneName + " (You are X) goes first");
  } else {
    currentPlayer.innerText = playerTwoName;
    alert(playerTwoName + " (You are O) goes first");
  }
}

/*2 player button*/
let playerOneName;
let playerTwoName;
const twoPlayers = document.getElementById("twoPlayer");
const currentPlayer = document.getElementById("currentPlayer");
twoPlayers.addEventListener("click", function (event) {
   board.removeEventListener('click', singlePlayerMode)
  if (playerOneName && playerTwoName) {
    resetBoard();
    replay();
  } else {
    resetBoard();
    playerOneName = prompt("Player 1 name:", "Player 1");
    playerTwoName = prompt("Player 2 name:", "Player 2");
    if (playerOneName === null) {
      playerOneName = 'Player 1'
    }
    if (playerTwoName === null) {
      playerTwoName = 'Player 2'
    }
    choosePlayer();
  }
});

/*player clicks on board to place their marker*/
const board = document.querySelector("main");
board.addEventListener("click", function (event) {
  let clicked = event.target;
  if (clicked.tagName === "SPAN" && clicked.innerText === "") {
    if (currentPlayer.innerText == playerOneName) {
      clicked.innerText = "X";
      currentPlayer.innerText = playerTwoName;
    } else if (currentPlayer.innerText == playerTwoName) {
      clicked.innerText = "O";
      currentPlayer.innerText = playerOneName;
    }
  } checkWinCondition()
});

/*restart button*/
function resetBoard() {
  cell1.innerText = "";
  cell2.innerText = "";
  cell3.innerText = "";
  cell4.innerText = "";
  cell5.innerText = "";
  cell6.innerText = "";
  cell7.innerText = "";
  cell8.innerText = "";
  cell9.innerText = "";
  currentPlayer.innerText = "Waiting for players";
 
}
const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", resetBoard);

/*Check for win condition*/
function checkWinCondition() {
  function playerOneWin() {
    if(playerOneName){
    currentPlayer.innerText = playerOneName + " wins!";
    } else {
      currentPlayer.innerText = "You lose!";
      board.removeEventListener('click', singlePlayerMode)
    }
  }
  function playerTwoWin() {
    if(playerTwoName) {
    currentPlayer.innerText = playerTwoName + " wins!";
    } else {
      currentPlayer.innerText = "You win!";
    }
  }
  /* player 1 winning combinations*/
  if (
    cell1.innerText == "X" &&
    cell2.innerText == "X" &&
    cell3.innerText == "X"
  ) {
    playerOneWin();
  }
  else if (
  cell1.innerText == "X" &&
    cell4.innerText == "X" &&
    cell7.innerText == "X"
  ) {
    playerOneWin();
  }
  else if (
    cell1.innerText == "X" &&
    cell5.innerText == "X" &&
    cell9.innerText == "X"
  ) {
    playerOneWin();
  }
  else if (
    cell2.innerText == "X" &&
    cell5.innerText == "X" &&
    cell8.innerText == "X"
  ) {
    playerOneWin();
  }
  else if (
    cell3.innerText == "X" &&
    cell6.innerText == "X" &&
    cell9.innerText == "X"
  ) {
    playerOneWin();
  }
  else if (
    cell3.innerText == "X" &&
    cell5.innerText == "X" &&
    cell7.innerText == "X"
  ) {
    playerOneWin();
  }
  else if (
    cell4.innerText == "X" &&
    cell5.innerText == "X" &&
    cell6.innerText == "X"
  ) {
    playerOneWin();
  }
  else if (
    cell7.innerText == "X" &&
    cell8.innerText == "X" &&
    cell9.innerText == "X"
  ) {
    playerOneWin();
  }
  /*player 2 winning combinations */
  else if (
    cell1.innerText == "O" &&
    cell2.innerText == "O" &&
    cell3.innerText == "O"
  ) {
    playerTwoWin();
  }
  else if (
    cell1.innerText == "O" &&
    cell4.innerText == "O" &&
    cell7.innerText == "O"
  ) {
    playerTwoWin();
  }
  else if (
    cell1.innerText == "O" &&
    cell5.innerText == "O" &&
    cell9.innerText == "O"
  ) {
    playerTwoWin();
  }
  else if (
    cell2.innerText == "O" &&
    cell5.innerText == "O" &&
    cell8.innerText == "O"
  ) {
    playerTwoWin();
  }
  else if (
    cell3.innerText == "O" &&
    cell6.innerText == "O" &&
    cell9.innerText == "O"
  ) {
    playerTwoWin();
  }
  else if (
    cell3.innerText == "O" &&
    cell5.innerText == "O" &&
    cell7.innerText == "O"
  ) {
    playerTwoWin();
  }
  else if (
    cell4.innerText == "O" &&
    cell5.innerText == "O" &&
    cell6.innerText == "O"
  ) {
    playerTwoWin();
  }
  else if (
    cell7.innerText == "O" &&
    cell8.innerText == "O" &&
    cell9.innerText == "O"
  ) {
    playerTwoWin();
  }
  /*all spaces are occupied and no winning combos are in play, results in a tie*/
  else if (
    cell1.innerText !== "" &&
    cell2.innerText !== "" &&
    cell3.innerText !== "" &&
    cell4.innerText !== "" &&
    cell5.innerText !== "" &&
    cell6.innerText !== "" &&
    cell7.innerText !== "" &&
    cell8.innerText !== "" &&
    cell9.innerText !== ""
  ) {
    currentPlayer.innerText = "It's a tie!";
  } else {
    return false
  }
}

/*Option to play again with same player names */
function replay() {
  let replay = confirm("Would you like to play again with the same players?");
  if (replay) {
    choosePlayer();
  } else {
    playerOneName = prompt("Player 1 name:", "Player 1");
    playerTwoName = prompt("Player 2 name:", "Player 2");
    if (playerOneName === null) {
      playerOneName = 'Player 1'
    }
    if (playerTwoName === null) {
      playerTwoName = 'Player 2'
    }
      choosePlayer();
    }
  }





/*Button that begins a single player game against AI*/
const onePlayer = document.getElementById("onePlayer");
onePlayer.addEventListener("click", function () {
  resetBoard();
  playerOneName = "";
  playerTwoName = "";
  setTimeout(computerPickSquare, 1500);
  currentPlayer.innerText = "AI goes first (It's only fair)";
  setTimeout(enableBoard, 1501);
});

/*Function that chooses random square for AI*/
function computerPickSquare() {
  let chooseCellNumber = Math.random();
  if (chooseCellNumber > 0.9 && cell9.innerText == "") {
    cell9.innerText = "X";
  } else if (chooseCellNumber > 0.8 && cell8.innerText == "") {
    cell8.innerText = "X";
  } else if (chooseCellNumber > 0.7 && cell7.innerText == "") {
    cell7.innerText = "X";
  } else if (chooseCellNumber > 0.6 && cell6.innerText == "") {
    cell6.innerText = "X";
  } else if (chooseCellNumber > 0.5 && cell5.innerText == "") {
    cell5.innerText = "X";
  } else if (chooseCellNumber > 0.4 && cell4.innerText == "") {
    cell4.innerText = "X";
  } else if (chooseCellNumber > 0.3 && cell3.innerText == "") {
    cell3.innerText = "X";
  } else if (chooseCellNumber > 0.2 && cell2.innerText == "") {
    cell2.innerText = "X";
  } else if (cell1.innerText == "") {
    cell1.innerText = "X";
  } else {
    /*loops back over itself if chosen square is occupied*/
    computerPickSquare();
  }
  currentPlayer.innerText = "Make your move"
  checkWinCondition();
}

/*Game flow for single player game, */
function singlePlayerMode(event) {
  let clicked = event.target;
  if (clicked.tagName === "SPAN" && clicked.innerText === "") {
    clicked.innerText = "O";
    if(checkWinCondition() == false){
      board.removeEventListener('click', singlePlayerMode)
      currentPlayer.innerText = 'Thinking...'
      setTimeout(computerPickSquare, 1000)
      setTimeout(enableBoard, 1001)
    } else {board.removeEventListener('click', singlePlayerMode);
    }
  }  
}
/*fix for exploit to rapidly click on board before AI moves utilizing  setTimeout with this function*/
function enableBoard(){
  board.addEventListener('click', singlePlayerMode)
}

