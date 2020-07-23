//Introduction to Basic Algorithm Scripting
//A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.
//Convert Celsius to Fahrenheit
// function convertToF(celsius) {
  
//   let fahrenheit;
//   fahrenheit = celsius * (9/5)+ 32;
//   return fahrenheit;
// }

// convertToF(30);

// Find the maximum value in an array.s
// function findMax(arr){
//   for(var result=arr[0], i = 0;i< arr.length;i++){
    
//     result = (arr[i] > result) ? arr[i] : result;
//   }
//   return result;
// }

// console.log(findMax([3,89,450,79,20,87,10]));

//Reverse a String
// function reverseString(str) {
//   let arr = [];
//   for(let i= str.length-1;i >= 0;i--){
//     arr.push(str[i])    
//   }
  
//   let final = arr.join('');
//   // return str;
//   console.log(final) ;
// }

// function reverseString(str) {
//   for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
  
// }

// function reverseString(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
// reverseString("hello");

//Factorialize a Number

// function factorialize(num) {
//   // return num * (num -1) * (num -2);
//   return (num == 0) ? 1 : num * factorialize(num -1);
  
// }

// function factorialize(num) {
//   for (var product = 1; num > 0; num--) {
//     product *= num;
//   }
//   return product;
// }
// const factorialize = (num)=> (num == 0) ? 1 : num * factorialize(num -1);
// console.log(factorialize(5));

//Find the Longest Word in a String
// function findLongestWordLength(str) {
//   let arr = str.split(' ');
  
//   for(var count=[], i = 0;i < arr.length; i++){
    
//     count.push(arr[i].length);      
//   }
 
//   return Math.max(...count);
// }

// function findLongestWordLength(str) {
//   var words = str.split(' ');
//   var maxLength = 0;

//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }

//   return maxLength;
// }


//console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//Return Largest Numbers in Arrays

// function largestOfFour(arr) {
//   let largestArray =[]; 
//   for (var i = 0; i < arr.length; i++) {
        
//         var subArrayLargest = Math.max.apply(null,arr[i]);
        
//         largestArray.push(subArrayLargest);
//   }
//   return largestArray;
// }

// function largestOfFour(arr) {
//   var results = [];
//   for (var n = 0; n < arr.length; n++) {
//     var largestNumber = arr[n][0];
//     for (var sb = 1; sb < arr[n].length; sb++) {
//       if (arr[n][sb] > largestNumber) {
//         largestNumber = arr[n][sb];
//       }
//     }

//     results[n] = largestNumber;
//   }

//   return results;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [100, 101, 857, 1]]));

//Confirm the Ending of string.

// function confirmEnding(str, target) {
//   let strLength = str.length;  
//   let targetLength = target.length;
//   let newStr = str.substring(strLength - targetLength);
//   return (newStr === target) ? true : false;
// }
// function confirmEnding(str, target) {  
//   // return (str.substring(str.length - target.length) === target);
//   return (str.slice(str.length - target.length) === target);
// }

// console.log(confirmEnding("Congratulation", "on"));
// console.log(confirmEnding("Bastian", "n"));

//Repeat a String Repeat a String
// function repeatStringNumTimes(str, num) {
//   let newStr ='';
//   while (num >=1) {
//     newStr += str;
//     num--;
//   }
//   return newStr;
// }

// console.log(repeatStringNumTimes("abc", 3));

//Truncate a String

// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
   
//     if(func( arr[i]) === true){
//       num= arr[i];
//       break;
//     }else{
//       num = undefined;
//     }
//   }
//   return num;
// }

// console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));


//Boo who

// function booWho(bool) {

//   return (typeof(bool)=== 'boolean')? true: false;
// }

// booWho(null);

//Title Case a Sentence
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, element => element.toUpperCase());
// }

// console.log(titleCase("sHoRt AnD sToUt"));

// Slice and Splice
// function frankenSplice(arr1, arr2, n) {
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//falsy bouncer
// function bouncer(arr) {
//   let newArray = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]) newArray.push(arr[i]);
//   }
//   return newArray;
// }

// console.log(bouncer([7, "ate", "", false, 9]));

//Where do I Belong

// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   var times = arr.length; // runs the for loop once for each thing in the array
//   var count = 0;
//   for (var i = 0; i < times; i++) {
//     if (num > arr[i]) {
//       count++;
//     }
//   } // counts how many array numbers are smaller than num
//   return count; // the above equals num's position in a sorted array
// }

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

//Mutations

// function mutation(arr) {
//   // return true if all letters in arr[1] is present in arr[0]
//   // check the charcters in first element(arr[0]);
//   //check the characters in second element(arr[1]);
//   //loop through arr[1]
//   // compare element in arr[1] with element in arr[2] 
//   let firstElement = arr[0].toLowerCase();
//   let secondElement = arr[1].toLowerCase();

//   for(let i=0;i < secondElement.length ;i++ ){
//     if(firstElement.indexOf(secondElement[i]) == -1){
//       return false;     
//     }
//   }
//   return true;
// }

// console.log(mutation(["Noel", "Ole"]));

//Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


// function chunkArrayInGroups(arr, size) {
//   var newArr = [];
//   while (arr.length) {
//     newArr.push(arr.splice(0, size));
//   }
//   return newArr;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));














