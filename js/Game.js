/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* @author Manuel Garcia-Nieto */

'use strict'

class Game {
  #missed
  #phrases
  #activePhrase

  constructor() {
    this.#missed = 0
    this.#phrases = ['Break a leg', 'By hook or by crook', 'No pain no gain', 'Pull yourself together', 'So far so good']
    this.#activePhrase = null
  }

  get getMissed() {
    return this.#missed
  }

  get getPhrases() {
    return this.#phrases
  }

  get getActivePhrase() {
    return this.#activePhrase
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    startScreen.style.visibility = 'hidden'
    this.#activePhrase = this.getRandomPhrase()
    this.getActivePhrase.addPhraseToDisplay()
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    return new Phrase(this.getPhrases[Math.floor(Math.random() * this.#phrases.length)])
  }

  handleInteraction() {}

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const hiddenLetter = document.querySelectorAll('.hide')
    return hiddenLetter > 0 ? false : true
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const MISSED_MAX = 5

    heartTries[this.getMissed].children[0].src = 'images/lostHeart.png'
    this.getMissed++
    if (this.getMissed === MISSED_MAX) {
      const gameWon = false
      this.gameOver(gameWon)
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    startScreen.style.visibility = 'visible'
    if (gameWon) {
      startScreen.classList.add('win')
      startScreen.children[0].innerText = 'Great Job!'
      startScreen.children[1].innerText = 'Play again?'
    } else {
      startScreen.className.add('lose')
      startScreen.children[0].innerText = 'Sorry, better luck next time!'
      startScreen.children[1].innerText = 'Play again?'
    }
  }
}
