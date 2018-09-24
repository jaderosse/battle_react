import React, { Component } from 'react';
import Board from './Board';
import StartBoard from './startBoard';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
           <Route exact path="/" component={StartBoard} />
           <Route exact path="/game" component={Board} />
          </div>
        </Router>
    )
  }
}

export default App;
