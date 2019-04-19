import test from 'ava'
import mergeSort from './merge-sort'

test('Should return sorted number-array', t => {
  t.is(JSON.stringify(mergeSort([37, 45, 22, -3, 9, 8, 11])), JSON.stringify([-3, 8, 9, 11, 22, 37, 45]))
  t.is(JSON.stringify(mergeSort([1, 5, 12, 3, 19, 9, 11, 4, 2, 6])), JSON.stringify([1, 2, 3, 4, 5, 6, 9, 11, 12, 19]))
  t.is(JSON.stringify(mergeSort([8, 1, 2, 3, 4, 5, 6, 7])), JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]))
})
