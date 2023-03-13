// React Lists
// In React we render lists with loop

// map()
// An example of map:

function App() {
  const languages = ['JS', 'Python', 'Java', 'C', 'C++', 'C#'];

  return (
    <div className="App">
      {languages.map((language) => {
        return <div>I love {language}</div>
      })}
    </div>
  );
}


//Second example of map
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);



// Keys
// With keys React keep record of elements. This ensures that if an item is updated or removed, only that item will 
// be re-rendered instead of the entire list. Example:

function App() {

  const languagesDict = [
    { id: 1, language: 'JS' },
    { id: 2, language: 'Python' },
    { id: 3, language: 'Java' },
    { id: 4, language: 'C' },
    { id: 5, language: 'C++' },
    { id: 6, language: 'C#' }
  ];

  return (
    <div className="App">
      {languagesDict.map((language) => {
        return <div key={language.id}>
          {language.id}. {language.language}
        </div>
      })}
    </div>
  );
}
//Output: 

// Second example of key
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);