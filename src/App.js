import React, { Component } from "react";
import ButtonPad from "./ButtonPad";
import buttonObject from "./Object";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myObject: buttonObject
    };
  }
  render() {
    return (
      <div className="app">
        <div className="calculator">
          <div className="display"></div>
          <ButtonPad myObject={this.state.myObject} />
        </div>
      </div>
    );
  }
}
