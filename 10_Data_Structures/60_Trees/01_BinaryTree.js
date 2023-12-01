class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const currentNode = queue.shift();

            if (!currentNode.left) {
                currentNode.left = newNode;
                return this;
            } else {
                queue.push(currentNode.left);
            }

            if (!currentNode.right) {
                currentNode.right = newNode;
                return this;
            } else {
                queue.push(currentNode.right);
            }
        }
    }
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);

console.log(tree);
