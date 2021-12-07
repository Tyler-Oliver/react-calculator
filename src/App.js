import React, { Component } from "react";
import Buttons from "./Buttons.js";
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
      decimalPlaces: 2
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePower = this.handlePower.bind(this);
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

  handleDecimal() {
    let myStr = this.state.currentVal; //Create a new string when first input is "."
    if (this.state.currentVal === "" || this.state.currentVal === "ERROR") {
      this.setState({
        currentVal: "0.",
        formula: this.state.formula + "0."
      });
    } else if (/[.]/.test(myStr) === false) {
      this.setState({
        currentVal: this.state.currentVal + ".",
        formula: this.state.formula + "."
      });
    }
  }

  handleDecimalPlaces(e) {
    let value = e.target.value;
    if (this.state.power === true) {
      if (value === "decimal-less" && this.state.decimalPlaces > 0) {
        this.setState({
          decimalPlaces: this.state.decimalPlaces - 1
        });
      } else if (value === "decimal-more" && this.state.decimalPlaces < 6) {
        this.setState({
          decimalPlaces: this.state.decimalPlaces + 1
        });
      }
    }
  }

  handleCalc() {
    let myResult = this.state.formula.replace(/[^-()\d/*+.]/g, "");
    let newString = myResult.replace(/^[0]/, "");
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!
    /*I added the newString and replaced myResult with it when 
    calling the string but it did not work*/

    let isValid = (str) => {
      const stack = [];
      let noParStr = str.replace(/[()]/g, ""); //Create a string with no parenthesis
      console.log(str);
      if (
        /^[(\d.]/.test(noParStr) && //Ensure string doesnt start with operator
        /[^-/*+]$/.test(noParStr) && //Ensure string doesnt end with operator
        /[-*/+]{2,}/.test(str) === false &&
        noParStr !== "" //Ensure no empty parenthesis
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
        console.log(/^[(\d.]/.test(noParStr));
        console.log(/[^-/*+]$/.test(noParStr));
        console.log(/[-*/+]{2,}/.test(str) === false);
        console.log(noParStr !== "");
        return false;
      }
    };

    // Since I am using eval() I want to only accept certain characters in the string
    if (this.state.power === true) {
      if (isValid(newString)) {
        this.setState({
          // I am using eval() since the string is safe and trusted
          currentVal: "",
          formula: "",
          answer: eval(myResult).toFixed(this.state.decimalPlaces)
        });
      } else {
        this.setState({
          currentVal: "ERROR",
          formula: "ERROR",
          answer: "ERROR"
        });
      }
    }
  }

  handleClear() {
    if (this.state.power === true) {
      this.setState({
        currentVal: "",
        formula: "",
        answer: ""
      });
    }
  }

  handleNumber(e) {
    if (this.state.power === true) {
      let value = e.target.value;
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

  handleOperator(e) {
    let value = e.target.value;
    if (this.state.power === true) {
      if (this.state.formula !== "") {
        //Same as handleButton
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

  handleBackspace() {
    if (this.state.power === true) {
      let myStr = this.state.formula.slice(0, -1);
      this.setState({
        formula: myStr
      });
    }
  }

  render() {
    console.log("currentVal = " + this.state.currentVal);
    return (
      <div className="app">
        <div className="calculator">
          <ResultsComponent
            currentVal={this.state.currentVal}
            formula={this.state.formula}
            answer={this.state.answer}
          />
          <p>Decimal Places in answer: {this.state.decimalPlaces}</p>
          <Buttons
            handleDecimalPlaces={this.handleDecimalPlaces}
            handleDecimal={this.handleDecimal}
            handlePower={this.handlePower}
            handleNumber={this.handleNumber}
            handleCalc={this.handleCalc}
            handleOperator={this.handleOperator}
            handleBackspace={this.handleBackspace}
            handleClear={this.handleClear}
          />
        </div>
        <footer>Created by Tyler Oliver</footer>
      </div>
    );
  }
}
