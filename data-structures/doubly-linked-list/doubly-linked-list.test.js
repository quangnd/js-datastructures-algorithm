import DoublyLinkedList from './doubly-linked-list'
import Node from './doubly-linked-list-node'
import test from 'ava'

function prepareList() {
  let list = new DoublyLinkedList()
  list.push(10).push(20).push(30)
  return list
}

test(`Should create a Doubly Linked List Node`, t => {
  const node = new Node(20)
  t.is(node.val, 20)
  t.is(node.next, null)
  t.is(node.prev, null)
})

test(`Should create empty Doubly linked list`, t => {
  const list = new DoublyLinkedList()
  t.is(list.head, null)
  t.is(list.tail, null)
  t.is(list.length, 0)
})

test(`Should append elements at the end of wih push(val)`, t => {
  const list = new DoublyLinkedList()
  list.push(10)

  //1. In case empty list
  t.is(list.head.val, 10)
  t.is(list.tail.val, 10)
  t.is(list.tail.next, null)
  t.is(list.tail.prev, null)
  t.is(list.length, 1)

  //2. In case list stored one element
  list.push(20)
  list.push(30)

  t.is(list.head.val, 10)
  t.is(list.head.prev, null)
  t.is(list.head.next.val, 20)
  t.is(list.head.next.prev.val, 10)
  t.is(list.tail.val, 30)
  t.is(list.tail.next, null)
  t.is(list.tail.prev.val, 20)
  t.is(list.length, 3)
})

test(`Should remove the last element in list with pop()`, t => {
  let list = new DoublyLinkedList()

  //1. Empty list return undefined
  t.is(list.pop(), undefined)

  //2. List contains 1 element, after pop() 
  list.push(1)
  list.pop()
  t.is(list.head, null)
  t.is(list.tail, null)
  t.is(list.length, 0)

  //3. Normal list
  list = prepareList()
  let poppedElement = list.pop()

  t.is(list.head.val, 10)
  t.is(list.head.prev, null)
  t.is(list.head.next.val, 20)
  t.is(list.head.next.prev.val, 10)
  t.is(list.tail.val, 20)
  t.is(list.tail.next, null)
  t.is(list.tail.prev.val, 10)
  t.is(list.length, 2)
  t.is(poppedElement.val, 30)
});

test(`Should remove the first element in list with shift()`, t => {
  let list = new DoublyLinkedList()

  //1. Empty list return undefined
  t.is(list.shift(), undefined)

  //2. List contains 1 element, after shift() 
  list.push(1)
  list.shift()
  t.is(list.head, null)
  t.is(list.tail, null)
  t.is(list.length, 0)

  //3. Normal
  list = prepareList()
  let shiftedElement = list.shift()

  t.is(list.head.val, 20)
  t.is(list.head.prev, null)
  t.is(list.head.next.val, 30)
  t.is(list.tail.val, 30)
  t.is(list.tail.next, null)
  t.is(list.length, 2)
  t.is(shiftedElement.val, 10)
});

test(`Should append elements at the beginning of list wih unshift(val)`, t => {
  let list = new DoublyLinkedList()
  list.unshift(1)
  t.is(list.head.val, 1)
  t.is(list.head.next, null)
  t.is(list.head.prev, null)
  t.is(list.tail.val, 1)
  t.is(list.tail.prev, null)
  t.is(list.tail.next, null)

  list = prepareList()
  list.unshift("Numbers")

  t.is(list.head.val, "Numbers")
  t.is(list.head.next.val, 10)
  t.is(list.head.prev, null)
  t.is(list.tail.val, 30)
  t.is(list.tail.prev.val, 20)
  t.is(list.tail.next, null)
  t.is(list.length, 4)
})

test(`Should get the element at a specific position with get(index)`, t => {
  let list = prepareList()

  t.is(list.get(-1), null)
  t.is(list.get(4), null)
  t.is(list.get(0).val, 10)
  t.is(list.get(0).prev, null)
  t.is(list.get(0).next.val, 20)
  t.is(list.get(2).val, 30)
  t.is(list.get(2).prev.val, 20)
  t.is(list.get(2).next, null)
})

test(`Should update the element at a specific position with set(index, val)`, t => {
  let list = prepareList()

  t.is(list.set(11, "xxx"), false)
  t.is(list.set(1, "Hello"), true)
  t.is(list.get(1).val, "Hello")
})

test(`Should insert the element at a specific position with insert(index, val)`, t => {
  let list = prepareList()
  t.is(list.insert(-1, 100), false)
  t.is(list.insert(11, 100), false)
  t.is(list.insert(1, 100), true)
  t.is(list.head.next.val, 100)
  t.is(list.head.next.prev.val, 10)
  t.is(list.get(1).val, 100)
  t.is(list.get(1).next.val, 20)
  t.is(list.get(2).prev.val, 100)
  t.is(list.length, 4)
})

test(`Should remove the element at a specific position with remove(index)`, t => {
  let list = prepareList()
  t.is(list.remove(-1), undefined)
  t.is(list.remove(11), undefined)

  const removed = list.remove(1)
  t.is(removed.val, 20)
  t.is(list.head.val, 10)
  t.is(list.head.prev, null)
  t.is(list.head.next.val, 30)
  t.is(list.head.next.prev.val, 10)
  t.is(list.tail.val, 30)
  t.is(list.tail.prev.val, 10)
  t.is(list.tail.next, null)
  t.is(list.length, 2)
})

test(`Should return reversed list with reverse()`, t => {
  let list = prepareList()
  let reversedArr = list.reverse()

  t.is(list.head.val, 30)
  t.is(list.head.next.val, 20)
  t.is(list.head.next.prev.val, 30)
  t.is(list.head.next.next.val, 10)
  t.is(list.head.next.next.next, null)
  t.is(list.head.next.next.prev.val, 20)

  t.is(JSON.stringify(reversedArr.toArray()), JSON.stringify([30, 20, 10]))
})

