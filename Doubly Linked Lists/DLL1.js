class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor(data){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

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

    pushEnd(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        else{
            let temp = this.tail;
            this.tail = newNode;
            temp.next = this.tail;
            this.tail.prev = temp;
        }
        this.length++;
        return;
    }

    // Reverse is changing the direction that the DLL points by swapping .next and .prev
    // null -> 1(head) -> 2 -> 3 -> 4(tail) -> null
    // null <- 1(tail) <- 2 <- 3 <- 4(head) -> null
    reverse() {

        let current = this.head;
        
        // Switch the head and tail. This doesn't effect current
        this.head = this.tail;
        this.tail = current;

        while(current){
            const temp = current.next;
            current.next = current.prev;
            current.prev = temp;

            current = temp;
        }
    }

    kToLast(k){
        let current = this.tail;
        let n = 0;

        while(n<k){
            current = current.prev;
            n++;
        }

        console.log(current.data);
        return current.data;
    }

    isPalindrome(){
        let headRunner = this.head;
        let tailRunner = this.tail;

        while(headRunner){
            if(headRunner.data != tailRunner.data){
                console.log(false);
                return false;
            }
            headRunner = headRunner.next;
            tailRunner = tailRunner.prev;
        }

        console.log(true);
        return true;
    }
}

const dll = new DLL()
dll.pushEnd(1)
dll.pushEnd(2)
dll.pushEnd(3)
dll.pushEnd(2)
dll.pushEnd(1)

dll.isPalindrome()
// dll.reverse()
// dll.kToLast(2)

// dll.display()
// console.log(dll)