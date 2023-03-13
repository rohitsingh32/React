
// React useState Hook
// useState is a Hook that lets you add React state to function components. 
// and it is divided by state wise

// First stage Importing useState
// To use useState, first we need to import useState and initialize it, you can import it from react like this:

 import { useState } from "react";

// Second Stage Initializing useState
// You can initialize state like this:

import { useState } from "react";

const App = () => {
    const [name, setName] = useState('')
};

// useState takes initial state as argument and gives a state and a function(setName in this case) to update that state as we can't directly 
// change/update a state. Also, these state names are just like variables, hence you can name them anything you like. 

// Third Stage Reading a state
// As mentioned earlier, it returns a state and a function to change/update that state. Hence, everything is stored in name. We can read states just like variables:

import { useState } from "react";

const App = () => {
    const [name, setName] = useState('')

    return <h1>My name is {name}</h1>
};

// Forth Stage Updating a state
// To update state we use the function it returns to update state, in this case: setName. State can be updated like this:

import { useState } from "react";

const App = () => {
    const [name, setName] = useState('')
    setName('Lovish')

    return <h1>My name is {name}</h1>
};

// Fifth Stage What can state hold?
// Like normal variables, state can hold any datatype like strings, numbers, booleans, arrays, objects, objects in arrays, arrays in objects. For example:

import { useState } from "react";

const App = () => {
    const [data, setData] = useState({
        name: 'Lovish',
        age: 21
    })

    return <h1>My name is {data.name} and my age is {data.age}</h1>
};

// Sixth Stage Updating Objects and Arrays in State

import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: 'lovish',
    age: 21
  })

  return <>
    <h1>My name is {data.name} and my age is {data.age}</h1>
    <button onClick={() => setData({ ...data, name: 'CWH' })}>Click Me</button></>
};

export default App;
              