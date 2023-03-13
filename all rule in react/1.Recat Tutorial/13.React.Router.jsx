// React Router
// React router is used for page routing as React App doesn't include it as default. 

// Add React Router
// To install React router, run this in your terminal:

// npm i -D react-router-dom
// npm i -D react-router-dom@latest
// Creating Multiple Routes
// To do this first we need to create multiple files and to keep code clean, we will make a folder and make all the 
//pages there, hence we will create a folder named pages in src. 

// Folder Structure:
// src/pages/:

// Home.js
// Blogs.js
// Contact.js
// Nopage.js
// Usage
// Now we will make routes in src/index.js, like this:

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// Home.js
// Make all the Navigation links using <Link> tag, like this:

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Home;

//Blogs.js

const Blogs = () => {
    return <h1>Blogs</h1>;
};

export default Blogs;

//Contact.js

const Contact = () => {
    return <h1>Contact</h1>;
};

export default Contact;

//NoPage.js

const NoPage = () => {
    return <h1>404</h1>;
};

export default NoPage;

//This is made for any route that doesn't exist. To show 404 error there! 