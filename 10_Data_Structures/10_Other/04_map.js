const map = new Map();

// Inserts key => value pair as a tuple [ key, value ]
map.set('age', 27);
map.set('name', 'garett')

console.log(map)

// Iterate map
for(const item of map){
    console.log(item) // Prints the tuple [key, value]
}
for(const [key, value] of map){
    console.log(key + ' - ' + value)
}

// Find
let age = map.get('age')

// Contains
if(map.has('age')){
    console.log(true)
}

// Remove
map.delete('name')

