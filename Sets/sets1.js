// Interleave Arrays
// Given two unsorted arrays, create a new array containing the elements of both, resulting in an 
// unsorted merge of all values. When populating the new array alternate (interleave) values between the two arrays
//  until one is exhausted, then include all of the other. 

// Example: given [77,22,11,22] and [2,6,7,2,6,2], return [77,2,22,6,11,7,22,2,6,2].

// const interleave = (arr1, arr2) => {
//     const newArr = []
//     const length = arr1.length > arr2.length ? arr1.length : arr2.length;

//     for(i=0; i<length; i++){
//         if(arr1[i]){
//             newArr.push(arr1[i])
//         }
//         if(arr2[i]){
//             newArr.push(arr2[i])
//         }
//     }

//     console.log(newArr);
//     return newArr;
// }

// interleave([77,22,11,22], [2,6,7,2,6,2]);

// Merge Sorted Arrays
// Efficiently merge two already-sorted arrays into a new sorted array containing the multiset of all values. 
// Example: given [1,2,2,2,7] and [2,2,6,6,7], return new array [1,2,2,2,2,2,6,6,7,7].

// Example: given [1,2,2,2,7] y [2,2,6,6,7], devuelve una nueva matriz [1,2,2,2,2,2,6,6,7,7 ].

// const merge = (arr1, arr2) => {
//     const newArr = [];

//     let i = 0;
//     let j = 0;

//     while(arr1[i] && arr2[j]){
//         if(arr1[i] < arr2[j]){
//             newArr.push(arr1[i]);
//             i++;
//         }
//         else{
//             newArr.push(arr2[j]);
//             j++;
//         }
//     }
//     while(arr1[i]){
//         newArr.push(arr1[i]);
//         i++
//     }
//     while(arr2[j]){
//         newArr.push(arr2[j]);
//         j++
//     }

//     console.log(newArr);
//     return newArr;
// }

// merge([1,2,2,2,7], [2,2,6,6,7,9,10])

// Minimal Three-Array Range
// Given three separately-sorted arrays, determine the value from each array that creates the smallest range, and 
// returns the min and max of that range. All three of the arrays must have a value within the range. 
// Example: given ([1,2,4,15],[3,10,12,20],[5,10,13,17,23]), return {min:3,max:5}.

const range = (arr1, arr2, arr3) => {
    
}