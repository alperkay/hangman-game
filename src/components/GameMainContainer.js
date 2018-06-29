import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { newGame, makeGuess } from '../actions/game'
import VisualComponent from './VisualComponent'
import InputFormComponent from './InputFormComponent'
import {showGuess , wrongGuessCount, wrongGuessLimit, gameFinished, isWinner} from '../lib/game'

class GameMainContainer extends PureComponent {

  handleClick = () => {
    this.setState({word: this.props.newGame()})
  }

  componentDidMount() {
    this.props.newGame()
  }

  render() {
    let result;
    let gameovermessage;
    let gameplay;
    let guesses = this.props.guess.map(letter => letter+", ")
    if (wrongGuessLimit(this.props.word,this.props.guess)) {
      result="YOU LOST!"}
    if (isWinner(this.props.word,this.props.guess)) {
      result="YOU WIN!"
    }
    if (gameFinished(this.props.word,this.props.guess)) {
      gameovermessage="GAME OVER"
      gameplay=<div><VisualComponent word={this.props.word} restart={this.handleClick}/></div>} else {
        gameplay=
          <div>
            <VisualComponent
              word= {showGuess(this.props.word,this.props.guess)}
              restart={this.handleClick}
              guesses={6-wrongGuessCount(this.props.word,this.props.guess)}
            />
            <p><b>Your guesses: </b>{guesses}</p>
            <InputFormComponent/>
          </div>
      }
    return (
        <div>
          {gameplay}
          <p></p>
          <div><b>{result} {gameovermessage}</b></div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    word: state.newGame,
    guess: state.makeGuess
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(GameMainContainer)
