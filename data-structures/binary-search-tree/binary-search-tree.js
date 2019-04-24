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
}
