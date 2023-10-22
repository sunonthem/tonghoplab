import React, { useState } from "react";

function Display(props) {
  // A component that displays the input and the result
  return (
    <div className="display">
      <div className="input">{props.input}</div>
      <div className="result">{props.result}</div>
    </div>
  );
}

function Keypad(props) {
  // A component that renders buttons for digits, operators, decimal point, equal sign, and clear function
  return (
    <div className="keypad">
        <div>
      <button onClick={props.handleClick}>7</button>
      <button onClick={props.handleClick}>8</button>
      <button onClick={props.handleClick}>9</button>
      <button onClick={props.handleClick}>/</button>
      </div>
      <div>
      <button onClick={props.handleClick}>4</button>
      <button onClick={props.handleClick}>5</button>
      <button onClick={props.handleClick}>6</button>
      <button onClick={props.handleClick}>*</button>
      </div>
      <div>
      <button onClick={props.handleClick}>1</button>
      <button onClick={props.handleClick}>2</button>
      <button onClick={props.handleClick}>3</button>
      <button onClick={props.handleClick}>-</button>
      </div>
      <div>
      <button onClick={props.handleClick}>0</button>
      <button onClick={props.handleClick} id="nang">.</button>
      
      <button onClick={props.handleClick} id="cong">+</button>
      <button onClick={props.handleClick} id="clear">
        C
      </button>
      </div>
      <button onClick={props.handleClick}id="bang">=</button>
    </div>
  );
}

function Calculator() {
  // A component that renders a display and a keypad
  const [input, setInput] = useState(""); // The state of the input
  const [result, setResult] = useState(""); // The state of the result

  const handleClick = (event) => {
    // A function that handles button clicks
    const value = event.target.innerHTML; // The value of the button that was clicked

    switch (value) {
      case "=": {
        // If the user clicks on the equal sign, evaluate the input expression and update the result
        if (input !== "") {
          let res = "";
          try {
            res = eval(input); // Use eval function to get the result
          } catch (err) {
            // Handle any errors
            res = "Math Error";
          }

          if (res === undefined) {
            // Handle undefined results
            res = "Math Error";
          }

          setResult(res); // Update the result state
        }
        break;
      }
      case "C": {
        // If the user clicks on the clear button, reset the input and result states
        setInput("");
        setResult("");
        break;
      }
      default: {
        // For any other button, update the input state with the value
        setInput(input + value);
        break;
      }
    }
  };

  return (
    <div className="calculator">
        <h1>Calculator</h1>
       <form action="input">
        
        <Display input={input} result={result}/>
        </form>
        {/* Renders the display component and passes the input and result states as props */}
      <Keypad handleClick={handleClick} /> {/* Renders the keypad component and passes the handleClick function as a prop */}
      
    </div>
  );
}


export default Calculator;
