// Introduction to the Regular Expression Challenges

// Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they help programmers match, search, and replace text.


//Using the Test Method
//Match Literal Strings
// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);
// console.log(testRegex.test(testStr));
// Returns true

//Match a Literal String with Different Possibilities

// let petString = "James has a pet fish.";
// let petRegex =/dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);
// console.log(result);

//Ignore Case While Matching  - the i flag

// /ignorecase/i  sample regex

// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);
// console.log(result);

//Extract Matches
// "Hello, World!".match(/Hello/);

// Returns ["Hello"]
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// let result = ourStr.match(ourRegex);
// console.log(result[0]);

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
// console.log(result[0]);

//Find More Than the First Match -g flag.
// To search or extract a pattern more than once, you can use the g flag.
// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/g;
// let result = testStr.match(ourRegex);
// console.log(result);

//multiple flags

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/ig; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line

//Match Anything with Wildcard Period
// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr); // Returns true
// huRegex.test(hugStr); // Returns true

//Match Single Character with Multiple Possibilities ([ and ])

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex); // Returns ["big"]
// bagStr.match(bgRegex); // Returns ["bag"]
// bugStr.match(bgRegex); // Returns ["bug"]
// bogStr.match(bgRegex); // Returns null

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result);

//Match Letters of the Alphabet

// Inside a character set, you can define a range of characters to match using a hyphen character: -
// For example, to match lowercase letters a through e you would use [a-e]

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex); // Returns ["cat"]
// batStr.match(bgRegex); // Returns ["bat"]
// matStr.match(bgRegex); // Returns null


// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

// console.log(result);

//Match Numbers and Letters of the Alphabet

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// // matches all letters and numbers in jennyStr
// let result =jennyStr.match(myRegex);

// console.log(result);

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result =quoteSample.match(myRegex) ; // Change this line

//Match Single Characters Not Specified -negated character sets (^).
// For example, /[^aeiou]/gi matches all characters that are not a vowel.
// [^thingsThatWillNotBeMatched]

// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);

//Match Characters that Occur One or More Times (+)

// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);

//Match Characters that Occur Zero or More Times (*)

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex); // Returns ["goooooooo"]
// gPhrase.match(goRegex); // Returns ["g"]
// oPhrase.match(goRegex); // Returns null

// let chewieQuote ="Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);
// console.log(result[0]);

//Find Characters with Lazy Matching(?)

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?1>/; // Change this line
// let result = text.match(myRegex);


//Find One or More Criminals in a Hunt
// let reCriminals = /C+/; // Change this line
// let quoteSample = "P1P5P4CCCP2P6P3";
// let result = quoteSample.match(reCriminals);
// console.log(result[0]);

//Match Beginning String Patterns

// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
// // Returns true
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
// // Returns false

//Match Ending String Patterns($)

// let theEnding = "This is a never ending story";
// let storyRegex = /story$/;
// storyRegex.test(theEnding);
// // Returns true
// let noEnding = "Sometimes a story will have to end";
// storyRegex.test(noEnding);
// // Returns false

// Match All Letters and Numbers (\w) --shorthand character classes
// This shortcut is equal to [A-Za-z0-9_]

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

//Match Everything But Letters and Numbers(\W) i.e opposite of(\w) --[^A-Za-z0-9_]

// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand); // Returns ["%"]
// sentence.match(shortHand); // Returns ["!"]

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;

//Match All Numbers (\d). This is equal to the character class [0-9]
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;
//Match All Non-Numbers (\D)
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex).length;

 
// Restrict Possible Usernames

// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

// 1) Usernames can only use alpha-numeric characters.

// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// 3) Username letters can be lowercase and uppercase.

// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// let username = "JackOfAllTrades";
// let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
// let result = userCheck.test(username);

// Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,0} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input

//Match Whitespace(\s)
// let whiteSpace = "       Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// console.log(whiteSpace.match(spaceRegex));

//Match Non-Whitespace Characters(\S)

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let nonSpaceRegex = /\S/g;
// whiteSpace.match(nonSpaceRegex).length; // Returns 32

//Specify Upper and Lower Number of Matches
//You can specify the lower and upper number of patterns with quantity specifiers. ({ })

// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false

// let ohStr = "Ohhh no";
// let ohRegex = /oh{3,6}\sno/i; // Change this line
// let result = ohRegex.test(ohStr);

//Specify Only the Lower Number of Matches
// let haStr = "Hazzzzah";
// let haRegex = /haz{4,}ah/i; // Change this line
// let result = haRegex.test(haStr);

//Specify Exact Number of Matches
// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);

//Check for All or None
// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american); // Returns true
// rainbowRegex.test(british); // Returns true

// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

// Positive and Negative Lookahead
// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// quit.match(quRegex); // Returns ["q"]
// noquit.match(qRegex); // Returns ["q"]

//let sampleWord = "astronaut";
// let pwRegex =  /(?=^\D)(?=\w{5,})(?=\D*(?:\d\D+)?\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password); // Returns true

// Check For Mixed Grouping of Characters ()

// If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
// let testStr = "Pumpkin";
// let testRegex = /P(engu|umpk)in/;
// testRegex.test(testStr);

// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
// let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

//Reuse Patterns Using Capture Groups

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
// let result = reRegex.test(repeatNum);

//  Use Capture Groups to Search and Replace
//ou can search and replace text in a string using .replace() on a string.

// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

// let str = "one two three";
// let fixRegex =/(\w+)\s(\w+)\s(\w+)/  // Change this line
// let replaceText = '$3 $2 $1'; // Change this line
// let result = str.replace(fixRegex, replaceText);

//Remove Whitespace from Start and End


// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// // let result = hello.match(wsRegex); // Change this line
// let result = hello.replace(wsRegex,''); // Change this line
// console.log(result);
