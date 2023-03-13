// file /App.js

function App() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
  
  export default App;


// file /index.js:

import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);