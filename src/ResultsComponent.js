import React, { Component } from "react";

export default class ResultsComponent extends Component {
  render() {
    return (
      <div id="results-component">
        <div className="my-formula">
          <p>{this.props.formula}</p>
        </div>
        <div className="my-answer">
          <p>{this.props.answer}</p>
        </div>
        <div className="my-div">
          <p>Decimal Places in answer: {this.props.decimalPlaces}</p>
        </div>
      </div>
    );
  }
}
