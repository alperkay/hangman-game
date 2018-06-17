import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { newGame, makeGuess } from '../actions/game'
import VisualComponent from './VisualComponent'
import InputFormComponent from './InputFormComponent'
import {showGuess , wrongGuessCount, isWinner} from '../lib/game'

class GameMainContainer extends PureComponent {

  handleClick = () => {
    this.setState({word: this.props.newGame()})
  }

  componentDidMount() {
    this.props.newGame()
  }


  render() {
    return (
        <div>
          <VisualComponent
            word={this.word} //can't manage to run showGuess here
            restart={this.handleClick}
            guesses={6-wrongGuessCount(this.props.word,this.props.guess)}
          />
          <p></p>
          <InputFormComponent/>
        </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    word: state.newGame.word,
    hidden: state.newGame.hidden,
    guesses: state.newGame.guesses,
    guess: state.makeGuess
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(GameMainContainer)
