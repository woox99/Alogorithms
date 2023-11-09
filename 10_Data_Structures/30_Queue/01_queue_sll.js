class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;

        // To decrease the time complexity of getSize()
        this.size = 0;

    }

    // FIFO -> add to back
    // O(1)
    enqueue(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
        return this;
    }

    // FIFO -> remove from front
    // O(1)
    dequeue(){
        if(!this.head){
            return null;
        }

        this.head = this.head.next;
        this.size--;
        return this;
    }

    // O(1)
    isEmpty(){
        console.log(!this.head);
        return !this.head;
    }

    // Return the head value but not remove
    // O(1)
    peek(){
        console.log(this.head.data)
        return this.head.data;
    }

    // O(1)
    getSize(){
        console.log(this.size);
        return this.size;
    }

    // O(N)
    display(){
        const items = [];
        let runner = this.head;
        while(runner){
            items.push(runner.data);
            runner = runner.next;
        }
        console.log(items);
        return items;
    }
}

const queue = new Queue()
queue.enqueue(3).enqueue(2).enqueue(1).dequeue()
// console.log(queue)
// queue.isEmpty()
// queue.getSize()
queue.display()