import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './App.css';

class Socket extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://127.0.0.1:4001/",
      color: 'white',
      shipPresent: [1, 2, 3]
    }
  }

  //eventually want controls without buttons
  //click inside component to change color based on if ship is present
  //grey for miss, red for hit
  //if isHit, pass props to scorekeeping component


  componentDidMount = () => {
    const socket = socketIOClient(this.state.endpoint)
    socket.on("change per val", (val, col) => {
      this.setState({color: col})
      document.getElementById(val.val.value).style.backgroundColor = val.val.color; 
    })
  }

  determine = () => {
    if(this.state.shipPresent.indexOf(this.props.value) !== -1){
      this.setState({color: "red"})
    } else {
      this.setState({color: "grey"})
    }
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
    return (
      <div id={this.props.value} className="cell">
        <h1>{this.props.value}</h1>
        <button onClick={() => this.determine()}>Make your guess</button>
        <button onClick={() => this.send() }>Submit</button>
      </div>
    )
  }
}

export default Socket;