import test from 'ava'

import sumRange from './sumRange'
import factorial from './factorial'
import collectOddValues from './collect_odd_values_with_helper'
import collectOddValuesPure from './collect_odd_values_with_pure_recursion'
import fib from './fibonacci'

test('Should print total of number range', t => {
  t.is(sumRange(5), 15)
  t.is(sumRange(3), 6)
  t.is(sumRange(10), 55)
});

test('Should print factorial of a number', t => {
  t.is(factorial(1), 1)
  t.is(factorial(3), 6)
  t.is(factorial(10), 3628800)
})

test('Should return an array of odd values - Helper way', t => {
  t.is(JSON.stringify(collectOddValues([1,2,3,4,5,6])), JSON.stringify([1, 3, 5]))
  t.is(JSON.stringify(collectOddValues([11,21,37,4,5,6,91])), JSON.stringify([11,21,37,5,91]))
})

test('Should return an array of odd values - Pure way', t => {
  t.is(JSON.stringify(collectOddValuesPure([1,2,3,4,5,6])), JSON.stringify([1, 3, 5]))
  t.is(JSON.stringify(collectOddValuesPure([11,21,37,4,5,6,91])), JSON.stringify([11,21,37,5,91]))
})

test('Should display fibonacci number exactly', t => { 
  t.is(fib(0), 0)
  t.is(fib(1), 1)
  t.is(fib(5), 5)
  t.is(fib(9), 34)
})
