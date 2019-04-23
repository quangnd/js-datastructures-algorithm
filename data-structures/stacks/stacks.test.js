import { Stack } from './stacks'
import test from 'ava'

test(`Should create empty Stack`, t => {
  const stack = new Stack()
  t.is(stack.first, null)
  t.is(stack.last, null)
  t.is(stack.size, 0)
})

test(`Should append elements at the end of wih push(value)`, t => {
  const stack = new Stack()
  stack.push(10)

  //1. In case empty stack
  t.is(stack.first.value, 10)
  t.is(stack.last.value, 10)
  t.is(stack.last.next, null)
  t.is(stack.size, 1)

  //2. In case stack stored one element
  stack.push(20)
  stack.push(30)

  t.is(stack.first.value, 30)
  t.is(stack.first.next.value, 20)
  t.is(stack.last.value, 10)
  t.is(stack.last.next, null)
  t.is(stack.size, 3)
})

test(`Should remove the last element in stack with pop()`, t => {
  let stack = new Stack()

  //1. Empty stack return undefined
  t.is(stack.pop(), null)

  //2. Stack contains 1 element, after pop() 
  stack.push(1)
  stack.pop()
  t.is(stack.first, null)
  t.is(stack.last, null)
  t.is(stack.size, 0)

  //3. Normal stack
  stack.push(10)
  stack.push(20)
  stack.push(30)
  let poppedValue = stack.pop()
  t.is(stack.first.value, 20)
  t.is(stack.first.next.value, 10)
  t.is(stack.last.value, 10)
  t.is(stack.last.next, null)
  t.is(stack.size, 2)
  t.is(poppedValue, 30)
});
