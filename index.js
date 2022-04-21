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

const $scorePlayer1 = document.querySelector(".score-player-1");
const $scorePlayer2 = document.querySelector(".score-player-2");

const $buttonReset = document.querySelector(".button-reset");

const $buttonStart = document.querySelector(".button-start");

let movePlayer1 = "";
let movePlayer2 = "";
let gameResult = null;
let scorePlayer1 = 00;
let scorePlayer2 = 00;
let gameStart = false;

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

function resetBattleField() {
  $fieldPlayer1.innerHTML = "";
  $fieldPlayer2.innerHTML = "";
}

function resetMoveVariables() {
  movePlayer1 = "";
  movePlayer2 = "";
}

function printScoreboard() {
  $scorePlayer1.innerHTML = scorePlayer1;
  $scorePlayer2.innerHTML = scorePlayer2;
}

function resetScoreVariables() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
}

function resetScoreboard() {
  $scorePlayer1.innerHTML = "00";
  $scorePlayer2.innerHTML = "00";
}

//function pausarIniciar() {
//  $buttonStart.innerHTML = "Pausar";
//}

function addPoint(winnerNumber) {
  if (winnerNumber == 1) {
    scorePlayer1++;
  }
  if (winnerNumber == 2) {
    scorePlayer2++;
  }
}

function move(moveName, fieldNumber) {
  if (gameStart) {
    if (fieldNumber == 1) {
      $fieldPlayer1.innerHTML =
        '<img class="move-image" src="' + moveName + '.png" />';
      movePlayer1 = moveName;
    } else if (fieldNumber == 2) {
      $fieldPlayer2.innerHTML =
        '<img class="move-image" src="' + moveName + '.png" />';
      movePlayer2 = moveName;
    }
  }

  verifyGame();
  printGameResult();
  if (gameResult != null) {
    setTimeout(resetBattleField, 2000);
    resetMoveVariables();
    addPoint(gameResult);
    printScoreboard();
    gameResult = null;
  }
}

$stoneButtonPlayer1.addEventListener("click", function () {
  move("stone", 1);
});

$paperButtonPlayer1.addEventListener("click", function () {
  move("paper", 1);
});

$scissorsButtonPlayer1.addEventListener("click", function () {
  move("scissors", 1);
});

$stoneButtonPlayer2.addEventListener("click", function () {
  move("stone", 2);
});

$paperButtonPlayer2.addEventListener("click", function () {
  move("paper", 2);
});

$scissorsButtonPlayer2.addEventListener("click", function () {
  move("scissors", 2);
});

$buttonReset.addEventListener("click", function () {
  resetBattleField();
  resetMoveVariables();
  resetScoreboard();
  resetScoreVariables();
  gameResult = null;
  $winnerTitle.innerHTML = "Resultado";
});
$buttonStart.addEventListener("click", function () {
  gameStart = !gameStart;
  $buttonStart.classList.toggle("star");
});

//$buttonStart.addEventListener("click", function () {
//pausarIniciar();
//});

// if (!gameStart) {
// gameStart = true;
//$buttonStart.classList.add("star");
//} else {
// gameStart = false;
//$buttonStart.classList.remove("star");
