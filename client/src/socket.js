import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './App.css';

class Socket extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://127.0.0.1:4001/",
      color: 'white',
      position: ''
    }
  }

  //eventually want controls without buttons
  //click inside component to change color based on if ship is present
  //grey for miss, red for hit
  //if isHit, pass props to scorekeeping component
  //keep like sockets interacting for each board
  //give each cell unique id, then connect each w/socket

componentDidMount = () => {
  this.setState({position: this.props.position})
  const socket = socketIOClient(this.state.endpoint)
  socket.on('color has changed', (col) => {
    // document.body.style.backgroundColor = col
    this.setState({color: col})
  })
}

  send = () => {
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('color change', this.state.color)
  }

  render() {
    console.log(this.state.position)
    return (
      <div id="cell" style={{backgroundColor: this.state.color}}>
        <button onClick={() => this.send() }>Change Color</button>
        <button id="blue" onClick={() => this.setState({color: 'blue'})}>Blue</button>
        <button id="red" onClick={() => this.setState({color: 'red'})}>Red</button>
      </div>
    );
  }
}

export default Socket;