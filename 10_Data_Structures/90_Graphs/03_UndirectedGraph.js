// Undirected graph
class Graph {

    // Each key in the vertices map is the node/vertex and the value is an array containing its neighbors
    constructor(){
        this.vertices = new Map();
    }

    addVertex(vertex){
        if(!this.vertices.has(vertex)){
            this.vertices.set(vertex, [])
        }
        return this;
    }

    // Adds undirected edge (makes both vertices each other's neighbors)
    addEdge(vertex1, vertex2){
        // If either vertex does not exist in graph
        if(!this.vertices.has(vertex1) || !this.vertices.has(vertex2)){
            return null;
        }

        // If vertices arnen't already neighbors
        if(!this.vertices.get(vertex1).includes(vertex2)){
            this.vertices.get(vertex1).push(vertex2);
        }
        if(!this.vertices.get(vertex2).includes(vertex1)){
            this.vertices.get(vertex2).push(vertex1);
        }
    }

    getNeighbors(vertex){
        if(!this.vertices.has(vertex)){
            return null;
        }

        const neighbors = this.vertices.get(vertex);
        console.log(neighbors);
        return neighbors;
    }
}

const graph = new Graph();
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')

graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('c', 'd');
graph.addEdge('b', 'd');

console.log(graph)
graph.getNeighbors('a')