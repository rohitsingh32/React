// React useReducer
// useReducer is similar to useState hook. 
// It lets you write your custom state logic. 
// It lets you pass dispatch down instead of callbacks resulting in optimized performance for components that trigger deep updates. 

// When to use useReducer?
// useReducer is usually preferable to useState when you have complex state logic, changing more than 2-3 states in a function. 

// Syntax...........

const [state, dispatch] = useReducer(reducer, initialState);

// Here reducer is a function which contains your custom state logic and initialState is as name suggests, it's initial state. 
// As you can see useReducer returns the current state and a dispatch method. 
// Here is an example:

import { useReducer } from "react";

const initialData = {
  lowercase: '',
  uppercase: '',
  spaces: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOWERCASE':
      return {...state, [action.payload.name]: action.payload.value.toLowerCase()}
    case 'UPPERCASE':
      return {...state, [action.payload.name]: action.payload.value.toUpperCase()}
    case 'SPACES':
      return {...state, [action.payload.name]: action.payload.value.replaceAll(' ', '')}
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, initialData);

  const handleChange = (e) => {
    dispatch({ type: e.target.name.toUpperCase(), payload: {name: e.target.name, value: e.target.value} });
  };

  return (
    <>
      <form>
        <input type="text" placeholder="Only Lowercase" name="lowercase" onChange={handleChange} value={data.lowercase} /><br />
        <input type="text" placeholder="Only Uppercase" name="uppercase" onChange={handleChange} value={data.uppercase} /><br />
        <input type="text" placeholder="No Spaces" name="spaces" onChange={handleChange} value={data.spaces} />
      </form>
    </>
  );
}

export default App;