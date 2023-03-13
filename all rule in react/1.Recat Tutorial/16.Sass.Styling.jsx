// my-sass.scss:
// Create a variable to define the color of the text:

$myColor: red;

h1 {
  color: $myColor;
}

// Import the Sass file the same way as you imported a CSS file:

// index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './my-sass.scss';

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