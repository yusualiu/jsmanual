// Introduction to the Debugging Challenges
//Debugging is the process of finding exactly what isn't working and fixing it.

// generally come in three forms:

// syntax errors that prevent a program from running
// runtime errors when code fails to execute or has unexpected behavior
// semantic (or logical) errors when code doesn't do what it's meant to.

//Use the JavaScript Console to Check the Value of a Variable

// let a = 5;
// let b = 1;
// a++;
// // Only change code below this line
// console.log(a);

// let sumAB = a + b;
// console.log(sumAB);
//Understanding the Differences between the freeCodeCamp and Browser Console
// let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// // Use console.log() to print the output variable.
// console.clear()
// console.log(output)

//Use typeof to Check the Type of a Variable

// Here are some examples using typeof:

// console.log(typeof ""); // outputs "string"
// console.log(typeof 0); // outputs "number"
// console.log(typeof []); // outputs "object"
// console.log(typeof {}); // outputs "object"

// JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.
// let seven = 7;
// let three = "3";
// console.log(seven + three);
// console.log(typeof(seven));
// console.log(typeof(three));

//Catch Misspelled Variable and Function Names
// let receivables  = 10;
// let payables = 8;
// let netWorkingCapital = receivables  - payables;
// console.log(`Net working capital is: ${netWorkingCapital}`);

//Catch Unclosed Parentheses, Brackets, Braces and Quotes
// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) =>  previous + current);
// console.log(`Sum of array values is: ${arraySum}`);

//Catch Mixed Usage of Single and Double Quotes
// let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
// let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
// console.log(innerHtml);
// console.log(innerHtml);

//Catch Use of Assignment Operator Instead of Equality Operator (==) not (=)

//Catch Missing Open and Closing Parenthesis After a Function Call
// function getNine() {
//   let x = 6;
//   let y = 3;
//   return x + y;
// }

// let result = getNine();
// console.log(result);
//Catch Arguments Passed in the Wrong Order When Calling a Function

// function raiseToPower(b, e) {
//   return Math.pow(b, e);
// }

// let base = 2;
// let exp = 3;
// // let power = raiseToPower(exp, base);
// let power = raiseToPower(base, exp);
// console.log(power);

//Catch Off By One Errors When Using Indexing(OBOE)
//crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. 

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//   // loops one too many times at the end
//   console.log(alphabet[i]);
// }
// for (let j = 1; j < len; j++) {
//   // loops one too few times and misses the first character at index 0
//   console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//   // Goldilocks approves - this is just right
//   console.log(alphabet[k]);
// }

// function countToFive() {
//   let firstFive = "12345";
//   let len = firstFive.length;
//   // Only change code below this line
//   for (let i = 0; i < len; i++) {
//   // Only change code above this line
//     console.log(firstFive[i]);
//   }
// }

// countToFive();

//Use Caution When Reinitializing Variables Inside a Loop

//Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.

// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray

//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array

//     newArray.push(row);
//     row = [];
//   }
  
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);

//Prevent Infinite Loops with a Valid Terminal Condition
// function myFunc() {
//   for (let i = 1; i <= 4; i += 2) {
//     console.log("Still going!");
//   }
// }














