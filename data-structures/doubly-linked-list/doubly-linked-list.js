const Node = require('./doubly-linked-list-node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Adding a new node to the end of the Linked List!
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  //Removing a node from the end of the Linked List!
  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  //Removing a new node from the beginning of the Linked List!
  shift() {
    if (!this.head) return undefined
    let shiftedNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head.prev = null
      shiftedNode.next = null
    }
    this.length--
    return shiftedNode
  }
  //Adding a new node to the beginning of the Linked List!
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  //Retrieving a node by it's position in the Linked List!
  get(index) {
    if (index < 0 || index >= this.length) return null
    let middle = this.length / 2
    let counter, current
    if (index <= middle) {
      counter = 0
      current = this.head
      while (counter !== index) {
        counter++
        current = current.next
      }
    } else {
      counter = this.length - 1
      current = this.tail
      while (counter !== index) {
        counter--
        current = current.prev
      }
    }
    return current
  }
  //Changing the value of a node based on it's position in the Linked List
  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }
  //Adding a node to the Linked List at a specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)

    let newNode = new Node(val)
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next
    prevNode.next = newNode
    newNode.prev = prevNode
    newNode.next = nextNode
    nextNode.prev = newNode
    this.length++
    return true
  }
  //Removing a node from the Linked List at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return !!this.shift()
    if (index === this.length - 1) return !!this.pop()

    let removedNode = this.get(index)
    let prevNode = removedNode.prev
    let nextNode = removedNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    removedNode.prev = null
    removedNode.next = null
    this.length--
    return removedNode
  }
  //Reversing the Linked List in place!
  reverse() {
    let nextNode
    let node = this.head
    while (node) {
      nextNode = node.next
      node.next = node.prev
      node.prev = nextNode
      node = nextNode
    }
    [this.head, this.tail] = [this.tail, this.head]
    return this
  }
  toArray() {
    let arr = [];
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    return arr
  }
}

module.exports = DoublyLinkedList

