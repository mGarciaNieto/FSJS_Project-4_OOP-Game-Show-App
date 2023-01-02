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
    this.#phrases = [new Phrase('Break a leg'), 
                     new Phrase('By hook or by crook'), 
                     new Phrase('No pain no gain'), 
                     new Phrase('Pull yourself together'), 
                     new Phrase('So far so good')]
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
    return this.getPhrases[Math.floor(Math.random() * this.#phrases.length)]
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param  {HTMLButtonElement} button - The clicked button element
   */
  handleInteraction(button) {
    if (button.target.tagName === 'BUTTON') {
      button.target.disabled = true
      if (!this.getActivePhrase.checkLetter(button.target.innerText)) {
        button.target.classList.add('wrong')
        this.removeLife()
      } else {
        button.target.classList.add('chosen')
        this.getActivePhrase.showMatchedLetter(button.target.innerText)
        if (this.checkForWin()) {
          this.disableKeyboardKeys()
          setTimeout(() => {
            this.gameOver(this.checkForWin())
          }, '1000')
        }
      }
    }
    if (button.key) {
      for (const key of keyboardKeys) {
        if (key.innerText === button.key && key.className !== 'key wrong' && key.className !== 'key chosen') {
          if (!this.getActivePhrase.checkLetter(key.innerText)) {
            key.classList.add('wrong')
            this.removeLife()
          } else {
            key.classList.add('chosen')
            this.getActivePhrase.showMatchedLetter(key.innerText)
            if (this.checkForWin(button)) {
              this.disableKeyboardKeys()
              setTimeout(() => {
                this.gameOver(this.checkForWin())
              }, '1000')
            }
          }
        }
      }
    }
  }

  /**
   * Disables all keyboard keys
   */
  disableKeyboardKeys() {
    for (const button of keyboardKeys) {
      button.disabled = true
    }
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin(btn) {
    const hiddenLetters = !document.querySelectorAll('.hide').length
    return hiddenLetters > 0
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const MISSED_MAX = 5
    heartTries[this.getMissed].children[0].src = 'images/lostHeart.png'
    this.#missed++
    if (this.getMissed === MISSED_MAX) {
      this.gameOver(false)
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    startScreen.style.visibility = 'visible'
    if (gameWon) {
      startScreen.classList.remove('lose')
      startScreen.classList.add('win')
      startScreen.children[1].innerText = 'Great Job!'
    } else {
      startScreen.classList.remove('win')
      startScreen.classList.add('lose')
      startScreen.children[1].innerText = 'Sorry, better luck next time!'
    }
  }

  /**
   * Resets the game to start over with a new game
   */
  resetGame() {
    this.#missed = 0
    while (ul.hasChildNodes()) {
      ul.removeChild(ul.firstChild)
    }
    for (const button of buttons) {
      button.className = 'key'
      button.disabled = false
    }
    for (const tries of heartTries) {
      tries.children[0].src = 'images/liveHeart.png'
    }
  }
}
