// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

// rBinarySearch([1,3,5,6],4) = false; 

// rBinarySearch([4,5,6,8,12],5) = true.

// const rBinarySearch = (arr, val, n=0) => {
//     if(n == arr.length){
//         return false;
//     }
//     if(arr[n] == val){
//         return true;
//     }
//     return rBinarySearch(arr, val, (n+1))
// }
// rBinarySearch([1,2], 1)
// console.log(rBinarySearch([0,2,3], 3))


// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common 
// Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// const gcf = (a, b) => {
//     if (a === 0) {
//         return b;
//     }
//     if (b === 0) {
//         return a;
//     }

//     if (a > b) {
//         return gcf(a % b, b);
//     } else {
//         return gcf(a, b % a);
//     }
// }

// console.log(gcf(3, 7));


// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to
// compute rGCF(123456,987654).
