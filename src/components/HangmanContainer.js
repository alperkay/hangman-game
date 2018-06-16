import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class HangmanContainer extends PureComponent {
  state = {}

  componentDidMount() {
    console.log('alper')
  }

  render() {
    return (
      <div>
        <p>some game</p>
        <Link to="/">Bored? Go back.</Link>
      </div>
    )
  }
}
