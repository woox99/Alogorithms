// 938. Range Sum of BST


class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        if(data === null){
            return this;
        }
        const newNode = new Node(data);
        let currentNode = this.root;

        if(!this.root){
            this.root = newNode;
            return this;
        }

        const searchTree = currentNode => {
            if(data === currentNode.data){
                return null;
            }
            if(data < currentNode.data){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return this;
                }
                searchTree(currentNode.left);
            }
            if(data > currentNode.data){
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return this;
                }
                searchTree(currentNode.right);
            }
        }

        searchTree(currentNode);
    }

    // Alogorithm
    inclusiveSum(low, high){
        let currentNode = this.root;

        const searchTree = currentNode => {
            let sum = 0;

            if(currentNode){
                sum += currentNode.data >= low && currentNode.data <= high ? currentNode.data : 0;
                sum += searchTree(currentNode.left);
                sum += searchTree(currentNode.right);
            }

            return sum;
        }

        return searchTree(currentNode);
    }
}

const bst = new BST();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(18)
console.log(bst.inclusiveSum(7, 15))