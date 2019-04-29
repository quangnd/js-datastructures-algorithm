import test from 'ava'
import Graph from './graphs'

test(`Should create empty Graph (adjacencyList)`, t => {
  const graph = new Graph()
  t.is(JSON.stringify(graph.adjacencyList), '{}')
})

test(`Should add new vertex with addVertex(vertex)`, t => {
  const graph = new Graph()
  graph.addVertex('Tokyo')

  t.is(graph.adjacencyList.hasOwnProperty('Tokyo'), true)
  t.is(graph.adjacencyList['Tokyo'].length, 0)
  t.is(graph.adjacencyList['Tokyo'][0], undefined)
})

test(`Should add new edge between two vertex with addEdge(v1, v2)`, t => {
  const graph = new Graph()
  graph.addVertex('Tokyo')
  graph.addVertex('Dallas')
  graph.addVertex('Aspen')

  graph.addEdge('Tokyo', 'Dallas')
  t.is(graph.adjacencyList['Tokyo'].length, 1)
  t.is(graph.adjacencyList['Tokyo'][0], 'Dallas')
  t.is(graph.adjacencyList['Dallas'].length, 1)
  t.is(graph.adjacencyList['Dallas'][0], 'Tokyo')

  graph.addEdge('Tokyo', 'Aspen')
  t.is(graph.adjacencyList['Tokyo'].length, 2)
  t.is(graph.adjacencyList['Tokyo'][1], 'Aspen')
  t.is(graph.adjacencyList['Aspen'].length, 1)
  t.is(graph.adjacencyList['Aspen'][0], 'Tokyo')
})

test(`Should remove the edge between two vertex with removeEdge(v1, v2)`, t => {
  const graph = new Graph()
  graph.addVertex('Tokyo')
  graph.addVertex('Dallas')
  graph.addVertex('Aspen')
  graph.addEdge('Tokyo', 'Dallas')
  graph.addEdge('Tokyo', 'Aspen')

  graph.removeEdge('Tokyo', 'Aspen')
  t.is(graph.adjacencyList['Tokyo'].length, 1)
  t.is(graph.adjacencyList['Tokyo'][0], 'Dallas')
  t.is(graph.adjacencyList['Aspen'].length, 0)
  t.is(graph.adjacencyList['Aspen'][0], undefined)
})

test(`Should remove the vertex and all the its edges removeVertex(vertex)`, t => {
  const graph = new Graph()
  graph.addVertex('Tokyo')
  graph.addVertex('Dallas')
  graph.addVertex('Aspen')
  graph.addVertex('Vietnam')
  graph.addEdge('Tokyo', 'Dallas')
  graph.addEdge('Tokyo', 'Vietnam')
  graph.addEdge('Dallas', 'Vietnam')
  graph.addEdge('Dallas', 'Aspen')
  graph.addEdge('Vietnam', 'Aspen')

  graph.removeVertex('Vietnam')
  t.is(graph.adjacencyList['Tokyo'].length, 1)
  t.is(graph.adjacencyList['Tokyo']['Vietnam'], undefined)
  t.is(graph.adjacencyList['Dallas'].length, 2)
  t.is(graph.adjacencyList['Dallas']['Vietnam'], undefined)
  t.is(graph.adjacencyList['Vietnam'], undefined)
})

/**
 * Graph Traversal
 * 
 * Test Input
 * 
 { 
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'E'],
  'D': ['B', 'E', 'F'],
  'E': ['C', 'D', 'F'],
  'F': ['D', 'E']
}
 */
const createGraphTraversal = () => {
  const graph = new Graph()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')
  graph.addVertex('E')
  graph.addVertex('F')

  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('B', 'D')
  graph.addEdge('C', 'E')
  graph.addEdge('D', 'E')
  graph.addEdge('D', 'F')
  graph.addEdge('E', 'F')

  return graph
}

test(`Should traverse by Depth First approach with depthFirstRecursive(start)`, t => {
  const traversalArr = createGraphTraversal().depthFirstRecursive('A')
  t.is(JSON.stringify(traversalArr), '["A","B","D","E","C","F"]')
})

test(`Should traverse by Depth First approach with depthFirstIterative(start)`, t => {
  const traversalArr = createGraphTraversal().depthFirstIterative('A')
  t.is(JSON.stringify(traversalArr), '["A","C","E","F","D","B"]')
})

test(`Should traverse by Breadth First approach with breadthFirst(start)`, t => {
  const traversalArr = createGraphTraversal().breadthFirst('A')
  t.is(JSON.stringify(traversalArr), '["A","B","C","D","E","F"]')
})
