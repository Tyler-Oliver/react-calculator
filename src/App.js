import React, { Component } from "react";
import Buttons from "./Buttons.js";
import ResultsComponent from "./ResultsComponent.js";
import "./styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentButton: 0,
      result: "",
      answer: ""
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
  }

  handleCalc() {
    let myResult = this.state.result.replace(/[^-()\d/*+.]/g, "");
    this.setState({
      // I am using eval() since the string is safe and trusted
      result: "",
      answer: eval(myResult)
    });
  }

  handleButton(e) {
    let value = e.target.value;
    this.setState({
      currentButton: value,
      result: this.state.result + value
    });
  }

  handleOperator(e) {
    let value = e.target.value;
    if (this.state.result !== "") {
      //Same as handleButton
      this.setState({
        currentButton: value,
        result: this.state.result + value
      });
    } else {
      this.setState({
        result: this.state.answer + value
      });
    }
  }

  handleBackspace() {
    let myStr = this.state.result.slice(0, -1);
    this.setState({
      result: myStr
    });
  }

  render() {
    return (
      <div className="app">
        <div className="calculator">
          <ResultsComponent
            currentButton={this.state.currentButton}
            result={this.state.result}
            answer={this.state.answer}
          />
          <Buttons
            button={this.handleButton}
            calculate={this.handleCalc}
            handleOperator={this.handleOperator}
            handleBackspace={this.handleBackspace}
          />
        </div>
      </div>
    );
  }
}
