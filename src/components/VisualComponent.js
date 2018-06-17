import * as React from 'react'

export default function VisualComponent(props) {
  return (
    <div>
      <div>
        <button className= "restart game" type="button" onClick={ props.restart }>Start again!</button>
      </div>
      <h2>Hangman!</h2>
      <div>
        <p><b>Word: </b>{ props.word }</p>
      </div>
      <div>
        <p><b>Wrong guess left:</b> {props.guesses}</p>
      </div>
    </div>
  )
}
