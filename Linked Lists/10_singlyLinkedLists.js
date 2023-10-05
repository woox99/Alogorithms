class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        // Creating a new node object with the value provided
        let newNode = new Node(val);

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

    removeFront() {
        if (!this.head) {
            return null;
        }

        this.head = this.head.next;
    }

    front() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }

}

const SLL = new LinkedList();
SLL.addFront(18)
SLL.addFront(5)
SLL.addFront(100)
// SLL.removeFront();
// console.log(SLL.front());
// console.log(SLL)
