// Literal Array
const arr1 = [];
arr1.push(1);
arr1.push(2);
arr1.push(3);

// Sparce Array
const arr2 = new Array(10);
arr2[0] = 1;
arr2[1] = 2;

// Iteration
for(const entry of arr1){
    console.log(entry);
}

const indices = Object.keys(arr1)
const length = arr1.length


// Swapping indices in ES6 without temp
console.log('before swap: ' + arr1);
[arr1[0], arr1[1]] = [arr1[1], arr1[0]];
console.log('after swap: ' + arr1)

// Concat
const combinedArray = arr1.concat(arr2);

// Filter 
// Keep every even entry
let newArr = arr1.filter(entry => entry % 2 === 0);

// Map
// Replace every 2 with one else leave the same
newArr = newArr.map( entry => (entry == 2 ? 1 : entry));

// Push
// Add to end of array
newArr.push(10)

// Shift
// Add to front of array
newArr.unshift(10)

// Pop
// Remove from end
newArr.pop()

// Shift
// Remove from front
newArr.shift()

// Join
// Joins indicies into string
let arrayToString = ['h', 'i']
let joinedString = arrayToString.join('') 
