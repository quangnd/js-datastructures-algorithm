import SinglyLinkedList from './singly-linked-list'
import Node from './singly-linked-list-node'
import test from 'ava'

test(`Should create a Singly Linked List Node`, t => {
	const node = new Node(20)
  t.is(node.val, 20)
  t.is(node.next, null)
})

test(`Should create empty singly linked list`, t => {
	const list = new SinglyLinkedList()
  t.is(list.head, null)
  t.is(list.tail, null)
  t.is(list.length, 0)
})

test(`Should create singly linked list contains three elements with push()`, t => {
  const list = new SinglyLinkedList()
  list.push(10)
  
  //1. In case empty list
  t.is(list.head.val, 10)
  t.is(list.tail.val, 10)
  t.is(list.tail.next, null)
  t.is(list.length, 1)

  //2. In case list stored one element
  list.push(20)
  list.push(30)

  t.is(list.head.val, 10)
  t.is(list.head.next.val, 20)
  t.is(list.tail.val, 30)
  t.is(list.tail.next, null)
  t.is(list.length, 3)
})

test(`Should remove the last element in list with pop()`, t => {
  const list = new SinglyLinkedList()
  list.push(10)
  list.push(20)
  list.push(30)

  let poppedElement = list.pop()

  t.is(list.head.val, 10)
  t.is(list.head.next.val, 20)
  t.is(list.tail.val, 20)
  t.is(list.tail.next, null)
  t.is(list.length, 2)
  t.is(poppedElement.val, 30)
});


