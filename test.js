class MaxHeap{
    constructor(){
        this.heap = [null];
    }

    // O(LogN)
    insert(data){
        this.heap.push(data);
        
        let index = this.heap.length - 1;
        let parentIndex = Math.floor(index/2);
        
        while(index > 1 && this.heap[index] > this.heap[parentIndex]){
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor(index/2);
        }
        
        return this;
    }
    
    // O(LogN)
    remove(){
        const removedNode = this.heap[1];
        
        if(this.heap.length == 1){
            return null;
        }
        if(this.heap.length === 2){
            this.heap.length --;
        }
        if(this.heap.length > 2){
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.length --;
            
            let index = 1;
            let left = index * 2;
            let right = index * 2 + 1;

            while(
                (this.heap[left] !== undefined && this.heap[index] < this.heap[left]) ||
                (this.heap[right] !== undefined && this.heap[index] < this.heap[right])
            ){
                if(this.heap[right] === undefined){
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
                    index = left;
                }
                else if(this.heap[left] > this.heap[right]){
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
                    index = left;
                }
                else if(this.heap[right] > this.heap[left]){
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]];
                    index = right;
                }

                left = index * 2;
                right = index * 2 + 1;
            }
        }

        return removedNode;
    }
}

const mh = new MaxHeap()
mh.insert(2)
mh.insert(4)
mh.insert(6)
mh.insert(3)
mh.insert(1)
mh.insert(10)
mh.remove()

console.log(mh.heap)
