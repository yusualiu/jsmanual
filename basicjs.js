// // Use Recursion to Create a Countup and countdown

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// // console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]


// function countdown(n){
  
//   if(n < 1){   
//     return [];
//   }else{
//     const countArray = countdown(n-1);
//     countArray.unshift(n);
//     // countdown(n-1);
//     // countArray.push(n);
     
//     return countArray;
//   }
  
// }
// // console.log(countdown(5)); // [5, 4, 3, 2, 1]
// function rangeOfNumbers(startNum, endNum) {
  
  
 
//   if(endNum === startNum ){  
//    return [startNum];  
//  }else{
//    var countArray = rangeOfNumbers(startNum, endNum - 1);
//    countArray.push(endNum);
//    return countArray;
//  }
  
//  };


// Use the Conditional (Ternary) Operator

// // condition ? statement-if-true : statement-if-false;
// function findGreater(a, b) {
//   return a > b ? "a is greater" : "b is greater";
// }

// //Multiple ternary conditional operations
// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal" 
//     : (a > b) ? "a is greater" 
//     : "b is greater";
// }

// Use the parseInt Function with a Radix

// function convertToInteger(str) {
//   var baseTen = parseInt(str, 2);
//   return baseTen;
// }
  
// convertToInteger("10011");

// //Generate Random Whole Numbers within a Range
// function randomRange(myMin, myMax) {
//   // Only change code below this line

//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
//   // Only change code above this line
// }

// console.log(randomRange(4,10));



// // A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// // The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// // If both are true, then return the "value" of that property.
// // If name does not correspond to any contacts then return "No such contact".
// // If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
// // Setup
// var contacts = [
//   {
//       "firstName": "Akira",
//       "lastName": "Laine",
//       "number": "0543236543",
//       "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//       "firstName": "Harry",
//       "lastName": "Potter",
//       "number": "0994372684",
//       "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//       "firstName": "Sherlock",
//       "lastName": "Holmes",
//       "number": "0487345643",
//       "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//       "firstName": "Kristian",
//       "lastName": "Vos",
//       "number": "unknown",
//       "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];



// function lookUpProfile(name, prop){
// // Only change code below this line
//  for(var i =0; i < contacts.length; i++){
//   var contact = contacts[i];
  
//     if(name === contact["firstName"]){
//       if(contact.hasOwnProperty(prop)){
//         return contact[prop];
//       }else {
//         return "No such property";
//       }  
    
//   }

  

//  }
//  return "No such contact";
// // Only change code above this line
// }

// lookUpProfile("Akira", "likes");
// lookUpProfile("Kristian", "lastName");







// Recursion

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
// for(var i=0; i < arr.length; i++){
//   for(var k = 0; k < arr[i].length; k++){
//     product = product * arr[i][k];
//   }
// }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1,2],[3,4],[5,6,7]]);

// var arr = [
//   [1,2], [3,4], [5,6]
// ];
// for (var i=0; i < arr.length; i++) {
//   for (var j=0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
// var arr = [10, 9, 8, 7, 6];
// for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }


// Iterate Odd Numbers With a For Loop
// Setup
// var myArray = [];

// // Only change code below this line

// for(var i= 1; i<= 9; i += 2){
//   myArray.push(i);
// }

// // decrement
// for(var i =9; i > 0; i-=2){
//   myArray.push(i);
// }

// while loops
// var ourArray = [];
// var i = 0;
// while(i < 5) {
//   ourArray.push(i);
//   i++;
// }

// Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in the collection. below


// var collection = {
//   2548: {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: [
//       "Let It Rock",
//       "You Give Love a Bad Name"
//     ]
//   },
//   2468: {
//     album: "1999",
//     artist: "Prince",
//     tracks: [
//       "1999",
//       "Little Red Corvette"
//     ]
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [ ]
//   },
//   5439: {
//     album: "ABBA Gold"
//   }
// };

// // Only change code below this line
// function updateRecords(id, prop, value) {


//   // If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

// // If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

// // If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
// // If value is empty (""), delete the given prop property from the album.
  
// if(prop !== "tracks" && value !== ""){
//   collection[id][prop] = value;    
// }else if(prop === "tracks" && collection[id].hasOwnProperty("tracks") === false ){
//   collection[id][prop] = [];
//   collection[id][prop].push(value); 
// }else if(prop === "tracks" && value !== ""){
//   collection[id][prop].push(value);    
// }else if(value === ""){
//   delete collection[id][prop];
// }
// return collection; 
  
  
// }

// updateRecords(5439, "artist", "ABBA");




// Accessing Nested Arrays

// var ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];
// ourPets[0].names[1]; // "Fluffy"
// ourPets[1].names[0]; // "Spot"

// Accessing Nested Objects
// var ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };
// ourStorage.cabinet["top drawer"].folder2;  // "secrets"
// ourStorage.desk.drawer; // "stapler"






// Testing Objects for Properties

// function checkObj(obj, checkProp) {
//   // Only change code below this line
  
//   if(obj.hasOwnProperty(checkProp)){
//     return obj[checkProp];
//   }
//   return "Not Found";
//   // Only change code above this line
// }


// var myObj = {
//   top: "hat",
//   bottom: "pants"
// };
// console.log(myObj.hasOwnProperty("top"));    // true
// myObj.hasOwnProperty("middle"); // false


// Using Objects for Lookups

// Setup
// function phoneticLookup(val) {
//   var result = "";

//   // Only change code below this line
 
//    var lookup = {
//     alpha:'Adams',
//     bravo:'Boston',
//     charlie:'Chicago',
//     delta:'Denver',    
//     echo:'Easy',
//     foxtrot:'Frank',
//   }

// result = lookup[val];

//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");




// Delete Properties from a JavaScript Object

// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete ourDog.bark;



// Add New Properties to a JavaScript Object
// var myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// // Only change code below this line
// myDog.bark = "awoof";




// var dogs = {
//   Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
// };
// var myDog = "Hunter";
// var myBreed = dogs[myDog];
// console.log(myBreed); // "Doberman"



// Accessing objects properties with bracket notation
// var myObj = {
//   "Space Name": "Kirk",
//   "More Space": "Spock",
//   "NoSpace": "USS Enterprise"
// };
// myObj["Space Name"]; // Kirk
// myObj['More Space']; // Spock
// myObj["NoSpace"];    // USS Enterprise


// Card counter 

// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch(card){
    
//     case 2:
//     case 3:
//     case 4:
//     case 5:      
//     case 6:      
//       count++;            
//       break;   
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--;           
//       break;
    
//   }
//   if(count > 0){
//     return count +' Bet';
//   }
//   return count +' Hold';
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');
// 2, J, 9, 2, 7
// console.log(cc(2));
// console.log(cc('J'));
// console.log(cc(9));
// console.log(cc(2));
// console.log(cc(7));








// Setup
// function abTest(a, b) {
//   // Only change code below this line
// if(a < 0 || b < 0){
//   return undefined;
// }
//   // Only change code above this line

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// console.log(abTest(2,-1));
