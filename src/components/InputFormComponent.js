import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {makeGuess} from '../actions/game'

export class InputFormComponent extends PureComponent {

  handleChange = (e) => {
    let lower = e.target.value.toLowerCase()
    if (e.target.value.length===1) e.target.value=''
    this.props.makeGuess(lower)  
    console.clear()
  }

  render() {
    return (
      <div className='Input'>
        <b>Make a guess(no need to press enter): </b>
        <input
          type ='text'
          onChange={this.handleChange}
          autoFocus
        />
      </div>
    )
  }
}

const mapDispatchToProps = ({makeGuess})

export default connect(null, mapDispatchToProps)(InputFormComponent)
