import React, { Component } from "react";

class Message extends Component {
  render() {
    var {message}=this.props;
    return (
      <div className="alert alert-warning" role="alert">
        <strong>{message}</strong>
      </div>
    );
  }
}

export default Message;
