<>
// Events

<button onClick={show}>Show</button>

// Arguments in events
// We can't pass arguments just like that, it will give syntax error. First, we need to put the whole function in arrow function, like this:

<button onClick={ ()=>show('true') }>Show</button>

// React Event Object
// Event handler can be provided to the function like this:

<button onClick={ (event)=>show('true', event) }>Show</button>

</>

// Example:
// Put the shoot function inside the Football component:

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);


// Example:
// Arrow Function: Sending the event object manually:

function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);



