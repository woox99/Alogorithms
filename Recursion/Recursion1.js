// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. 
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

// const rSigma = val => {
//     let sum = 0;
//     for(i=0; i<=val; i++){
//         sum+=i;
//     }
//     console.log(sum);
// }

// rSigma(5);


// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. 
// If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). 
// Also, rFact(6.5) = 720 (1*2*3*4*5*6).

// const factorial = fact => {
//     let value = 1;
//     for(i=1; i<=fact; i++){
//         value*=i;
//     }
//     console.log(value);
// }

// factorial(6.9);

//Flood Fill
// This algo is too long to paste here.

// const floodFill = (canvas2D, startXY, newColor) => {
//     const x = startXY[0];
//     const y = startXY[1];
//     const currentColor = canvas2D[y][x];
    
//     // Helper function to perform the flood fill
//     const fillHelper = (x, y) => {
//         console.log(`[${y},${x}]`);
//         // Check if the coordinates are within the canvas boundaries
//         if (x < 0 || x >= canvas2D[0].length || y < 0 || y >= canvas2D.length) {
//             console.log('exit')
//             return;
//         }

//         // Check if the current pixel has the same color as the starting pixel
//         if (canvas2D[y][x] != currentColor) {
//             console.log('exit')
//             return;
//         }

//         // Change the color of the current pixel
//         canvas2D[y][x] = newColor;
//         console.log('changed color')

//         // Recursively fill adjacent pixels
//         fillHelper(x + 1, y);
//         fillHelper(x - 1, y);
//         fillHelper(x, y + 1);
//         fillHelper(x, y - 1);
//     };

//     // Start the flood fill from the specified coordinates
//     fillHelper(x, y);
// };

// const canvas2D = [
//     [3, 2, 3, 4, 3],
//     [2, 3, 3, 4, 0],
//     [7, 3, 3, 5, 3],
//     [6, 5, 3, 4, 1],
//     [1, 2, 3, 3, 3]
// ];

// // Call the floodFill function with the starting coordinates [2, 2] and newColor 1
// floodFill(canvas2D, [2, 2], 1);

// Print the updated canvas
// console.log(canvas2D);