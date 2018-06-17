import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { newGame, makeGuess } from '../actions/game'
import VisualComponent from './VisualComponent'
import { showGuess } from '../lib/game'

class LogicContainer extends PureComponent {
  state= {displayedWord: showGuess(this.props.newGame().payload.word,[])}

  newWord = () => {
    return this.state.displayedWord
  }

  startGame = () => {
    return this.newWord()
  }

  handleClick = () => {
    this.setState({displayedWord: showGuess(this.props.newGame().payload.word,[])})
    return this.newWord()
  }

  render() {
      return <VisualComponent
        word={this.startGame()}
        restart={this.handleClick}
      />
    }
}

const mapStateToProps = (state) => {
  return {
    word: state.word
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(LogicContainer)
