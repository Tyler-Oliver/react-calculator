import React, { Component } from "react";
import Buttons from "./Buttons.js";
import ResultsComponent from "./ResultsComponent.js";
import "./styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      currentButton: "",
      result: "",
      answer: ""
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePower = this.handlePower.bind(this);
  }

  handlePower() {
    if (this.state.power === false) {
      this.setState({
        power: true,
        currentButton: "",
        result: "",
        answer: ""
      });
    } else {
      this.setState({
        power: false,
        result: "POWER OFF",
        answer: "POWER OFF"
      });
    }
  }

  handleCalc() {
    let myResult = this.state.result.replace(/[^-()\d/*+.]/g, "");

    let isValid = (str) => {
      const stack = [];
      let noParStr = str.replace(/[()]/g, ""); //Create a string with no parenthesis
      let myStr = str.replace(/^[.]/, "0."); //Create a new string when first input is "."
      console.log(str);
      console.log(myStr);
      if (
        /^[(\d.]/.test(noParStr) && //Ensure string doesnt start with operator
        /[^-/*+]$/.test(noParStr) && //Ensure string doesnt end with operator
        noParStr !== "" && //Ensure no empty parenthesis
        /(?<=\d)./.test(myStr) //Ensure a demical only comes after a number
      ) {
        //Ensure string doesnt start with an operator
        let newStr = str.replace(/[-\d/*+.]/g, ""); //Sanitize string leaving only parenthesis
        for (let i = 0; i < newStr.length; i++) {
          //Ensure parenthesis are valid
          if (newStr[i] === "(") {
            stack.push(newStr[i]);
          } else if (stack[stack.length - 1] === "(" && newStr[i] === ")") {
            stack.pop();
          } else return false;
        }
        console.log(stack);
        if (stack.length === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        console.log("shit");
        console.log(/(?<=\d)./.test(myStr));
        return false;
      }
    };

    // Since I am using eval() I want to only accept certain characters in the string
    if (this.state.power === true) {
      if (isValid(myResult)) {
        this.setState({
          // I am using eval() since the string is safe and trusted
          result: "",
          answer: eval(myResult).toFixed(2)
        });
      } else {
        this.setState({
          result: "ERROR",
          answer: "ERROR"
        });
      }
    }
  }

  handleClear() {
    if (this.state.power === true) {
      this.setState({
        currentButton: "",
        result: "",
        answer: ""
      });
    }
  }

  handleButton(e) {
    if (this.state.power === true) {
      let value = e.target.value;
      if (this.state.result === "ERROR") {
        this.setState({
          currentButton: value,
          result: value,
          answer: ""
        });
      } else {
        this.setState({
          currentButton: value,
          result: this.state.result + value
        });
      }
    }
  }

  handleOperator(e) {
    let value = e.target.value;
    if (this.state.power === true) {
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
  }

  handleBackspace() {
    if (this.state.power === true) {
      let myStr = this.state.result.slice(0, -1);
      this.setState({
        result: myStr
      });
    }
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
            power={this.handlePower}
            button={this.handleButton}
            calculate={this.handleCalc}
            handleOperator={this.handleOperator}
            handleBackspace={this.handleBackspace}
            handleClear={this.handleClear}
          />
        </div>
      </div>
    );
  }
}
