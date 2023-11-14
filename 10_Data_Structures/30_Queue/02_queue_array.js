class Queue{
    constructor(){
        this.items = [];
    }

    // FIFO
    enqueue(data){
        return this.items.push(data);
    }

    dequeue(){
        return this.items.shift();
    }
}

const q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
console.log(q.items)