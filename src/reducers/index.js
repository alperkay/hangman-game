import { combineReducers } from 'redux'
import makeGuess from './makeGuess'
import newGame from './newGame'

export default combineReducers({
  makeGuess,
  newGame
})
