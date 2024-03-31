'use strict';
//selecting elements
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const btnsOpenModal = document.querySelector(".rule");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const winMessage = document.querySelector('.player--wins')
const diceEl = document.querySelector(".dice");


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