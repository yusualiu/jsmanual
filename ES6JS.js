//Handle a Rejected Promise with catch
// myPromise.catch(error => {
//   // do something with the error.
// });

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to false to represent an unsuccessful response from a server
//   let responseFromServer = false;
    
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });

// makeServerRequest.then(result => {
//   console.log(result);
// }).catch(error=>{
//   console.log(error);
// });
//Handle a Fulfilled Promise with then

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to true to represent a successful response from a server
//   let responseFromServer = true;
    
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });

// makeServerRequest.then(result =>{
//   console.log('Promise success :'+result);
// });
//Create a JavaScript Promise

// A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so

// const myPromise = new Promise((resolve, reject) => {

// });

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer represents a response from a server
//   let responseFromServer;
 
    
//   if(responseFromServer) {
//    resolve("We got the data");//successfully fulfil promise
   
//   } else {  
//     reject("Data not received"); //promise fail
//   }
// });


//Import a Default Export

// import add(i.e variable name) from './math_functions.js';

//Create an Export Fallback with export default

// export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

// // named function
// export default function add(x, y) {
//   return x + y;
// }

// // anonymous function
// export default function(x, y) {
//   return x + y;
// }
//Use * to Import Everything from a File
// import * as myMathModule from "./math_functions.js";
// import * as stringFunctions from './string_functions.js';
// // Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");


//Reuse JavaScript Code Using import
// import { add } from './math_functions.js';

// import { uppercaseString, lowercaseString } from './string_functions.js';
// // Only change code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");

// These functions are in a file called string_functions.js, which is in the same directory as the current file

//Create a Module Script

/* <script type="module" src="filename.js"></script> */

// const uppercaseString = (string) => {
//   return string.toUpperCase();
// }

// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }
// export {uppercaseString,lowercaseString} // where the two functions are declered in the module filename.js

//Use getters and setters to Control Access to an Object
// class Book {
//   constructor(author) {
//     this._author = author;// assuming this is a private property
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const lol = new Book('anonymous');
// console.log(lol.writer);  // anonymous
// lol.writer = 'wut';
// console.log(lol.writer); 

// Only change code below this line
// class Thermostat{
//   constructor(FahrenheitTemp){
//     this._FahrenheitTemp = FahrenheitTemp;
//   }
//   get temperature(){
//     const Celsius = 5/9 * (this._FahrenheitTemp - 32);
//     return Celsius;
     
//   }
//   set temperature(FahrenheitTemp){
//     this._FahrenheitTemp = FahrenheitTemp;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius



//Use class Syntax to Define a Constructor Function
// Only change code below this line
// class Vegetable{
//   constructor(name){
//     this.name = name;
//   }
// }
// // Only change code above this line

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'

// var SpaceShuttle = function(targetPlanet){
//   this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');



// class SpaceShuttle {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
// }
// const zeus = new SpaceShuttle('Jupiter2');
// console.log(zeus.targetPlanet);
//Write Concise Declarative Functions with ES6


// const person = {
//   name: "Taylor",
//   sayHello: function() {
//     return `Hello! My name is ${this.name}.`;
//   }
// };
// const person = {
//   name: "Taylor",
//   sayHello() {
//     return `Hello! My name is ${this.name}.`;
//   }
// };

// console.log(person);
// Write Concise Object Literal Declarations Using Object Property Shorthand


// const createPerson = (name, age, gender) => {
//   "use strict";
//   // Only change code below this line
//   // return {
//   //   name: name,
//   //   age: age,
//   //   gender: gender
//   // };

//   return{
//     name,age,gender
//   }
//   // Only change code above this line
// };


// console.log(createPerson('Yusuf',99,'M'));
// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });

// const getMousePosition = (x, y) => ({ x, y });

//Create Strings using Template Literals

// const person = {
//   name: "Zodiac Hasbro",
//   age: 56
// };

// // Template literal with multi-line and string interpolation
// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };


// function makeList(arr) {
//   "use strict";

//   // Only change code below this line
//   const resultDisplayArray = [];
 
// for(var i=0;i< arr.length;i++){
//   resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
// }  

//   // Only change code above this line

//   // return resultDisplayArray;
//   console.log(resultDisplayArray) ;
// }
// const resultDisplayArray = makeList(result.failure);



//Use Destructuring Assignment to Pass an Object as a Function's Parameters
// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;
//   // do something with these variables
// }
// const profileUpdate = ({ name, age, nationality, location }) => {
//   /* do something with these fields */
// }
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// const half = ({max,min}) => (max + min) / 2.0; 
// // Only change code above this line
// console.log(half);
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b); // 1, 2
// console.log(arr); // [3, 4, 5, 7]

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   "use strict";
//   // Only change code below this line
  
//   const [a,b,...arr] = list;
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
//Use Destructuring Assignment to Assign Variables from Arrays
// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b); // 1, 2

// const [a, ,,,,c] = [1, 2, 3, 4, 5, 6];
// console.log(a,c); // 1, 6

// let a = 8, b = 6;
//  [a,b] = [b,a];

//Use Destructuring Assignment to Extract Values from Objects
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };


// const {today, tomorrow} = HIGH_TEMPERATURES;


// const user = { name: 'John Doe', age: 34 };
// const {name,age} = user;

// const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34


// console.log( name +' '+ age );

//Use Destructuring Assignment to Assign Variables from Nested Objects

// const user = {
//   johnDoe: { 
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com'
//   }
// };
// const { johnDoe: { age, email }} = user;
// // or 
// const { johnDoe: { age: userAge, email: userEmail }} = user;

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };


// const {today:{low:lowToday,high:highToday}} = LOCAL_FORECAST; 
// console.log(highToday)
//Use the Spread Operator to Evaluate Arrays In-Place

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];  // Change this line

// var arr = [6, 89, 3, 45];
// // var maximus = Math.max.apply(null,arr); // returns 89
// var maximus = Math.min.apply(null,arr); // returns 3
// const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr); // returns 89

// console.log(maximus);



//Use the Rest Parameter with Function Parameters

// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
// console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }

// const sum = (...args) => {
  
//   return args.reduce((a, b) => a + b, 0);
// }


//Use Arrow Functions to Write Concise Anonymous Functions

// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }


// const myFunc = () => {
//   const myVar = "value";
//   return myVar;
// }

// const myFunc = () => "value";
// const multiplier = (item, multi) => item * multi;
// const multiplier = item => item *10;
// const myConcat = (arr1, arr2) => arr1.concat(arr2);


// console.log(myConcat([1, 2], [3, 4, 5]));
// const greeting = (name = "Anonymous") => "Hello " + name;
//Prevent Object Mutation

// let obj = {
//   name:"FreeCodeCamp",
//   review:"Awesome"
// };
// Object.freeze(obj);
// obj.review = "bad"; // will be ignored. Mutation not allowed
// obj.newProp = "Test"; // will be ignored. Mutation not allowed
// console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}

// However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
// const s = [5, 7, 2];
// function editInPlace() {
//   'use strict';
//   // Only change code below this line

//   // Using s = [2, 5, 7] would be invalid
//   s[0]=2;
//   s[1]=5;
//   s[2]=7;
  

//   // Only change code above this line
// }
// editInPlace();



//Compare Scopes of the var and let Keywords
// function checkScope() {
//   'use strict';
//   let i = 'function scope';
//   if (true) {
//     let i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }
// let catName;
// let quote;
// function catTalk() {
//   "use strict";

//   catName = "Oliver";
//   quote = catName + " says Meow!";

// }
// catTalk();