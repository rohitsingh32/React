// React Conditional
// One of the best thing in React is in React we can conditionally render elements/components! 

// && Operator
// This is one of the way to conditionally render:

function App() {

  const loading = true;

  return (
    <div className="App">
      {loading && <LoadingGif />}
      {!loading && <Content />}
    </div>
  );
}
// Here we are saying if loading is true then show <LoadingGif /> and in second line, we said !loading so that returns false
// in this case so <Content /> will not load and first statement is true so <LoadingGif /> will load! 

// Ternary Operator
// What we were doing in previous example was basically just if statement. We don't have else so we were using if as else too. 
//Let's learn how to do both(if/else)!

// Same thing can be done like this:

function App() {

  const loading = true;

  return (
    <div className="App">
      {loading ? <LoadingGif /> : <Content />}
    </div>
  );
}
// We are saying if loading is true then show <LoadingGif />, else show <Content />, simple! 

// Syntax:

condition ? true : false

// w3schoolexample

import React from 'react';
import ReactDOM from 'react-dom/client';

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);