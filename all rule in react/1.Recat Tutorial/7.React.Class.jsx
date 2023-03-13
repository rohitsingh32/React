// React Class
// Class Based Components
// Before making class based component we need to inherit functions from React.Component and this can be done with extends, like this:

class Cat extends React.Component {
  render() {
    return <h1>Meow</h1>;
  }
}
// it also requires a render method which returns HTML. 

// Note: Component's name must start with uppercase letter. 
// component name and (function name & class name) is same things

// Component Constructor
// Constructor gets called when the component is initiated. This is where you initiate the component's properties. 
//In React we have states which update on page without reload. Constructor properties are kept in state. 

// We also need to add super() statement, which executes the parent component's constructor and component gets access to 
//all the functions of the parent component, like this:

class Cat extends React.Component {
  constructor() {
    super();
    this.state = { color: "orange" };
  }
  render() {
    return <h1>Meow's color is {this.state.color}</h1>;
  }
}