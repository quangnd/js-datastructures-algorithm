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

test('3. Should display the greatest common divisor of two positive numbers', t => {
  t.is(funcs.gcd(2154, 458), 2)
  t.is(funcs.gcd(12, 18), 6)
  t.is(funcs.gcd(5, 0), 5)
  t.is(funcs.gcd(0, 5), 5)
});

//TODO: add test for 4, 5


