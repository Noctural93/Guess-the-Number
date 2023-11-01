'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highscore = 0;

let checkButtonEl = document.querySelector(".check");
let againButtonEl = document.querySelector(".again");
let scoreEl = document.querySelector(".score");
let highscoreEl = document.querySelector(".highscore");
let inputEl = document.querySelector(".guess");
let messageEl = document.querySelector(".message");

checkButtonEl.addEventListener("click", function () {
  let inputElValue = Number(inputEl.value);
  if (secretNumber === inputElValue) {
    messageEl.textContent = "Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = '#60b347';
    document.querySelector(".number").style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (inputElValue !== secretNumber) {
    if (score > 1) {
      if (inputEl.value < secretNumber) {
        messageEl.textContent = "Too low!";
      } else {
        messageEl.textContent = "Too high!";
      }
      score -= 1;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "You lost the game!";
      scoreEl.textContent = 0;
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = '#ff0000';
      document.querySelector(".number").style.width = '30rem';
    }
  }
});

againButtonEl.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  messageEl.textContent = "Start guessing";
  scoreEl.textContent = score;
  document.querySelector(".number").textContent = "?";
  inputEl.value = '';
  document.querySelector("body").style.backgroundColor = '#222';
  document.querySelector(".number").style.width = '15rem';
});