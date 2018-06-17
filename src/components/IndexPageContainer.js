import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class IndexPageContainer extends PureComponent {
  state = {}

  render() {
    return (
      <div>
      <h1>Welcome to the Hangman Game!</h1>
      <Link to="/hangman">Start playing!</Link>
    </div>
    )
  }
}
