import linearSearch from './linear-search'
import test from 'ava'

test('Should return -1 if not found element in array', t => {
  t.is(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 10), -1)
  t.is(linearSearch(['user1', 'user2', 'user3', 'user4'], 'xxx'), -1)
})

test('Should return the index of found element in array of number', t => {
  t.is(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 3), 4)
})

test('Should return the index of found element in array of string', t => {
  t.is(linearSearch(['user1', 'user2', 'user3', 'user4'], 'user3'), 2)
})

