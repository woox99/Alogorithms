class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(data) {
        // Creating a new node object with the data provided
        let newNode = new Node(data);

        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        newNode.next = this.head;
        
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = newNode;
        return this;
    }

    addEnd(data){
        const newNode = new Node(data);
        let runner = this.head;

        while(runner.next){
            runner = runner.next;
        }
        
        return runner.next = newNode;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }

        this.head = this.head.next;
    }

    removeEnd(){
        let runner = this.head;

        while(runner.next.next){
            runner = runner.next
        }

        return runner.next = null;
    }

    front() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }

}

const sll = new SLL();
sll.addFront(1)
sll.addFront(2)
// sll.addEnd(3)
// sll.removeFront()
// sll.removeEnd()
console.log(sll)
