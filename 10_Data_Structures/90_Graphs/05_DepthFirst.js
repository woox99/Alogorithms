// Depth First Search Itertively
const depthFirst = (graph, start) => {
    const stack = [start]
    
    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);
        
        for(const neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}

// Depth First Search Recursively
const depthFirstRecursively = (graph, start) => {
    console.log(start);

    for(let neighbor of graph[start]){
        depthFirstRecursively(graph, neighbor);
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

// depthFirstPrint(graph, 'a');
depthFirstRecursively(graph, 'a');