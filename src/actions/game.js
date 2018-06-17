import {showGuess} from '../lib/game'
import { randomWord, wrongGuessCount } from '../lib/game'

export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function newGame(word,guesses,wrongGuessCount) {
  return {
    type: NEW_GAME,
    payload: {
      word: randomWord(),
      guesses: [],
      wrongGuessCount: 0
    }
  }
}

export function makeGuess(guess) {
  return {
    type: MAKE_GUESS,
    payload: {
      guess
    }
  }
}
