class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Add new node to BST
    add(data) {
        const newNode = new Node(data);
        let currentNode = this.root;

        if (this.root == null) {
            this.root = newNode;
            return
        }
        else {
            const searchTree = currentNode => {
                if (data < currentNode.data) {
                    if (currentNode.left == null) {
                        // Linking the nodesin the tree must be done using .left or .right when adding or creating tree
                        // Example: currentNode.left = newNode; changes the instance
                        // currentNode = newNode; only changes the 'currentNode' reference to the instance
                        currentNode.left = newNode;
                        return;
                    }
                    else {
                        return searchTree(currentNode.left);
                    };
                }
                else if (data > currentNode.data) {
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        return;
                    }
                    else {
                        return searchTree(currentNode.right);
                    }
                }
            }
            return searchTree(currentNode);
        }
    }

    // Check if BST contains a value
    contains(data) {
        let currentNode = this.root;

        const searchTree = currentNode => {
            if( data == currentNode.data){
                console.log('True');
                return true;
            }
            else if(data < currentNode.data) {
                if (currentNode.left == null) {
                    console.log('False');
                    return false;
                }
                return searchTree(currentNode.left);
            }
            else if(data > currentNode.data) {
                if( currentNode.right == null) {
                    console.log('False');
                    return false;
                }
                return searchTree(currentNode.right);
            }
        }
        return searchTree(currentNode);
    }

    // Return minimum value in BST
    min() {
        const currentNode = this.root;

        const searchTree = currentNode => {
            if(currentNode.left == null){
                console.log(currentNode.data);
                return currentNode.data;
            }
            else{
                return searchTree(currentNode.left);
            }
        }

        return searchTree(currentNode);
    }

    // Return maximum value in BST
    max() {
        const currentNode = this.root;

        const searchTree = currentNode => {
            if(currentNode.right == null){
                console.log(currentNode.data);
                return currentNode.data;
            }
            else{
                return searchTree(currentNode.right);
            }
        }

        return searchTree(currentNode);
    }

    // Count the number of nodes in the BST
    size() {
        const currentNode = this.root;
        
        const searchTree = currentNode => {
            if(currentNode == null){
                return 0;
            }
            return 1 + searchTree(currentNode.left) + searchTree(currentNode.right);
        }

        const size = searchTree(currentNode);
        console.log(size)
        return size;
    }

}

const bst = new BST()
bst.add(10)
bst.add(5)
bst.add(15)
bst.add(12)
bst.add(2)
// console.log(bst)
// bst.contains(2);
// bst.min()
// bst.max()
// bst.size()