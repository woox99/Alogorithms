// Fundamentals To Do 3


// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
// const biggie = arr => {
//     newArr = [];
//     for(i=0; i<arr.length; i++){
//         if(arr[i]>0){
//             newArr.push('big');
//         }
//         else{
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr)
// }

// biggie([-1,3,5,-5]);


// Print Low, Return High
// Create a function that takes an array of numbers. 
// The function should print the lowest value in the array, and return the highest value in the array.

// const lowHigh = arr => {
//     let high = arr[0];
//     let low = arr[0];
//     for(i=0; i<arr.length; i++){
//         if(arr[i]>high){
//             high = arr[i];
//         }
//         if(arr[i]<low){
//             low = arr[i]
//         }
//     }
//     console.log(low);
//     return high;
// }

// console.log(lowHigh([1,2,10,5]));


// Print One, Return Another
// Build a function that takes an array of numbers. 
// The function should print the second-to-last value in the array, and return first odd value in the array.

// const func = arr => {
//     let odd = null;
//     for(i=0; i<arr.length; i++){
//         if(arr[i] % 2 != 0){
//             odd = odd ? odd : arr[i];
//         }
//     }
//     console.log(arr[arr.length-2]);
//     return odd;
// }

// console.log(func([0, 4, 5, 10, 21]));

// Double Vision
// Given an array, create a function to return a new array where each value in the original has been doubled. 
// Calling double([1,2,3]) should return [2,4,6] without changing original.

// const double = arr => {
//     const newArr = [];
//     for(i=0; i<arr.length; i++){
//         newArr.push(arr[i] * 2);
//     }
//     console.log(newArr);
// }

// double([1,2,3]);

// Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. 
// Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

// const func = arr => {
//     let count = 0;
//     const newArr = arr;
//     for(i=0; i<arr.length; i++){
//         if(arr[i] > 0){
//             count++;
//         }
//     }
//     newArr.pop();
//     newArr.push(count);
//     console.log(newArr);
// }
// func([-1,1,1,1]);

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, 
// print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

// const evenOdds = arr => {
//     let even = 0;
//     let odd = 0;
//     for(i=0; i<arr.length; i++){
//         if(arr[i] % 2 == 0){
//             even++;
//             odd = 0;
//         }
//         else if(arr[i] % 2 != 0){
//             odd++;
//             even = 0;
//         }
//         if(even == 3){
//             console.log("Even more so!")
//         }
//         if(odd == 3){
//             console.log("Thats odd!")
//         }
//     }
// }

// evenOdds([2, 1, 3,5, 2 , 6, 4, 4, 2]);


// Previous Lengths
// You are passed an array containing strings. Working within that same array, 
// replace each string with a number – the length of the string at previous array index – and return the array.

// const prev = arr => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if(i != 0){
//             arr[i] = arr[i - 1].length;
//         }
//     }
//     console.log(arr);
// }

// prev(["test", "four", 'cat']);


// Reverse Array
// Given array, write a function to reverse values, in-place. 
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

// const reverse = arr => {
//     newArr = [];
//     for(i = arr.length - 1; i >= 0; i--){
//         newArr.push(arr[i]);
//     }
//     console.log(newArr);
// }

// reverse([3,1,6,4,2]);

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, 
// made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

// const negative = arr => {
//     for(i=0; i<arr.length; i++){
//         if(arr[i] > 0){
//             arr[i] = arr[i] * (-1);
//         }
//     }
//     console.log(arr);
// }
// negative([1,-3,5]);

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". 
// If no array elements are "food", then print "I'm hungry" once.

// const hungry = arr => {
//     var count = 0;
//     for(i=0; i<arr.length; i++){
//         if(arr[i] == 'hungry'){
//             count++;
//             console.log('yumy')
//         }
//     }
//     if(!count){
//         console.log('Im hungry')
//     }
// }

// hungry(['cat', 'dog', 'hungry'])



