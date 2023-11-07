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
// console.log(bst)
// console.log(bst.height());
// console.log(bst.balance())
bst.balanceArray([1,2,3,4])
console.log(bst)