/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* @author Manuel Garcia-Nieto */

'use strict'

class Phrase {
  #phrase

  constructor(phrase) {
    this.#phrase = phrase.toLowerCase()
  }
  get getPhrase() {
    return this.#phrase
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    for (const char of this.getPhrase) {
      char === ' ' ? ul.insertAdjacentHTML('beforeend', `<li class="space">${char}</li>`) :
       ul.insertAdjacentHTML('beforeend', `<li class="hide letter">${char}</li>`)
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.getPhrase.includes(letter)
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const letters = document.querySelectorAll('.letter')
    for (const matchLetter of letters) {
      if (letter === matchLetter.innerText) {
        matchLetter.classList.remove('hide');
        matchLetter.classList.add('show')
      }
    }
  }
}
