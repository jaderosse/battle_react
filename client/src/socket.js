import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Socket extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001",
      color: 'yellow'
    };
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('color change', this.state.color);
    console.log('send function')
  }

  setColor = (color) => {
    this.setState({color});
    console.log('setcolor function')
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('color change', function(col) {
      console.log(socket)
      document.body.style.backgroundColor = col;
    })
    return (
      <div>
        <button onClick={() => this.send() }>Change color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
      </div>
    );
  }
}

export default Socket;