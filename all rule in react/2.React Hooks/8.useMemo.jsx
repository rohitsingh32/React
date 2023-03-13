// React useMemo
// React useMemo Hook returns a memoized value. 
// It is similar to useCallback Hook. The main difference is useMemo returns a memoized value and useCallback returns a memoized function. 
// The useMemo Hook only runs when any of its dependencies update. 
// useMemo can improve performance big time. 

// When to use it? 
// Like if you have an expensive function like this:

const expensiveFunction = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

// This function will run on every render resulting in slowing down of everything. To prevent this, we can memoize it's result and return it without calculating and only recalculate it when num changes. 
// For this we will make a state number because we have to give changing factor as dependency. Hence, code would be:
//Performance example using the useMemo Hook:

import { useMemo, useState } from "react";

const App = () => {
    const [number, setNumber] = useState(0);
    const calculation = useMemo(() => expensiveFunction1(number), [number]);

    return (
        <div>
            {calculation}
        </div>
    );
};

const expensiveFunction1 = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num = num + i;
    }
    return num;
};

export default App;


// w3school Example
//Performance example using the useMemo Hook:

import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const App1 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1 />);
