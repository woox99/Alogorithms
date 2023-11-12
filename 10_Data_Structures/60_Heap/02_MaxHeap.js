// left: index * 2
// right: index * 2 + 1
// parent: Math.floor(index/2)
class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    insert(data) {
        this.heap.push(data);

        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2)

        while (currentIndex > 1 && this.heap[currentIndex] > this.heap[parentIndex]) {

            // Swap current node and parent node
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]]
            // Update index of current and parent node
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2)
        }

        return this;
    }

    // Remove always removes the root node (index 1)
    remove() {
        const removedNode = this.heap[1];

        if (this.heap.length < 2) {
            return null;
        }
        else if (this.heap.length === 2) {
            this.heap.length = this.heap.length - 1;
            return removedNode;
        }
        else if (this.heap.length > 2) {
            // Replace the root node with the last node
            this.heap[1] = this.heap[this.heap.length - 1];
            // Remove the last node
            this.heap.length = this.heap.length - 1;

            let currentIndex = 1;
            let leftIndex = currentIndex * 2;
            let rightIndex = currentIndex * 2 + 1;

            while (
                (this.heap[leftIndex] && this.heap[currentIndex] < this.heap[leftIndex]) ||
                (this.heap[rightIndex] && this.heap[currentIndex] < this.heap[rightIndex])
            ) {
                // Larger value of left or right swaps with current node so its the largest of the three when it becomes parent
                if (this.heap[rightIndex] === undefined || this.heap[leftIndex] > this.heap[rightIndex]) {
                    [this.heap[currentIndex], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[currentIndex]];
                    currentIndex = leftIndex;
                }
                else if (this.heap[leftIndex] < this.heap[rightIndex]) {
                    [this.heap[currentIndex], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[currentIndex]];
                    currentIndex = rightIndex;
                }

                leftIndex = currentIndex * 2;
                rightIndex = currentIndex * 2 + 1;
            }
        }
        console.log(removedNode);
        return removedNode;
    }
}

const mh = new MaxHeap();
mh.insert(1)
mh.insert(2)
mh.insert(3)
mh.insert(9)
mh.insert(4)
mh.remove()
console.log(mh.heap)