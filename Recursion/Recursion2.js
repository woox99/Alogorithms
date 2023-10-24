// Recursive Fibonacci
// Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, treat first two
//  (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 

// rFib(2) = 1 (0+1); 

// rFib(3) = 2 (1+1); 

// rFib(4) = 3 (1+2); 

// rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.


// const rFib = val => {
//     if(val==0){
//         return 0;
//     }
//     if(val==1){
//         return 1;
//     }
//     return rFib(val-1) + rFib(val-2);
// }
// console.log(rFib(6))



// Recursive “Tribonacci”
// Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. First three 
// Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); 
// rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.

// const rTrib = val => {
//     if(val < 2){
//         return 0;
//     }
//     if(val == 2) {
//         return 1;
//     }
//     return rTrib(val-3) + rTrib(val-2) + rTrib(val-1);
// }

// console.log(rTrib(6))
