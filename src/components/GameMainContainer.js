import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { newGame, makeGuess } from '../actions/game'
import VisualComponent from './VisualComponent'
import InputFormComponent from './InputFormComponent'
import {showGuess , wrongGuessCount} from '../lib/game'

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
            //can't manage to run showGuess here,
            //so rest of the game logic which requires showGuess
            //couldn't be implemented
            word= {this.props.word}
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
    word: state.newGame,
    guess: state.makeGuess
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(GameMainContainer)
