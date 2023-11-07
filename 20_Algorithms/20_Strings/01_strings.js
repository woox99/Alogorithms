// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

// const removeBlanks = str => {
//     strArr = str.split(" ");
//     str = strArr.join("");
//     console.log(str);
// }

// removeBlanks(" Pl ayTha tF u nkyM usi c ");



// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

// const getDigits = str => {
//     let strArr = [];
//     let int;
//     for(i=0; i<str.length; i++){
//         if(!isNaN(str[i])){
//             strArr.push(str[i]);
//             int = strArr.join("");
//         }
//     }
//     int = Number(int);
//     console.log(int);
// }

// getDigits("abc8c0d1ngd0j0!8");



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). 
// You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

// const acronym = str => {
//     let acronym = [];
//     for (i = 0; i < str.length; i++) {
//         strArr = str.split(' ');
//     }
//     if(strArr[strArr.length-1] == ''){
//         strArr.pop();
//     }
//     if(strArr[0] == ''){
//         for (i = 0; i < strArr.length; i++) {
//             strArr[i] = strArr[i + 1];
//         }
//         strArr.pop();
//     }
//     for (i = 0; i < strArr.length; i++) {
//         acronym.push(strArr[i][0].toUpperCase())
//     }
//     acronym = acronym.join('');
//     console.log(acronym)
// }
// acronym(" there's no free lunch - gotta pay yer way. ");
// acronym("Live from New York, it's Saturday Night!");

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string.

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

// const countNonSpaces = str => {
//     strArr = str.split(" ");
//     str = strArr.join('');
//     console.log(str.length);
// }
// countNonSpaces("Honey pie, you are driving me crazy");
// countNonSpaces("Hello world !");



// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only 
// contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

// const removeShorterStrings = (arr, value) => {
//     const newArr = [];
//     for(i=0; i<arr.length; i++){
//         if(arr[i].length >= value){
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr);
// }
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4);
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3);