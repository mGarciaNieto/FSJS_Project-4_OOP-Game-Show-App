/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* @author Manuel Garcia-Nieto */

'use strict'

/* DOM References
--------------------------------------------------------- */
const startScreen = document.getElementById('overlay')
const heartTries = document.querySelectorAll('.tries')
const starGameBtn = document.getElementById('btn__reset')
const gameOverMessage = document.getElementById('game-over-message')
const ul = document.querySelector('ul')
const letters = document.querySelectorAll('.letter')
const onscreenKeyboard = document.getElementById('qwerty')
const buttons = document.querySelectorAll('button')
const keyboardKeys = document.querySelectorAll('.key')

/* Variables and Constants
---------------------------------------------------------- */
let game
const LETTER_A = 65
const LETTER_Z = 90

starGameBtn.addEventListener('click', (e) => {
  game ? game.resetGame() : (game = new Game())
  game.startGame()
})

onscreenKeyboard.addEventListener('click', (e) => {
  // Event delegation
  game.handleInteraction(e)
})

document.addEventListener('keyup', (e) => {
  startScreen.style.visibility === 'hidden' && e.keyCode >= LETTER_A && e.keyCode <= LETTER_Z && game.handleInteraction(e)
})
