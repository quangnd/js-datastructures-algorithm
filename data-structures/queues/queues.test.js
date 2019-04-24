import { Queue } from './queues'
import test from 'ava'

test(`Should create empty Queue`, t => {
  const queue = new Queue()
  t.is(queue.first, null)
  t.is(queue.last, null)
  t.is(queue.size, 0)
})

test(`Should append elements at the end of wih enqueue(value)`, t => {
  const queue = new Queue()
  queue.enqueue(10)

  //1. In case empty queue
  t.is(queue.first.value, 10)
  t.is(queue.last.value, 10)
  t.is(queue.last.next, null)
  t.is(queue.size, 1)

  //2. In case queue stored one element
  queue.enqueue(20)
  queue.enqueue(30)

  t.is(queue.first.value, 10)
  t.is(queue.first.next.value, 20)
  t.is(queue.last.value, 30)
  t.is(queue.last.next, null)
  t.is(queue.size, 3)
})

test(`Should remove the last element in queue with dequeue()`, t => {
  let queue = new Queue()

  //1. Empty queue return undefined
  t.is(queue.dequeue(), null)

  //2. queue contains 1 element, after dequeue() 
  queue.enqueue(1)
  queue.dequeue()
  t.is(queue.first, null)
  t.is(queue.last, null)
  t.is(queue.size, 0)

  //3. Normal queue
  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)

  let dequeuedValue = queue.dequeue()
  t.is(queue.first.value, 20)
  t.is(queue.first.next.value, 30)
  t.is(queue.last.value, 30)
  t.is(queue.last.next, null)
  t.is(queue.size, 2)
  t.is(dequeuedValue, 10)
});
