# Graph Structure Creation

```
class Graph {
  constructor() {
    this.nodes = {};
  }++

  addNode(value) {
    this.nodes[value] = [];
  }

  addEdge(node1, node2) {
    this.nodes[node1].push(node2);
    this.nodes[node2].push(node1);
  }
}
```

# DFS Recursive
```
 dfsRecursive(startNode, visited = {}) {
    console.log(startNode);
    visited[startNode] = true;

    for (const neighbor of this.nodes[startNode]) {
      if (!visited[neighbor]) {
        this.dfsRecursive(neighbor, visited);
      }
    }
  }
  
```

# DFS With Stack
```
  dfsWithStack(startNode) {
    const stack = [];
    const visited = {};

    stack.push(startNode);

    while (stack.length > 0) {
      const currentNode = stack.pop();
      console.log(currentNode);
      visited[currentNode] = true;

      for (const neighbor of this.nodes[currentNode]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
```

# BFS
```
  bfsWithQueue(startNode) {
    const queue = [];
    const visited = {};

    queue.push(startNode);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode);
      visited[currentNode] = true;

      for (const neighbor of this.nodes[currentNode]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  }
```

# Example usages
```
const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log("DFS Recursive:");
graph.dfsRecursive(1);

console.log("DFS with Stack:");
graph.dfsWithStack(1);

console.log("BFS with Queue:");
graph.bfsWithQueue(1);

```
