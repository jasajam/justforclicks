import React, { Component } from 'react';
import './App.css';

// all our components need to be in app
  // Header (scores to be passed here), Jumbotron, TileSection (holds all the data we pass to it), Footer
// stateful functionality needs to be here
  // which tile gets clicked on [{ id: 1, photo: 'url', description: '', clicked: false }, ...]
  // currentScore - how many user has in a row so far
  // highestScore - only changes when it surpasses currentScore
// functions we'll need
  // clickHandler as you click on a tile -> need to pass the id to this fn to know which object to change clicked value to true/call end of game, then check if correct/incorrect guess
  // fns for correct/incorrect guess
  // shuffle fn
  // reset fn to be called when the game ends


class App extends Component {
  state = {
    tileData: [{}],
    currentScore: 0,
    highestScore: 0
  }

  render() {
    return (
      <div className="App">
        Jasa
      </div>
    );
  }
}

export default App;
