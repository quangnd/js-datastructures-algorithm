class Node {
  constructor(val) {
    this.value = val
    this.right = null
    this.left = null
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    let newNode = new Node(val)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (val === current.value) return undefined
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }
  find(val) {
    if (this.root === null) return undefined
    let current = this.root
    let found = false
    while (current && !found) {
      if (val === current.value) {
        found = true
      } else if (val < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    if (!found) return undefined
    return current
  }
  contains(val) {
    if (this.root === null) return false
    let current = this.root

    while (current) {
      if (val === current.value) {
        return true
      }
      if (val < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }
  BFS() {
    let node = this.root,
      visited = [],
      queue = []

    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      visited.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return visited
  }
  DFSPreOrder() {
    let current = this.root,
      data = []

    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }
  DFSPostOrder() {
    let current = this.root,
      data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(current)
    return data
  }
  DFSInOrder() {
    let current = this.root,
      data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }
}
