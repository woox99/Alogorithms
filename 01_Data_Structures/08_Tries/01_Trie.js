class Node{
    constructor(){
        this.children = {};
        this.isCompleteWord = false;
    }
}

class Trie{
    constructor() {
        this.root = new Node();
    }

    insert(word){
        let currentNode = this.root;
        for(const char of word){

            if(!currentNode.children[char]){
                currentNode.children[char] = new Node();
            }

            currentNode = currentNode.children[char];
        }

        currentNode.isCompleteWord = true;
    }

    contains(word){
        let currentNode = this.root;

        for(const char of word){
            if(!currentNode.children[char]){
                console.log(false);
                return false;
            }
            currentNode = currentNode.children[char];
        }

        console.log(currentNode.isCompleteWord);
        return(currentNode.isCompleteWord);
    }
}

const trie = new Trie();
trie.insert('hello')
trie.insert('cat')
trie.insert('hell')
trie.insert('hat')

// trie.contains('hell')
