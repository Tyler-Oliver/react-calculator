import React, { Component } from "react";

export default class ButtonsComponent extends Component {
  render() {
    return (
      <div id="buttons-component">
        <button
          id="power"
          className="danger-button top-left-button"
          onClick={this.props.handlePower}
        >
          POWER
        </button>
        <button
          id="clear"
          className="danger-button"
          onClick={this.props.handleClear}
        >
          AC
        </button>
        <button
          id="backspace"
          className="danger-button"
          onClick={this.props.handleBackspace}
        >
          CE
        </button>
        <button
          className="sign-change"
          className="functional-button top-right-button"
          onClick={this.props.handleSign}
        >
          (-/+)
        </button>
        <button
          value="("
          id="open-par"
          className="functional-button"
          onClick={this.props.handleNumber}
        >
          (
        </button>
        <button
          value=")"
          id="closed-par"
          className="functional-button"
          onClick={this.props.handleNumber}
        >
          )
        </button>
        <button
          value="decimal-less"
          id="decimal-less"
          className="functional-button"
          onClick={this.props.handleDecimalPlaces}
        >
          {"\u2190"} .00
        </button>
        <button
          value="decimal-more"
          id="decimal-more"
          className="functional-button"
          onClick={this.props.handleDecimalPlaces}
        >
          .00 {"\u2192"}
        </button>
        <button
          value="7"
          id="seven"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          7
        </button>
        <button
          value="8"
          id="eight"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          8
        </button>
        <button
          value="9"
          id="nine"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          9
        </button>
        <button
          value="/"
          id="divide"
          className="operator-button"
          onClick={this.props.handleOperator}
        >
          {"\u00F7"}
        </button>
        <button
          value="4"
          id="four"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          4
        </button>
        <button
          value="5"
          id="five"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          5
        </button>
        <button
          value="6"
          id="six"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          6
        </button>
        <button
          value="*"
          id="multiply"
          className="operator-button"
          onClick={this.props.handleOperator}
        >
          {"\u00D7"}
        </button>
        <button
          value="1"
          id="one"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          1
        </button>
        <button
          value="2"
          id="two"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          2
        </button>
        <button
          value="3"
          id="three"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          3
        </button>
        <button
          value="-"
          id="subtract"
          className="operator-button"
          onClick={this.props.handleOperator}
        >
          -
        </button>
        <button
          value="."
          id="decimal"
          className="number-button bottom-left-button"
          onClick={this.props.handleDecimal}
        >
          .
        </button>
        <button
          value="0"
          id="zero"
          className="number-button"
          onClick={this.props.handleNumber}
        >
          0
        </button>
        <button
          value="="
          id="equal"
          className="equal-button"
          onClick={this.props.handleCalc}
        >
          =
        </button>
        <button
          value="+"
          id="add"
          className="operator-button bottom-right-button"
          onClick={this.props.handleOperator}
        >
          +
        </button>
      </div>
    );
  }
}
