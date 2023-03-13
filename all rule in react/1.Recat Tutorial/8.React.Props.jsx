// React Props
// Props are arguments passed to React components via HTML attributes. Example: 

//First Example
// Component file:

function Cat(props) {
    return <h1>Meow's color is {props.color}</h1>;
}
//Main file: 

<Cat color="purple" />


//Second Example
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <h2>I am a {props.brand}!</h2>;
}

//Main file:
function Garage() {
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand="Ford" />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);


//Thrid Example

function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
  }
  
  
  function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
      </>
    );
  }
  
  const root1 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);

