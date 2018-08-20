import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Socket extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <p>
              response: {response}
            </p>
          : <p>Loading...</p>}
      </div>
    );
  }
}

export default Socket;