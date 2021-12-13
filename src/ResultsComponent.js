import React, { Component } from "react";

export default class ResultsComponent extends Component {
  render() {
    return (
      <div id="results-component">
        <p className="calc-font">{this.props.formula}</p>
        <p className="calc-font">{this.props.answer}</p>
        <p>Decimal Places in Answer: {this.props.decimalPlaces}</p>
      </div>
    );
  }
}
