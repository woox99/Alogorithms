class HashTable{
    constructor(size){
        this.table = new Array();
        this.size = size;
    }

    // Convert key into a numerical index of the array
    // O(1)
    hash(key){
        let hash = 0;
        
        for(const char of key){
            hash += char.charCodeAt(0);
        }
        
        // ensures that the index is between 0 and the size of the array
        const index = hash % this.size;
        return index;
    }
    
    // O(N)
    set(key, value){
        const index = this.hash(key);
        
        // If bucket does not already exist at index
        if(!this.table[index]){
            this.table[index] = [];
        }
        
        // If key is already in table, update value 
        let updated = false;
        for(const entry of this.table[index]){
            if(entry.key === key){
                entry.value = value;
                updated = true;
            }
        }
        if(!updated){
            this.table[index].push( {key, value} )
        }
        
        return this;
    }
    
    //O(N)
    get(key){
        const index = this.hash(key);
        
        if(this.table[index]){
            for(const entry of this.table[index]){
                if(entry.key === key){
                    console.log(entry);
                    return entry;
                }
            }
        }

        return undefined;
    }

    // O(N)
    remove(key){
        const index = this.hash(key);

        this.table[index] = this.table[index].filter(entry => entry.key !== key)

        return this;
    }

    // O(N)
    contains(key){
        const index = this.hash(key);

        for(const entry of this.table[index]){
            if(entry.key === key){
                console.log(true);
                return true;
            }
        }

        console.log(false);
        return(false);
    }
}

const ht = new HashTable(10);
ht.set('age', 28)
ht.set('age', 100)
ht.set('name', 'garett')
// console.log(ht.table)
ht.get('age')
ht.remove('name')
ht.contains('age')