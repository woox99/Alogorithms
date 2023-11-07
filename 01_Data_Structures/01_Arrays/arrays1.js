// Literal Array
const arr1 = [];
arr1.push(1);
arr1.push(2);
arr1.push(3);

//Sparce Array
const arr2 = new Array(10);
arr2[0] = 1;
arr2[1] = 2;

// Iteration
for(const entry of arr1){
    console.log(entry);
}

const indices = Object.keys(arr1)
const length = arr1.length

// Filter
const newArr = arr1.filter(entry => entry % 2 === 0);


// Swapping indices in ES6 without temp
console.log('before swap: ' + arr1);
[arr1[0], arr1[1]] = [arr1[1], arr1[0]];
console.log('after swap: ' + arr1)
