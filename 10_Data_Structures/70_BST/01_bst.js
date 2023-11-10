class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        let currentNode = this.root;

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        const searchTree = currentNode => {
            // If duplicated node, return null
            if (data === currentNode.data) {
                return this;
            }
            if (data < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                return searchTree(currentNode.left);
            }
            if (data > currentNode.data) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                return searchTree(currentNode.right);
            }
        }

        return searchTree(currentNode);
    }

    // return true if BST contains data, else false
    contains(data) {
        let currentNode = this.root;

        const searchTree = currentNode => {
            if (currentNode === null) {
                console.log(false);
                return false;
            }
            if (currentNode.data === data) {
                console.log(true);
                return true;
            }
            return data < currentNode.data ? searchTree(currentNode.left) : searchTree(currentNode.right);
        }

        return searchTree(currentNode);
    }

    remove(data) {

        const removeNode = (currentNode, data) => {
            // If currentNode ends up on a null node, then tree does not contain data
            if(currentNode === null){
                return null;
            }

            // Traverse the tree
            if(data < currentNode.data){
                return removeNode(currentNode.left, data)
            }
            if(data > currentNode.data){
                return removeNode(currentNode.right, data)
            }

            // If currentNode is the node we are searching for, replace it with the correct node
            if(data === currentNode.data){
                // If currentNode has no children set node to null (delete)
                if(currentNode.left === null && currentNode.right === null){
                    return null;
                }
                // If currentNode has only one child, replace it with its child
                if(currentNode.left === null){
                    return currentNode.right;
                }
                if(currentNode.right === null){
                    return currentNode.left;
                }

                // If currentNode has both left and right children, replace with the leftmost node on the right branch
                let tempNode = currentNode.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                currentNode.data = tempNode.data;
                // Use the remove function recursively to remove the node we just replaced currentNode with
                currentNode.right = removeNode(currentNode.right, tempNode.data);
                // Replace currentNode with itself because it has the updated value
                return currentNode;
            }
        }

        this.root = removeNode(this.root, data);
    }
}

const bst = new BST()
bst.insert(2)
bst.insert(3)
bst.insert(1)
bst.insert(0)
// console.log(bst)
bst.remove(1)
// ?? I don't understand why gpt and bard are saying remove is correct but it seems that when I remove(1)
// The nodes containing 2 and 3 are disappearing
console.log(bst) 
// bst.search(3)