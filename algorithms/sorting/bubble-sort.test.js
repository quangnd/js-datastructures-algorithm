import test from 'ava'
import bubbleSort from './bubble-sort'

test('Should return sorted number-array', t => {
  t.is(JSON.stringify(bubbleSort([37, 45, 22, -3, 9, 8, 11])), JSON.stringify([-3, 8, 9, 11, 22, 37, 45]))
  t.is(JSON.stringify(bubbleSort([1, 5, 12, 3, 19, 9, 11, 4, 2, 6])), JSON.stringify([1, 2, 3, 4, 5, 6, 9, 11, 12, 19]))
})
