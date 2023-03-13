// React CSS Styling
// There are three ways to style in React:

//1. Inline Styling
//2. CSS Stylesheets
//3. CSS Modules

//1. Inline Styling
// To inline style an element, we can make a Javascript Object, like this:

const App = () => {
  return (
    <>
      <h1 style={{ backgroundColor: "purple" }}>CodeWithHarry</h1>
    </>
  );
}
// In this first curly brace is to write javascript and second is to make a javascript object. We can also write it like:

const App = () => {

  const h1Style = {
    backgroundColor: 'purple',
    color: 'white'
  }

  return (
    <>
      <h1 style={h1Style}>CodeWithHarry</h1>
    </>
  );
}
// Note: CSS property name must be camelCase. background-color would be backgroundColor

// 2.CSS Stylesheets
// You can save the whole CSS in a separate file with file extension .css and import it in your application. 

// App.css

body {
  background-color: 'purple';
  color: 'white';
}
// Here we are writing CSS, so we don't need to make JS Object or do it in camelCase. 

// Index.js

// Just import it like this:

import './App.css'

//3. CSS Modules
// In this you don't have to worry about name conflicts as it is component specific. The CSS is available only for the file in which it is imported. 

// Make a file with extension .module.css, example: index.module.css

// Make a new file index.module.css and insert some CSS into it, like this:

.button {
  background-color: 'purple';
  color: 'white';
}

//Import it in component like this:

import styles from './index.module.css'; 

const Home = () => {
    return (
        <button className={styles.button}>Click me!</button>
    )
};

export default Home;


// w3school example >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// JavaScript Object
// You can also create an object with styling information, and refer to it in the style attribute:

// Example:
// Create a style object named myStyle:

const Heade = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

// 1.Inline styling
// 2.CSS stylesheets
// 3.CSS Modules

// 1.Inline Styling
const Header = () => {
    return (
      <>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }

// 2.CSS stylesheets  
// App.css:
// Create a new file called "App.css" and insert some CSS code in it:

body {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}

// Note: You can call the file whatever you like, just remember the correct file extension.

// Import the stylesheet in your application:

// index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

// 3.Css Modules

// Another way of adding styles to your application is to use CSS Modules.
// CSS Modules are convenient for components that are placed in separate files.
// The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.
// Create the CSS module with the .module.css extension, example: my-style.module.css.
// Create a new file called "my-style.module.css" and insert some CSS code in it:

//my-style.module.css:
.bigblue {
  color: DodgerBlue;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}

// Import the stylesheet in your component:

// Car.js:
import styles from './my-style.module.css'; 

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
}

export default Car;

// Import the component in your application:

// index.js:
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);