import test from 'ava'
import PriorityQueue from './priority-queue'

test(`Should create empty PriorityQueue`, t => {
  const priorityQueue = new PriorityQueue()
  t.is(priorityQueue.values[0], undefined)
  t.is(priorityQueue.values.length, 0)
})

test(`Should insert a new element into PriorityQueue with enqueue(val, priority)`, t => {
  const priorityQueue = new PriorityQueue()
  priorityQueue.enqueue('common cold', 5)
  priorityQueue.enqueue('gunshot wound', 1)
  priorityQueue.enqueue('high fever', 4)
  priorityQueue.enqueue('broken arm', 2)
  priorityQueue.enqueue('glass in foot', 3)

  t.is(priorityQueue.values[0].val, 'gunshot wound')
  t.is(priorityQueue.values[0].priority, 1)
  t.is(priorityQueue.values[1].val, 'broken arm')
  t.is(priorityQueue.values[1].priority, 2)
  t.is(priorityQueue.values.length, 5)
})

test(`Should extract element has priority highest (priority value is smallest) with dequeue()`, t => {
  const priorityQueue = new PriorityQueue()
  t.is(priorityQueue.dequeue(), undefined)

  priorityQueue.enqueue('common cold', 5)
  priorityQueue.enqueue('gunshot wound', 1)
  priorityQueue.enqueue('high fever', 4)
  priorityQueue.enqueue('broken arm', 2)
  priorityQueue.enqueue('glass in foot', 3)

  let highestPriority = priorityQueue.dequeue()
  t.is(highestPriority.val, 'gunshot wound')
  t.is(highestPriority.priority, 1)
  t.is(priorityQueue.values.length, 4)

  let secondPriority = priorityQueue.dequeue()
  t.is(secondPriority.val, 'broken arm')
  t.is(secondPriority.priority, 2)
  t.is(priorityQueue.values.length, 3)
})




