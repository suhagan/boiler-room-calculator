import React, { useState } from 'react' // useState helps us storing and updating values in the component
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Define two state variables to store the user input numbers
  const [num1, setNum1] = useState(""); // num1 will store the value from the first input field
  const [num2, setNum2] = useState(""); // num2 will store the value from the second input field

  const [result, setResult] = useState(null); // Initially null means no result yet

  const calculate = (operator) => {
    // Convert the string inputs into numbers
    const number1 = parseFloat(num1); // parseFloat converts string -> decimal number
    const number2 = parseFloat(num2);

    // If either number is not a number, stop here
    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let calcResult;

    // Checking which operator button was clicked
    if (operator === "+") 
      {
        calcResult = number1 + number2; // Add numbers
      } 
    else if (operator === "-") 
      {
        calcResult = number1 - number2; // Subtract numbers
      } 
    else if (operator === "*") 
      {
        calcResult = number1 * number2; // Multiply numbers
      } 
    else if (operator === "/") 
      {
        // Check if the second number is zero to avoid dividing by zero
        if (number2 === 0) 
          {
            calcResult = "Cannot divide by zero";
          } 
        else 
          {
            calcResult = number1 / number2; // Divide numbers
          }
    }

    // Update the result state with the calculated value
    setResult(calcResult);

    
  };
  
  return (
    <div>
      <h1>Boiler Room - Simple Calculator</h1>
      {/* Input field for number 1 */}
      <input  type="number" 
              value={num1}               // connect state num1 with the input
              onChange={(e) => setNum1(e.target.value)} // update num1 state when user types
      />

      {/* Input field for number 2 */}
      <input  type="number" 
        value={num2}               // connect state num1 with the input
        onChange={(e) => setNum2(e.target.value)} // update num1 state when user types
      />

      <div>
        <button onClick={()=> calculate("+")}>+</button>
        <button onClick={()=> calculate("-")}>-</button>
        <button onClick={()=> calculate("*")}>*</button>
        <button onClick={()=> calculate("/")}>/</button>
      </div>

      {/* Displaying result */}
        <h2>Result: {result !== null ? result : "—"}</h2>
    </div>

  );
    
     
};

export default App;
