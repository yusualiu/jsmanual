// Introduction to the Functional Programming Challenges
// Functional programming is an approach to software development based around the evaluation of functions
// Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

//Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function

//first class functions: functions that can be assigned into a variable and passed into another function. In JavaScript, all functions are first class functions.

//higher order functions: are functions that take function as arguement and may also return functions as a return value.

//lambda: are those returned functions or those passed in functions as callbacks in higher order functions.







// Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

// const getTea = (numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// const tea4TeamFCC = getTea(40);
// console.log(tea4TeamFCC);

//Passing function as argument. 

// const prepareGreenTea = () => 'greenTea';


// const prepareBlackTea = () => 'blackTea';


// //higher order functions
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea,13);


// console.log(
//   tea4GreenTeamFCC.length,
//   tea4BlackTeamFCC.length
// );

// Understand the Hazards of Using Imperative Code

// tabs is an array of titles of each site open within the window
// tabs is an array of titles of each site open within the window
// var Window = function(tabs) {
//   this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push('new tab'); // Let's open a new tab for now
//   return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function (index) {

//   // Only change code below this line

//   var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
//   var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

//   // Only change code above this line

//   return this;
//  };

// // Let's create three browser windows
// var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
// var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
// var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// // Now perform the tab opening, closing, and other operations
// var finalTabs = socialWindow
//   .tabOpen() // Open a new tab for cat memes
//   .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);


//Avoid Mutations and Side Effects Using Functional Programming
// In functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

// The global variable
var fixedValue = 4;

// function incrementer () {
//   // Only change code below this line
//   return fixedValue +=1;

//   // Only change code above this line
// }

// Pass Arguments to Avoid External Dependence in a Function

// The global variable
// var fixedValue = 4;

// // Only change code below this line
// function incrementer (myValue) {

//   return myValue +=1;
//   // Only change code above this line
// }


// console.log(incrementer(fixedValue));
// console.log(incrementer(fixedValue));

//Refactor Global Variables Out of Functions
// The global variable

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (addList,bookName) {

  addList.push(bookName);
  return addList;
  
  // Change code above this line
}

// Change code below this line
function remove (List,bookName) {
  
  var book_index = List.indexOf(bookName);
  if (book_index >= 0) {

    List.splice(book_index, 1);
    return List;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
