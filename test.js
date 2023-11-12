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
        const newNode = new Node(data);
        let currentNode = this.root;

        if(!this.root){
            this.root = newNode;
            return
        }

        const searchTree = currentNode => {
            if(data == currentNode.data){
                return this;
            }
            if(data < currentNode){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return;
                }
                searchTree(currentNode.left);
            }
            if(data > currentNode){
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return this;
                }
                return searchTree(currentNode.right)
            }
        }

        return searchTree(currentNode);
    }

    contains(data){
        let currentNode = this.root;

        const searchTree = currentNode => {
            if(!currentNode){
                return false;
            }
            if(data === currentNode.data){
                return true;
            }
            
            return data < currentNode.data ? searchTree(currentNode.left) : searchTree(currentNode.right);
        }

        return searchTree(currentNode);
    }

    remove(data){
        const removeNode = (currentNode, data) => {
            if (currentNode === null){
                return null;
            }

            if(data < currentNode.data){
                currentNode.left = removeNode(currentNode.left, data);
            }
            if(data > currentNode.data){
                currentNode.right = removeNode(currentNode.right, data);
            }
            if(data === currentNode.data){
                if(!currentNode.left && !currentNode.right){
                    return null;
                }

                if(!currentNode.left){
                    return currentNode.right;
                }
                if(!currentNode.right){
                    return currentNode.left
                }

                const tempNode = currentNode.right;
                while(tempNode.left){
                    tempNode = tempNode.left;
                }
                currentNode.data = tempNode.data;
                currentNode.right = removeNode(currentNode.right, tempNode.data);
            }
            return currentNode;
        }

        this.root = removeNode(this.root, data);
    }
}