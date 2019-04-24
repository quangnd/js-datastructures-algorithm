import test from 'ava'
import { BinarySearchTree } from './binary-search-tree'

test(`Should create empty BinarySearchTree`, t => {
  const bst = new BinarySearchTree()
  t.is(bst.root, null)
})

test(`Should insert a new node into BST with insert(val)`, t => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  t.is(bst.root.value, 10)
  t.is(bst.root.left, null)
  t.is(bst.root.right, null)

  bst.insert(8).insert(13)
  t.is(bst.root.value, 10)
  t.is(bst.root.left.value, 8)
  t.is(bst.root.right.value, 13)

  bst.insert(6).insert(15)
  t.is(bst.root.value, 10)
  t.is(bst.root.left.left.value, 6)
  t.is(bst.root.right.right.value, 15)

  t.is(bst.insert(6), undefined)
  t.is(bst.insert(15), undefined)
})

test(`Should return undefined if not found any element with find(val)`, t => {
  const bst = new BinarySearchTree()
  t.is(bst.find(1), undefined)
  
  bst.insert(10).insert(8).insert(13).insert(6).insert(15).insert(7)
  t.is(bst.find(4), undefined)
})

test(`Should return element if found with find(val)`, t => {
  const bst = new BinarySearchTree()
  bst.insert(10).insert(8).insert(13).insert(6).insert(15).insert(7)
  t.is(bst.find(13).value, 13)
  t.is(bst.find(7).value, 7)
})

test(`Should return boolean if BST contains element or not with contains(val)`, t => {
  const bst = new BinarySearchTree()
  t.is(bst.contains(1), false)

  bst.insert(10).insert(8).insert(13).insert(6).insert(15).insert(7)
  t.is(bst.contains(13), true)
  t.is(bst.contains(100), false)
})
