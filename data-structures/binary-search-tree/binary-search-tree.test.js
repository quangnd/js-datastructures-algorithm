import test from 'ava'
import { BinarySearchTree } from './binary-search-tree'

test(`Should create empty BinarySearchTree`, t => {
  const bst = new BinarySearchTree()
  t.is(bst.root, null)
})
