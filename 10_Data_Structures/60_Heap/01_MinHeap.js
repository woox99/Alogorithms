// left: index * 2
// right: index * 2 + 1
// parent: Math.floor(index/2)

class MinHeap {
    constructor() {
        this.heap = [null]; // Index 0 will stay null
    }

    insert(data) {
        this.heap.push(data);

        if (this.heap.length > 2) {
            let index = this.heap.length - 1;

            // While current node is not root node && current node value is < parent node value, swap them
            while (index > 1 && this.heap[index] < this.heap[Math.floor(index / 2)]) {
                let temp = this.heap[Math.floor(index / 2)];
                this.heap[Math.floor(index / 2)] = this.heap[index];
                this.heap[index] = temp;

                index = Math.floor(index / 2);
            }
        }
    }

    // Remove always removes the root node (index 1)
    remove() {
        const removedNode = this.heap[1];

        if (this.heap.length > 2) {
            // Replace the root node with the last node
            this.heap[1] = this.heap[this.heap.length - 1];
            // Remove the last node
            this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = index * 2 + 1;

            while (
                (this.heap[left] !== undefined && this.heap[index] > this.heap[left]) ||
                (this.heap[right] !== undefined && this.heap[index] > this.heap[right])
            ) {
                // Smaller value of left or right swaps with current node so its the smallest of the three when it becomes parent
                if (this.heap[right] === undefined || this.heap[left] < this.heap[right]) {
                    let temp = this.heap[index];
                    this.heap[index] = this.heap[left];
                    this.heap[left] = temp;
                    index = left;
                } else {
                    let temp = this.heap[index];
                    this.heap[index] = this.heap[right];
                    this.heap[right] = temp;
                    index = right;
                }

                left = index * 2;
                right = index * 2 + 1;
            }
        } else if (this.heap.length === 2) {
            this.heap.pop();
        } else {
            return null;
        }

        return removedNode;
    }
}

const mh = new MinHeap();
mh.insert(1);
mh.insert(3);
mh.insert(4);
mh.insert(6);
mh.insert(20);
mh.remove();
console.log(mh.heap);
