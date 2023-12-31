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

    // Inserted node will always get added to the top and fall to the bottom of a branch
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
            // If node reached the bottom, return false
            if (!currentNode) {
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
            if (currentNode === null) {
                return null;
            }
    
            if(data < currentNode.data) {
                currentNode.left = removeNode(currentNode.left, data);
            } 
            if(data > currentNode.data) {
                currentNode.right = removeNode(currentNode.right, data);
            } 
            if(data === currentNode.data) {
                // If currentNode has no children
                if (!currentNode.left && !currentNode.right) {
                    return null;
                }

                // If currentNode only has one child
                if (!currentNode.left) {
                    return currentNode.right;
                } 
                if (!currentNode.right) {
                    return currentNode.left;
                }
    
                // If current node has two children
                let tempNode = currentNode.right;
                while(tempNode.left){
                    tempNode = tempNode.left;
                }
                currentNode.data = tempNode.data;
                currentNode.right = removeNode(currentNode.right, tempNode.data);
            }
    
            return currentNode;
        };
    
        this.root = removeNode(this.root, data);
    }
}

const bst = new BST()
bst.insert(2)
bst.insert(3)
bst.insert(1)
bst.insert(0)

console.log(bst)

bst.remove(1)
console.log(bst)
bst.contains(3)
