class Graph{
    constructor(){
        this.vertices = new Map();
    }

    addVertex(vertex){
        if(!this.vertices.has(vertex)){
            this.vertices.set(vertex, [])
        }

        return this;
    }

    addEdge(fromVertex, toVertex){
        if(!this.vertices.has(fromVertex) || !this.vertices.has(toVertex)){
            return null;
        }

        // If toVertex is not already a neighbor of fromVertex
        if(!this.vertices.get(fromVertex).includes(toVertex)){
            this.vertices.get(fromVertex).push(toVertex);
        }

        return this;
    }
    
}

const graph = new Graph();

graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')

graph.addEdge('a', 'b')
graph.addEdge('b', 'c')
graph.addEdge('c', 'd')
graph.addEdge('d', 'a')


console.log(graph)