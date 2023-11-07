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

    addFront(data) {
        let newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return this; 
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    findSum() {
        let runner = this.head;
        let sum = 0; 

        while(runner){
            sum += runner.data;
            runner = runner.next
        }
        return sum;
    }

    contains(data) {
        let runner = this.head;
        while(runner){
            if(runner.data === data){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    length(){
        let runner = this.head;
        let count = 0;

        while(runner){
            count++;
            runner = runner.next;
        }

        return count;
    }

    display(){

        let runner = this.head;
        let listArr = [];

        while(runner){
            listArr.push(runner.data);
            runner = runner.next;
        }

        let str = listArr.join(', ');
        return str;
    }

}

const SLL = new LinkedList();
SLL.addFront(10);
SLL.addFront(20);
// console.log(SLL)
// console.log(SLL.findSum());
// console.log(SLL.contains(20));
// console.log(SLL.length())
console.log(SLL.display())