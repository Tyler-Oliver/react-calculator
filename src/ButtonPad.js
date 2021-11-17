import React, { Component } from "react";
import Buttons from "./Buttons";

const buttonObject = [
  { id: "0", keyDisplay: "0" },
  { id: "1", keyDisplay: "1" },
  { id: "2", keyDisplay: "2" },
  { id: "3", keyDisplay: "3" },
  { id: "4", keyDisplay: "4" },
  { id: "5", keyDisplay: "5" },
  { id: "6", keyDisplay: "6" },
  { id: "7", keyDisplay: "7" },
  { id: "8", keyDisplay: "8" },
  { id: "9", keyDisplay: "9" },
  { id: "clear", keyDisplay: "CLEAR" },
  { id: "plus", keyDisplay: "+" },
  { id: "minus", keyDisplay: "-" },
  { id: "multiply", keyDisplay: "*" },
  { id: "divide", keyDisplay: "/" },
  { id: "equal", keyDisplay: "=" }
];

export default class ButtonPad extends Component {
  render() {
    let buttonPad;
    buttonPad = buttonObject.map((currentVal, i, myObjArr) => {
      return (
        <div key={myObjArr[i].id}>
          <Buttons
            buttonId={myObjArr[i].id}
            buttonDisplay={myObjArr[i].keyDisplay}
          />
        </div>
      );
    });
    return <div className="buttonPad">{buttonPad}</div>;
  }
}
