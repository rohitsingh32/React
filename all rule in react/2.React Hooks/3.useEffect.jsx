// React useEffect Hook

// The useEffect Hook allows you to perform side effects in your components.
// useEffect accepts two arguments. The second one is optional. 
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

// 1. No dependency passed:
useEffect(() => {
    //Runs on every render
});
//2. An empty array:
useEffect(() => {
    //Runs only on the first render
}, []);
//3. Props or state values:
useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes`
}, [prop, state]);


//Runs on every render:

import { useState, useEffect } from "react";

 function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

 export default Home;

//Runs on first render:

import { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I have rendered {count} times!</h1>;
}

export default Home;

//Runs when data changes:

import { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');

  const handleChange = (e) => {
    setData(e.target.value)
  }

  useEffect(() => {
    setCount((count) => count + 1);
  }, [data]);

  return (
    <>
      <input onChange={handleChange} value={data} />
      <p>{count}</p>
    </>
  );
}

export default Home;