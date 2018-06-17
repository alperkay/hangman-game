import React, { Component } from 'react';
import GameMainContainer from './components/GameMainContainer';
import MainPageContainer from './components/MainPageContainer';
import {Route} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
            <Route exact path="/" component={MainPageContainer}/>
            <Route exact path="/hangman" component={GameMainContainer}/>
        </div>
      </div>
    );
  }
}

export default App;
