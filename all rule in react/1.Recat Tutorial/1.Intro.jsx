// React is a JavaScript library for building user interfaces.

// React is used to build single-page applications.

// React allows us to create reusable UI components.

// Creating our first react app
// Open your terminal in the directory you would like to create your application. Run this command to create a
// React application named my-react-app:

// Command in React
// {1} npx create-react-app my-react-app
// npx create-react-app .

// {2} For talwin css include our project
// npm install --legacy-peer-deps -D tailwindcss postcss autoprefixer
// npm install -D tailwindcss
// npx tailwindcss init

// {3} package install err
// npm config set legacy-peer-deps true

// {4} react-router-dom
// npm i react-router-dom

// {5} framer-motion
// npm i framer-motion

// {6} react-tilt
// npm i react-tilt

// {7} react-vertical-timeline-component
// npm i react-vertical-timeline-component

// {8} @emailjs/browser
// npm i  @emailjs/browser
 
// {9} start this project command line
// npm run dev


// {10} Then just start up the application with this command:
// npm start         >>>>>and you are go to go

//Example: 
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);

