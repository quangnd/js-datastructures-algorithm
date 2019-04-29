# Graphs ❄️
*👉 [Checkout Graph Traversal](./graph-traversal.md)*

## Objectives

- Explain what a graph is.
- Compare and contrast different types of graphs and their use cases in the real world.
- Implement a graph using an adjacency list.
- Traverse through a graph using BFS and DFS.
- Compare and contrast graph traversal algorithms.

## What are Graphs

- A graph **data structure** consists of a finite (and possibly mutable) set of **vertices** or nodes or points, together with a set of unordered pairs of these vertices for an **undirected graph** or a set of ordered pairs for a **directed graph**.

  ![Graph example](../../assets/images/data-structures/graph-example.png)

## Used for Graphs

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations

  ![Graph Used 1](../../assets/images/data-structures/graph-used-1.png)
  
  ![Graph Used 2](../../assets/images/data-structures/graph-used-2.png)

  ![Graph Used 3](../../assets/images/data-structures/graph-used-3.png)

## Types of Graphs

### Essential Graph Terms

1. **Vertex** - a node
2. **Edge** - connection between nodes
3. **Weighted/Unweighted** - values assigned to distances between vertices
4. **Directed/Undirected** - directions assigned to distanced between vertices

### Some types

  ![FB Graph](../../assets/images/data-structures/fb-graph.png)

  ![Directed Graph](../../assets/images/data-structures/directed-graph.png)

  ![Weighted Graph](../../assets/images/data-structures/weighted-graph.png)


## How to store?

### 1. Adjacency Matrix

  ![Adjacency Matrix](../../assets/images/data-structures/adjacency-matrix.png)

### 2. Adjacency List

  ![Adjacency List](../../assets/images/data-structures/adjacency-list.png)

### Big O

  ![BigO Matrix and List](../../assets/images/data-structures/bigO-graph.png)

### Pros & Cons

| **Adjacency List** | **Adjacency Matrix** |
| ------------- | ------------- |
| Can take up less space (in sparse graphs) | Takes up more space (in sparse graphs)  |
| Faster to iterate over all edges | Slower to iterate over all edges  |
| Can be slower to lookup specific edge | Faster to lookup specific edge  |

## Test

- Run `ava --verbose ./data-structures/graphs/graphs.test.js`

*👈 [Back to Data Structures dir](../README.md)*

## References

- [Graphs slides](https://cs.slides.com/colt_steele/graphs#/1)
- [Graphs at Visualgo](https://visualgo.net/en/graphds)
