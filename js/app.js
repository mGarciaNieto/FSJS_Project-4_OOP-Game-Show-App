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

/* Variables
---------------------------------------------------------- */
let game

starGameBtn.addEventListener('click', (e) => {
  game ? game.resetGame() : (game = new Game())
  game.startGame()
})

onscreenKeyboard.addEventListener('click', (e) => {
  game.handleInteraction(e)
})
