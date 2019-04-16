import test from 'ava'

import funcs from './practicing-exercises'

test('1. Should display array of intergers in range', t => {
  t.is(funcs.getIntegerInRange(1,1).length, 0)
  t.is(JSON.stringify(funcs.getIntegerInRange(2, 9)), JSON.stringify([3, 4, 5, 6, 7, 8]))
  t.is(JSON.stringify(funcs.getIntegerInRange(1, 4)), JSON.stringify([2, 3]))
})

test('2. Should display the result of calculating the exponent of a number', t => {
  t.is(funcs.calcExponent(2, 0), 1)
  t.is(funcs.calcExponent(2, 1), 2)
  t.is(funcs.calcExponent(2, 5), 32)
});


