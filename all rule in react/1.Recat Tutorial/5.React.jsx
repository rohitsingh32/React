// 1
const myElement = (
    <div>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </div>
  );
  
  // 2
  const myElement1 = (
    <>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </>
  );
// Expressions in JSX

// You can write the expression in {}
// You can write simple mathematical operations to variable to states to complicated operations with ternary operators  
// and it will return the result, like:

// Mathematical Operations:

const elem = <h1>React was released in {2010+3}</h1>

//Variables/States:

const name = "CWH"
const elem1 = <h1>My name is {name}</h1>

//Ternary Operators:

const elem2 = <h1>Hello {name ? name : 'World'}</h1>