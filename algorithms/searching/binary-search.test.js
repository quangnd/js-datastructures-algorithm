import binarySearch from './binary-search'
import test from 'ava'

test('Should return -1 if not found element in array', t => {
  t.is(binarySearch([34, 51, 1, 2, 3, 45, 56, 687], 10), -1)
  t.is(binarySearch(['user1', 'user2', 'user3', 'user4'], 'xxx'), -1)
})

test('Should return the index of found element in array of number', t => {
  t.is(binarySearch([34, 51, 1, 2, 3, 45, 56, 687], 3), 4)
  t.is(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 10), 9)
})

test('Should return the index of found element in array of string', t => {
  t.is(binarySearch(['user1', 'user2', 'user3', 'user4'], 'user3'), 2)
})

