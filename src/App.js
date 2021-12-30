import React, { Component } from "react";
import ButtonsComponent from "./ButtonsComponent.js";
import ResultsComponent from "./ResultsComponent.js";
import "./styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      currentVal: "",
      formula: "",
      answer: "",
      trueAnswer: 0,
      decimalPlaces: 2
    };

    this.handlePower = this.handlePower.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSign = this.handleSign.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleDecimalPlaces = this.handleDecimalPlaces.bind(this);
  }

  handlePower() {
    if (this.state.power === false) {
      this.setState({
        power: true,
        currentVal: "",
        formula: "",
        answer: ""
      });
    } else {
      this.setState({
        power: false,
        formula: "POWER OFF",
        answer: "POWER OFF"
      });
    }
  }

  handleNumber(e) {
    let value = e.target.value;
    let myStr = this.state.formula.replace(/[-()/*+.]/g, ""); //Sanitize formula
    let myStr2 = this.state.formula.replace(/[^()]/g, "");
    if (myStr.length <= 8 && myStr2.length <= 16) {
      if (this.state.power === true) {
        if (this.state.formula === "ERROR") {
          this.setState({
            currentVal: value,
            formula: value,
            answer: ""
          });
        } else {
          this.setState({
            currentVal: this.state.currentVal + value,
            formula: this.state.formula + value
          });
        }
      }
    }
  }

  handleCalc() {
    let myResult = this.state.formula.replace(/[^-()\d/*+.]/g, ""); //Sanitize formula

    let isValid = (str) => {
      const stack = [];
      let noParStr = str.replace(/[()]/g, ""); //Create a string with no parenthesis
      if (
        /^[^/*+]/.test(str) && //String cannot start with operator
        /[)][\d]/.test(str) === false && //Ensure digit doesnt come directly after par
        /[\d][(]/.test(str) === false && //Ensure digit doesn't come directly before par
        /[(][/*+]/.test(str) === false && //A digit has to come after par
        /[-/*+][)]/.test(str) === false && //A digit has to come before par
        /[^-/*+]$/.test(str) && //String cannot end with operator
        /^0[\d]/.test(this.state.currentVal) === false && //No octal literals
        noParStr !== "" //Ensure no empty parenthesis
      ) {
        let newStr = str.replace(/[-\d/*+.]/g, ""); //Sanitize string leaving only parenthesis
        for (let i = 0; i < newStr.length; i++) {
          //Ensure parenthesis are valid
          if (newStr[i] === "(") {
            stack.push(newStr[i]);
          } else if (stack[stack.length - 1] === "(" && newStr[i] === ")") {
            stack.pop();
          } else return false;
        }
        if (stack.length === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    };

    // Since I am using eval() I want to only accept certain characters in the string
    if (this.state.power === true) {
      if (isValid(myResult)) {
        this.setState({
          // I am using eval() since the string is safe and trusted
          currentVal: "",
          formula: "",
          answer: eval(myResult).toFixed(this.state.decimalPlaces),
          trueAnswer: eval(myResult).toFixed(6)
        });
      } else {
        this.setState({
          currentVal: "",
          formula: "ERROR",
          answer: "ERROR",
          trueAnswer: ""
        });
      }
    }
  }

  handleOperator(e) {
    let value = e.target.value;
    if (this.state.power === true) {
      if (/[-/*+]$/.test(this.state.formula) === false) {
        if (
          this.state.formula === "ERROR" ||
          /^[0]/.test(this.state.currentVal)
        ) {
          //No octal literals
          this.setState({
            formula: "ERROR",
            answer: "ERROR"
          });
        } else if (this.state.formula !== "") {
          this.setState({
            currentVal: "",
            formula: this.state.formula + value
          });
        } else {
          this.setState({
            formula: this.state.answer + value
          });
        }
      }
    }
  }

  handleBackspace() {
    if (this.state.power === true) {
      let myStr = this.state.formula.slice(0, -1);
      this.setState({
        formula: myStr
      });
    }
  }

  handleClear() {
    if (this.state.power === true) {
      this.setState({
        currentVal: "",
        formula: "",
        answer: "",
        trueAnswer: ""
      });
    }
  }

  handleSign() {
    if (this.state.power === true) {
      if (this.state.formula === "ERROR") {
        this.setState({
          currentVal: "(-",
          formula: "(-",
          answer: ""
        });
        console.log("1");
      } else if (this.state.formula === "" && this.state.answer > 0) {
        this.setState({
          currentVal: "(-" + this.state.answer,
          formula: "(-" + this.state.answer,
          answer: ""
        });
        console.log("2");
      } else if (this.state.formula === "" && this.state.answer < 0) {
        this.setState({
          currentVal: this.state.answer.replace("-", ""),
          formula: this.state.answer.replace("-", ""),
          answer: ""
        });
        console.log("3");
      } else if (/(?<=[(])[-]/.test(this.state.currentVal)) {
        this.setState({
          currentVal: this.state.currentVal.replace(/^[(][-]/, ""),
          formula:
            this.state.formula.replace(this.state.currentVal, "") +
            this.state.currentVal.replace(/^[(][-]/, "")
        });
        console.log("4");
      } else {
        this.setState({
          currentVal: "(-" + this.state.currentVal,
          formula:
            this.state.formula.replace(this.state.currentVal, "") +
            "(-" +
            this.state.currentVal
        });
        console.log("5");
      }
    }
  }

  handleDecimal() {
    let myStr = this.state.currentVal; //Create a new string when first input is "."
    if (this.state.power === true) {
      if (this.state.currentVal === "") {
        this.setState({
          currentVal: "0.",
          formula: this.state.formula + "0."
        });
      } else if (this.state.currentVal === "ERROR") {
        this.setState({
          currentVal: "0.",
          formula: "0.",
          answer: ""
        });
      } else if (/[.]/.test(myStr) === false) {
        this.setState({
          currentVal: this.state.currentVal + ".",
          formula: this.state.formula + "."
        });
      }
    }
  }

  handleDecimalPlaces(e) {
    let value = e.target.value;
    if (this.state.power === true) {
      if (value === "decimal-less" && this.state.decimalPlaces > 0) {
        this.setState({
          decimalPlaces: this.state.decimalPlaces - 1,
          answer: Number(this.state.trueAnswer).toFixed(
            this.state.decimalPlaces - 1
          )
        });
      } else if (value === "decimal-more" && this.state.decimalPlaces < 6) {
        this.setState({
          decimalPlaces: this.state.decimalPlaces + 1,
          answer: Number(this.state.trueAnswer).toFixed(
            this.state.decimalPlaces + 1
          )
        });
      }
    }
  }

  render() {
    return (
      <div className="app">
        <div className="calculator">
          <ResultsComponent
            currentVal={this.state.currentVal}
            formula={this.state.formula}
            answer={this.state.answer}
            decimalPlaces={this.state.decimalPlaces}
          />
          <ButtonsComponent
            handlePower={this.handlePower}
            handleNumber={this.handleNumber}
            handleCalc={this.handleCalc}
            handleOperator={this.handleOperator}
            handleBackspace={this.handleBackspace}
            handleClear={this.handleClear}
            handleSign={this.handleSign}
            handleDecimal={this.handleDecimal}
            handleDecimalPlaces={this.handleDecimalPlaces}
          />
          <p id="signature">Created by Tyler Oliver</p>
        </div>
      </div>
    );
  }
}
