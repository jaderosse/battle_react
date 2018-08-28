import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Socket extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://127.0.0.1:4001/",
      color: 'yellow'
    }
  }

componentDidMount = () => {
  const socket = socketIOClient(this.state.endpoint)
  socket.on('color has changed', (col) => {
    document.body.style.backgroundColor = col
  })
}

  send = () => {
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('color change', this.state.color)
  }

  render() {
    return (
      <div id="cell">
        <button onClick={() => this.send() }>Change Color</button>
        <button id="blue" onClick={() => this.setState({color: 'blue'})}>Blue</button>
        <button id="red" onClick={() => this.setState({color: 'red'})}>Red</button>
      </div>
    );
  }
}

export default Socket;