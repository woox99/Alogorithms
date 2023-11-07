// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

// const minToFront = arr => {
//     let min = arr[0];
//     let index;

//     for(i = 0; i < arr.length; i++){
//         if(arr[i]<min){
//             min = arr[i];
//             index = i;
//         }
//     }
//     newArr = [arr[index]];
//     for(i = 0; i < index; i++){
//         newArr.push(arr[i])
//     }
//     for( i = index + 1; i < arr.length; i ++){
//         newArr.push(arr[i]);
//     }
//     console.log(newArr);
// }

// minToFront([4,2,1,3,5]);

// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same 
// length, with existing elements moved to other indices so that order of elements is reversed. 
// Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions 
// such as splice().copy

// const reverse = arr => {
//     let temp;
//     for(i=0; i<arr.length/2; i++){
//         temp = arr[i];
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-i-1] = temp;
//     }
//     console.log(arr)
// }

// reverse([1,2,3,4,5]);

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
// 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.copy

// ????

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range.
//  Given arr and values min and max, retain only the array values between min and max. Work in-place: 
// return the array you are given, with values in original order. No built-in array functions.copy

// const filter = (arr, min, max) => {
//     let n = arr.length;
//     for(i=0; i<n; i++){
//         if(arr[i] < min || arr[i] > max){
//             for(j=i; j < n-1; j++){
//                 arr[j] = arr[j+1];
//             }
//             arr.length--;
//             n--;
//             i--;
//         }
//     }
//     console.log(arr)
// }

// filter([1,1,2,3,4,5,7,8], 2, 3);

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays.
//  Return a new array containing the first array's elements, followed by the second array's elements.
//  Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// const concat = (arr1, arr2) => {
//     for(i=0; i<arr2.length; i++){
//         arr1.push(arr2[i]);
//     }
//     console.log(arr1);
// }

// concat([1,2,3], ['a','b','c']);
