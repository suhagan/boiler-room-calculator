import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
return (
  <div>
    <h1>Boiler Room - Simple Calculator</h1>
    {/* Input field for number 1 */}
    <input type="number" />

    {/* Input field for number 2 */}
    <input type="number" />

    <div>
      <button onClick="">+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
    </div>

    {/* Display result */}
      <h2>Result: </h2>
  </div>

);
    
     
};

export default App
