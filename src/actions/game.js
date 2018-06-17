import {showGuess, randomWord} from '../lib/game'

export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function newGame() {
  const word = randomWord()
  return {
    type: NEW_GAME,
    payload: {
      word: word
    }
  }
}

export function makeGuess(guess) {

  return {
    type: MAKE_GUESS,
    payload: guess
  }
}
