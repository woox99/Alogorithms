const breadthFirst = (graph, start) => {
    const queue = [start];

    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);

        for(const neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}

// Directed graph
const graph = {
    a : ['b', 'c'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f : []
};

breadthFirst(graph, 'a');