// React useRef Hook
// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

// useRef keeps the value stored between renders. 
// In this, value changed doesn't cause a re-render. 
// It can also be used to access a DOM element directly. 

// Does Not Cause Re-renders <<<<<<<<<<<<

// If we tried to count how many times our application renders using the useState Hook, 
// we would be caught in an infinite loop since this Hook itself causes a re-render.
// To avoid this, we can use the useRef Hook.
// Example:
// Use useRef to track application renders.

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// Accessing DOM Elements

// In general, we want to let React handle all DOM manipulation.
// But there are some instances where useRef can be used without causing issues.
// In React, we can add a ref attribute to an element to access it directly in the DOM.
// Example:
// Use useRef to focus the input:

import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// Tracking State Changes

// The useRef Hook can also be used to keep track of previous state values.
// This is because we are able to persist useRef values between renders.
// Example:
// Use useRef to keep track of previous state values:

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.
// In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.