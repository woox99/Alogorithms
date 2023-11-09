class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// The tail is the 'top' of the stack
class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // LIFO -> add value on tail
    // O(1)
    push(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return this;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.size++;
        return this;
    }

    // LIFO -> remove value on tail
    // O(1)
    pop(){
        if(!this.head){
            return null;
        }

        if(this.size == 1){
            this.head = null;
            this.tail = null;
            this.size--;
            return this;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size--;
        return this;
    }

    // Return the top node without removing it
    // O(1)
    peek(){
        console.log(this.tail);
        return this.tail;
    }

    // O(1)
    isEmpty(){
        console.log(!this.head);
        return(!this.head);
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

const stack = new Stack()
stack.push(3).push(2).push(1).pop()
// console.log(stack)
// stack.peek()
stack.display()