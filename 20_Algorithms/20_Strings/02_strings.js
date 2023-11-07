// Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed.

// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

// const reverse = str => {
//     strArr = [];
//     for(i=str.length-1; i>=0; i--){
//         strArr.push(str[i])
//     }
//     str = strArr.join('');
//     console.log(str);
// }
// reverse('creature');

// Remove Even-Length Strings
// Build a standalone function to remove strings of even lengths from a given array. For array containing

// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that same array to ["Nope!","Its","Chris","."].

// const even = arr => {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].length % 2 == 0) {
//             for (j = i; j < arr.length; j++) {
//                 arr[j] = arr[j + 1];
//             }
//             arr.length--;
//             i--;
//         }
//     }
//     console.log(arr);
// }
// even(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]);


// Integer to Roman Numerals
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral 
// representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. 
// Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

// ???

// Roman Numerals to Integer
// Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”. Comprising 30 bronze gears, its wooden frame features 2000 characters. 
// Given a string containing a Roman numeral representation of a positive integer, return the integer. 
// Remember that III is 3, DCIX is 609 and MXDII is 1492.

// const romanToNumeral = str => {
//     let sum = 0;

//     const toNumber = str => {
//         switch(str){
//             case 'I': return 1; break;
//             case 'V': return 5; break;
//             case 'X': return 10; break;
//             case 'L': return 50; break;
//             case 'C': return 100; break;
//             case 'D': return 500; break;
//             case 'M': return 1000; break;
//         }
//     }

//     for(i=0; i<str.length; i++){
//         if(toNumber(str[i]) < toNumber(str[i+1])){
//             sum = sum - toNumber(str[i]) + toNumber(str[i+1])
//             i++
//         }
//         else{
//             sum = sum + toNumber(str[i])
//         }
//     }

//     console.log(sum)
// }

//     romanToNumeral('DCIX');