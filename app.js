const p1Button = document.getElementById("p1Button");
const p2Button = document.getElementById("p2Button");
const p1Display = document.getElementById("p1Display");
const p2Display = document.getElementById("p2Display");

let isGameOver = false;
let p1Score = 0;
let p2Score = 0
let winningScore = 5;

p1Button.addEventListener("click", function () {
  if(!isGameOver) {
    p1Score += 1;
  }
  if(p1Score === winningScore) {
    isGameOver = true
  }
  p1Display.textContent = p1Score;
});

p1Button.addEventListener("click", function () {
  if(!isGameOver) {
    p1Score += 1;
  }
  if(p1Score === winningScore) {
    isGameOver = true
  }
  p1Display.textContent = p1Score;
});


