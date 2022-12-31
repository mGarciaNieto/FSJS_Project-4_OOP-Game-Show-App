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
const gameOverMessage = document.getElementById('game-over-message');
const ul = document.querySelector('ul')
const letters = document.querySelectorAll('.letter') 

/* Variables
---------------------------------------------------------- */
let game

starGameBtn.addEventListener('click',(e) => {
  game = new Game()
  game.startGame()
})








// const game = new Game()
// game.getPhrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${phrase}`)
// })

// for (const ph of game.getPhrases) {
//   console.log(ph)
// }

// for (let index = 0; index < game.getPhrases.length; index++) {
//   console.log(index + '  ' + game.getPhrases[index])
// }

// const p1 = new Phrase('PPEPITO DE LOS PALOTES')
// console.log(p1.getPhrase)

// console.log(game.getRandomPhrase())

// const randomPhrase = game.getRandomPhrase()

// console.log(randomPhrase)

// console.log(randomPhrase.getPhrase)
// randomPhrase.addPhraseToDisplay()

// const logPhrase = (phrase) => {
//   console.log(`Phrase - phrase: `, phrase.getPhrase);
//   };

//   logPhrase(game.getRandomPhrase());

// console.log(game.getRandomPhrase().addPhraseToDisplay());

// game.startGame();
// console.log(`Active Phrase - phrase: ${game.getActivePhrase.getPhrase}`);


