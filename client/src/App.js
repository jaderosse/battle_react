import React, { Component } from 'react';
import BoardCell from './BoardCell';
import Socket from './socket.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Battle Sherp</h1>
        <BoardCell/>
        <Socket />
      </div>
    );
  }
}

export default App;
