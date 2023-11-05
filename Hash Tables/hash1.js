const print = data => {
    console.log(data);
}

class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    // Convert key into a numerical index of the array
    hash(key){
        let hash = 0;
        
        for(let i=0; i < key.length; i++){
            hash += key.charCodeAt(i);
        }

        // ensures that the index is between 0 and the size of the array
        return hash % this.size;
    }

    set(key, value){
        const index = this.hash(key);

        if(!this.table[index]){
            this.table[index] = [];
        }
        this.table[index].push( {key, value} );
    }

    get(key){
        const index = this.hash(key);

        if(this.table[index]){
            for(const entry of this.table[index]){
                if (entry.key === key){
                    console.log(entry.value)
                    return entry.value;
                }
            }
        }

        // If key not found
        console.log('undefined')
        return undefined;
    }

    remove(key){
        const index = this.hash(key);

        if(this.table[index]){
            this.table[index] = this.table[index].filter( entry => entry.key !== key);
        }
    }
}

const ht = new HashTable(10);
ht.set('age', 27)
ht.get('age')
