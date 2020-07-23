// object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.

//Create a Basic JavaScript Object
// let dog = {
//   name:'fred',
//   numLegs:4
// };

//Use Dot Notation to Access the Properties of an Object
// let dog = {
//   name: "Spot",
//   numLegs: 4
// };
// // Only change code below this line
// console.log(dog.name);
// console.log(dog.numLegs);

//Create a Method on an Object
//Methods are properties that are functions. This adds different behavior to an object

// let duck = {
//   name: "Aflac",
//   numLegs: 2,
//   sayName: function() {return "The name of this duck is " + duck.name + ".";}
// };
// duck.sayName();

// Make Code More Reusable with the this Keyword
// let duck = {
//   name: "Aflac",
//   numLegs: 2,
//   sayName: function() {return "The name of this duck is " + this.name + ".";}
// };
// duck.sayName();

//Define a Constructor Function
// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

// function Bird(){
//   this.color = 'brown',
//   this.numLegs = 2,
//   this.nature  = 'Domestic'
// }

//Use a Constructor to Create Objects
// function Bird() {
//   this.name = "Albert";
//   this.color  = "blue";
//   this.numLegs = 2;
//   // "this" inside the constructor always refers to the object being created
// }

// let blueBird = new Bird();


//Extend Constructors to Receive Arguments
// function Bird(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }
// let humpy = new Bird('humpy','green');
//Verify an Object's Constructor with instanceof

// let Bird = function(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }

// let crow = new Bird("Alexis", "black");

// crow instanceof Bird; // => true

// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }

// // Only change code below this line
// let myHouse = new House(4);
// console.log(myHouse instanceof(House));

//Understand Own Properties

// function Bird(name) {
//   this.name  = name;
//   this.numLegs = 2;
// }

// let duck = new Bird("Donald");
// let ownProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

// console.log(ownProps); // prints [ "name", "numLegs" ]

//Use Prototype Properties to Reduce Duplicate Code
// Prototype are part of the constructor that is used in creating object instances.
// Object.prototype.property 

// Bird.Prototype.numLegs = 2;// this prevents repetition of properties value in all instances created.
// Bird.prototype.eat = function() {
//   console.log("nom nom nom");
// }

// Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

//Change the Prototype to a New Object
// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

// Bird.prototype = {
//   numLegs: 2, 
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };

//Iterate Over All Properties

// function Bird(name) {
//   this.name = name;  //own property
// }
// Bird.prototype.numLegs = 2; // prototype property
// let duck = new Bird("Donald");

// let ownProps = [];
// let prototypeProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(ownProps); // prints ["name"]
// console.log(prototypeProps); // prints ["numLegs"]

//Understand the Constructor Property
// let duck = new Bird();
// let beagle = new Dog();

// console.log(duck.constructor === Bird);  //prints true
// console.log(beagle.constructor === Dog);  //prints true

// Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.


//Change the Prototype to a New Object
//Remember to Set the Constructor Property when Changing the Prototype
// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:
// Bird.prototype = {
//   constructor: Bird, // define the constructor property
//   numLegs: 2,
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name); 
//   }
// };

//Understand Where an Object’s Prototype Comes From// came from the object constructor. -isPrototypeOf();

// function Bird(name) {
//   this.name = name;
// }

// let duck = new Bird("Donald");

// console.log(Bird.prototype.isPrototypeOf(duck));

//Understand the Prototype Chain
// function Bird(name) {
//   this.name = name;
// }

// typeof Bird.prototype; // yields 'object'
// Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:
// Object.prototype.isPrototypeOf(Bird.prototype); // returns true

// In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

// Use Inheritance So You Don't Repeat Yourself

// Bird.prototype = {
//   constructor: Bird,
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };

// Dog.prototype = {
//   constructor: Dog,
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };
// // -------------------INHERITANCE---------------------------------------------------
// function Animal(){}
// Animal.prototype = {
//   constructor: Animal,
//   describe: function() {
//     console.log("My name is " + this.name);
//   }  

// }

// Bird.prototype = {
//   constructor: Bird
// };

// Dog.prototype = {
//   constructor: Dog
// };

//Inherit Behaviors from a Supertype
// function Animal() { }
// Animal.prototype.eat = function() {
//   console.log("nom nom nom");
// };
// Object.create(obj) creates a new object, and sets obj as the new object's prototype

// let animal = new Animal(); X

// let animal = Object.create(Animal.prototype);
// animal.eat(); // prints "nom nom nom"
// animal instanceof Animal; // => true

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// // Only change code below this line

// let duck= Object.create(Animal.prototype);
// let beagle = Object.create(Animal.prototype);

// console.log(duck);

//Set the Child's Prototype to an Instance of the Parent

// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird("Donald");
// duck.eat(); // prints "nom nom nom"

// =============================================INHERITANCE=======================
// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Dog() { }

// // Only change code below this line

// Dog.prototype = Object.create(Animal.prototype);
// let beagle = new Dog();

//Reset an Inherited Constructor Property
// function Bird() { }
// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird();
// duck.constructor // function Animal(){...}

// Bird.prototype.constructor = Bird;
// duck.constructor // function Bird(){...}

// Add Methods After Inheritance
// Bird.prototype.fly = function() {
//   console.log("I'm flying!");
// };
// let duck = new Bird();
// duck.eat(); // prints "nom nom nom"
// duck.fly();// prints "I'm flying!"

//Override Inherited Methods
// function Animal() { }
// Animal.prototype.eat = function() {
//   return "nom nom nom";
// };
// function Bird() { }

// // Inherit all methods from Animal
// Bird.prototype = Object.create(Animal.prototype);

// // Bird.eat() overrides Animal.eat()
// Bird.prototype.eat = function() {
//   return "peck peck peck";
// };

// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line

// Penguin.prototype.fly=function(){
//   return "Alas, this is a flightless bird.";
// }

// // Only change code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());

//Use a Mixin to Add Common Behavior Between Unrelated Objects
// For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

// let flyMixin = function(obj) {
//   obj.fly = function() {
//     console.log("Flying, wooosh!");
//   }
// };
// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let plane = {
//   model: "777",
//   numPassengers: 524
// };

// flyMixin(bird);
// flyMixin(plane);
// console.log(plane.fly());

// Use Closure to Protect Properties Within an Object from Being Modified Externally
// function Bird() {
//   let hatchedEgg = 10; // private variable

//   /* publicly available method that a bird object can use */
//   this.getHatchedEggCount = function() { 
//     return hatchedEgg;
//   };
// }
// // class Bird{
// //   constructor(){
// //     let hatchedEgg = 10;
// //     this.getHatchedEggCount = function() { 
// //           return hatchedEgg;
// //     };
// //   }
// // }
// let ducky = new Bird();
// console.log(ducky.getHatchedEggCount()); // returns 10

// This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. In JavaScript, a function always has access to the context in which it was created. This is called closure.

// Understand the Immediately Invoked Function Expression (IIFE)
// A common pattern in JavaScript is to execute a function as soon as it is declared

// (function () {
//   console.log("Chirp, chirp!");
// })(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately

// Use an IIFE to Create a Module

//Without IIFE
// function glideMixin(obj) {
//   obj.glide = function() {
//     console.log("Gliding on the water");
//   };
// }
// function flyMixin(obj) {
//   obj.fly = function() {
//     console.log("Flying, wooosh!");
//   };
// }

// With IIFE 

// let motion = (
//  function(){
//   return {
//     glideMixin: function(obj){
//       obj.glide = function(){
//         console.log("Gliding on the water");
//       }
//     },
//     flyMixin:function(obj){
//       obj.fly = function(){
//         console.log("Flying, wooosh!");
//       }
//     }
    
//   }
//  }
// )();