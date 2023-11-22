const set = new Set();

// Insert
set.add('age')
set.add(10)
set.add('person')

console.log(set)


// Iterate set
for(const item of set){
    console.log(item)
}

// Contains
if(set.has('age')){
    console.log(true)
}

// Remove
set.delete(10);

// Size
let size = set.size