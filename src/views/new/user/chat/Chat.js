import React, { Component } from "react";
import "./styles.css";

import ChatWindow from "./ChatWindow";
import ChatComposer from "./ChatComposer";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { text: "First stored message" },
        { text: "Second stored message" }
      ]
    };
  }

  // if new message was submitted from child component // process
  submitted = getNewMessage => {
    if (getNewMessage != "") {
      // match the state format
      const newMessage = { text: getNewMessage };
      // merge new message in copy of state stored messages
      let updatedMessages = [...this.state.messages, newMessage];
      // update state
      this.setState({
        messages: updatedMessages
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>ChatBox</h1>
        {/* send stored messages as props to chat window */}
        <ChatWindow messagesList={this.state.messages} />
        {/* send submitted props to chat composer */}
        <ChatComposer submitted={this.submitted} />
      </div>
    );
  }
}

