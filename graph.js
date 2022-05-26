// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

function bfs(start) {

    const visited = new Set();

    const queue = [start];

    console.log('queue',queue)
    while (queue.length > 0) {

        const airport = queue.shift(); // mutates the queue -> queue become empty array

        const destinations = adjacencyList.get(airport); // airport will have value of queue before shifting

        for (const destination of destinations) {

            if (destination === 'BKK')  {
                console.log(`BFS found Bangkok!`)
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }
           
        }

        
    }

}

bfs('PHX')

function dfs(start, visited = new Set()) {
    
    visited.add(start);

    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {

        if (destination === 'BKK') { 
            console.log(`DFS found Bangkok`)
            return;
        }
        
        if (!visited.has(destination)) {
            dfs(destination, visited);
        }

    }

}

dfs('PHX')

/* 
    yang kita bayangkan saat ini adalah grafik pohon(tree)
    vertex -> puncak/simpul/node
    visiting vertex -> means going on particular vertex

    exploring vertex -> if i am on sub vertex, i will be exploring all the adjecent vertex
    yang artinya jika kita didalam sebuah sub vertex maka kita akan
    exploring semua vertex yang berdekatan dengannya

    dengan itu kita akan lebih mudah memahami tranversal
*/