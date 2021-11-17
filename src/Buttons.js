import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return <div className="button">{this.props.buttonDisplay}</div>;
  }
}
