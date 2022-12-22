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
  get phrase(){
    return this.#phrase
  }
}
