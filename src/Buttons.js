import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <div className="my-buttons">
          <div className="number-buttons">
            <button id="power" onClick={this.props.power}>
              Power
            </button>
            <button value="(" id="two" onClick={this.props.button}>
              (
            </button>
            <button value=")" id="three" onClick={this.props.button}>
              )
            </button>
            <button value="1" id="one" onClick={this.props.button}>
              1
            </button>
            <button value="2" id="two" onClick={this.props.button}>
              2
            </button>
            <button value="3" id="three" onClick={this.props.button}>
              3
            </button>
            <button value="4" id="four" onClick={this.props.button}>
              4
            </button>
            <button value="5" id="five" onClick={this.props.button}>
              5
            </button>
            <button value="6" id="six" onClick={this.props.button}>
              6
            </button>
            <button value="7" id="seven" onClick={this.props.button}>
              7
            </button>
            <button value="8" id="eight" onClick={this.props.button}>
              8
            </button>
            <button value="9" id="nine" onClick={this.props.button}>
              9
            </button>
            <button value="0" id="zero" onClick={this.props.button}>
              0
            </button>
            <button value="00" id="double-zero" onClick={this.props.button}>
              00
            </button>
            <button value="." id="decimal" onClick={this.props.button}>
              .
            </button>
          </div>
          <div className="functional-buttons">
            <button id="clear" onClick={this.props.handleClear}>
              CLEAR
            </button>
            <button id="backspace" onClick={this.props.handleBackspace}>
              Backspace
            </button>
          </div>
        </div>
        <div className="arithmetic-buttons">
          <button value="/" id="divide" onClick={this.props.handleOperator}>
            /
          </button>
          <button value="*" id="multiply" onClick={this.props.handleOperator}>
            *
          </button>
          <button value="-" id="subtract" onClick={this.props.handleOperator}>
            -
          </button>
          <button value="+" id="add" onClick={this.props.handleOperator}>
            +
          </button>
          <button value="=" id="equal" onClick={this.props.calculate}>
            =
          </button>
        </div>
      </div>
    );
  }
}
