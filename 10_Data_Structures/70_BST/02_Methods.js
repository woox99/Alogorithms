class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }

    // Calculate the height of a single node
    height() {
        const leftHeight = this.left ? this.left.height() : 0;
        const rightHeight = this.right ? this.right.height() : 0;
        return Math.max(leftHeight, rightHeight) + 1;
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
            if (data == currentNode.data) {
                console.log('True');
                return true;
            }
            else if (data < currentNode.data) {
                if (currentNode.left == null) {
                    console.log('False');
                    return false;
                }
                return searchTree(currentNode.left);
            }
            else if (data > currentNode.data) {
                if (currentNode.right == null) {
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
            if (currentNode.left == null) {
                console.log(currentNode.data);
                return currentNode.data;
            }
            else {
                return searchTree(currentNode.left);
            }
        }

        return searchTree(currentNode);
    }

    // Return maximum value in BST
    max() {
        const currentNode = this.root;

        const searchTree = currentNode => {
            if (currentNode.right == null) {
                console.log(currentNode.data);
                return currentNode.data;
            }
            else {
                return searchTree(currentNode.right);
            }
        }

        return searchTree(currentNode);
    }

    // Count the number of nodes in the BST
    size() {
        const currentNode = this.root;

        const searchTree = currentNode => {
            if (currentNode == null) {
                return 0;
            }
            return 1 + searchTree(currentNode.left) + searchTree(currentNode.right);
        }

        const size = searchTree(currentNode);
        console.log(size)
        return size;
    }

        // Calculate the longest sequence of nodes
        height() {
            let currentNode = this.root;
    
            const searchTree = currentNode => {
                if (currentNode == null) {
                    return -1;
                }
                else {
                    let left = searchTree(currentNode.left);
                    let right = searchTree(currentNode.right);
                    return Math.max(left, right) + 1;
                }
            }
    
            return searchTree(currentNode);
        }
    
        // Calculate if the BST is balanced. The height of any subtree (branch) cannot differ by more than one
        balance() {
            const currentNode = this.root;
    
            const searchTree = currentNode => {
                if (currentNode == null) {
                    return true;
                }
    
                const left = currentNode.left ? currentNode.left.height() : 0;
                const right = currentNode.right ? currentNode.right.height() : 0;
    
                if (Math.abs(left - right) > 1) {
                    return false;
                }
    
                return searchTree(currentNode.left) && searchTree(currentNode.right);
            }
    
            return searchTree(currentNode);
        }
    
        // Given an array that is in ascending order, return a BST that is height-balanced
        balanceArray(arr) {
            
            const buildBST = (arr) => {
                if (arr.length == 0) {
                    return null;
                }
                
                const mid = Math.floor(arr.length / 2);
                const newNode = new Node(arr[mid]);
                
                newNode.left = buildBST(arr.slice(0, mid));
                newNode.right = buildBST(arr.slice(mid + 1));
                
                return newNode;
            }
            
            this.root = buildBST(arr);
            return this.root;
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