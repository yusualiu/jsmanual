//Introduction to the Basic Data Structure Challenges
// A Data structure should be able to store data and retrieve the data on command

// This section will teach you how to manipulate arrays, as well as access and copy the information within them and differences between arrays and objects, as well as how to choose which to use for a given purpose.

// Use an Array to Store a Collection of Data
// let simpleArray = ['one', 2, 'three', true, false, undefined, null];// one dimensional arrays
// console.log(simpleArray.length);

// let complexArray = [
//   [
//     {
//       one: 1,
//       two: 2
//     },
//     {
//       three: 3,
//       four: 4
//     }
//   ],
//   [
//     {
//       a: "a",
//       b: "b"
//     },
//     {
//       c: "c",
//       d: "d"
//     }
//   ]
// ];
// console.log(complexArray);

//Access an Array's Contents Using Bracket Notation
// let myArray = ["a", "b", "c", "d"];
// myArray[1] = 'k';
// console.log(myArray);

//Add Items to an Array with push() and unshift()
// Arrays are mutable
// push() method adds elements to the end of an array, and unshift() adds elements to the beginning.

// let twentyThree = 'XXIII';
// let romanNumerals = ['XXI', 'XXII'];
// romanNumerals.unshift('XIX', 'XX');
// // now equals ['XIX', 'XX', 'XXI', 'XXII']

// romanNumerals.push(twentyThree);
// // now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

// function mixedNumbers(arr) {
//   // Only change code below this line
//   arr.unshift('I', 2, 'three');
//   arr.push(7, 'VIII', 9);
//   // Only change code above this line
//   return arr;
// }

// console.log(mixedNumbers(['IV', 5, 'six']));


//Remove Items from an Array with pop() and shift()

// let greetings = ['whats up?', 'hello', 'see ya!'];

// greetings.pop();
// // now equals ['whats up?', 'hello']

// greetings.shift();
// // now equals ['hello']
// We can also return the value of the removed element with either method like this:

// let popped = greetings.pop();
// // returns 'hello'
// // greetings now equals []
// function popShift(arr) {
//   let popped =arr.pop();
//   let shifted = arr.shift();
//   return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Remove Items Using splice()

//splice() allows us to remove any number of consecutive elements from anywhere in an array.
//splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon.

//splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. 

// let array = ['today', 'was', 'not', 'so', 'great'];

// array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

//Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1,4);
// // Only change code above this line
// console.log(arr);


//Add Items Using splice() --the 3rd parameter is inserted to array

// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14);
// // the second entry of 12 is removed, and we add 13 and 14 at the same index
// console.log(numbers);
// // returns [ 10, 11, 12, 13, 14, 15 ]

// function htmlColorNames(arr) {
//   // Only change code below this line
//   arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
//   // Only change code above this line
//   return arr;
// }

// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//Copy Array Items Using slice()
//slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched.
//slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).

// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

// let todaysWeather = weatherConditions.slice(1, 3);
// // todaysWeather equals ['snow', 'sleet'];
// // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

// function forecast(arr) {
//   // Only change code below this line
//   let output = arr.slice(2,4);
//   return output;
// }

// // Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Copy an Array with the Spread Operator

// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];
// console.log(thisArray);
// console.log(thatArray);

//copying machine
// function copyMachine(arr, num) {
//   let newArr = [];
  
  
//   while (num >= 1) {
//     // Only change code below this line    
//     
//     let arr1 = arr.slice(0,arr.length);
//     newArr.push(arr1);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

//Combine Arrays with the Spread Operator

// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']/

// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning',...fragment,'is','fun']
//   return sentence;
// }

// console.log(spreadOut());

//Check For The Presence of an Element With indexOf()

//indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

// fruits.indexOf('dates'); // returns -1
// fruits.indexOf('oranges'); // returns 2
// fruits.indexOf('pears'); // returns 1, the first index at which the element exists

// function quickCheck(arr, elem) {
//   // Only change code below this line
//   return arr.indexOf(elem) === -1 ? false:true;
//   // Only change code above this line
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Iterate Through All an Array's Items Using For Loops
// function greaterThanTen(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// // returns [12, 14, 80]

//Array filter
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for(let i=0;i<arr.length;i++){
     
//      if(arr[i].indexOf(elem) === -1 ){
//       newArr.push(arr[i])
//      }
//   }
//   // Only change code above this line
  
//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 13));

//Create complex multi-dimensional arrays
// let nestedArray = [ // top, or first level - the outer most array
//   ['deep'], // an array within an array, 2 levels of depth
//   [
//     ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
//   ],
//   [
//     [
//       ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
//     ],
//     [
//       [
//         ['deepest-est?'] // an array nested 5 levels deep
//       ]
//     ]
//   ]
// ];

//Add Key-Value Pairs to JavaScript Objects
//At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys).

// const tekkenCharacter = {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true
// };
// tekkenCharacter.origin = 'South Korea';
// tekkenCharacter['hair color'] = 'dyed orange';

//Modify an Object Nested Within an Object

// let nestedObject = {
//   id: 28802695164,
//   date: 'December 31, 2016',
//   data: {
//     totalUsers: 99,
//     online: 80,
//     onlineStatus: {
//       active: 67,
//       away: 13,
//       busy: 8
//     }
//   }
// };
// nestedObject.data.online=45;

//Access Property Names with Bracket Notation

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// function checkInventory(scannedItem) {
//   // Only change code below this line
//   return foods[scannedItem];
//   // Only change code above this line
// }

// console.log(checkInventory("apples"));

//Use the delete Keyword to Remove Object Properties

// delete foods.apples;

//Check if an Object has a Property

// users.hasOwnProperty('Alan');
// 'Alan' in users;
// // both return true

// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(obj) {
//   // Only change code below this line
//   let names =['Alan', 'Jeff', 'Sarah','Ryan'];
//   let count =0;
//   for(let i=0;i<names.length;i++){
//     if(obj.hasOwnProperty(names[i])){
//       count = count + 1;
//     }
//   }
//   return count < 4 ? false : true;
 
//   // Only change code above this line
// }
// function isEveryoneHere(obj) {
//   // change code below this line
//   return 'Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj;
//   // change code above this line
// }

// console.log(isEveryoneHere(users));

//Iterate Through the Keys of an Object with a for...in Statement

// for (let user in users) {
//   console.log(user);
// }

// // logs:
// Alan
// Jeff
// Sarah
// Rya

// let users = {
//   Alan: {
//     online: true
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

// // console.log(users.Alan.online);
// function countOnline(usersObj) {
//   // Only change code below this line
//   let count =0 ;
//   for(let user in usersObj){    
//     if(usersObj[user].online == true){
//       count++;
//     }
    
//   }
//   return count;
  
  
  
//   // Only change code above this line
// }

// console.log(countOnline(users));

//Generate an Array of All Object Keys with Object.keys()
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
//   return Object.keys(obj);
//   // Only change code above this line
// }

// console.log(getArrayOfUsers(users));


//Modify an Array Stored in an Object

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
 //locate the friend property,
 let friendsList = userObj.data.friends;
 friendsList.push(friend);

 return friendsList;
}

console.log(addFriend(user, 'Pete'));

















