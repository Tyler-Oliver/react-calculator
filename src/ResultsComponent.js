import React, { Component } from "react";

export default class ResultsComponent extends Component {
  render() {
    return (
      <div id="results-component">
        <div className="formula">
          <p className="calc-font">{this.props.formula}</p>
        </div>
        <div className="answer">
          <p className="calc-font">{this.props.answer}</p>
        </div>
      </div>
    );
  }
}
