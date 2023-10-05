class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    addFront(data) {
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;

        return this;
    }

    max() {
        let runner = this.head;
        let max = runner.data;

        while(runner){
            if(runner.data > max){
                max = runner.data;
            }
            runner = runner.next;
        }

        return max;
    }

    min() {
        let runner = this.head;
        let min = runner.data;

        while(runner){
            if(runner.data < min){
                min = runner.data;
            }
            runner = runner.next;
        }

        return min;
    }

    average() {
        let runner = this.head;
        let sum = 0;
        let n = 0;

        while(runner){
            sum += runner.data;
            n++;
            runner = runner.next;
        }
        let average = sum / n;
        return average;
    }
}

const SLL = new LinkedList();
SLL.addFront(10);
SLL.addFront(20);
// console.log(SLL);
// console.log(SLL.max());
// console.log(SLL.min());
// console.log(SLL.average());