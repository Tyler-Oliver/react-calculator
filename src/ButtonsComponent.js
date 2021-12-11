import React, { Component } from "react";

export default class ButtonsComponent extends Component {
  render() {
    return (
      <div id="buttons-component">
        <div className="my-buttons">
          <div className="number-buttons">
            <button id="power" onClick={this.props.handlePower}>
              Power
            </button>
            <button value="(" id="open-par" onClick={this.props.handleNumber}>
              (
            </button>
            <button value=")" id="closed-par" onClick={this.props.handleNumber}>
              )
            </button>
            <button value="1" id="one" onClick={this.props.handleNumber}>
              1
            </button>
            <button value="2" id="two" onClick={this.props.handleNumber}>
              2
            </button>
            <button value="3" id="three" onClick={this.props.handleNumber}>
              3
            </button>
            <button value="4" id="four" onClick={this.props.handleNumber}>
              4
            </button>
            <button value="5" id="five" onClick={this.props.handleNumber}>
              5
            </button>
            <button value="6" id="six" onClick={this.props.handleNumber}>
              6
            </button>
            <button value="7" id="seven" onClick={this.props.handleNumber}>
              7
            </button>
            <button value="8" id="eight" onClick={this.props.handleNumber}>
              8
            </button>
            <button value="9" id="nine" onClick={this.props.handleNumber}>
              9
            </button>
            <button value="0" id="zero" onClick={this.props.handleNumber}>
              0
            </button>
            <button
              value="00"
              id="double-zero"
              onClick={this.props.handleNumber}
            >
              00
            </button>
            <button value="." id="decimal" onClick={this.props.handleDecimal}>
              .
            </button>
            <button
              value="decimal-less"
              id="decimal-less"
              onClick={this.props.handleDecimalPlaces}
            >
              Decimal Less
            </button>
            <button
              value="decimal-more"
              id="decimal-more"
              onClick={this.props.handleDecimalPlaces}
            >
              Decimal More
            </button>
            <button className="sign-change" onClick={this.props.handleSign}>
              (-/+)
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
        <div className="operator-buttons">
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
          <button value="=" id="equal" onClick={this.props.handleCalc}>
            =
          </button>
        </div>
      </div>
    );
  }
}
