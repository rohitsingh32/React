// React ES6
// What is ES6?
// ES6 stands for ECMAScript 6. ECMAScript is a JavaScript standard intended to ensure a common language
// across different browsers. ES6 is the 6th version of ECMAScript. 

// Why ES6? / Features of ES6 / Upgrades in ES6
// React uses ES6 and all of these new features will make your coding experience in react much much better. 
// You will be able to do things with much more ease and in very less lines! Features like: 

//Arrow Functions:
const hello = () => {
    return "Hello World!";
}
//or

const hello1 = () => "Hello World!";

// .map(): .map can be used for alot of things, one of it's use case is, we can make any number of cards through 
// loop and just put it in jsx, like this:
const data = ['title1', 'title2', 'title3'];
let cards = data.map((item) => <card>{item}</card>)

// 2.Example in map
const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>)

// Destructuring: 
// Old Way:

const languages = ['JS', 'Python', 'Java'];
const js = languages[0]
const python = languages[1]
const java = languages[2]

//New Way:

const languages1 = ['JS1', 'Python1', 'Java1'];
const [js1, python1, java1] = languages1

// 2.Example
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car,, suv] = vehicles;

// Ternary Operator: With this, you can write if/else conditions in one line. It's syntax is fairly simple like this:
// condition ? <expression if true> : <expression if false>
//         Example:

        let loading = false;
        const data1 = loading ? <div>Loading...</div> : <div>Data</div>
        
        //Spread Operator:
        const languages2 = ['JS', 'Python', 'Java'];
        const morelanguages = ['C', 'C++', 'C#']

        const allLanguages = [...languages2, ...morelanguages]
        Output:

        ["JS","Python","Java","C","C++","C#"]

    // Class
    // A simple class constructor:

        class Car {
          constructor(name) {
            this.brand = name;
          }
        }
    // 2.Example
        class Car {
            constructor(name) {
              this.brand = name;
            }
          }
          
          const mycar = new Car("Ford")


// React ES6 Modules       
//In-line individually:
//person.js

export const name = "Jesse"
export const age = 40

//All at once at the bottom:
//person.js

const name = "Jesse"
const age = 40

export { name, age }