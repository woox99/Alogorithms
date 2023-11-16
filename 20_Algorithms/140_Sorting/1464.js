// Given the array of integers nums, you will choose two different indices i and j of that array. 
// Return the maximum value of (nums[i]-1)*(nums[j]-1).


// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, 
// that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 


// (nums[i]-1)*(nums[j]-1) will always be largest when i & j are largest
const func = nums => {

    //Sort array min -> max
    const quickSort = arr => {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }

        return quickSort(left).concat(pivot, quickSort(right));
    }

    const sortedArray = quickSort(nums);
    const result = (sortedArray[sortedArray.length - 1] - 1) * (sortedArray[sortedArray.length - 2] - 1);
    return result;
}


func(nums = [1, 5, 4, 5])