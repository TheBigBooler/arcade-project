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

/*restart button*/
const restart = document.getElementById("restart");
restart.addEventListener("click", function () {
  cell1.innerText = "";
  cell2.innerText = "";
  cell3.innerText = "";
  cell4.innerText = "";
  cell5.innerText = "";
  cell6.innerText = "";
  cell7.innerText = "";
  cell8.innerText = "";
  cell9.innerText = "";
});

/*player clicks on board to place their marker*/
const board = document.querySelector("main");
board.addEventListener("click", function (event) {
  let clicked = event.target;
  if (clicked.tagName === "SPAN") {
    clicked.innerText = "X";
  }
});
