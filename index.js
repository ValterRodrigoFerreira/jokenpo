const $stoneButtonPlayer1 = document.querySelector(".button-stone-player-1");
const $paperButtonPlayer1 = document.querySelector(".button-paper-player-1");
const $scissorsButtonPlayer1 = document.querySelector(
  ".button-scissors-player-1"
);

const $stoneButtonPlayer2 = document.querySelector(".button-stone-player-2");
const $paperButtonPlayer2 = document.querySelector(".button-paper-player-2");
const $scissorsButtonPlayer2 = document.querySelector(
  ".button-scissors-player-2"
);

const $fieldPlayer1 = document.querySelector(".field-player-1");
const $fieldPlayer2 = document.querySelector(".field-player-2");

const $winnerTitle = document.querySelector(".winner-title");

let movePlayer1 = "";
let movePlayer2 = "";
let gameResult = null;

function verifyGame() {
  if (movePlayer1 == "stone" && movePlayer2 == "paper") {
    gameResult = 2;
  } else if (movePlayer1 == "stone" && movePlayer2 == "scissors") {
    gameResult = 1;
  } else if (movePlayer1 == "paper" && movePlayer2 == "stone") {
    gameResult = 1;
  } else if (movePlayer1 == "paper" && movePlayer2 == "scissors") {
    gameResult = 2;
  } else if (movePlayer1 == "scissors" && movePlayer2 == "stone") {
    gameResult = 2;
  } else if (movePlayer1 == "scissors" && movePlayer2 == "paper") {
    gameResult = 1;
  } else if (movePlayer1 == movePlayer2) {
    gameResult = 0;
  }
}

function printGameResult() {
  if (gameResult == 0) {
    $winnerTitle.innerHTML = "Empatou!";
  } else if (gameResult == 1) {
    $winnerTitle.innerHTML = "Jogador 1 Ganhou!";
  } else if (gameResult == 2) {
    $winnerTitle.innerHTML = "Jogador 2 Ganhou!";
  }
}

$stoneButtonPlayer1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="stone.png" />';
  movePlayer1 = "stone";
  verifyGame();
  printGameResult();
});

$paperButtonPlayer1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="paper.png" />';
  movePlayer1 = "paper";
  verifyGame();
  printGameResult();
});

$scissorsButtonPlayer1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="scissors.png" />';
  movePlayer1 = "scissors";
  verifyGame();
  printGameResult();
});

$stoneButtonPlayer2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="stone.png" />';
  movePlayer2 = "stone";
  verifyGame();
  printGameResult();
});

$paperButtonPlayer2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="paper.png" />';
  movePlayer2 = "paper";
  verifyGame();
  printGameResult();
});

$scissorsButtonPlayer2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="scissors.png" />';
  movePlayer2 = "scissors";
  verifyGame();
  printGameResult();
});
