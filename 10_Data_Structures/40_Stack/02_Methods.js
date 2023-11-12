// Linked List Stack

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
    }

    push(data){
        const newNode = new Node(data);
    
        newNode.next = this.head;
        this.head = newNode;
    }

    top(){
        console.log(this.head.data);
        return this.head.data;
    }

    isEmpty(){
        if(!this.head){
            console.log(true);
            return true;
        }
        else{
            console.log(false);
            return false;
        }
    }

    pop(){
        const value = this.head.data;
        this.head = this.head.next;
        console.log(value);
        return value;
    }

    contains(data){
        let runner = this.head;
        while(runner){
            if(runner.data == data){
                console.log(true);
                return true;
            }
            runner = runner.next;
        }

        console.log(false);
        return false;
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)

// stack.top()
// stack.isEmpty();
// stack.pop()
// stack.contains(3)
// console.log(stack)