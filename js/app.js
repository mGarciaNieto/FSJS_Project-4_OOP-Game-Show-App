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
const onscreenKeyboard = document.getElementById('qwerty')
const buttons = document.querySelectorAll('button')
const keyboardKeys = document.querySelectorAll('.key')

/* Variables and Constants
---------------------------------------------------------- */
let game
const LETTER_A = 65 // letter a keyCode
const LETTER_Z = 90 // letter z keyCode

/**
 * Starts a brand new game or resets game
 * @param  {event type} 'click'
 * @param  {listener} e
 */
starGameBtn.addEventListener('click', (e) => {
  game ? game.resetGame() : (game = new Game())
  game.startGame()
  game.setIsGameRunning(true)
})

/**
 * Handles interaction with onscreen keyboard
 * @param  {event type} 'click'
 * @param  {listener} e
 */
onscreenKeyboard.addEventListener('click', (e) => {
  // Event delegation
  game.handleInteraction(e)
})

/**
 * Handles interaction with physical keyboard
 * @param  {event type} 'keyup'
 * @param  {listener} e
 */
document.addEventListener('keyup', (e) => {
  startScreen.style.visibility === 'hidden' && game.getIsGameRunning() && e.keyCode >= LETTER_A && e.keyCode <= LETTER_Z && game.handleInteraction(e)
})
