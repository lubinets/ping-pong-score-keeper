const p1Point = document.querySelector("#p1Button");
const p2Point = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

const p1Display = document.querySelector(".score-player-1");
const p2Display = document.querySelector(".score-player-2");

const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

p1Point.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    p1Display.textContent = p1Score;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
  }
});

p2Point.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
  }
});

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p2Display.classList.remove("winner", "loser");
  p1Display.classList.remove("winner", "loser");
}

resetButton.addEventListener("click", reset);
