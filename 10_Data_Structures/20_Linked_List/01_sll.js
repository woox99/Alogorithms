class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    // Display linked list as array
    // O(N)
    display(){
        const arr = [];
        let runner = this.head;
        while(runner){
            arr.push(runner.data);
            runner = runner.next;
        }
        console.log(arr);
        return arr;
    }

    // O(1)
    addFront(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // O(N)
    addEnd(data){
        const newNode = new Node(data);
        let runner = this.head;

        if(!this.head){
            this.head = newNode;
            return this;
        }

        // Make runner the last non-null node
        while(runner.next){
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
    }

    // O(1)
    removeFront(){
        if(!this.head){
            return null;
        }
        this.head = this.head.next;
        return this;
    }

    // O(N)
    removeEnd(){
        if(!this.head){
            return null;
        }

        let runner = this.head;


        // Move runner to the second to last non-null node
        while(runner.next.next){
            runner = runner.next;
        }

        runner.next = null;
        return this;
    }
}

const sll = new SLL()
sll.addFront(3).addFront(2).addFront(1).display()
// sll.addEnd(3).addEnd(2).addEnd(1).display()
// sll.removeFront().display()
sll.removeEnd().display()