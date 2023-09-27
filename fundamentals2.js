// Countdown
// Create a function that accepts a number as an input. 
// Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) 
// down to 0 (as the last element). How long is this array?

// const createArray = num => {
//     const arr = [];
//     for(i=num; i>=0; i--){
//         arr.push(i);
//     }
//     console.log(arr);
// }

// createArray(5);

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

// const printReturn = arr => {
//     console.log(arr[0]);
//     return arr[1];
// }

// console.log(printReturn([0,1]));

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. 
// What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

// const firstPlusLength = arr => {
//     const sum = arr[0] + arr.length;
//     console.log(sum);
// }

// firstPlusLength([1, 9, 1, 2]);

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

// const greaterThanSecond = arr => {
//     let count = 0;
//     for(i=0; i<arr.length; i++){
//         if(arr[i]>arr[1]){
//             console.log(arr[i]);
//             count ++;
//         }
//     }
//     console.log('count: ' + count)
// }

// greaterThanSecond([1,3,5,7,9,13]);

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater 
// than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

// const greaterThanSecond = arr => {
//     let newArr = [];
//     let count = 0;
//     for(i=0; i<arr.length; i++){
//         if(arr.length<2){
//             console.log('Array too short')
//             return null;
//         }
//         if(arr[i]>arr[1]){
//             newArr.push(arr[i]);
//             count ++;
//         }
//     }
//     console.log(newArr);
//     console.log('count: ' + count)
// }

// greaterThanSecond([1,3,5,7,9,13]);



// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

// const thisLength = (num1, num2) => {
//     let arr = [];
//     for(i=0; i<num1; i++){
//         arr.push(num2);
//     }
//     console.log(arr);
//     if(num1==num2){
//         console.log('Jinx!');
//     }
// }

// thisLength(3,4);


// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; 
// if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

// const fitTheFirst = arr => {
//     const num = arr[0];
//     const length = arr.length;

//     if(num>length){
//         console.log('Too big.')
//     } else if(num<length){
//         console.log('Too small.')
//     } else{
//         console.log('Just right!')
//     }
// }

// fitTheFirst([2, 1])

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) 
// that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in 
// Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

// const toCels = fahr => {
//     const cels = (fahr - 32) * 5 / 9;
//     console.log(cels);
// }

// toCels(212);


// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be 
// complex, so for this challenge just try a series of Celsius integer values starting at 200, 
// going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

// console.log(32/(1-9/5))