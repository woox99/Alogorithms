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
                    console.log(entry);
                    return entry;
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

    loadFactor(){
        let buckets = this.size;
        let elements = 0;

        for(const bucket of this.table){
            if(bucket){
                elements++;
            }
        }

        const loadFactor = elements / buckets;
        print(loadFactor);
        return(loadFactor);
    }

    doubleSize(){
        const oldTable = this.table;
        this.table = new Array(this.size * 2);
        this.size *= 2;

        for(const bucket of oldTable){
            if(bucket){
                for(const entry of bucket){
                    const index = this.hash(entry.key);
                    if(!this.table[index]){
                        this.table[index] = [];
                    }
                    this.table[index].push(entry);
                }
            }
        }

        return;
    }

    setSize(size){
        const oldTable = this.table;
        this.table = new Array(size);
        this.size = size;

        for(const bucket of oldTable){
            if(bucket){
                for(const entry of bucket){
                    const index = this.hash(entry.key);
                    if(!this.table[index]){
                        this.table[index] = [];
                    }
                    this.table[index].push(entry);
                }
            }
        }

        return;
    }

    // Combine hashtable with another
    combine(ht){

        for(const bucket of ht.table){
            if(bucket){
                for(const entry of bucket){

                    const index = this.hash(entry.key)

                    if(!this.table[index]){
                        this.table[index] = [];
                    }

                    
                    for(const existingEntry of this.table[index]){
                        if(existingEntry.key === entry.key){
                            existingEntry.value = entry.value;
                        }
                    }
                    
                    // put the entry at the end
                    this.table[index].push(entry)
                }
            }
        }
    }
}

const ht = new HashTable(10);
ht.set('age', 27)


// ht.loadFactor()
// ht.doubleSize()
// ht.setSize(42);

// const ht2 = new HashTable(10);
// ht2.set('age', 100)
// ht.combine(ht2)

// print(ht);