// React Memo
// By default React re-renders components again and again. Using memo will stop that if props have not changed. 

// Problem
// When we make components like Navbar, Footer, they re-render even if there is no change in them. To test this you 
//can make a Navbar component and import it. Put a console.log, if it is logging, it means navbar is re-rendering. 

// Solution
// So what's the solution for this? Because this re-rendering is just wastage of resources. 

// memo is a simple solution for this! What memo does is, it just monitors if props have changed, if they have it re-renders,
//
// if they haven't it doesn't render again. 

// props is an object and javascript is very fast in comparing objects as it doesn't compare the whole object, it just
// checks the address! 

// Importing memo
// To use it, first we need to import memo. It can be imported like this:

// >>>>>>..... import { memo } from "react";

// Using memo
// Everything remains the same, just when you are exporting the Navbar, you have to wrap it in memo, like this:

// >>>>>>..... export default memo(Navbar);

// Problem
// In this example, the Todos component re-renders even when the todos have not changed.

// Example:

// index.js:

import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//file Todos.js:

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default Todos;


// Solution
// To fix this, we can use memo.

// Use memoto keep the Todos component from needlessly re-rendering.

// Wrap the Todos component export in memo:

// Example:
// index.js:

import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Todos.js:

import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);

//Now the Todos component only re-renders when the todos that are passed to it through props are updated.