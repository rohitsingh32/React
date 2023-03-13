// React useCallback
// React useCallback Hook returns a memoized callback function.
// It is done so that it does not need to be recalculated resulting in improved performance. 
// If we don't use useCallback function would run on every render. This helps us to memoize resource intensive functions so that they
// will not automatically run on every render. 
// With useCallback Hook, memoized function only runs when any of its dependencies update. 

// When to use useCallback?
// You may think we can use memo and stop a component from re-rendering but if there is a case where you are passing a function as prop to 
// a component, then it will re-render irrespective of memo. It is because of something called "referential equality". In this every time a 
// component re-renders, its function gets recreated. Hence, memo is working but because function is getting recreated, component will re-render.
//  To avoid this, we can use useCallback! 

// Like this:

const handleState = useCallback(() => {
  setState({...state, type: 'CONFIRMED'});
}, [state])

//Like this we are memoizing the function and only letting it run when the dependency state changes! 

// w3school example

// Solution
// To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.

// Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:

// Example:
// index.js

import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
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

// Todos.js

import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);

//Now the Todos component will only re-render when the todos prop changes.