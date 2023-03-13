// React Custom Hooks
// Hooks are reusable functions.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: .useFetch

// Build a Hook
// In the following code, we are fetching data in our component and displaying it.Home
// We will use the JSONPlaceholder service to fetch fake data. This service is great for testing applications when there is no existing data.
// To learn more, check out the JavaScript Fetch API section.
// Use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page:

// Example:
// index.js:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

// The fetch logic may be needed in other components as well, so we will extract that into a custom Hook.
// Move the fetch logic to a new file to be used as a custom Hook:

// Example:
// useFetch.js:

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;

//index.js:

import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const Home1 = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root.render(<Home />);