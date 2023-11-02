// Bubble sort - array
const bubbleSortArray = arr => {

    let finalPass = false;

    while(!finalPass){
        finalPass = true;

        for(i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;

                finalPass = false;
            }
        }
    }
    console.log(arr);
    return arr;
}
console.log('## Bubble sort array ##')
bubbleSortArray([4,0,3,2,4,6])

// Selection Sort - Array
const selectionSortArray = arr => {
    for(i=0; i<arr.length; i++){
        for(j=i; j<arr.length; j++){
            if(arr[j] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}
console.log('## Selection Sort Array');
selectionSortArray([4,0,3,2,4,6]);

// Bubble Sort & Selection Sort - Linked List
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL{
    constructor(data){
        this.head = null;
    }

    pushEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return this;
        }
        else{
            let runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }

        return this;
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

    bubbleSort(){
        let finalPass = false;
        let runner = this.head;

        while(!finalPass){
            finalPass = true;

            while(runner.next){
                if(runner.data > runner.next.data){
                    let temp = runner.data;
                    runner.data = runner.next.data;
                    runner.next.data = temp;
                    finalPass = false;
                }

                runner = runner.next;
            }
            runner = this.head;
        }

        this.display();
        return;
    }

    selectionSort(){
        let current = this.head;

        while(current.next){
            let runner = current;

            while(runner){
                if(runner.data < current.data){
                    let temp = current.data;
                    current.data = runner.data;
                    runner.data = temp;
                }
                runner = runner.next;
            }
            
            current = current.next;
        }

        this.display();
        return;
    }
}

const sllBubble = new SLL()
const sllSelection = new SLL()
sllBubble.pushEnd(8).pushEnd(9).pushEnd(5).pushEnd(3)
sllSelection.pushEnd(8).pushEnd(9).pushEnd(5).pushEnd(3)

console.log('## Bubble sort Linked List ##')
sllBubble.bubbleSort()

console.log('## Selection sort Linked List ##')
sllSelection.selectionSort()

