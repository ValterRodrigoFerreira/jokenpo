let $stoneButtonPlayer1 = document.querySelector(".button-stone-player-1");
let $paperButtonPlayer1 = document.querySelector(".button-paper-player-1");
let $scissorsButtonPlayer1 = document.querySelector(
  ".button-scissors-player-1"
);

let $stoneButtonPlayer2 = document.querySelector(".button-stone-player-2");
let $paperButtonPlayer2 = document.querySelector(".button-paper-player-2");
let $scissorsButtonPlayer2 = document.querySelector(
  ".button-scissors-player-2"
);

let $fieldPlayer1 = document.querySelector(".field-player-1");
let $fieldPlayer2 = document.querySelector(".field-player-2");

$stoneButtonPlayer1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="stone.png" />';
});
$paperButtonPlayer1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="paper.png" />';
});
$scissorsButtonPlayer1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="scissors.png" />';
});

$stoneButtonPlayer2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="stone.png" />';
});
$paperButtonPlayer2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="paper.png" />';
});
$scissorsButtonPlayer2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="scissors.png" />';
});
