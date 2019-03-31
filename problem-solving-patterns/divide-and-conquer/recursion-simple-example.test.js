import isEven from "./recursion-simple-example";
import test from 'ava';

test('Should return even number', t => {
  t.is(isEven(0), true)
  t.is(isEven(1), false)
  t.is(isEven(998), true)
  t.is(isEven(997), false)
})
