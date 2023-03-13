
// Adding Forms in React
// You add a form with React like any other element:

// Example:
// Add a form that allows users to enter their name:

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

// Handling Forms
// In React all the data is handled by component and stored in component state. We can change state with
// event handlers in the onChange attribute, like this:

import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');

  return (
    <form>
      <label>
        Enter your email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
    </form>
  )
}

export default Form;
 
// Submitting Form
// We can submit form with onSubmit attribute for the <form>

import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your email is: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form;
 

// Multiple Inputs
// We don't have to make multiple states for multiple inputs, we can save all values in one, like this:

import { useState } from 'react';

function Form() {
  const [data, setData] = useState({});

  const handleChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your email is: ${data.email} and your name is: ${data.name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email: <input type="email" name='email' value={data.email} onChange={handleChange} />
      </label>
      <label>
        Enter your name: <input type="text" name='name' value={data.name} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form;

// Here in handleChange we used Spread Operators. We are basically saying keep whole data as it was, just change this name's value.
//  Then it is saved as an object so we are getting that by data.email and data.name. 

//Textarea
//Example:
//A simple textarea with some content:
<textarea>
  Content of the textarea.
</textarea>

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);