//Linked List Queue

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
    }

    // Queues are first in first out (FIFO) so new data gets added to the back
    enqueue(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        else{
            this.tail.next = newNode;
            this.tail = this.tail.next
        }
    }

    isEmpty(){
        if(!this.head){
            console.log('true');
            return true;
        }
        else{
            console.log('false');
            return false;
        }
    }

    removeFront(){
        const value = this.head.data;
        this.head = this.head.next;

        console.log(value)
        return value;
    }

    contains(data){
        let runner = this.head;
        
        while(runner){
            if(runner.data == data){
                console.log(true);
                return true
            }
            runner = runner.next;
        }

        console.log(false);
        return(false)
    }

    size(){
        let currentNode = this.head;

        const count = currentNode => {
            if(!currentNode){
                return 0;
            }

            return 1 + count(currentNode.next);
        }

        const size = count(currentNode);
        console.log(size);
        return size;
    }
}

// Stand alone function that compares if two queues are exactly identical
const compareQueues = (q1, q2) => {
    runner1 = q1.head;
    runner2 = q2.head;

    while(runner1 && runner2){
        if(runner1.data != runner2.data){
            console.log(false)
            return false;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }

    if(!runner1 && !runner2){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
}


slq = new Queue();
slq.enqueue(2)
slq.enqueue(3)
slq.enqueue(4)
// slq.removeFront()
// slq.isEmpty()
// slq.contains(2)
// slq.size()
// removeMin(slq)
console.log(slq)

// slq2 = new Queue();
// slq2.enqueue(1);
// slq2.enqueue(2);
// compareQueues(slq, slq2);

