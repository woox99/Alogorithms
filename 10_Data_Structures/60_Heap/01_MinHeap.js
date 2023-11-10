// Index equations
// left: index * 2
// right: index * 2 + 1
// parent: Math.floor(index/2)

class MinHeap{
    constructor(){
        this.heap = [null]; // index 0 will stay null so that index equations work
    }

    // O(LogN)
    insert(data){
        this.heap.push(data);

        let index = this.heap.length - 1;
        let parentIndex = Math.floor(index/2)

        // While current node is not root node && current node value is < parent node value, swap them
        if(this.heap.length > 2){
            while(index > 1 && this.heap[index] < this.heap[parentIndex]){
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                parentIndex = Math.floor(index / 2);
            }
        }

        return this;
    }

    // Remove always removes the root node (index 1), replaces it with the last value in the array and re-sorts it
    // O(LogN)
    remove(){
        const removedNode = this.heap[1];

        if(this.heap.length == 1){
            return null;
        }
        // If only one node, simply remove it
        if(this.heap.length == 2){
            this.heap.length--;
            return removedNode;
        }
        if(this.heap.length > 2){
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.length--;
            
            let index = 1;
            let left = index * 2;
            let right = index * 2 + 1;

            while(
                (this.heap[left] !== undefined && this.heap[index] > this.heap[left]) ||
                (this.heap[right] !== undefined && this.heap[index] > this.heap[right])
            ){
                // Smaller value of left or right swaps with current node so its the smallest of the three when it becomes parent
                if(this.heap[right] !== undefined){
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
                    index = left;
                }
                else if(this.heap[left] < this.heap[right]){
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
                    index = left;
                }
                else if(this.heap[right] < this.heap[left]){
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

const mh = new MinHeap()
mh.insert(3)
mh.insert(2)
mh.insert(1)
mh.insert(4)
mh.insert(5)
mh.insert(10)
mh.insert(11)
mh.insert(9)
mh.remove()
mh.remove()

console.log(mh.heap)