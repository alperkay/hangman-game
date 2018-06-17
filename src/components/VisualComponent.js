import * as React from 'react'

export default function VisualComponent(props) {
  return (
    <div>
      <h2>Make A Guess!</h2>
      <div><b>Word: </b>{ props.word }</div>
      <div>
        <p><b>Wrong guess left:</b> ...</p>
      </div>
      <div>
        <button className= "restart game" type="button" onClick={ props.restart }>Start again!</button>
      </div>
    </div>
  )
}
