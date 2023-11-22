const binarySearch = (arr, value) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;


    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor( (leftIndex + rightIndex) / 2 );

        // If value of arr == value then return index
        if(arr[middleIndex] === value){
            console.log(middleIndex)
            return middleIndex;
        }
        if(value < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }
        else{
            leftIndex = middleIndex + 1;
        }
    }

    // If value was not found, return null
    return null;
}

binarySearch([1,6,3,7,5], 7)