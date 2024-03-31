"use strict";
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const btnsOpenModal = document.querySelector(".rule");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseModal2 = document.querySelector(".close-modal2");
const winMessage = document.querySelector(".player--wins");
const diceEl = document.querySelector(".dice");


let scores, currentScore, activePlayer, player;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  player = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  player0.classList.add("active--player");
  player1.classList.remove("active--player");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active--player");
  player1.classList.toggle("active--player");
};
const canvas = document.querySelector("#confetti");
const jsConfetti = new JSConfetti();

const rollDice = function () {
  if (player) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.src = `./dice/dice-${dice}.png`;

    if( dice !== 1){
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    } else{
      switchPlayer();
    }
  }
};
btnRoll.addEventListener('click', rollDice);

const btnHoldd = function (){
  if (player) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      player = false;
      winMessage.textContent = activePlayer + 1;
      jsConfetti.addConfetti();
      modal2.classList.remove("hidden");
      overlay.classList.remove("hidden");
      document.querySelector(`.player--${activePlayer}`).classList.remove("active--player");
    } else {
      switchPlayer();
    }
  }

}
btnHold.addEventListener("click", btnHoldd);
btnNew.addEventListener("click", init);

const closeModal = function(){
  init();
  modal2.classList.add('hidden')
  overlay.classList.add('hidden')
}
btnCloseModal2.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

btnsOpenModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  } else if (e.key === "r") {
    rollDice();
  } else if (e.key === " ") {
    btnHoldd();
  }
});