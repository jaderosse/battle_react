import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './App.css';

class Socket extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://127.0.0.1:4001/",
      color: 'white'
    }
  }

  //this.props.value

  //eventually want controls without buttons
  //click inside component to change color based on if ship is present
  //grey for miss, red for hit
  //if isHit, pass props to scorekeeping component
  //keep like sockets interacting for each board
  //give each cell unique id, then connect each w/socket

componentDidMount = () => {
  const socket = socketIOClient(this.state.endpoint)
  socket.on("change per val", (val, col) => {
    this.setState({color: col})
    document.getElementById(val.val.value).style.backgroundColor = val.val.color; 
  })
}

  send = () => {
    const socket = socketIOClient(this.state.endpoint)
    var bothVals = {
      value: this.props.value,
      color: this.state.color
    }
    socket.emit('cell value', bothVals)
  }

  render() {
    console.log(this.props.value)
    return (
      <div id={this.props.value} className="cell">
        <h1>{this.props.value}</h1>
        <button onClick={() => this.send() }>Change Color</button>
        <button id="blue" onClick={() => this.setState({color: 'blue'})}>Blue</button>
        <button id="red" onClick={() => this.setState({color: 'red'})}>Red</button>
      </div>
    );
  }
}

export default Socket;