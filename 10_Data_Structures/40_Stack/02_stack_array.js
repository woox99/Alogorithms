class Stack{
    constructor(){
        this.items = [];
    }

    //LIFO
    push(data){
        return this.items.push(data);
    }

    pop(data){
        return this.items.pop(data);
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
console.log(stack.items)