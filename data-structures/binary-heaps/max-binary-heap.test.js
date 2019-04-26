import test from 'ava'
import MaxBinaryHeap from './max-binary-heap'

test(`Should create empty MaxBinaryHeap`, t => {
  const maxBinaryHeap = new MaxBinaryHeap()
  t.is(maxBinaryHeap.values.length, 0)
})

//=== 
//Test Input
/**
 *           41
 *     39          33
 *  18    27    12
 * 
 */

test(`Should insert a new element into MaxBinaryHeap with insert(val)`, t => {
  const maxBinaryHeap = new MaxBinaryHeap()
  maxBinaryHeap.values = [41, 39, 33, 18, 27, 12]
  maxBinaryHeap.insert(55)

  t.is(JSON.stringify(maxBinaryHeap.values), JSON.stringify([55, 39, 41, 18, 27, 12, 33]))
  t.is(maxBinaryHeap.values.length, 7)
})

test(`Should extract max element and then sink-down the heap with extractMax()`, t => {
  const maxBinaryHeap = new MaxBinaryHeap()
  maxBinaryHeap.values = [55, 39, 41, 18, 27, 12, 33]

  t.is(maxBinaryHeap.extractMax(), 55)
  t.is(JSON.stringify(maxBinaryHeap.values), JSON.stringify([41, 39, 33, 18, 27, 12]))
})




