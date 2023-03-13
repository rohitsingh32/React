// React Components
// There are two types of components:

// 1.Class Based Components
// 2.Function Based Components

// 1.Class Based Components
// Before making class based component we need to inherit functions from React.Component and this can
// be done with extends, like this:

class Cat extends React.Component {
  render() {
    return <h1>Meow</h1>;
  }
}
// it also requires a render method which returns HTML. 

// 2.Function Based Components
// In function it's simpler, we just need to return the HTML, like this:

function Cat() {
  return <h1>Meow</h1>;
}
// Note: Component's name must start with uppercase letter. 

// Rendering a Component
// We made a component, now we want to render/use it. Syntax for using a component is: 

<ComponentName />

// Components in Files
// To have less mess inside main file(with all the components in the same file) and to resuse components on 
// different pages, we have to make them separately. So that we can just import them in any file and use them! 

// For that we will just make a new file called Cat.js, make class or function based component there and export default 
// that class/function! Like this:

function Cat() {
  return <h1>Meow</h1>;
}

export default Cat;
//Note: File name must start with uppercase letter.

// Props
// As mentioned earlier, we can import the same component in different files and use it, but maybe in different files 
// some changes in the component is needed. For that, we can use props! Like this: 

// Component:

function Cat(props) {
  return <h1>Meow's color is {props.color}</h1>;
}
//Main file: 

<Cat color="purple" />