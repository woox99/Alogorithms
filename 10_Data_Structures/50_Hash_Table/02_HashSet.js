// HashSet is a simplified hash table that only stores keys instead of key - value pairs;
// Useful if you wanted to store a hashset of names AND check if the hashset contains the name

class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let hash = 0;

        for(const char of key){
            hash += char.charCodeAt(0);
        }

        const index = hash % this.size;
        return index;
    }

    set(key){
        const index = this.hash(key);

        if(!this.table[index]){
            this.table[index] = [];
        }

        this.table[index].push(key);
    }

    remove(key){
        const index = this.hash(key);

        if(!this.table[index]){
            return null;
        }

        this.table[index] = this.table[index].filter(entry => entry !== key);

        return;
    }

    contains(key){
        const index = this.hash(key);

        if(!this.table[index]){
            console.log(false);
            return false;
        }

        for(const entry of this.table[index]){
            if(entry === key){
                console.log(true);
                return true;
            }
        }

        console.log(false);
        return false;
    }
}

const ht = new HashTable(10);
ht.set('age')
// ht.remove('age')
ht.contains('age')