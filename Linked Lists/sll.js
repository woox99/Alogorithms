class SinglyLinkedList {
    constructor() { // def __init__()
        this.head = null
        this.length = 0
    }

    // Methods

    // Add to Back
    addToBack(val) {
        const newNode = new ListNode(val);

        if (this.head === null) {
            this.head = newNode;
            return this;
        }

        let runner = this.head;

        while (runner.next) {
            runner = runner.next;
        }

        runner.next = newNode;
        return this
    }
    // Add to front
    addToFront(val) {
        const newNode = new ListNode(val);
        const tempHead = this.head;
        this.head = newNode;
        this.head.next = tempHead;

        return this;
    }

    // Remove from Front
    removeFront() {
        this.head = this.head.next;
    }
    // Remove from Back
    removeBack(){
        let runner = this.head;

        while(runner.next.next){
            runner = runner.next
        }
        runner.next = null;

        return this;
    }
}

class ListNode {
    constructor(val) {
        this.value = val
        this.next = null
    } 
}

const SLL = new SinglyLinkedList();
// Add and Remove Your nodes
SLL.addToFront(10);
SLL.addToFront(20);
// SLL.removeFront();
SLL.removeBack();
console.log(SLL);